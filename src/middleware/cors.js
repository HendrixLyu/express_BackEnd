module.exports = (req,res,next) => { //解决跨域问题
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','content-type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
};
