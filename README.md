# React Application with iTunes API.

* Frontend React Application.
* Frontend in React JS, JSX and Styled Components.
* Backend in Node JS and Express.
* iTunes Developer API.
* JS united testing with Cypress.io.

## How to use/test the App:
#### Open visual studio terminal and run the following commands
```
# clone repository from GitHub
git clone git@github.com:hassandiv/itunes.git             

# then
cd itunes

# Install dependencies for express server
npm install

# Install dependencies for client
cd client && npm install

# Run the client and the server with concurrently
cd .. && npm run dev


# Server runs on http://localhost:1000/ 
# Client runs on http://localhost:3000/
```

### NPM Packages and Modules Installed:

```
# Client Side
npm install axios
npm install styled-components

# Server Side
npm install express
npm install -g concurrently
npm install -g nodemon

# Dev Dependencies
npm install nodemon
npm install cypress
```

### I've created 10 components for this App:

1.``` provider > StoreContext.js```: 
* Context API contains our initial states for the Application. It manage the states between the components.

2.``` App.js```: 
* It contains our AppProvider, and three Components: Header, Layout, and Footer.

3.``` Header.js```: 
* Header component is the header of the App, it contains menu items and logo.

4.``` Layout.js```: 
* Layout component it contains our API call, load more function and the app layout.

5.``` Drawer.js```: 
* Sidebar has menu links and the search form component.

6.``` Footer.js```: 
* Footer for the application.

7.```components > ArtistCard.js```: 
* Card component for the music Artist. 

8.```components > AlbumCard.js```: 
* Card component for the Albums. 

9.```components > SongCard.js```: 
* Card component for the Songs. 

10.```components > SearchForm.js```: 
* Search form component has input and radio buttons. 