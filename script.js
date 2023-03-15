function confirmar() {

    var quest1 = document.getElementsByName('q1')
    var quest2 = document.getElementsByName('q2')
    var quest3 = document.getElementsByName('q3')
    var quest4 = document.getElementsByName('q4')
    var quest5 = document.getElementsByName('q5')
    var quest6 = document.getElementsByName('q6')

    var textf = document.querySelector('#text_res')

    if (quest1[1].checked) { // Pergunta 1

        var q1 = 1

    }
    else if (quest1[0].checked || quest1[2].checked || quest1[3].checked) {

        var q1 = 0

    }

    if (quest2[3].checked) { // Pergunta 2

        var q2 = 1

    }
    else if (quest2[0].checked || quest2[1].checked || quest2[2].checked) {

        var q2 = 0

    }

    if (quest3[2].checked) { // Pergunta 3

        var q3 = 1

    }
    else if (quest3[0].checked || quest3[1].checked || quest3[3].checked) {

        var q3 = 0

    }

    if (quest4[3].checked) { // Pergunta 4

        var q4 = 1

    }
    else if (quest4[0].checked || quest4[1].checked || quest4[2].checked) {

        var q4 = 0

    }

    if (quest5[2].checked) { // Pergunta 5

        var q5 = 1

    }
    else if (quest5[0].checked || quest5[1].checked || quest5[3].checked) {

        var q5 = 0

    }

    if (quest6[3].checked) { // Pergunta 6

        var q6 = 1

    }
    else if (quest6[0].checked || quest6[1].checked || quest6[2].checked) {

        var q6 = 0

    }

    var soma = q1 + q2 + q3 + q4 + q5 + q6

    switch (q1 & q2 & q3 & q4 & q5 & q6) {

        case 1:
            textf.innerHTML = `Você acertou ${soma}/6`
            break
        case 0:
            textf.innerHTML = `Você acertou ${soma}/6`
            break

    }

}