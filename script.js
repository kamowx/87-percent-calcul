function f1() {
     let a = parseFloat(document.getElementById('inp1').value);
     let b = parseFloat(document.getElementById('inp2').value);
     let sum = b * a / 100 ;
     document.getElementById('spn1').innerHTML = 'Result: ' + sum;
}
function f2() {
    let a = parseFloat(document.getElementById('inp3').value);
    let b = parseFloat(document.getElementById('inp4').value);
    let sum = a / b * 100 ;
    document.getElementById('spn2').innerHTML = 'Result: ' + sum;
}