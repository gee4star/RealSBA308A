console.log("Hello")
document.getElementById('button').addEventListener('click', addInfo)
document.getElementById('status').addEventListener('click', generateCats)

async function getAllInfo(){
    await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
}

async function addInfo(){
const userInput = document.querySelector('input').value
await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: userInput,
    body: 'bar',
    userId: 2,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
document.getElementById('deletebutton').addEventListener('click', deleteInfo)

async function deleteInfo(){
    const userInput = document.getElementById('favAnimal').value
await fetch('https://jsonplaceholder.typicode.com/posts/2', {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

async function generateCats(){
    const userInput = document.getElementById('http').value
    await fetch(`https://http.cat/${userInput}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    mode: "no-cors", // no-cors, *cors, same-origin
})
const img = document.createElement("img");
img.src = `https://http.cat/${userInput}`;
// if (!img) {
    document.body.appendChild(img);
    
// }else{
//     document.body.replaceChild(img, img); 
// }
}
