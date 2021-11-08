# WEEY CRM (Frontend)
A customer relationship management system, (Project_name) supports an environment-friendly mobile carpool app - ”WEEY”. To help the primary objective of the business, the reduction of greenhouse emission and delivery of their green tips, (Project_name) allows the personalization of the promotion to distinct customizable groups of users with different interests. 

## Table of Contents
(Copy from the table of contents generator)
## Requirements

- User sorting, the admin will sort the customers/users of the app by age, gender, how environmentalist, time since joined, etc. This will help the admin to see which users are safe and how environmental-friendly are they.
- User grouping, it will allow the administrator to send green tips to users who are environmentalists to foster customer loyalty, this will also allow admins to send coupons to prompt them.
- Marketing analysis, we will be able to see the effectiveness of the coupons and emails by seeing how many emails were sent, opened and how many coupons are clicked, and used.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* MySQL- [Download & Install MySQL](https://www.mysql.com/downloads/), and make sure it's running on the default port.
* Yarn Package Installer - ```npm install --global yarn```

## Configuration

## How to install/run the application
Once you have downloaded the prerequisites, you are just a few steps away from starting your application.
### Quick Install

The Weey CRM comes pre-bundled with a `package.json` file that contain the list of libraries you need to start your application.

To install these dependencies, open up the terminal and do the followings:

```bash
$ yarn

//if not working it means you have not downloaded yarn

$ npm install --global yarn
$ yarn

//if not working, you can also use npm

$ npm install

```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* When the npm packages install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application
* To update these packages later on, just run `npm update`

### Running your application locally

You can run your application locally by doing the following command
(make sure you are in a root directory of your application cd /frontend-service)
```bash
$ yarn start
```
our application should run on port 3000 with the development environment configuration, so in your browser just go to http://localhost:3000

## Tests
You can run the full tests done in JEST by the following command
```bash
$ npm test
```
This will run the existing test cases done for the frontend application to ensure all of our componetns are working fine.

## Deployment Method

### Deploy using AWS Amplify

#### Connecting to your frontend repository
In order to host your web app to AWS Ampliy, you need to connect your repoisitory containing your source code.
To do this, you can navigate to 



### Deploy using AWS S3 Bucket + 

### Deploy using heroku

## Authentication

## Built With
- React.JS
- MySQL
## Used Libraries
- axios
- chart.js
- react libraries
- styled-components
- jest
- mui

## Authors
- John Minseok Kim - 
- Sooyoung Jung - 
- Yifeng - 
- Jun hee - 
## License
This project is licensed under the Team 90, On-a-boat of the IT Project in University of Melbourne (2021)

## Version Control
Version 1 - User Table
Version 2 - Statistics, Grouping, Emailing, bug fixes

