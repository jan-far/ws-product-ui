# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Deployment

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Work Sample for Product Developer
===

You will work on the following problems that lightly resemble our stack at EQ Works.

## Problems

Complete 1, then pick either 2a or 2b that best represents your interest.

### 1. server-side rate-limiting

Can be found here:- 
[`ws-product-nodejs`](https://github.com/jan-far/ws-product-nodejs)

### 2a - Front-end Track

Build UI components that leverages the API server from problem 1 to solve problems below.

#### A. client-side general chart visualizations

Implement one or more types of charts that can be used to effectively visualize data supplied from the API endpoints. Users should be able to pick different metrics to visualize and compare with others.

#### B. client-side data table

Implement a functional data table that can be used to browse through data supplied from the API endpoints. The data table should allow users to fuzzy search on meaningful values (such as POI names), and matching rows should be highlighted.

#### C. client-side geo visualizations

Implement a functional map-based data visualization based on different POI-bound metrics. Users should be able to select different metrics and be able to distinguish each metrics' intensity of different POIs. The map should also allow a certain degree of flexibility for users to zoom in and out, and allow users to see a "clustered" indicator when more than one POIs are too close to each other at the given zoom level.

You will likely need to implement data join between the POIs and other datasets.