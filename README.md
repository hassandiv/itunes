# React Application with iTunes API.

* Frontend React Application.
* Frontend in React JS, JSX and Styled Components.
* Backend in Node JS and Express.
* iTunes Developer API.

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


# Server runs on http://localhost:8080/ 
# Client runs on http://localhost:3000/
```

### NPM Packages and Modules Installed:

```
# Client Side
npm install styled-components

# Server Side
npm install express
npm install -g concurrently
npm install -g nodemon
```

### I've created 10 components for this App:

1.``` provider > StoreContext.js```: 
* Context API contains our initial states for the Application.

2.``` App.js```: 
* It contains our AppProvider, three Components: Header, Search, and Footer.

3.``` Header.js```: 
* Nav component is the header of the App, it contains menu items.

4.``` Search.js```: 
* Main component it contains our API call and load more function.

5.``` Drawer.js```: 
* Our sidebar has menu links and our searchform component.

6.``` Footer.js```: 
* Footer for the application.

7.```components > ArtistCard.js```: 
* It contains Artist props and JSX. 

8.```components > AlbumCard.js```: 
* It contains Album props and JSX. 

9.```components > SongCard.js```: 
* It contains Song props and JSX. 

10.```components > SearchForm.js```: 
* It contains our search form input and radio buttons. 