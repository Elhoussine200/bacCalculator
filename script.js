function calculatBac() {
    let national = document.getElementById("National").value
    let Regional = document.getElementById("Regional").value
    let AnneeScolaire = document.getElementById("anneeScolaire").value
    let resulteDiv = document.getElementById("Resulte")
    const total = (Number(national) * 2 + Number(Regional) + Number(AnneeScolaire))/4
    
    const message = isSuccess(total).msg
    const classValue=isSuccess(total).class
    
        resulteDiv.innerText = message
        resulteDiv.classList.remove("success","inbetween","fail")
        resulteDiv.classList.add(classValue)
 }

 function isSuccess(value){
let respons={
    msg:"",
    class:""
}
    if(value>=10) {
        respons.msg="Mabroooook jebty : "+ value
        respons.class="success"
    }
    else if(value< 10 && value > 7) {
        respons.msg=" 3ndk ratrappage jbti : " + value+ " zgueltih b : " + (10 - value)
        respons.class="inbetween"
    }
    else{
        respons.msg= ("7lawet lbac 3years  jbti ghir : "+ value)
        respons.class="fail"

    }

    
    return respons
 }

 testing=()=>{
    
 }