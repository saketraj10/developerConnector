- Create a respository
- Initial the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update script inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde ( ^ vs ~ )

- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, /, /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on Postman
- Explore routing and use of ?, +, (), * in the routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Readint the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5);
- What is Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- difference between app.use and app.app
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes except /user/login
- Error Handling using app.use("/", (err, req, res, nex) => {} )

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/developerConnector
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman

- JS object vs JSON (difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user
- User.findOne wiht duplicate email ids, which object returned
- API - Get user by email
- API - Feed API - GET /feed - get all teh users from the database
