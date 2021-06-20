//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
function answerHistory(question, questionAnswer) {
    var answer = {};
    answer.question = question;
    answer.questionAnswer = questionAnswer;
    return answer;

}
var answers = [];


do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (event == 1) {

            answers.push(answerHistory(works.a00, works.a1));

        }
        else if (event == 2) {
            answers.push(answerHistory(works.a00, works.a2));

        }

    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if (event == 1) {
                    answers.push(answerHistory(works.b00, works.b1));
                }
                else if (event == 2) {
                    answers.push(answerHistory(works.b00, works.b2));
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            answers.push(answerHistory(works.d00, works.d1));
                        }
                        else if (event == 2) {
                            answers.push(answerHistory(works.d00, works.d2));
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if (event == 1) {
                    answers.push(answerHistory(works.c00, works.c1));;
                }
                else if (event == 2) {
                    answers.push(answerHistory(works.c00, works.c2));
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (event == 1) {
                            answers.push(answerHistory(works.d00, works.d1));
                        }
                        else if (event == 2) {
                            answers.push(answerHistory(works.d00, works.d2));
                        }

                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

alert('Спасибо за игру');
var userAnswer = +prompt('Номер вопроса');
alert(answers[userAnswer - 1].question + "\n" + answers[userAnswer - 1].questionAnswer);


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

