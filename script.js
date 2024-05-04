function calculatBac() {
    let national = document.getElementById("National").value
    let Regional = document.getElementById("Regional").value
    let AnneeScolaire = document.getElementById("anneeScolaire").value
    let resulteDiv = document.getElementById("Resulte")
    const total = (Number(national) * 2 + Number(Regional) + Number(AnneeScolaire))/4
    let message = ""
    classValue=""
    if (total >= 10) {
        message = "Mabroooook jebty : "+ total
        classValue="success"
    }

    else if (total < 10 && total > 7) {
        message = " 3ndk ratrappage jbti : " + total+ " zgueltih b : " + (10 - total)
        classValue="inbetween"
    }

    else {
        message = ("7lawet lbac 3years  jbti ghir : "+ total)
        classValue="fail"

    }

    resulteDiv.innerText = message
    resulteDiv.classList.remove("success","inbetween","fail")
    resulteDiv.classList.add(classValue)
}