module.exports = function(){
    var controller = {};

    controller.index = function(req, res){
        console.log('/');
        res.render('index', {nome: 'Express WGBN'});
    };

    return controller;
};