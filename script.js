const taxaBRL = 1.0
const taxaUSD = 5.50
const taxaEUR = 6.50
const taxaGBP = 7.50

function convertMoedas(tipoMoeda) {
    const symbolCoin = document.getElementById("symbolCoin")
    let symbol = ''
    let taxa = 0

    switch (tipoMoeda) {
        case 'BRL':
            symbol = 'R$: '
            taxa = taxaBRL
            break
        case 'USD':
            symbol = '$: '
            taxa = taxaUSD
            break
        case 'EUR':
            symbol = '€: '
            taxa = taxaEUR
            break
        case 'GBP':
            symbol = '£: '
            taxa = taxaGBP
            break
    }

    symbolCoin.innerHTML = symbol
    valor = taxa
}

function moedasConversao(moedaPara) {
    const valorParaConversao = parseFloat(document.getElementById('valSerConvert').value)

    if (isNaN(valorParaConversao)) {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos."
        return
    }

    let symbol = ''
    let taxa = 0

    switch (moedaPara) {
        case 'BRL':
            symbol = 'R$: '
            taxa = taxaBRL
            break
        case 'USD':
            symbol = '$: '
            taxa = taxaUSD
            break
        case 'EUR':
            symbol = '€: '
            taxa = taxaEUR
            break
        case 'GBP':
            symbol = '£: '
            taxa = taxaGBP
            break
    }

    const valorConvertido = (valorParaConversao / taxa * valor).toFixed(2)
    const resultado = `O resultado da conversão é: ${valorConvertido}${symbol}`
    document.getElementById("result").innerHTML = resultado
    console.log(valorConvertido)
}
