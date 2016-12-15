/**
  * @module SwaggerPetstoreLib
  *  
  * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
  */

var configuration = require('./configuration'),
    UserController = require('./Controllers/UserController'),
    PetController = require('./Controllers/PetController'),
    StoreController = require('./Controllers/StoreController'),
    StatusEnum = require('./Models/StatusEnum'),
    Category = require('./Models/Category'),
    Tag = require('./Models/Tag'),
    Status6Enum = require('./Models/Status6Enum'),
    Order = require('./Models/Order'),
    User = require('./Models/User'),
    Pet = require('./Models/Pet'),
    ApiResponse = require('./Models/ApiResponse');


function initializer () { }

//Main functional components of SwaggerPetstoreLib
initializer.configuration = configuration;
initializer.UserController = UserController;
initializer.PetController = PetController;
initializer.StoreController = StoreController;

//Main Models of SwaggerPetstoreLib
initializer.StatusEnum = StatusEnum;
initializer.Category = Category;
initializer.Tag = Tag;
initializer.Status6Enum = Status6Enum;
initializer.Order = Order;
initializer.User = User;
initializer.Pet = Pet;
initializer.ApiResponse = ApiResponse;

module.exports = initializer;