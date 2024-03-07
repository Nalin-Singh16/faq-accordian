const allQuestions = document.getElementsByTagName('section')

for (let question of allQuestions) {

    question.addEventListener('click', () => {
        if (question.children[1].style.display === 'none') {
            question.children[1].style.display = 'block';
            question.children[0].children[1].src = './assets/images/icon-minus.svg'
        } else {
            question.children[1].style.display = 'none';
            question.children[0].children[1].src = './assets/images/icon-plus.svg'
        }

    })
}
