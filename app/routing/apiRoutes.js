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

        // var newFriend = {
        // 	name: req.body.name,
        // 	photo: req.body.photo
        // 	// scores: req.body.scores[]
        // }

        // console.log(newFriend);


        // Empty array for the to push 
        var totalMatches = [];

        function reducer(accumulator, currentValue) {
            return accumulator + currentValue
        }




        	// FROM HERE
        

        // let friendPromise = new Promise(function(resolve, reject) {

        // 	for (let i = 0; i < friendsData.length; i++) {

        //             var matchScore = [];

        //             for (let y = 0; y < newFriend.scores.length; y++) {
        //                 matchScore.push(Math.abs(newFriend.scores[y] - friendsData[i].scores[y]));

        //             }

        //             totalMatches.push(matchScore)
        //         }

        //         console.log(totalMatches);

        //         var chosenFriendArray = [];

        //         for (let z = 0; z < totalMatches.length; z++) {
        //             chosenFriendArray.push(totalMatches[z].reduce(reducer));
        //         }

        //         var matchedFriendIndex = Math.min.apply(null, chosenFriendArray);

        //         var friendsDataIndex = chosenFriendArray.indexOf(matchedFriendIndex);



        //         res.json(friendsData[friendsDataIndex]);

        //         let foundFriend = true;

        //         if (foundFriend){
        //         	resolve("You got a friend in me");
        //         }
        //         else {
        //         	reject();
        //         }

        // });


        // friendPromise.then(function(fromResolved){
        // 	console.log(fromResolved);
        // 	friendsData.push(newFriend);

        // });




        // TO HERE


        

                

                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    success: true
                }));

            


        


      

        

        



    });
}