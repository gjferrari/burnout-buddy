async function newActivity (event) {
    event.preventDefault(); 

const category_name = document.querySelector('#category_name').value.trim();
const product_name = document.querySelector('#product_name').value.trim();
const product_link = document.querySelector('#product_link').value.trim();
const product_content = document.querySelector('#product_content').value.trim();

// if they have answered the time question, then it should randomize an activity based on 
// the time that was chosen....remember method: 'POST', body: , headers: ,
if (category_name && product_name && product_content && product_link) {
    const response = await fetch(`/api/productRoutes`, {
      method: 'POST',
      body: JSON.stringify({ category_name, product_name, product_content, product_link}),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
        document.location.replace('/activity');
      } else {
        alert('Failed to create project');
      }
}
}

console.log(newActivity);
// console.log(window.location);


async function fetchCategories() {
  const response = await fetch('/api/categoryRoutes');
  const data = await response.json();
  console.log(data)
  const activityPageEl = document.querySelector('#activityPage');
  let allCards = ``;
  for(let i = 0; i < data.length; i++){

    const randomIndex = Math.floor(Math.random() * data[i].products.length)
    // get time_id from query
    // iterating over products that in a specific category
    // comparing time_id of a product if it is the same as we have(time_id)
    // if it is true, take the product
    // if not, access next product and comparing again 

    allCards = allCards + `
    <div class="col-sm-4" id="activities">
      <div class="card text-center" style="border-color: rgba(21,34,54);">
        <div class="card-header" id="category_name"
        style="background-color: rgba(185,203,217); 
        color: rgba(21,34,54); 
        font-family:Georgia, 'Times New Roman', Times, serif;
        border-color: rgba(21,34,54);">
          ${data[i].category_name}
        </div>
      <div class="card-body" style="color:rgba(21,34,54); font-family:Georgia, 'Times New Roman', Times, serif;">
        <h5 class="card-title" id="product_name">${data[i].products[randomIndex].product_name}</h5>
        <p class="card-text" id="product_content">${data[i].products[randomIndex].product_content}</p>
        <a href='${data[i].products[randomIndex].product_link}'class="card-text" id="link" id="product_link">Learn more about this activity!</a>
        <a href="#" class="btn btn-primary" id="btn">Start Activity</a>
      </div>
      </div>
    </div>
    `
  }
  activityPageEl.innerHTML = allCards;
}
fetchCategories();
{}

// get_emoji: () => {
//     const randomNum = Math.random();

//     // Return a random emoji
//     if (randomNum > 0.7) {
//       return `<span for="img" aria-label="lightbulb">💡</span>`;
//     } else if (randomNum > 0.4) {
//       return `<span for="img" aria-label="laptop">💻</span>`;
//     } else {
//       return `<span for="img" aria-label="gear">⚙️</span>`;
//     }
//   },

