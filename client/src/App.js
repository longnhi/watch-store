import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:masp" element={<ProductDetail />} />
          <Route path="products/brand/:math" element={<ProductByBrand />} />
          <Route path="products/category/:maloai" element={<ProductByCategory />} />
          <Route path="products/price/:price" element={<ProductByPrice/>}/>
          <Route path="search/:name" element={<SearchProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="lienhe" element={<Lienhe />} />
          <Route path="order" element={<Order />} />
          <Route path="order/:madh" element={<OrderDetail />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="login" element={<SignIn />} />
          <Route path="registry" element={<SignUp />} />
        </Route>
        <Route path="admin" element={<HomeAdmin />} >
          <Route path="" element={<MainAdmin />}/>
          <Route path="brands" element={<ListBrand/>} />
          <Route path="brands/add" element={<CreateBrand />} />
          <Route path="brands/edit/:math" element={<UpdateBrand />} />
          <Route path="products" element={<ListProduct/>} />
          <Route path="products/add" element={<CreateProduct />} />
          <Route path="products/edit/:masp" element={<UpdateProduct />} />
          <Route path="orders" element={<ListOrder/>} />
          <Route path="orders/details/:madh" element={<OrderDetails />} />
          <Route path="customers" element={<ListCustomer/>} />
          <Route path="guarantees" element={<ListGuarantee/>} />
          <Route path="guarantees/create" element={<CreateGuarantee />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
