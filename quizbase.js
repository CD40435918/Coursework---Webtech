function contactFunction(){
	alert('CONTACT INFORMATION: 01234 56789      Email: quizbaseHQ@gmail.com');
}

function devAlert(){
	alert('This is an example link to a quiz, please find the first link for a working quiz');
}

function visitHome() {
	window.location.href='HomePage.html';
}

function visitDashboard() {
	window.location.href='dashboard.html';
}

function visitLogin() {
	window.location.href='login.html';
}

function visitHowTo() {
	window.location.href='HowTo.html';
}

function visitQB() {
	window.location.href='QB.html';
}

function visitDemo() {
	window.location.href='demoQuiz.html';
}

function wrongAnswer() {
	alert('WRONG - please try again');
}

function correctAnswer1() {
	window.location.href='demoQ2.html';
}

function correctAnswer2() {
	window.location.href='demoQ3.html';
}

function finishDemo() {
	alert('CONGRATS - 3 out of 3!');
}

function demoDashQuiz() {
	window.location.href='DashboardDemoQuiz.html';
}


const questions = [
	{
		id:1,
		question: "Who is Michael Jordan?",
		answers: [
			{text: "Basketballer", isTrue: true},
			{text: "Footballer", isTrue: false},
			{text: "magician", isTrue: false},
			{text: "F1 driver", isTrue: false}
		]
	},
	{
		id:2,
		question: "Who is Tom Brady?",
		answers: [
			{a: "Basketballer", isTrue: false},
			{b: "American Footballer", isTrue: true},
			{c: "PLumber", isTrue: false},
			{d: "Footballer", isTrue: false}
		]
	},
	{
		id: 3,
		question: "Who won the 2021 Euros?",
		answers: [
			{a: "Germany", isTrue: false},
			{b: "Spain", isTrue: false},
			{c: "England", isTrue: false},
			{d: "Italy", isTrue: true}
		]
	},
	{
		id: 4,
		question: "How many points is a try in Rugby",
		answers: [
			{a: "5", isTrue: true},
			{b: "6", isTrue: false},
			{c: "7", isTrue: false},
			{d: "8", isTrue: false}
		]
	}
]
	
var quizStart = true;

function setQuestions(id) {
	
	
	//get question set
	const questions = document.getElementById("question");
	
	//set question from set
	question.innerText = questions[id].question;
	
	//sget question options from set
	const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
	
	//display options for questions
	b1.innerText = questions[id].answers[1].text;
    b2.innerText = questions[id].answers[2].text;
    b3.innerText = questions[id].answers[3].text;
    b4.innerText = questions[id].answers[4].text;
	
	b1.addEventListener("click", () => {
        selected = b1.value;
    })
	b2.addEventListener("click", () => {
        selected = b2.value;
    })
	b3.addEventListener("click", () => {
        selected = b3.value;
    })
	b4.addEventListener("click", () => {
        selected = b5.value;
    })
	
	const score = document.getElementsByClassName("Submit");
	//submit button needs implemented
	
	//commented out for error - fix
	/*score[0].addEventListener("click", () => {
		if (selected == "true") {
			alert('CORRECT');
		}else{
			alert('WRONG - please try again');
		}
	)
	*/
	
	
}