[![Shelter App Logo](https://s3-us-west-2.amazonaws.com/kinetiq/github/shelter-app/images/puppy.png)](https://github.com/kinetiqideas/shelter-app)

# Shelter App

The **Shelter App** is a RESTful API application built on [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/). Dog lovers all over the Seattle area will use the API to find out about sheltered dogs in their given neighborhood. Each dog will have a status of either "**shelter**" or "**homed**". If they have a "**shelter**" status that means they are still available. Otherwise, "**homed**' indicates that a dog lover has already adopted the dog! If you are planning to apply to [Kinetiq](http://kinetiqideas.com/), feel free to [clone](https://help.github.com/articles/cloning-a-repository/) so that you can create the dog shelter API. Once you feel comfortable about your implementation, go ahead and send a zipped folder (excluding node modules) of the project to [code@kinetiqideas.com](mailto:code@kinetiqideas.com) and we'll review your changes!

An example of the dog schema used:
```javascript
{
  "name": "Max", 
  "type": "Bloodhound",
  "gender": "male",
  "color": "Black",
  "age": 17, // age in months
  "size": "large",
  "status": "shelter", // shelter or homed (has been placed)
  "location": "Greenlake",
  "domesticated": true
}
```

## Directions
Create a RESTful API following the [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) convention below. You are free to use whatever popular Node.js framework you want (e.g., [Express](https://expressjs.com/), [Hapi](http://hapijs.com/), [Koa](http://koajs.com/), [Trails](https://github.com/trailsjs/trails)).

```javascript
GET api/v1/dogs // fetch list of dogs
POST api/v1/dogs // create new dog entry

GET api/v1/dogs/:id // fetch individual dog details
PUT api/v1/dogs/:id // update individual dog details
```

The dog lovers using the API will want to filter the results to get more tailored information! If you have time, make sure that you can filter based on location, size, type, age, gender, color, and status.

Examples:
```javascript
GET api/v1/dogs?location=Ballard // fetches all dogs in Ballard
GET api/v1/dogs?location=Ballard&size=small&gender=female // fetches only small, female dogs in Ballard
```

## Bonus points:
- Your solution will have a server-side paging implementation (e.g., paging, filtering, sorting).
- Your solution will have associated unit tests. **Note:** The Shelter App is unit test framework agnostic. Use whatever you're most comfortable with!

### Structure
The Shelter App has two app-centric directories: seed and config. The seed directory has a seed.js script to insert the data from data.json into MongoDB. The config directory has the connection string for MongoDB. You can also set the port and hostname in the config file. Feel encouraged to modify, refactor, and add onto the project anyway you like.

 - Shelter App
    - seed
        - seed.js [script to insert dog data into mongoDB]
        - data.json [the dog data]
    - config
        - config.js [db configs, etc.]
    - images
        - puppy.png
    - server.js  [starting point of app]
    - .gitignore
    - README.md
    - package.json

### Prequisites

You need to have [MongoDB](https://docs.mongodb.com/manual/installation/) installed as well as [Node.js](https://nodejs.org/) and npm (included when downloading Node.js).

### Installation and Getting Started

After getting the project, you need to run npm install at the root of the project's directory (assuming Node and NPM is installed):

```sh
$ npm i 
```

In order to run the application, just use this command:

```sh
$ npm start 

# or you can run the app by:
$ node server
```

In order to seed the app with default dog data, run the npm start command, but with the MONGO_SEED environmental process variable:

```sh
$ MONGO_SEED=true npm start

# or you can go into the seed directory and run:
$ node seed.js
```


You can also easily overwrite the port (and host) by doing this:

```sh
$ PORT=3000 HOST='http://example.com' npm start
```

**Good luck and happy coding!**
- Team Kinetiq
