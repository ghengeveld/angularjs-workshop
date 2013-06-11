# Workshop: Learning AngularJS

Welcome to the Learning AngularJS workshop. I hope you have fun, check the
*Usage* section below for installation instructions and instructions on loading
the different environments.

*- Robin*

## Usage

### Prerequisites

In order to build, install and develop the application the following
dependencies are required:

* Node.js, version 0.8+
* Git, for checking out the source code of this project. If you don't have Git
  installed on your pc/laptop you can also just download the source by clicking
  on download button in Github. This will download a zip file containing the
  source.

All other libraries, tools and packages can be installed automatically - see
'Installing dependencies' sections below for more information.

### Installing dependencies

Install the npm packages the application depends on using the following command
from within the directory containing the workshop files:

```
$ npm install
```

This will install the missing NPM packages as specified in npm's `package.json`
file. After this script has succesfully been run, you can run the application.

### Running the application

On Unix systems you can start the application like this:

```
$ ./script/start-server
```

On Windows systems you can start the application like this:

```
$ node ./script/codercontest-api.js
```

Then navigate your browser to `http://localhost:9001/` to see the GUI
application running in your browser.

### Loading an assignment

The session spans a total of eight assignments, each showing a different part of
the Angular framework.

In this repository, we've created a branch for each of these assignments. The
branch is the starting point of the assignment. The table below lists the
different assignments and their corresponding branches:

| # | Assignment                | Branch name                 |
|---| ------------------------- | --------------------------- |
| 1 | Your first application    | `assignment1-your-first`    |
| 2 | Scopes                    | `assignment2-scopes`        |
| 3 | Communicating with APIs   |                             |
|   | - Using $http             | `assignment3-api`           |
|   | - Using $resource         | `assignment3-step-resource` |
| 4 | Routes                    | `assignment4-routes`        |
| 5 | Filters                   | `assignment5-filters`       |
| 6 | Directives                | `assignment6-directives`    |
| 7 | Dependency Injection      | `assignment7-di`            |
| 8 | Wrapping up               | `assignment8-wrapping-up`   |

You can load a new assignment by checking out the corresponding branch from Git.

Before loading a new assignment, your local changes need to be discarded.
Perform the following commands to do this and check out the
`assignment1-your-first` branch:

```
$ git clean -f .
$ git checkout .
$ git checkout assignment1-your-first
```

Also, don't forget to restart the server after each switch.

# Have fun!
