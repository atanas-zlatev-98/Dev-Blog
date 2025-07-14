const { postController } = require("../controllers/postController");
const { userController } = require("../controllers/userController");

function configRoutes(app){
app.use(userController);
app.use(postController);
}

module.exports = {
    configRoutes
}