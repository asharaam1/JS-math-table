var number = document.querySelector("#number")
var values = document.querySelector(".values")

function tableNum() {
    values.innerHTML = '';
    for(var i=1; i<11; i++){
        var ans = number.value;
        values.innerHTML +=` ${ans} x  ${i}  = ${ans *  i} <br/> `;

    }
    
    

}