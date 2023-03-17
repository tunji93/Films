## Description
    An api that fetches filmms data from the star wars Api and provides end points for users to fetch films data and add comments. 

## Installation

1. Install dependencies - `npm install`

2. Create a new file `.env` if it doesn't exist and copy the contents of `env.dev` into it to be able to run your server on production environment. 

3. Then you need to provide values for the configuration env files at the `src/config/env directory`.


## Running the server locally

1. Start up the server - Run `npm start` | `npm run dev`

2. Server should be running on http://localhost:2020/ by default



## Routes

| Routes                                                           | Description                              | Auth roles                            |
| -----------------------------------------------------------------|----------------------------------------- | ------------------------------------- |
| [GET] &nbsp; /api/films/                                        | Fetch a list of films                    | none                                     
| [POST] &nbsp; /api/comments/filmid                              | Add comment to film by providing comment and film id                             | none                                      
| [GET] &nbsp; /api/comments/filmid                               | Fetch list of comments for a given film by providing filmid                  | none                                     
| [POST] &nbsp; /api/auth/verify-email                             | Email verification                       | none                                     
| [POST] &nbsp; /api/auth/request-password-reset                   | Sends a request password email           | none                                      
| [POST] &nbsp; /api/auth/reset-password                           | Reset password form handler              | none                                      
| [POST] &nbsp; /api/users                                         | Create a user                            | User                                  
| [GET] &nbsp; /api/users                                          | Get all users                            | Admin                                 
| [GET] &nbsp; /api/users/:userId                                  | Get a user                               | User                                  
| [UPDATE] &nbsp; /api/users/::userId                              | Update a user                            | User                                  
| [DELETE] &nbsp; /api/users/:userId                               | Delete a user                            | Admin                                 
