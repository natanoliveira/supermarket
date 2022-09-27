function verPromocao() {

  var produto = document.getElementById('inProduto').value
  var preco = document.getElementById('inPreco').value
  var resultado = document.getElementById('outResultado')
  var desconto = 0.50
  var qtdDeProdutos = 3
  var soma, abatimentoDeUm, promocao, valorPromocao, produtoDescontado, valorSemDesconto

  // TORNANDO CAIXA ALTA PARA NORMALIZAÇÃO DE TEXTO
  produto = produto.toUpperCase()

  // SUBSTITUINDO A VÍRGULA CASO SEJA DIGITADA
  preco = preco.replace(',', '.')

  // CONVERTENDO PARA NUMERAL
  preco = Number(preco)

  // VALIDANDO A ENTRADA DE DADOS - PRODUTO
  if (produto == '') {
    alert('Preencha o PRODUTO!')
    produto.focus()
    return
  }

  // VALIDANDO A ENTRADA DE DADOS - PREÇO
  if (preco == '' || preco == 0 || isNaN(preco)) {
    alert('Preencha o PREÇO corretamente')
    preco.focus()
    return
  }

  // SOMA PARA TODOS OS PRODUTOS DE ACORDO COM O PARÂMETRO DE QUANTIDADE 
  // DE PRODUTOS RELACIONADOS À VENDA PROMOCIONAL
  soma = preco * qtdDeProdutos

  // OBTENDO ABATIMENTO SOMENTE DE UM PRODUTO
  abatimentoDeUm = preco * desconto

  // VALOR FINAL DA PROMOÇÃO PARA A QUANTIDADE DE PRODUTOS
  promocao = soma - abatimentoDeUm

  // FORMATANDO PARA CADAS DECIMAIS
  valorPromocao = promocao.toFixed(2)
  produtoDescontado = abatimentoDeUm.toFixed(2)
  valorSemDesconto = soma.toFixed(2)

  // SAÍDA INFORMATIVA
  // resultado.textContent = `${produto} - Promoção: Leve 3 e pague R$ ${valorPromocao}`
  // resultado.textContent += `Valor sem desconto R$: ${valorSemDesconto}`
  // resultado.textContent += `O 3&ordm; Produto custa apenas R$ ${produtoDescontado}`

  resultado.innerHTML = `<p>${produto}</p>`
  resultado.innerHTML += `<p>--</p>`
  resultado.innerHTML += `<p>Promoção: Leve 3 e pague R$ ${valorPromocao}</p>`
  resultado.innerHTML += `<p>Valor sem desconto R$: ${valorSemDesconto}</p>`
  resultado.innerHTML += `<p>O 3&ordm; Produto custa apenas R$ ${produtoDescontado}</p>`
}