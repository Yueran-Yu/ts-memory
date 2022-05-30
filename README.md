1. body-parser: Node.js body parsing middleware. Parse incoming request bodies in a middleware before you handlers,
   available under the ```req.body``` property
2. cors: CORS is a node.js package for providing a ```Connect/Express``` middleware that can be used to
   enable ```CORS``` with various options.
3. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (
   domain, scheme, or port) other than its own from which a browser should permit loading resources.
4. Express: ```Express``` provides a thin layer of fundamental web application features, without obscuring Node.js
   features that you know and love.
   - Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
5. ```mongoose``` to create models for the posts. Mongoose is a MongoDB object modeling tool designed to work in an
   asynchronous environment. Mongoose supports both promises and callbacks
6. nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when
   file changes in the directory are detected.
7. ```"type":"module"``` when you have this in the ```package.json``` file, your source code should use ```import``` syntax. When you don't have, you should use ```require``` syntax.
8. In Node.js, when import a ```js``` file, we need to add the extension  ```.js or .ts```
9. The ```state``` type of ```rootReducer``` when using redux: ``` export type RootState = ReturnType<typeof rootReducer>;```, when using redux-toolkit, the ```root state``` type is ```export type RootState = ReturnType<typeof store.getState>```



