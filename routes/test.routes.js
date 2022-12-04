
const { authJwt } = require("../middlewares");
const controller = require("../controllers/test.controller");

/* module.exports = function(app) {
    var router = require("express").Router();

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/", controller.testToday);
    app.get("/date", controller.testToday);
    app.get("/api/admin/allusers", controller.allUsers);
    app.get("/api/admin/finduserbyid", controller.findOne);



};

 */

module.exports = app => {
    const users = require("../controllers/test.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    //router.post("/", users.create);

    // Retrieve all Tutorials
    router.get("/", users.findAll);

    // Retrieve all published Tutorials
    //router.get("/published", users.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // Update a Tutorial with id
    //router.put("/:id", users.update);

    // Delete a Tutorial with id
    //router.delete("/:id", users.delete);

    // Delete all Tutorials
    //router.delete("/", users.deleteAll);

    app.use('/api/admin/users', [authJwt.verifyToken, authJwt.isModerator], router);
};