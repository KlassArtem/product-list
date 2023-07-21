# Tweets

## Description 📑

This passage describes a web application called "Tweets" that allows displaying
user cards with interactive tweet cards. Each tweet card has a "Follow" button
that, when clicked, changes the text to "Following" and updates the button
color. The follower count displayed on the card also increases, including the
user's follow count. When the page is refreshed, the final state of the "Follow"
button and follower count is preserved.

To improve the user experience, the application uses skeleton cards while
waiting for a response from the backend. Additionally, the application displays
eight user cards during the initial render, and a "Load more" button appears to
render the next eight user cards.

The application includes two routes: / - Home component /tweets - Tweets
component, a page for displaying tweets. The Tweets page includes a Back button
that leads back to the main page.

### Installation ⚡️

To start a project on GitHub, you must first clone it onto your local machine.
For example, if you are working with a React project created using
create-react-app, you can clone the project by running the command "git clone
https://github.com/username/project.git" in your terminal.

After cloning the project, navigate to the project directory and install all
required dependencies by running the command "npm install" in your terminal.

Once all dependencies are installed, you can launch the development server by
running the command "npm start". This will open the project in your default
browser, and any modifications you make to the code will automatically update in
the browser.

### Addition ⚙️

For this application, a personal backend was created for development using the
UI service https://mockapi.io, specifically the users resource. The user object
is described as follows:

```json
"users": [ {
"id": 1,
"user": "Dan Humphrey",
"tweets": 777,
"followers": 100500,
"avatar": "url.jpg"
} ]
```

### Tech Stack 🛠

- React ✔
- React Router DOM ✔
- Axios ✔
- Styled Components ✔
- Styled System ✔
- React Loading Skeleton ✔
