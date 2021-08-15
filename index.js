// /*
//  * We are using jQuery functions as they are pretty easy to use.
//  * You can do all of this stuff using vanilla javascript though
//  */

// $(...) will run the function you give it when the page is loaded & ready
// $(document).ready(function(){
//   console.log("yes");
//     $('#nextButton').click(nextStep)
// });

$(function() {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");

  $("#nextButton").click(nextStep);
  /*
   * TODO: You will need to use a css selector to get jQuery to find the button element in the page
   * Then you will need to make a new javascript function to do stuff for when the button
   * is clicked and pass it into the click function above...
   * The function should call one of the functions below, and pass the other in as the callback...
   */
});
  /*
   * TODO: You will need to use a css selector to get jQuery to find the button element in the page
   * Then you will need to make a new javascript function to do stuff for when the button
   * is clicked and pass it into the click function above...
   * The function should call one of the functions below, and pass the other in as the callback...
   */

function nextStep() {
  console.log("its running");
  $(".response").text("Great!!");
  // $("#nextButton").click(nextStepLast);
  $("#nextButton").click = function () {
    location.href = "index2.html";
};
}

// function showMeAnAnimal() {
//   $("#results-area").text("Hi");
//   fetchRandomTriviaQuestion(displayQuestionAndAnswer);

// }

// function displayQuestionAndAnswer(question, answer) {
//   $("#results-area").text("True or false?");
//   $("#question-display").text(question);
//   $("#answer-display").text("Answer: " + answer);
// }

// // Gets a random animal trivia question from an API, then pass the result to the callback function
// function fetchRandomTriviaQuestion(callback) {
//   // This API gets random trvia questions
//   // The url includes parameters to configure the API to only return
//   // true or false trivia on animals encoded in base64

//   // Configure your own api call at https://opentdb.com/api_config.php
//   var promise = $.get("https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64");

//   // $.get is asynchronous, so we need to define a
//   // handler for when the request is complete
//   promise.done(function(data) {
//     // Check the console when you have the API call working in order
//     // to inspect the json object that we recieve
//     console.log(data);

//     // extract and decode the results
//     var results = data.results;

//     // atob() is a built in method to decode base64 encoded strings
//     var question = atob(results[0].question);
//     var answer = atob(results[0].correct_answer);

//     // call the function we passed into fetchRandomTriviaQuestion
//     callback(question, answer);
//   })
// }

var consumerKey="6F35705506E6589AE840EB1D55FB3AF3";

var consumerSecret="2E47FE08AAAA85D55C3C5A524A867CBA";

// Gets a random animal trivia question from an API, then pass the result to the callback function


// This is isn't declared as `async` because it already returns a promise
function delay() {
  // `delay` returns a promise
  return new Promise(function(resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function() {
      resolve(42); // After 3 seconds, resolve the promise with value 42
    }, 3000);
  });
}

async function getAllBooks() {
  try {
    // GET a list of book IDs of the current user
    // var bookIDs = await superagent.get('/user/books');
    // wait for 3 seconds (just for the sake of this example)
    // await delay();
    // GET information about each book
    // return await superagent.get('/books/ids='+JSON.stringify(bookIDs));
    return await $.ajax({
      url: "https://api.tmsandbox.co.nz/v1/Listings/2149299080.json",
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', `OAuth oauth_consumer_key=${consumerKey}, oauth_signature_method=PLAINTEXT, oauth_signature=${consumerSecret}%26`);},
      success: function() { console.log("success")}
  
   });
  } catch(error) {
    // If any of the awaited promises was rejected, this catch block
    // would catch the rejection reason
    return null;
  }
}

// Start an IIFE to use `await` at the top level
(async function(){
  let books = await getAllBooks();
  $("#IphonePrice").text(books.PriceDisplay)
  console.log(books.PriceDisplay);
})();
