
var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
        console.log("hello");
    });

    app.post("/api/friends", function(req, res) {

    	
      
        var tempFriend = req.body

        console.log(tempFriend);

        
    // New friend object from survey.html ajax post
        var newFriend = {
        	name: req.body.name,
        	photo: req.body.photo,
        	scores: req.body.scores
        }

        // .map function to convert all scores in the scores array to integers
        newFriend.scores = newFriend.scores.map(function(score){
            return parseInt(score)
        })
           
           
        console.log(newFriend, "this is our newFriend");

        // Empty array for the to push all scores for all the potential friends in the server 
        var totalMatches = [];

        // reducer helper function for a .reduce function called later

        function reducer(accumulator, currentValue) {
            return accumulator + currentValue
        }

        	// promise function to handle matching of user data from the ajax post to potential matches on the server
        
        let friendPromise = new Promise(function(resolve, reject) {

            // friendsData is the array of potential matches we required at the top of the page
            // Two for loops below:
                // First loops through all the friends array of objects we required and 
                // the second iterates over the ajax post object 
                // and calculates the absolute value of the difference in scores for each of 
                // the 10 questions in the survey, then pushes the scores to an empty matchScore array 
                // the matchScore is then pushed to the total matches array above on each iteration of the available matches
                // from the friendsData array that we required at the top of the page



        	for (let i = 0; i < friendsData.length; i++) {

                    var matchScore = [];

                    for (let y = 0; y < newFriend.scores.length; y++) {
                        //y is newfriend ////////i is friendData from friends.js
                        matchScore.push(Math.abs(newFriend.scores[y] - friendsData[i].scores[y]));
                    }
                    totalMatches.push(matchScore)
            }

                console.log(totalMatches, "this is our total matches");

                // Empty array to  push the reduced match scores to
                // for loop iterates over the total mathes array which consists of absolute value scores 
                // which are the difference between the user score for each question and 
                // each of the potential matches score for that question

                var chosenFriendArray = [];

                for (let z = 0; z < totalMatches.length; z++) {
                    chosenFriendArray.push(totalMatches[z].reduce(reducer));
                }

                // Then we apply Math.min for the array of reduced numbers to find the lowest number in the array

                var matchedFriendIndex = Math.min.apply(null, chosenFriendArray);
                console.log(matchedFriendIndex);

                // The lowest number in the array is our index of the matched friend for our user
                var friendsDataIndex = chosenFriendArray.indexOf(matchedFriendIndex);
                console.log(friendsDataIndex);

                let foundFriend = true;                

                // We check the matched friend index to be sure that it is an actual index of our array and then pass
                // our matched friend into our resolve function of the promise
                
                if (friendsDataIndex != -1){
                    resolve(friendsData[friendsDataIndex]);
                }
                else {
                    reject(false);
                }
                
            });

        // We fulfill the promise and send our json object of our matched friend back to the client
            
        friendPromise.then(function(fromResolved){
            friendsData.push(newFriend);  
            console.log(fromResolved);
            if(fromResolved == false){
                res.send("no match");
            }else{
                res.json(fromResolved);                
            }
        });

    });
}