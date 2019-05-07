//get data friend
var friendsData = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    //update to the api friends
    app.get("/survey", function (req, res) {
        res.json();

    });

    app.get("/results", (req, res) => {
        res.json(friendsData);
    });

    app.get("/matches", (req, res) => {
        res.json(friendsData);
    });
    //==================================================================

    //get users content
    app.post("/api/survey", function (req, res) {
        // console.log(req);
        // = = = = == = = = = == = = = == = = == = = = == = = = = = == = = = = 

        var a = req.body.scores;
        var tested = [];
        var bestMatch;

        for (i = 0; i < friendsData.length; i++) {
            var b = friendsData[i].scores;
            var name = friendsData[i].name;
            var photo = friendsData[i].photo;

            // console.log(url);

            var x = a.map(function (item, index) {
                // In this case item correspond to currentValue of array a, 
                // using index to get value from array b
                return Math.abs(item - b[index]);
            })

            //   console.log(x +" "+ "this is a difference with"+" "+ name);
            var sum = x.reduce(function (a, b) { return a + b; }, 0);
            //   console.log(""+" "+ sum);
            var results = new evaluatedResults(name, sum, photo);

            // tested.push(results);
              console.log(results);
        }
        for (i = 0; i < results.length; i++) {
            var c = results[i].compatibility;
            if (results[i + 1].compatibility <= c) {
                bestMatch = results[i].compatibility;
                console.log("this is the best match" +" "+ bestMatch);

            };

        }




        function evaluatedResults(name, compatibility, photo) {
            this.name = name;
            this.compatibility = compatibility;
            this.photo = photo;
        }

        // -- - - - -- - - - - - -- - - - - -- - - - - -- - - -- - - 


        //push new user to the friend database
        friendsData.push(req.body);
        // console.log(friendsData);
        res.json(bestMatch);

        app.post("/api/results", function (req, res) {
            res.json(bestMatch);
            // console.log(bestMatch);
        });
    })



}



 //Store new user info
        // var newFriend = req.body;
        // //compare new user to friend database
        // for (let i = 0; i < friends.length; i++) {
        //     // test each user's score against newFriend.
        //     for (let j = 0; j < newFriend.scores.length; j++) {
        //         var difference = 0;
        //         var totalDifference = [];
        //         var match  = []
        //         difference = Math.abs(newFriend.scores - friends.scores[j]);


        //     }
        // }
        // res.json();