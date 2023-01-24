// const feelingQuizHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the login form
//     // const email = document.querySelector('#email-login').value.trim();
//     // const password = document.querySelector('#password-login').value.trim();
//     var feelingEl = document.getElementById('feelingbtn')

// //     feelingEl.addEventListener('click',function(event){
// //         var element = event.target
// //         if(element.matches(".card-text")){
// //           const name = element.textContent
// //         //   function callfeeling (name) {
// //         //     return name;
// //         // }
// //     }
// // })
//    const name = "my emotion test" 
  
//     if (name) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/quiz', {
//         method: 'POST',
//         body: JSON.stringify({ name}),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the homepage page
//         document.location.replace('/activity');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };


  
const feelingQuizHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#name-signup').value.trim();
    var element = event.target
    if(element.matches(".btn")){
    var name = element.textcontent
    
// //           const name = element.textContent
    document.location.replace('/home/' & name);
}
    if (name) {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/activity');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.feeling-form')
    .addEventListener('submit', feelingQuizHandler);