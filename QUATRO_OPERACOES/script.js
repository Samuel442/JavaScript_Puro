
function somaNum(numero1, numero2)
{
    var resultadoSoma = 0;
    var numero1 = parseInt(document.getElementById('campo1').value);
    var numero2 = parseInt(document.getElementById('campo2').value);
    resultadoSoma = numero1 + numero2;
    document.getElementById('soma').setAttribute("value", resultadoSoma);
}

function subtraiNum(numero1, numero2)
{
    var resultadoSubtracao = 0;
    var numero1 = parseInt(document.getElementById('campo1').value);
    var numero2 = parseInt(document.getElementById('campo2').value);
    resultadoSubtracao = numero1 - numero2;
    document.getElementById('subtracao').setAttribute("value", resultadoSubtracao);
}

function multiplicaNum(numero1, numero2)
{
    var resultadoProduto = 0;
    var numero1 = parseInt(document.getElementById('campo1').value);
    var numero2 = parseInt(document.getElementById('campo2').value);
    resultadoProduto = numero1 * numero2;
    document.getElementById('produto').setAttribute("value", resultadoProduto);
}

function divideNum(numero1, numero2)
{
    var resultadoDivisao = 0;
    var numero1 = parseInt(document.getElementById('campo1').value);
    var numero2 = parseInt(document.getElementById('campo2').value);
    resultadoDivisao = numero1 / numero2;
    document.getElementById('divisao').setAttribute("value", resultadoDivisao);
}

