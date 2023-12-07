function calcular(operacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    let result = document.getElementById('result')
    let resultado = 0

    switch (operacao) {
        case 'soma':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel com apenas 1 digito'
            }else{
                resultado = numero1+numero2
                result.textContent = `${numero1} + ${numero2} é igual a: ${resultado}`;
            } break
        case 'sub':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel com apenas 1 digito'
            }else{
                resultado = numero1-numero2
                result.textContent = `${numero1} - ${numero2} é igual a: ${resultado}`;
            }break
        case 'mult':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel com apenas 1 digito'
            }else{
                resultado = numero1*numero2
                result.textContent = `${numero1} x ${numero2} é igual a: ${resultado}`;
            }
            break
        case 'divi':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel com apenas 1 digito'
            }else{
                resultado = numero1/numero2
                result.textContent = `${numero1} ÷ ${numero2} é igual a: ${resultado}`;
            } break
        case 'porcent':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel com apenas 1 digito'
            }else{
                resultado = (numero1/100)*numero2
                result.textContent = `${numero1}% de ${numero2} é igual a: ${resultado}`;
            }
    } 
}