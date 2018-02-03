
var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
        console.log("hello");
    });

    app.post("/api/friends", function(req, res) {

    	// New friend object from survey.html ajax post
        // var newFriend = req.body;

        // console.log(newFriend);


        var tempFriend = req.body

        console.log(tempFriend);

        // console.log(tempFriend.friend)

        var newFriend = {
        	name: req.body.name,
        	photo: req.body.photo,
        	scores: req.body['scores[]']
        }
        newFriend.scores = newFriend.scores.map(function(score){
            return parseInt(score)
        })
           
           
        console.log(newFriend, "this is our newFriend");

        // Empty array for the to push 
        var totalMatches = [];

        function reducer(accumulator, currentValue) {
            return accumulator + currentValue
        }

        	// FROM HERE
        
        let friendPromise = new Promise(function(resolve, reject) {

        	for (let i = 0; i < friendsData.length; i++) {

                    var matchScore = [];

                    for (let y = 0; y < newFriend.scores.length; y++) {
                        //y is newfriend ////////i is friendData from friends.js
                        matchScore.push(Math.abs(newFriend.scores[y] - friendsData[i].scores[y]));
                    }
                    totalMatches.push(matchScore)
            }

                console.log(totalMatches, "this is our total matches");

                var chosenFriendArray = [];

                for (let z = 0; z < totalMatches.length; z++) {
                    chosenFriendArray.push(totalMatches[z].reduce(reducer));
                }

                var matchedFriendIndex = Math.min.apply(null, chosenFriendArray);
                console.log(matchedFriendIndex);
                var friendsDataIndex = chosenFriendArray.indexOf(matchedFriendIndex);
                console.log(friendsDataIndex);

                let foundFriend = true;
                
                if (friendsDataIndex != -1){
                    resolve(friendsData[friendsDataIndex]);
                }
                else {
                    reject(false);
                }
                
            });
            
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