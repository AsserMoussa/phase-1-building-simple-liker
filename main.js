// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'








// Your JavaScript code goes here!
const allhearts = document.querySelectorAll(".like-glyph")
console.log(allhearts);
allhearts.forEach(function(eachheart){
  eachheart.addEventListener("click", function(){
    mimicServerCall()
    .then(function(response){
      eachheart.classList.add("activated-heart");
      eachheart.innerHTML = FULL_HEART;
console.log(response);
    })
    .catch(function(error){
      console.log(error);
      const removeHidden = document.getElementById("modal");
      removeHidden.classList.remove("hidden");
      setTimeout(function(){
        removeHidden.classList.add("hidden");
      }, 3000)
    })
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
