function ehAdmin (req, res, next) {
    const usuario = req.session.usuario;

    
    if (usuario.eh_Admin) {
        next();
    }

    delete req.session.usuario;
    req.session.destroy
    return res.redirect('/usuarios/login')
}

module.exports = ehAdmin