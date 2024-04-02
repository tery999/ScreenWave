# ScreenWave

Angular project.
A site, which acts as a data base for movies.

## How to start

Run ng serve in the terminal to start the server.
Run "npm run serverStart" to start the BE server.

## Functionality

Home Page - General information. A random movie with a link to details page is shown, 
taken from the available movies.

Catalog Page - shows all movies from the BE. There is a search field, which can be used to filter the movies.
Search function filters all movies, which include the letters or phrases in the search box.
An empty search box returns all movies.

Details Page - /Movies/:id - shows all the information about the current movie.
All users and guests can view the comments, if any exist. 
Logged-in Users have the option to place a new comment and delete their own comments.
They can also add the movie in their Watchlist collection.
If a movie link with an invalid Id is placed, the user will be informed and given the option to go back to Catalog page.
The owner if the movie can edit or delete the movie.

Add Page - A form which can be accessed by logged in users. Error messaged will be shown,
if any of the validation criteria is not met.

Edit Page - /Edit/:id - the information about the movie is pre-filled. Error messaged will be shown,
if any of the validation criteria is not met.

Profile Page - diverts to two other pages:
MyMovies Page, which shows all the movies that the user has added, with a button which redirects
to the details page of said movie.
MyWatchList Page, which shows all the movies that are in the current user's watchlist.
There are buttons which can redirect to the details page, and a delete button which removes them.

Login Page - where people can login. If any information is invalid, an error message will inform the user.

Register Page - where guests can register. If any fields are empty , do not have the minimum character length, or the passwords
dont match an error message will be displayed. If the username already exists, an additional message will pop.

Error Page - if there is no route match, an error page is shown, with a button to redirect user back to Catalog page.

## Private routes and protection

Edit Movie page will redirect to the Catalog Page, if the current user is not the creator of the movie.
Add, Edit, and Profile pages are protected from guests, and if entered will be redirected to the Login page.
Register and Login will redirect logged-in users to the Catalog page.
TokenInterceptor - used to put token in headers, if it exists.
If it catches a 401 error - Unauthorized, the user will be logged out and redirected to the Login page. JWT token's time limit is 1 hour.

## Technologies used
Angular & Typescript,
HTML&CSS,
Node/Express Js,
MongoDb/Mongoose



