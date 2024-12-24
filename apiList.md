# DeveloperConnector API

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- Patch /profile/password // Forgot password API


## connectionRequestRouter
<!-- - POST /request/send/interested/:userId
- POST /request/send/ignored/:userId -->
- POST /request/:status/:userId

- POST /request/review/accepeted/:requestId
- POST /request/review/rejected/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you teh profiles of other users on platform



Status: ignore, interested, accepeted, rejected