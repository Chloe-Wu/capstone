# ast-web-app-dev (Rapid Response WebApp)

This is the Rapid Reponse web-app frontent development

To get started with creating a static web-app on Azure we followed the intstructions from Azure's static web-app documentation provided [here](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github)

## Install the react
Before installing and runing our app, you need to install the followng to your local desktop environment:
1. Node.js (>=14.0)
2. npm (>=5.6)

## Install the following dependencies:
google map
> npm install react-google-maps/api

Azure cosmosdb
> npm install azure/cosmos

Zoom in/out
> npm install react-zoom-pan-pinch

Image marker
> npm install react-image-marker

## Change API (optional)
Before start the app, you need to change the Google map API and the azure cosmosdb API to your own one.

Open the config.js to change the endpoint, key, databaseId, containerId.
Open the map.js to change the googleMapsApiKey.

## Start
> npm start
