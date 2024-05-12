bacNote = 
{
    regional: 0,
    national: 0,
    AnneeScolaire: 0,
    message: "",
    class: "",

    getNote: function () {
        return (Number(this.national) * 2 + Number(this.regional) + Number(this.AnneeScolaire)) / 4
    },
    ValidateResuts: function () {
        const total = this.getNote()

        if (total >= 10) {
            this.class = "success";
            this.message = "Mabroooook jebty : " + total
        }

        else if (total < 10 && total > 7) {
            this.class = "inbetween";
            this.message = "3ndk ratrappage jbti : " + total + " zgueltih b : " + (10 - total)
        }

        else {
            this.class = "fail";
            this.message = "7lawet lbac 3years  jbti ghir : " + total
        }

    }
}

function calculatBac() {
    let resulteDiv = document.getElementById("Resulte")

    bacNote.national = document.getElementById("National").value
    bacNote.regional = document.getElementById("Regional").value
    bacNote.AnneeScolaire = document.getElementById("anneeScolaire").value

    bacNote.ValidateResuts()

    resulteDiv.innerText = bacNote.message
    resulteDiv.classList.remove("success", "inbetween", "fail")
    resulteDiv.classList.add(bacNote.class)
}
