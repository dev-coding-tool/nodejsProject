const { User }= require('../model/User');

//인증 처리를 하는 곳
let auth = (req, res, next) => {
    //클라이언트 쿠키에서 토큰 가져옴
    let token = req.cookies.x_auth;

    //토큰을 복호화 후 유저를 찾음
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})

        req.token = token;
        req.user = user;
        next();
    })

    //유저가 있으면 인증 o

    //유저가 없으면 인증 x
}

module.exports = { auth };