THIS IS THE FRONT END PORTION OF THE APP

Table of contents:
    TITLE
    DESCRIPTION
    ABOUT
    DEPLOYMENT
    HOW TO USE THE APP
    HOW TO RUN THE APP LOCALLY
    SECURITY

TITLE: 
    iTunes Searcher App

Description:
    This application searches the itunes store for a term and category of your choice.

ABOUT:
    This project was created in React and express. On the front end Redux is used for state management. The express backend gets
    information from the iTunes search API on the available here:
    https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html


DEPLOYMENT:
    A live deployment of the frontend of the site can be found here:
        https://itunes-searcher-app.netlify.app/
    The front end can be found on GitHub here:
        https://github.com/GerhardusC/itunes-searcher-frontend

    The backend is hosted here:
        https://itunes-searcher-backend-production.up.railway.app/
    The backend can be found on GitHub here:
        https://github.com/GerhardusC/itunes-searcher-backend

        (You can test the backend with the queries "term" and "type", e.g. https://itunes-searcher-backend-production.up.railway.app/api?term=john&type=all)

HOW TO USE THE APP:
    - Use the navigation bar on the left on large screens and at the top on small screens to switch views between your favourites and the search function.
    - Type in a search term, select a category and click on the search button.
    - To add any item to the favourites list, click on the little star to the right of any item.
    - To remove a favourite item, navigate to the 'favourites' section and click on the X next to the item you want to remove.

HOW TO RUN THE APP LOCALLY:
    Start by installing the backend.
    - Navigate into the backend directory
    - Run "npm install"
    - Run "npm start"

    Install the frontend
    - Navigate into the frontend directory
    - Run "git checkout local-copy"
    - Run "npm install"
    - Run "npm start"
    - The app should now open in a new browser window

SECURITY:
    This app has been secured with Helmet. Default headers have been applied.
    No API keys are needed for the iTunes search, so no security measures needed to be taken here.
