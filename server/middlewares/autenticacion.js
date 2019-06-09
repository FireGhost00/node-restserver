const jwt = require('jsonwebtoken');

//======================
// Verificar Token
//======================

let verficaToken = (req, res, next) => {

    let token = req.get('token');

    // res.json({
    //     token: token
    // })

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'El token no es valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });


};

//======================
// Verifica AdminRole
1 //======================

let verficaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verficaToken,
    verficaAdmin_Role
}