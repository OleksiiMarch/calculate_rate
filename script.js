//Гірявенко Олексій Васильович 0504716006 martmarchmartmarch@gmail.com
window.onload = function () {
    let val = document.getElementById('val');
    let price = document.getElementById('price');
    let result = document.getElementsByClassName('calculate_result')[0];
    
    function summ() { 
    result.innerHTML = 'You can buy ' + (val.value/price.value).toFixed(5) + " BTC"; 
    }
            val.oninput = function () { 
                summ();
}
}

