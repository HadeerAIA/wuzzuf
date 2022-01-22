# Wuzzuf Colne

The source code of `Wuzzuf` ITI final Project

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Dependencies](#dependencies)
1. [Structure](#structure)
1. [Contribution](#contribution)
1. [License](#license)

## Installation

Make sure to have [Node.js](https://nodejs.org/en/download/)

1. Clone this repo `$ git clone https://github.com/IEEE-AZHAR/Official-website.git` or using `ssh`.

2. `$ cd Wuzzuf`.

3. Run `$ npm install` to install dependencies and packages.

<a name="install"></a>

## Usage

Run `$ npm start` to start serving the app, then go to `https://localhost:3000` to view the app.

## Dependencies

This app uses some dependencies:

1. [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - to implement routing in the app.

1. [react-redux](https://react-redux.js.org/) - to implement routing in the app.

1. [Bootstrap](https://getbootstrap.com/) - to add visual designs to the app and helps making css better and easier.

1. [axios](https://github.com/axios/axios) - to consume APIs and integrate with the `back-end`.

1. [fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - to add descriptive icons.

1. [Firestore](https://www.npmjs.com/package/firebase) - to add backend .

## Structure

The folder structure of the application. Each module contains `components` has own style.sass

```
.

├── package.json
├── package-lock.json
├── public
|
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │  
│   ├── globals
│   │   ├── contexts
│   │   │   └── theme.context.js
│   │   └── routes.js
│   ├── index.js
│   ├── modules
│   │   ├── Explore
│   │   │   ├── components
│   │   │   │   ├── ExplorCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   ├── ExplorListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   └── ExplorPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.sass
│   │   │  
│   │   ├── settings
│   │   │   ├── components
│   │   │   │   ├── form
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   ├── icon
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   └── page
│   │   │   │       ├── index.js
│   │   │           └── style.sass
│   │   └── store
│   │       ├── Combine
│   │       │   ├── action
│   │       │   │   ├── index.js
│   │       │   │  
|   |       |   |
|   |       |   |
|   |       |   |
│   │       │   ├── reducer
│   │       │       ├── index.js
│   │       │      
│   │       │  
│   │       └── store.js
│   │  
│   ├── shared
│   │   ├── footer
│   │   │   ├── index.js
│   │   │   └── style.sass
│   │   ├── Navbar
│   │   │   ├── index.js
│   │   │   └── style.css
│   └── styles.sass
└── package-lock.json
```
