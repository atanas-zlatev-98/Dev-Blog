const { postController } = require("../controllers/postController");
const { userController } = require("../controllers/userController");
const { tagsController } = require("../controllers/tagsController");

function configRoutes(app) {
  app.use(userController);
  app.use(postController);
  app.use(tagsController);
}

module.exports = {
  configRoutes,
};
