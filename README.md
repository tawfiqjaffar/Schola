# EIP - Schola

Installation guide + documentation

---
## Requirements

For development, you will only need Node.js (version 12.x.x) and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  Find the right installation script for the corresponding destination OS [on the Node.js downloads page](https://nodejs.org/en/download/)

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.13.1

    $ npm --version
    6.14.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ (sudo) npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ (sudo) npm install -g yarn

---

## Install

    $ git clone git@github.com:tawfiqjaffar/Schola.git
    $ cd Schola
    $ yarn install
    $ yarn bootstrap


## Dev on backend
  Make sure your have MongoDB installed on your system.

    $ mongod (or sudo service start mongod)
    $ cd packages/backend
    $ touch .env

  get the .env contents from [Trello](https://trello.com/c/dGus184i/11-env)

    $ yarn dev

## Dev on frontend
  Make sure your have MongoDB installed on your system.

    $ cd packages/frontend
    $ yarn start

## Running the project
For frontend

    $ yarn start

For backend

    $ yarn dev