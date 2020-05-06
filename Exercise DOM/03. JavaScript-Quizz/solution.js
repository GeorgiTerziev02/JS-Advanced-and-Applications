function solve() {

  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let result = document.querySelector('.results-inner h1');

  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userScore = 0;
  let currentStep = 0;
  let handler = (e) => {
    if (e.target.className === 'answer-text') {
      let isAnswerCorrect = correctAnswers.includes(e.target.innerHTML);

      sections[currentStep].style.display = 'none';
      if (isAnswerCorrect) {
        userScore++;
        console.log(userScore);
      }
      currentStep++;

      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = 'block';
      }

      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', handler);
        if (userScore === correctAnswers.length) {
          result.innerHTML = 'You are recognized as top JavaScript fan!';
        }
        else {
          result.innerHTML = `You have ${userScore} right answers`;
        }
        document.querySelector('#results').style.display = 'block';
      }
    }
  }
  
  quizzie.addEventListener('click', handler);
}
