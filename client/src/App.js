import React, {useState, useEffect, Suspense} from 'react';
import { Routes, Route,  Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/home/Main';
import Products from './pages/products/Products';
import SearchProduct from './pages/search/SearchProduct';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Cart from './pages/carts/Cart';
import CheckOut from './pages/checkout/CheckOut';
import Lienhe from './pages/lienhe/Lienhe';
import Order from './pages/order/Order';
import OrderDetail from './pages/order/OrderDetail';
import Favorite from './pages/favorite/Favorite';
import HomeAdmin from './pages/admin/home/HomeAdmin';
import MainAdmin from './pages/admin/home/MainAdmin';
import ListBrand from './pages/admin/brands/ListBrand';
import CreateBrand from './pages/admin/brands/CreateBrand';
import UpdateBrand from './pages/admin/brands/UpdateBrand';
import ListProduct from './pages/admin/products/ListProduct';
import CreateProduct from './pages/admin/products/CreateProduct';
import UpdateProduct from './pages/admin/products/UpdateProduct';
import ListOrder from './pages/admin/orders/ListOrder';
import OrderDetails from './pages/admin/orders/OrderDetail';
import ListCustomer from './pages/admin/customers/ListCustomer';
import ListGuarantee from './pages/admin/guarantees/ListGuarantee';
import CreateGuarantee from './pages/admin/guarantees/CreateGuarantee';
import ProductDetail from './pages/products/ProductDetail';
import Error from './pages/error/Error';
import ProductByBrand from './pages/products/ProductByBrand';
import ProductByCategory from './pages/products/ProductByCategory';
import ProductByPrice from './pages/products/ProductByPrice';
import ProductDetailAdmin from './pages/admin/products/ProductDetailAdmin';
import { AuthContext } from "./context/AuthContext";
import axios from 'axios';
import { API } from './config/API';
import Transport from './pages/admin/orders/Transport';

function App() {

  const [authState, setAuthState] = useState({
    email: "",
    role: "",
    status: 0,
    isLogin:false
  });

  const [customerState,setCustomerState] = useState();

  useEffect(() => {
    axios.get(`${API}auth/`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }).then((response) => {
        if (response.data.error) {

        } else {
          setAuthState({
            email: response.data[0].email,
            role: response.data[0].role,
            status: response.data[0].status,
            isLogin: true
          });
        }
      });
      axios.get(`${API}customer/`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }).then((response) => {
        if (response.data.error) {

        } else {
          if (response.data.length > 0) {
            setCustomerState({
              makh:response.data[0].makh,
              hoten: response.data[0].hoten,
              sodienthoai: response.data[0].sodienthoai
            });
          }
        }
      });
  }, []);

  useEffect(() => {
    if(authState.email !=="" && authState.status === 0){
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  },[authState.email, authState.status]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState ,customerState }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={(authState.isLogin===true && authState.role === "admin")?<Navigate to="/admin" replace={ true } />:<Main />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:masp" element={<ProductDetail />} />
              <Route path="products/brand/:math" element={<ProductByBrand />} />
              <Route path="products/category/:maloai" element={<ProductByCategory />} />
              <Route path="products/price/:price" element={<ProductByPrice/>}/>
              <Route path="search/:name" element={<SearchProduct />} />
              <Route path="cart" element={<Cart />} />
              <Route path="lienhe" element={<Lienhe />} />
              <Route path="login" element={<SignIn />} />
              <Route path="registry" element={<SignUp />}/>
              { authState.isLogin===true && 
                <>
                  <Route path="favorite" element={<Favorite />} />
                  <Route path="order" element={<Order />} />
                  <Route path="order/:madh" element={<OrderDetail />} />
                  <Route path="checkout" element={<CheckOut />} />
                </>
              }
            </Route>
            
            <Route path="admin" element={<HomeAdmin />} >
              <Route path="" element={authState.isLogin === true && authState.role==="admin" ? <MainAdmin /> : <Navigate to="/" replace={ true } />}/>
              <Route path="brands" element={<ListBrand/>} />
              <Route path="brands/add" element={<CreateBrand />} />
              <Route path="brands/edit/:math" element={<UpdateBrand />} />
              <Route path="products" element={<ListProduct/>} />
              <Route path="products/add" element={<CreateProduct />} />
              <Route path="products/edit/:masp" element={<UpdateProduct />} />
              <Route path="products/detail/:masp" element={<ProductDetailAdmin />} />
              <Route path="orders" element={<ListOrder/>} />
              <Route path="orders/detail/:madh" element={<OrderDetails />} />
              <Route path="order/transport/:madh" element={<Transport />}/>
              <Route path="customers" element={<ListCustomer/>} />
              <Route path="guarantees" element={<ListGuarantee/>} />
              <Route path="guarantees/create" element={<CreateGuarantee />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
