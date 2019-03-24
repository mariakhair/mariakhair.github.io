let imageContainer = document.getElementById("image-container");
let buttons = document.getElementById("button-container");
const apiKey = "IvMgFRbKK9s3I4vlIXK1WdYsG8kQkadAcx7NhspEIDWW5ZEWT5";
let winState = document.getElementById("win-state")

let resetButton = document.getElementById("resetGame")


function startGame(){

    imageContainer.innerHTML = '';
    buttons.innerHTML = '';
    winState.innerHTML = '';

    let tagName = ['Pavlova','Apple','Cat','Noodles'];

let randomTag = tagName[Math.floor(Math.random() * tagName.length)];

tagName.forEach(tag => {
  let button = document.createElement('Button');
  button.innerHTML = tag;
  button.classList.add('btn');
  button.classList.add('btn-info')
  button.classList.add('mr-3')
  buttons.appendChild(button);
});

console.log(randomTag);

fetch(`https://api.tumblr.com/v2/tagged?tag=${randomTag}&api_key=${apiKey}`)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  data.response.forEach(function(post) {
  if (post.photos) {
      post.photos.forEach(function(photo) {
      let image = document.createElement("img");
      let photoUrl = photo.original_size.url;

      image.src = photoUrl;
      image.style.width = "300px";
      image.style.height = "300px";

      imageContainer.appendChild(image);
      });
  }
  });
});

 buttons.onclick = function (event){
            console.log(event.target.innerHTML);
            if (event.target.innerHTML === randomTag) {
                let winHeading = document.createElement('h1');
                winHeading.innerHTML = 'YOU WON!';
                if(winState.innerHTML != '<h1>YOU WON!</h1>'){
                    winState.appendChild(winHeading);
                }
            } else {
                let winHeading = document.createElement('h1');
                winHeading.innerHTML = 'YOU LOST!';
                if(winState.innerHTML != '<h1>YOU LOST!</h1>'){
                    winState.appendChild(winHeading);
                }
            }
        }
    }

    //Start Game
    startGame();

    //Shuffle array and return shuffled array
    function Shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    //Restart Game
    resetButton.onclick = function() {
        startGame();
    }