# Welcome to the Material Failures Database

This repository holds the source code for the material failures database application managed by Dr. John A. Nychka in the Department of Chemical and Materials Engineering at the University of Alberta. 

The application is designed to serve as an interactive visual taxonomy of material failure. To learn more about the application's design and function, visit the [Application Design and Function wiki page](https://github.com/joleneborrelli-uofa/material-failures-database/wiki/Application-Design-and-Function).

A demo of the app can be accessed at https://material-failures-database.herokuapp.com/#/.

# How to Run the App

To run the app, [clone this repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your computer. 

The database must be requested from jnychka@ualberta.ca and moved into the `server` directory.

Open two sessions in the command line interface of your choice (i.e. [Terminal](https://support.apple.com/en-ca/guide/terminal/welcome/mac) for Mac, the [Command Shell](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) for Windows, etc.) and navigate to the cloned folder. 

Type `npm start` in the top level directory of one session and in the `client` directory of the other. 

A new window will open in your default browser. 

![command 2](https://user-images.githubusercontent.com/64048782/91068920-36a74680-e5f2-11ea-8914-c63165fcdff1.jpg)

# Programmatic Elements

This project was bootstrapped with React's [Create React App](https://github.com/facebook/create-react-app). It is written in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and uses an [Express](https://expressjs.com/) server as well as the [React router](https://reactrouter.com/). Other dependencies in the application include a [SQLite3](https://www.sqlite.org/index.html) database, [Mirador](https://github.com/ProjectMirador/mirador) image viewer, [Lodash](https://lodash.com/) for utility functions and [Axios](https://github.com/axios/axios) for API communication. 

# More Information

For more information about this application, visit the [wiki](https://github.com/joleneborrelli-uofa/material-failures-database/wiki).