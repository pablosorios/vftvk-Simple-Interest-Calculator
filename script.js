function convertString(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
}
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var results = 'If you deposit <mark>' + principal + '</mark>, <br> at an interest rate of <mark>' + rate + '%</mark>, <br> You will receive an amount of <mark>' + interest + '</mark>, <br> in the year <mark>' + year + '</mark>'
    if(principal <= 0) {
        alert('Enter a positive number')
        principal = document.getElementById("principal").focus()
    } else {
        document.getElementById("result").innerHTML=results
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}