# Triplan Capstone Project

## Overview

This is the capstone project for udacity, the point of the project is to showcase my skills as a front-end developer taught in the class. The completed project page is here: [Triplan](https://sheltered-scrubland-14079.herokuapp.com/)

## Motivation

Allow a user to use our user interface to plan a trip to a location of their choice. During this we will provide information to help them better prepare for their trip at hand.

## How do we do this

We are going to do it by creating a wepage that will use a form to get trip information from a user. We will then take that information from the user and use api services to gather weather
data so that user will know the temputure of their location apon arrival.

### Technology that will be used

**Front-End:**

* HTML
* CSS/SCSS
  * flex-box
  * grid-templates
* javascript
  * DOM manipulation
  * fetch API

**Server-side:**

* node.js
  * express server

**Build-tools:**

* npm
* webpack
  * service-pack

API:

* [weather API](https://openweathermap.org/api)
* [geoNames API](http://www.geonames.org/export/web-services.html)
* [Weatherbit](https://www.weatherbit.io/account/create)
* [Pixabay](https://pixabay.com/api/docs/)

## API KEYS

I have removed the API keys in the project. In order to run the application you need to add the api key inside a .env file.

**Example:**

```properties
PIXABAY_KEY=${PIXABAY API}
WEATHERBIT_KEY=${WEATHERBIT API}
```
