# Quizz 6D Backend server

This is the node package for the backend server used by Quizz 6D

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone git@bitbucket.org:6degres_dev/quiz-6d-back-end.git
    $ cd quiz-6d-back-end.git
    $ yarn install

## Configure app

You will need to create a .env file at the root of the repository with the following contents:

```
PORT=8080
SECRET=#contact an administrator for this value#
DATABASE=mongodb://localhost:27017/quizz6d
```

## Running the project

    $ yarn start

## Running the project for dev

    $ yarn dev

## API Documentation

You can find the Postman generated API Documentation here [https://documenter.getpostman.com/view/10994541/SzYdTwd8](https://documenter.getpostman.com/view/10994541/SzYdTwd8)
