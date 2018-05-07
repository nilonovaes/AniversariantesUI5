module.exports = function (app) {

    var controller = app.controller.index;

    app.get('/', controller.index);
    
}