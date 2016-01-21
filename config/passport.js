var passport = require('passport');
var Github   = require('passport-github');
var mongoose = require('mongoose');

module.exports = function(){
    var Usuario = mongoose.model('Usuario');
    var githubCallback = 'http://'+config.domain+':'+config.port+'/auth/github/callback';

    passport.use(new Github({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: githubCallback,
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