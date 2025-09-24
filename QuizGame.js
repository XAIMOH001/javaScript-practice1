const questions = [
  {category: "personal",
  question: "what is my real name?",
  choices: ["Juma", "Simon", "Sam"],
  answer: "Simon"},

  {category: "school",
  question: "where is your school locatted?",
  choices: ["Narok", "Naks", "Msa"],
  answer: "Narok"},

  {category: "institutional",
  question: "which campus?",
  choices: ["MMARAU", "EGERTON", "KU"],
  answer: "MMARAU"},

  {category: "parents",
  question: "parents?",
  choices: ["Both", "single", "none"],
  answer: "Both"},

  {category: "residential",
  question: "where do you reside?",
  choices: ["K24", "GATED", "MAIN"],
  answer: "GATED"}
];

function getRandomQuestion(questions){
const randomIndex = Math.floor(Math.random() * questions.length);
return questions[randomIndex];
}
function getRandomComputerChoice(choices){
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
 function getResults(question, computerChoice){
   if(computerChoice === question.answer){
     return "The computer's choice is correct!"
   }else{
     return `The computer's choice is wrong. The correct answer is: ${question.answer}`
   }
 }


const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
const results = getResults(question, computerChoice);

console.log(`Category: ${question.category}`);
console.log(`Question: ${question.question}`);
console.log(`Choices: ${question.choices.join(", ")}`);
console.log(`Computer's Choice: ${computerChoice}`);
console.log(results);


