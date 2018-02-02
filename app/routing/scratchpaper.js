var masterArray = [[1, 2, 3, 4, 1], [2, 3, 5, 2, 1]];


function reducer (accumulator, currentValue) {
	return accumulator + currentValue
	}

// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));

var secondArray = [];


for (var i = 0; i < masterArray.length; i++){
	secondArray.push(masterArray[i].reduce(reducer));
}

console.log(secondArray);

console.log(Math.min.apply(null, secondArray));

var match = Math.min.apply(null, secondArray);

console.log(secondArray.indexOf(match));




for (let i = 0; i < friendsData.length; i++) {

                    var matchScore = [];

                    for (let y = 0; y < newFriend.scores.length; y++) {
                        matchScore.push(Math.abs(newFriend.scores[y] - friendsData[i].scores[y]));

                    }

                    totalMatches.push(matchScore)
                }

                console.log(totalMatches);

                var chosenFriendArray = [];

                for (let z = 0; z < totalMatches.length; z++) {
                    chosenFriendArray.push(totalMatches[z].reduce(reducer));
                }

                var matchedFriendIndex = Math.min.apply(null, chosenFriendArray);

                var friendsDataIndex = chosenFriendArray.indexOf(matchedFriendIndex);



                res.json(friendsData[friendsDataIndex]);