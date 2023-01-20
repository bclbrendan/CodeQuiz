var questionTag = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var answers = document.getElementById('choices')

var endscreen = getElementById('end-screen')


console.log(testarray);
for (var i = 0; i < testarray.length; i++) {
    var ans = testarray[i];
    console.log(ans)
    var li = document.createElement("li");
    li.textContent = ans;
    answers.appendChild(li);
}
function displayQuestion(questionIndex){
//
//unhide question section
//render the first question in the array
//render choices
// if choiceclick and answer are equal
    //-unhide feedback
    //display next question
//if choice click and answer are not equal
    //-unhide feedback
    //display next question
}



