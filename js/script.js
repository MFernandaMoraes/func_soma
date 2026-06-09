function somar(){

    let a = Number(document.getElementById('input1').value);
    let b = Number(document.getElementById('input2').value);
    
    const result = a + b;
    
    console.log(result);

    document.getElementById('resultado').innerText = result;
}