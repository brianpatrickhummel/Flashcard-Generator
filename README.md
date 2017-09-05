# Flashcard-Generator

### This application is a Node.js CLI application that allows a user to generate two different types of flashcard decks for the purposing of studying. Each new card added to a deck is created using a Javascript Constructor. The user can then practice with either deck.

#### The two types of flashcard decks:
  1. Basic Deck 
    * has a question on the front and answer on the back
    * Example - Front: "Who was the first president of the United States?"
    * Example - Back: "George Washington"
  2. Cloze Deck
    * has an partial statement on the front and the full statement on the back
    * Example - Front: "... was the first president of the United States."
    * Example - Back: "George Washington was the first president of the United States."



* The application runs in the Node.js command line interface.
* The application interacts with the user through the *Inquirer.js* NPM Library.
* Asynchronous calls are made to the Twitter API using the *twitter* NPM Library.
* Asynchronous calls are made to the Spotify API using the *node-spotify-api* NPM Library.
* HTTP calls are made to the OMDB API by using the *Request* NPM Library.
* Each user interaction is time-stamped and committed to a Log file via the Node FS Module.

### Video Demo
This application runs in the Node Command Line Interface and is, therefore, not deployed for viewing.   A demo of the CLI operation of the app can be viewed by clicking [here](https://youtu.be/ABwL3nfFjuk)


#### When the application launches, four options are presented:
  1. Read Brian Hummel's Tweets
    * queries Twitter API
    * returns the last 20 tweets from MY personal account
  2. Get Information about a song from Spotify
    * allows user to enter a song name
    * queries Spotify API
    * returns information about the song and a link to song preview
  3. Get information about a film from OMDB
    * allows user to enter a film name
    * queries OMDB API
    * returns information about the film
  4. Trigger the Unknown
    * references a locally stored file on server via FS module
    * file instructs app to query the Spotify API with a Backstreet Boys song title


