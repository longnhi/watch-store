const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db =  require('./config/db');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { createTokens, validateToken } = require("./middleware/JWT");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: 'user',
    secret: 'DH51805028',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000*60*60*24 }
}));

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

app.post('/brands', (req, res) => {
    const nameBrand = req.body.nameBrand;
    res.json(nameBrand);
    db.query("INSERT INTO thuonghieu (tenth) VALUES (?)", nameBrand, (err, result)=>{
        if (err) { console.log(err); }
    })
});

app.put('/brands', (req, res) => {
    const math = req.body.math;
    const nameBrand = req.body.nameBrand;
    db.query("UPDATE thuonghieu SET tenth=? where math=?", [ nameBrand, math ], (err, result)=>{
        if (err) { console.log(err); }
    })
});

app.delete('/brands/:math', (req, res) => {
    const math = req.params.math;
    db.query("DELETE FROM thuonghieu where math=?",  math , (err, result)=>{
        if (err) { console.log(err); }
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
    db.query("SELECT * FROM sanpham", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/productsnew/', (req, res) => {
    db.query("SELECT * FROM sanpham order by masp desc limit 3", (err, result)=>{
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
        res.json(payload);
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
                        const accessToken = createTokens(result[0].email, result[0].role, result[0].status);
                        res.json(accessToken);
                    } else {
                        res.json({ err: 2 })
                    }
                })
            }
        }
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});