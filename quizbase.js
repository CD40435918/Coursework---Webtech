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

function displayQuestion() {
	
}


const questions = [
	{
		id:1,
		question: "Who is Michael Jordan?",
		answers: {
			a: "Basketballer", TF: true,
			b: "Footballer", TF: false,
			c: "magician", TF: false,
			d: "F1 driver" TF: false,
		},
	},
	{
		id:2,
		question: "Who is Tom Brady?",
		answers: {
			a: "Basketballer", TF: false,
			b: "American Footballer", TF: true,
			c: "Plumber", TF: false,
			d: "Actor" TF: false,
		},
	},
	{
		id: 3,
		question: "Who won the 2021 Euros?",
		answers: {
			a: "Spain", TF: false,
			b: "France", TF: false,
			c: "England", TF: false,
			d: "Italy" TF: true,
		},
	},
	{
		id: 4,
		question: "How many points is a try in Rugby",
		answers: {
			a: '5', TF: true,
			b: '7', TF: false,
			c: '6', TF: false,
			d: '3' TF: false,
		},
		correct: 'a'
	},
]
	
var quizStart = true;

function setQuestions(id) {
	
	const questions = document.getElementById("question");
	
	question.innerText = questions[id].q;
	
	
	
	
	
	
	
}