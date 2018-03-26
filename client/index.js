
/*
Your Tasks:

1. If there is a front end route, render the appropriate data.
We have routes on the backend that will send us array of data containing
the appropriate cute animals! If there is a front end route, we should send a
GET request using AJAX to request those data from the Server. Then we can
call `renderView` to render the data to the page.
   a) /#dogs, render all the dogs!
   b) /#cats, render all the cats!
   c) /#dragons, render all the dragons!

2. When a user clicks one of the buttons (event listeners!!), we want to:
   a) Display the appropriate cute animals using `renderView`
   b) change the url to match!

*/

// ALL YOUR CODE HERE
import axios from 'axios';

console.log('my JS is running');

if (location.hash.length) {
  const frontEndHash = location.hash.slice(1);
  //'#dogs', '#dragons'...

  //route is 'dogs', 'dragons', or 'cats'

  axios.get(`/${frontEndHash}`)
  .then(res => renderView(res.data))
  .catch(console.error)


  // fetch(`/${frontEndHash}`)
  //   .then(response => response.json())
  //   .then(data => renderView(data))
  //   .catch(console.error);

}

['dragons', 'cats', 'dogs'].forEach(animal => {
  const button = document.getElementById(animal);
  button.addEventListener('click', () => {
    fetch(animal)
      .then(res => res.json())
      .then(renderView)
      .then(() => {
        location.hash = animal;
      })
      .catch(console.error);
  })
})

//the non-refactored version
// ['dragon', 'cat', 'dog'].forEach(animal => {
//   const button = document.getElementById(`${animal}-button`);
//   button.addEventListener('click', () => {
//     fetch(`/${animal}s`)
//       .then(res => res.json())
//       .then(renderView)
//       .then(() => {
//         location.hash = `${animal}s`;
//       })
//       .catch(console.error);
//   })
// })


;


//This function takes an array of animal objects, and renders them on the page.
//You don't need to change this function!

function renderView(arrOfData) {
  const view = document.getElementById('content');
  //remove anything in the content div if there is something
  if (view.firstChild) view.removeChild(view.firstChild);

  //create a new div
  const list = document.createElement('div');
  list.className = 'list'

  //run through the list of animals
  arrOfData.forEach(animal => {
    //create div for each
    const item = document.createElement('div');
    //set the innerHTML to include the animals name and image
    item.innerHTML = `<div class="item"><h2>${animal.name}</h2><img src=${animal.image} /></div>`
    //append the new div to the list
    list.appendChild(item);
  })
  //append the new list to the content div
  view.appendChild(list);
}
