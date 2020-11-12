# The Lying Monkey
This is branch contains the API for the project. The task of the API is to connect external sources to the ML. This connects the app to the ML model and also external sources. Hosted at http://lyingapi.yasharyan.xyz/ on AWS EC2 Instance. 

## Technology Stack

| NodeJS | ExpressJS | Axios |
|--------|-----------|-------|
| ![](https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_640.png) | ![](https://expressjs.com/images/express-facebook-share.png) | ![](https://miro.medium.com/max/3164/1*80J2Wa21DYXxMbbtBziJHg.png) |
| Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. The entire API was created in NodeJS | Fast, unopinionated, minimalist web framework for NodeJS. Express made it easy to create the API, write it in fewer lines and more efficiently. | Promise based HTTP client for the browser and nodeJS. Making requests to the ML model was easier with the help of Axios, as compared to the generic fetch api. |


## Features
These are the features of the API:
- Create a POST request to /dediction to check the validy of a news.
- Create a GET request to /news/category/:category to get the various category-wise.
- Create a POST request to /detection/contribute to get user submitted fake news report.


## Possible Features
The API is not related to the current functionality. These are some additional features that can be added:
- Faster response using GraphQL when the database starts getting bigger.
- API key based authentication for letting people use this API into their own projects.
- Integration with Non-Relational databases to store all the gathered fake news. 
- Statistics from the gathered data and user report to tell how many times a news was searched, areas with highest fake news trending, and alternative legitimate news provider.
