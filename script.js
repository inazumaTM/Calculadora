function calcular(operacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    let num1 = document.getElementById('numero1').value
    let num2 = document.getElementById('numero2').value
    let result = document.getElementById('result')
    let resultado = 0
    switch (operacao) {
        case 'soma':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }else{
                resultado = numero1+numero2
                result.textContent = `${stringReplace(numero1)} + ${stringReplace(numero2)} é igual a: ${stringReplace(resultado)}`;
            } break
//======================================================================================
        case 'sub':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }else{
                resultado = numero1-numero2
                result.textContent = `${stringReplace(numero1)} - ${stringReplace(numero2)} é igual a: ${stringReplace(resultado)}`;
            }break
//======================================================================================
        case 'mult':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }else{
                resultado = numero1*numero2
                result.textContent = `${stringReplace(numero1)} x ${stringReplace(numero2)} é igual a: ${stringReplace(resultado)}`;
            }break
//======================================================================================
        case 'divi':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }else{
                resultado = numero1/numero2
                result.textContent = `${stringReplace(numero1)} ÷ ${stringReplace(numero2)} é igual a: ${stringReplace(resultado)}`;
            } break
//======================================================================================
        case 'porcent':
            if(isNaN(numero1) || isNaN(numero2)){
                alert('insira dois digitos para essa operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }else{
                resultado = (numero1/100)*numero2
                result.textContent = `${stringReplace(numero1)}% de ${stringReplace(numero2)} é igual a: ${stringReplace(resultado)}`;
            } break
//======================================================================================
        case 'clear':
            result.textContent = 'Limpo'
            document.getElementById('numero1').value = null
            document.getElementById('numero2').value = null
            break
//======================================================================================
        case 'pot': 
        if(isNaN(numero1) || isNaN(numero2)){
            alert('insira dois digitos para essa operação')
            result.textContent = 'Impossivel realizar esta operaçao'
        }else{
            resultado = numero1**numero2
            result.textContent = `${stringReplace(numero1)} elevado a ${stringReplace(numero2)} é igual a ${stringReplace(resultado)}`
        }break
//======================================================================================
        case 'raiz':
            num1 == 0 ? num1 = '' : num1
            num2 == 0 ? num2 = '' : num2
            if(num1 != '' ^ num2 != '' ){
                if(num1 != ''){
                    resultado = Math.sqrt(numero1)
                    result.textContent = `A raiz quadrada de ${stringReplace(numero1)} é igual a ${stringReplace(resultado)}`
                }
                else{
                    resultado = Math.sqrt(numero2)
                    result.textContent = `A raiz quadrada de ${stringReplace(numero2)} é igual a ${stringReplace(resultado)}`
                }
            }else{
                alert('insira um digito para esta operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }break
//======================================================================================
        case 'fat':
            function fatorial(num){
                let num1 = num
                let resultado = 0
                for(let i = num1 - 1; i>1; i--){
                    num1 = num1 * i
                    resultado = num1
                }
                return resultado
            }
            num1 == 0 ? num1 = '' : num1
            num2 == 0 ? num2 = '' : num2
            if(num1 != '' ^ num2 != '' ){
                if(num1 != ''){
                    resultado = fatorial(Math.round(numero1))
                    result.textContent = `O fatorial de ${numero1.toFixed()} é igual a ${resultado}`
                }
                else{
                    resultado = fatorial(Math.round(numero2))
                    result.textContent = `O fatorial de ${numero2.toFixed()} é igual a ${resultado}`
                }
            }else{
                alert('insira um digito para esta operação')
                result.textContent = 'Impossivel realizar esta operaçao'
            }break
//======================================================================================
        case 'pi':
            result.textContent = `O valor de 'Pi' é ${stringReplace(Math.PI)}`
    }
    function stringReplace(param){
        return param.toString().replace('.', ',')
    }
}