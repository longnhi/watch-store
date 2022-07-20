const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const db =  require('./config/db');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

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
    db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai", (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/productsnew/', (req, res) => {
    db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai order by sanpham.masp desc limit 3", (err, result)=>{
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

app.get('/products/brand/:math', (req, res) => {
    const math = req.params.math;
    db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai WHERE sanpham.math=?", math, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.get('/products/category/:maloai', (req, res) => {
    const maloai = req.params.maloai;
    db.query("SELECT * FROM sanpham JOIN thuonghieu on sanpham.math=thuonghieu.math JOIN loai ON sanpham.maloai=loai.maloai WHERE sanpham.maloai=?", maloai, (err, result)=>{
        if (err) { console.log(err); }
        res.json(result);
    })
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});