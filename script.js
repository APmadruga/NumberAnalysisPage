let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } 
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1){
        return true
    } 
    else {
        return false 
    }
}

function adicionar() {
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement("option")
        item.text = `Value ${Number(num.value)} added.`
        lista.appendChild(item) 
        //para apagar as respostas toda a vez que adicionar um numer 
        res.innerHTML = ''
    } 
    else {
        window.alert('Invalid value or this Number is already in List.')
    }
    // apagar o numero após adicionar
    num.value = ''
    //para voltar a por o cursor na secção do numero sem utilizar o rato 
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Add Numbers to the analysis.')
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let média = 0
        for (i in valores){
            if (valores[i] > max){
                max = valores[i]
            }
            if (valores[i]< min){
                min = valores[i]
            }
            soma += valores[i]
        }
        média = soma / valores.length
        //apagar tudo antes quando tocar analisar para não repetir as respostas sempre que Clicar
        res.innerHTML = ''
        res.innerHTML += `<p>We have a total of <strong>${tot}</strong> numbers. </p>`
        res.innerHTML += `<p>The biggest number is <strong>${max}</strong>.</p>`
        res.innerHTML += `<p>The smallest number is <strong>${min}</strong>.</p>`
        res.innerHTML += `<p>The sum of all numbers is <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>The mathematical average of the numbers is <strong>${média}</strong>.</p>`
    }
} 
