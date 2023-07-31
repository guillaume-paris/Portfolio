# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Information about the project

In this React project, I'm following a classic React Architecture from [this article](https://medium.com/stackanatomy/react-architecture-patterns-for-your-projects-6f495448f04b).

## Features to improve the project

- [x] Add a https certificate (directly added by digital ocean due to web static deployement)
- [x] Add a domain name (from name.com, CNAME record added to digital ocean)
- [x] Add some animations (in the about page)
- [ ] Add a loading spinner when the data is loading
- [ ] Add a 404 page
- [ ] Add a maintenance page triggered by a remote control (firebase)
- [ ] Add a dropdown button for profile menu (logout, settings, etc.)
- [ ] Add a dark mode with a toggle button

## Which mistakes I made

- I should put the username in the AuthContext instead of localstorage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
