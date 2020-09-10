const Login = require('../models/LoginModel')
const { async } = require('regenerator-runtime')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = async (req, res) => {
    const login = new Login(req.body)
    
    try {
        await login.register()
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save( () => {
                res.redirect('back')
            })
            return
        }
        
        req.flash('success', 'Seu usuário foi criado com sucesso!')
        req.session.save( () => {
            res.redirect('back')
        })

    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}
