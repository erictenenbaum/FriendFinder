# FriendFinder

This is a friend finder matching application that prompts the user to take a short survey of 10 questions so that they can be matched with a new friend

The survery sends the users answers to the server so that a matching algorithm can be run against the pool of potential friends 

This app was built using node.js, express and body-parser

There is no database, so the data lives on the server as long as the server is running, however, the starter data is all that will persist in the event the server goes down.

This app is currently deployed to heroku at https://friend-finder-tenenbaum.herokuapp.com/