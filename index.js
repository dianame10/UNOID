

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
