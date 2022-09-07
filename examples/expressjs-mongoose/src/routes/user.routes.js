const Router = require('express');
const userController = require('../controllers/user.controller');

const routes = Router();
routes.route('/').post(userController.addUser);
routes.route('/').get(userController.getUsers);

module.exports = routes;
