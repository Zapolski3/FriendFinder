var friendsData = [{
        name: "Patrick Star",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png",
        scores: [3, 4, 3, 3, 4, 4, 4, 1, 5, 3]
    },
    {
        name: "Rick Pat",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjl7uKTh_jhAhVymuAKHVVCAJoQjRx6BAgBEAU&url=https%3A%2F%2Fyoutubepoop.fandom.com%2Fwiki%2FRick-Pat&psig=AOvVaw1RQ9M9CP97hEepVK7c8j9Z&ust=1556721875129801",
        scores: [4, 3, 2, 4, 3, 5, 2, 4, 2, 3]
    },
    {
        name: "Sandy Cheeks",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjK1bu9iPjhAhUwc98KHSrOADgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F419116309070491274%2F&psig=AOvVaw0w37yal1nWe7vTCnprD8p4&ust=1556722261093368",
        scores: [5, 4, 5, 4, 5, 3, 3, 3, 2, 4]
    },
    {
        name: "Pearl Krabs",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQiYf_iPjhAhVQdt8KHb05Cc0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-sandy-cheeks-mr-krabs-patrick-star-squidward-tenta-5493469%2F&psig=AOvVaw1mM6C0FEDUdsSw_XZe42X6&ust=1556722398301620",
        scores: [5, 4, 4, 4, 4, 3, 2, 1, 5, 5]
    },
    {
        name: "Squidward Tentacles",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwip-v--ifjhAhWFT98KHRwjBsgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.elitedaily.com%2Fentertainment%2Fsquidward-isnt-a-squid-video%2F955421&psig=AOvVaw3RAVqHVdJ6ctUNYt5J9n8M&ust=1556722531547983",
        scores: [4, 3, 2, 1, 5, 1, 2, 3, 4, 5]
    },
    {
        name: "Gary Snail",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGtaeQivjhAhVDmeAKHbj9CVEQjRx6BAgBEAU&url=http%3A%2F%2Fen.spongepedia.org%2Findex.php%3Ftitle%3DGary_the_Snail&psig=AOvVaw2kjDSjgpu9VBQtq_AdXRfh&ust=1556722703116284",
        scores: [5, 4, 3, 2, 1, 2, 3, 4, 5, 4]
    }
]

module.exports = friendsData;
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// var newPerson = {
//     name: "Pablo Escobar",
//     photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQiYf_iPjhAhVQdt8KHb05Cc0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-sandy-cheeks-mr-krabs-patrick-star-squidward-tenta-5493469%2F&psig=AOvVaw1mM6C0FEDUdsSw_XZe42X6&ust=1556722398301620",
//     scores: [5, 4, 4, 4, 4, 3, 2, 1, 5, 5]
// }

// var a = newPerson.scores;

// for (i = 0; i < friendsData.length; i++){
//     var b = friendsData[i].scores;
//     var name = friendsData[i].name;

//     // console.log(b +" "+ name);

//     var x = a.map(function(item, index) {
//         // In this case item correspond to currentValue of array a, 
//         // using index to get value from array b
//         return Math.abs(item - b[index]);
//       })

//     //   console.log(x +" "+ "this is a difference with"+" "+ name);
//       var sum = x.reduce(function(a, b) { return a + b; }, 0);
//     //   console.log(""+" "+ sum);
//       var results = new evaluatedResults(name, sum);
//       var tested = [];
//       tested.push(results);
//       console.log(tested);
// }

// function evaluatedResults (name, compatibility){
//     this.name = name;
//     this.compatibility = compatibility;
// }



 

// // // var x = a.map(function(item, index) {
// // //   // In this case item correspond to currentValue of array a, 
// // //   // using index to get value from array b
// // //   return item - b[index];
// // // })
// // console.log(x);