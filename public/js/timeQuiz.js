// create li event listeners 
// create query

const timeQuiz = document.querySelector(".time_id");

// time variable
// const time

timeQuiz.addEventListener("click", function(event){
    var element = event.target;
    console.log(element)
    if(element.matches("li")) {
        console.log(element.dataset)
        var queryString = '/activity?time=' + element.dataset.timeId;

        location.assign(queryString);
    }

})