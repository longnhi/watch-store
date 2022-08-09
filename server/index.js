const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const multer = require('multer')

const db =  require('./config/db');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { createTokens, validateToken } = require("./middleware/JWT");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../client/public/assets/img/products/')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
    },
})
  
const upload = multer({ storage: storage })

app.get('/', (req,res) => {
    res.json("Hello world!");
});

// thương hiệu
app.get('/brands/', (req, res) => {
    db.query("SELECT * FROM thuonghieu", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/brands/:math', (req, res) => {
    const math = req.params.math;
    db.query("SELECT * FROM thuonghieu where math=?",math, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.post('/brands', validateToken, (req, res) => {
    const nameBrand = req.body.nameBrand;
    db.query("INSERT INTO thuonghieu (tenth) VALUES (?)", nameBrand, (err, result)=>{
        if (err) { console.log(err); }
        else { res.json(result) };
    })
});

app.put('/brands', validateToken, (req, res) => {
    const math = req.body.math;
    const nameBrand = req.body.nameBrand;
    db.query("UPDATE thuonghieu SET tenth=? where math=?", [ nameBrand, math ], (err, result)=>{
        if (err) { console.log(err); }
        else res.json(result);
    })
});

app.delete('/brands/:math', validateToken, (req, res) => {
    const math = req.params.math;
    db.query("DELETE FROM thuonghieu where math=?",  math , (err, result)=>{
        if (err) { res.json({ errCode:1}); }
        else res.json(result);
    })
});

// loại
app.get('/categorys/', (req, res) => {
    db.query("SELECT * FROM loai", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/categorys/:maloai', (req, res) => {
    const maloai = req.params.maloai;
    db.query("SELECT * FROM loai where maloai=?",maloai, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

// sản phẩm


app.get('/products/', (req, res) => {
    db.query("SELECT * FROM sanpham where trangthai != 0", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/allproducts', (req, res) => {
    db.query("SELECT * FROM sanpham", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/productsnew/', (req, res) => {
    db.query("SELECT * FROM sanpham where trangthai != 0 order by masp desc limit 4", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/:masp', (req, res) => {
    const masp = req.params.masp;
    db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai WHERE sanpham.masp=?", masp, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/byname/:name', (req, res) => {
    const name = "%"+req.params.name+"%";
    
    db.query("SELECT * FROM sanpham WHERE tensp like ?", name, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/brand/:math', (req, res) => {
    const math = req.params.math;
    db.query("SELECT * FROM sanpham WHERE math=?", math, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/category/:maloai', (req, res) => {
    const maloai = req.params.maloai;
    db.query("SELECT * FROM sanpham WHERE maloai=?", maloai, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/price/:price', (req, res) => {
    const price = req.params.price;
    switch (price) {
        case "0_1000000":
            db.query("SELECT * FROM sanpham where gia<1000000", (err, result)=>{
                if (err) { console.log(err); }
                res.json(result);
            })
            break;
        case "1000000_10000000":
            db.query("SELECT * FROM sanpham where gia >=1000000 and gia<=10000000", (err, result)=>{
                if (err) { console.log(err); }
                res.json(result);
            })
            break;
        case "10000000_20000000":
            db.query("SELECT * FROM sanpham where gia>=10000000 and gia<=20000000", (err, result)=>{
                if (err) { console.log(err); }
                res.json(result);
            })
            break;
        case "20000000_max":
            db.query("SELECT * FROM sanpham where gia>20000000", (err, result)=>{
                if (err) { console.log(err); }
                res.json(result);
            })
            break;
        default:
            db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai", (err, result)=>{
                if (err) { console.log(err); }
                res.json(result);
            })
    }
});

app.post('/product', validateToken, (req, res) => {
    
    let uploadFile = upload.single("file");
    uploadFile(req, res, (error) => {
        let tensp = req.body.tensp;
        let gia = req.body.gia;
        let xuatxu = req.body.xuatxu;
        let baohanh = req.body.baohanh;
        let soluong = req.body.soluong;
        let mota = req.body.mota;
        let gioitinh = req.body.gioitinh; 
        let math = req.body.math;
        let maloai = req.body.maloai;
        let hinhanh = req.file.filename;
        const data = [tensp, gia, xuatxu, baohanh,soluong, mota, gioitinh, math, maloai, hinhanh];
        const sqlInsert = "INSERT INTO sanpham (tensp,gia,xuatxu,baohanh,soluong,mota,gioitinh,math,maloai,hinhanh) VALUES (?,?,?,?,?,?,?,?,?,?)";
        db.query(sqlInsert, data, (err, result)=>{
            if(err) console.log(err);
            else res.json(result);
        });
    });
});

app.put('/product/:masp', validateToken, (req, res) => {
    
    let uploadFile = upload.single("file");
    uploadFile(req, res, (error) => {
        let masp = req.params.masp;
        let tensp = req.body.tensp;
        let gia = req.body.gia;
        let xuatxu = req.body.xuatxu;
        let baohanh = req.body.baohanh;
        let soluong = req.body.soluong;
        let mota = req.body.mota;
        let gioitinh = req.body.gioitinh; 
        let math = req.body.math;
        let maloai = req.body.maloai;
        let hinhanh = req.file.filename;
        const data = [tensp, gia, xuatxu, baohanh,soluong, mota, gioitinh, math, maloai, hinhanh, masp];
        const sqlUpdate = "UPDATE sanpham SET tensp=?,gia=?,xuatxu=?,baohanh=?,soluong=?,mota=?,gioitinh=?,math=?,maloai=?,hinhanh=? WHERE masp=?";
        db.query(sqlUpdate, data, (err, result)=>{
            if(err) console.log(err);
            else res.json(result);
        });
    });
});

app.put('/productnoimage/:masp', validateToken, (req, res) => {
    let masp = req.params.masp;
    let tensp = req.body.tensp;
    let gia = req.body.gia;
    let xuatxu = req.body.xuatxu;
    let baohanh = req.body.baohanh;
    let soluong = req.body.soluong;
    let mota = req.body.mota;
    let gioitinh = req.body.gioitinh; 
    let math = req.body.math;
    let maloai = req.body.maloai;
    const data = [tensp, gia, xuatxu, baohanh,soluong, mota, gioitinh, math, maloai,masp];
    const sqlUpdate = "UPDATE sanpham SET tensp=?,gia=?,xuatxu=?,baohanh=?,soluong=?,mota=?,gioitinh=?,math=?,maloai=? WHERE masp=?";
    db.query(sqlUpdate, data, (err, result)=>{
        if(err) console.log(err);
        else res.json(result);
    });
});

app.delete('/product/:masp', validateToken, (req, res)=>{
    const masp = req.params.masp;
    db.query("DELETE FROM sanpham where masp=?",  masp , (err, result)=>{
        if (err) { res.json({ errCode:1}); }
        else res.json(result);
    })
});

// Yêu thích
app.get('/favoritelist/:makh', validateToken, (req, res)=>{
    let makh = req.params.makh;

    db.query("SELECT * FROM yeuthich JOIN sanpham ON yeuthich.masp=sanpham.masp WHERE yeuthich.makh=?", makh , (err, result)=>{
        if (err) { console.log(err) }
        else { res.json(result) }
    });
});

app.get('/favorite',validateToken, (req, res)=>{
    let masp = req.query.masp;
    let makh = req.query.makh;
    db.query("SELECT * FROM yeuthich where masp=? and makh=?", [masp,makh] , (err, result)=>{
        if (err) { console.log(err) }
        else {
            res.json(result);
        }
    });
});

app.post('/favorite',validateToken, (req, res)=>{
    let masp = req.body.masp;
    let makh = req.body.makh;

    db.query("INSERT INTO yeuthich (masp,makh) VALUES (?, ?)", [masp,makh], (err, result)=>{
        if (err) { console.log(err) }
        else {
            res.json(result);
        }
    });
});

app.delete('/favorite', validateToken, (req, res) => {
    let masp = req.query.masp;
    let makh = req.query.makh;

    db.query("DELETE FROM yeuthich WHERE masp = ? and makh= ? ",[masp,makh], (err, result) => {
        if (err) { console.log(err) }
        else { res.json(result); }
    });
});

//tài khoản

app.post("/register", (req, res) => {
    const email= req.body.email;
    const password = req.body.password;

    const hoten = req.body.hoten;
    const sodienthoai = req.body.sodienthoai;

    db.query("SELECT * FROM taikhoan WHERE email=?", email, (err, result) => {
        if (err) { console.error(err);}
        else {
            if (result.length > 0) {
                res.json({statusCode: 1});
            } else {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        console.log(err);
                    }
                    else{
                        db.query(
                            "INSERT INTO taikhoan (email, password) VALUES (?,?)",
                            [email, hash], (err, result) => {
                                if(err) console.log(err);
                                db.query("INSERT INTO khachhang (hoten,sodienthoai,email) VALUES (?,?,?)", [hoten, sodienthoai, email], (err, result) => {
                                    if(err) console.log(err);
                                    res.json({statusCode: 2});
                                });
                            }
                        );
                    }
                });
            }
        }
    });
});

app.get('/auth', validateToken , (req, res) => {
    try {
        const payload = jwt.decode(req.headers.accesstoken, "dh51805028");
        db.query("SELECT email, status, role FROM taikhoan WHERE email like ?", payload.email, (err, result) => {
            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.get('/customer', validateToken , (req, res) => {
    try {
        const payload = jwt.decode(req.headers.accesstoken, "dh51805028");
        db.query("SELECT * FROM khachhang WHERE email like ?", payload.email, (err, result) => {
            res.json(result);
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/login', (req, res) => {
    const email= req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM taikhoan WHERE email like ?", email, (err, result) => {
        if (err) { console.error(err);}
        else {
            if (result.length === 0) {
                return res.json({ err: 1 })
            } else {
                bcrypt.compare(password, result[0].password, (err, data) => {
                    // res == true or res == false
                    if (err) throw err;
                    if (data) {
                        if(result[0].status===0){
                            res.json({ err: 2 })
                        }else {
                            const accessToken = createTokens(result[0].email, result[0].role, result[0].status);
                            res.json(accessToken);
                        }
                    } else {
                        res.json({ err: 1 })
                    }
                })
            }
        }
    });
});

app.get('/customers', validateToken , (req, res) => {
    db.query('SELECT khachhang.makh,khachhang.hoten,khachhang.sodienthoai,taikhoan.email, taikhoan.status , taikhoan.role FROM khachhang JOIN taikhoan ON taikhoan.email = khachhang.email', (err, data) => {
        if (err) throw err;
        else res.json(data);
    })
});

app.put('/customers', validateToken , (req, res) => {
    let email = req.body.email;
    let status = req.body.status;
    const sqlUpdate = "UPDATE taikhoan SET status = ? WHERE email = ?";
    db.query(sqlUpdate,[status,email], (err, result) => {
        if (err) console.log(err);
        else res.json(result);
    });
});

// order 

app.get('/orders/list', validateToken, (req, res) => {
    let sqlSelect = "SELECT * FROM donhang ORDER BY thoigiandat DESC";
    db.query(sqlSelect,(err, result)=>{
        if (err) { console.log(err); }
        else {
            res.json(result);
        }
    });
});

app.post('/order/pay', validateToken, (req, res) => {
    let cart = req.body.cart
    let nguoinhan = req.body.nguoinhan;
    let diachinhan = req.body.diachinhan;
    let sodienthoai = req.body.sodienthoai;
    try {
        const payload = jwt.decode(req.headers.accesstoken, "dh51805028");
        db.query("SELECT makh FROM khachhang where email like ? ", payload.email, (err, data)=>{
            if (err) { console.log(err); }
            else {
                let makh = data[0].makh; 
                let madh = "";
                let possible = "0123456789";
                for (let i = 0; i < 10; i++)
                madh += possible.charAt(Math.floor(Math.random() * possible.length));

                db.query("INSERT INTO donhang(madh, nguoinhan, diachinhan, sodienthoainguoinhan, trangthai, makh) VALUES (?, ?, ?, ?, ?, ?)", [madh, nguoinhan,diachinhan,sodienthoai,"Đang xử lý", makh], (err, result)=>{
                    if (err) { console.log(err); }
                    else {
                        //let madh = result.insertId;
                        cart.forEach(cartItem => {
                            db.query("INSERT INTO chitietdonhang(madh,masp,soluong,gia) values (?, ?, ?, ?)",[madh,cartItem.product.masp,cartItem.soluong,cartItem.product.gia*cartItem.soluong], (err, response)=>{
                                if (err) { console.log(err); }
                            })
                        });
                        res.json({madh:madh});
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
    }

});

app.get('/orders/myorder', validateToken, (req, res) => {
    try {
        const payload = jwt.decode(req.headers.accesstoken, "dh51805028");
        let email = payload.email;
        let sqlSelect = "SELECT madh,nguoinhan,diachinhan,sodienthoainguoinhan,trangthai FROM donhang JOIN khachhang ON donhang.makh=khachhang.makh JOIN taikhoan on khachhang.email=taikhoan.email WHERE khachhang.email LIKE ? ORDER BY thoigiandat DESC";
        db.query(sqlSelect,email,(err, result)=>{
            if (err) { console.log(err); }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

app.get('/orders/bymadh/:madh', validateToken, (req, res) => {
    try {
        let madh = req.params.madh;
        const payload = jwt.decode(req.headers.accesstoken, "dh51805028");
        let email = payload.email;
        let sqlSelect = "SELECT * FROM donhang JOIN khachhang ON donhang.makh=khachhang.makh WHERE khachhang.email LIKE ? and madh LIKE ? ";
        db.query(sqlSelect,[email,madh],(err, result)=>{
            if (err) { console.log(err); }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

app.get('/orders/getbymadh/:madh', validateToken, (req, res) => {
    try {
        let madh = req.params.madh;
        let sqlSelect = "SELECT * FROM donhang JOIN khachhang ON donhang.makh=khachhang.makh WHERE madh LIKE ? ";
        db.query(sqlSelect,madh,(err, result)=>{
            if (err) { console.log(err); }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

app.get('/order/getsumpricebymadh/:madh', validateToken, (req, res) => {
    try {
        let madh = req.params.madh;
        let sqlSelect = "SELECT SUM(gia) as 'tong' FROM `chitietdonhang` WHERE madh LIKE ? ";
        db.query(sqlSelect,madh,(err, result)=>{
            if (err) { console.log(err); }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

app.get('/order/detail/:madh', validateToken, (req, res) => {
    try {
        let madh = req.params.madh;
        let sqlSelect = "SELECT * FROM chitietdonhang WHERE madh LIKE ? ";
        db.query(sqlSelect, madh,(err, result)=>{
            if (err) { console.log(err); }
            else {
                res.json(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
});