var passport = require('passport');
var Github   = require('passport-github');
var mongoose = require('mongoose');

module.exports = function(){
    var Usuario = mongoose.model('Usuario');

    passport.use(new Github({
        clientID: 'b59032ae54a02a834d87',
        clientSecret: '96f19b255dda9b43a72996feeed0f8683b7a22cb',
        callbackURL: 'http://localhost:3000/auth/github/callback',
    }, function(accessToken, refreshToken, profile, done){
        Usuario.findOrCreate(
            {"login": profile.username},
            {"nome": profile.username},
            function(erro, usuario){
                if (erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));

    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done){
        Usuario.findById(id).exec()
            .then(function success(usuario){
                done(null, usuario);
            });
    });
};