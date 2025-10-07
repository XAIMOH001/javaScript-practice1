function getAverage(scores){
    let total = 0;
    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    let average = total / scores.length;
    return average;
}

function getGrade(score){
  let result = "";
  if (score === 100){
    result = "A+";
  }else if (score <= 99 && score >= 90){
    result = "A";
  }else if (score <= 89 && score >= 80){
    result = "B";
  }else if (score <= 79 && score >= 70){
    result = "C";
  }else if (score <= 69 && score >= 60){
    result = "D";
  }else if (score <= 59 && score >= 0){
    result = "F";
  }
  return result;
}



function hasPassingGrade (score){
  return getGrade(score) != "F";
}

function studentMsg(scores, score){
  if (getGrade(score) != "F"){
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }else{
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}


let scores = [90, 80, 70, 60, 50];
let studentScore = 59; 
console.log(studentMsg(scores, studentScore));
studentScore = 60;
console.log(studentMsg(scores, studentScore));
studentScore = 100;
console.log(studentMsg(scores, studentScore));
studentScore = 0;
console.log(studentMsg(scores, studentScore));

studentScore = 85;
console.log(studentMsg(scores, studentScore));
studentScore = 45;
console.log(studentMsg(scores, studentScore)); 