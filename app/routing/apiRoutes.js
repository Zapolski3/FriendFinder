//get data friend
var friendsData = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

    //update to the api friends
    app.get("/api/survey", function (req, res) {
        res.json(friendsData);

    });

   app.get("/results", (req, res) => {
        res.json(friends);
    });

    app.get("/matches", (req, res) => {
        res.json(friends);
    });
//==================================================================
 
    //get users content
    app.post("/api/survey", function (req, res) {
       
// = = = = == = = = = == = = = == = = == = = = == = = = = = == = = = = 

   var a = req.body.scores;
   var tested = [];
   var bestMatch = 20;

for (i = 0; i < friendsData.length; i++){
    var b = friendsData[i].scores;
    var name = friendsData[i].name;
    var photo = friendsData[i].photo;

    // console.log(url);

    var x = a.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - b[index]);
      })

    //   console.log(x +" "+ "this is a difference with"+" "+ name);
      var sum = x.reduce(function(a, b) { return a + b; }, 0);
    //   console.log(""+" "+ sum);
      var results = new evaluatedResults(name, sum, photo);
      
      tested.push(results);
    //   console.log(results.name);
}
// console.log(tested);
for (i = 0; i < tested.length; i++){
    var c = tested[i].compatibility;
    if (tested[i].compatibility <= c){
      c = tested[i].compatibility;
      console.log(c)
        
    };

}




function evaluatedResults (name, compatibility, photo){
    this.name = name;
    this.compatibility = compatibility;
    this.photo = photo;
}

// -- - - - -- - - - - - -- - - - - -- - - - - -- - - -- - - 


        //push new user to the friend database
       friendsData.push(req.body);
        // console.log(friendsData);
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