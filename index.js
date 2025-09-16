'use strict'

async function pesquisarCep(cep){
        const url = `https:viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url)
        const data = await response.json()
        return data

   }




async function preencherCampos ({target}) {

        const infoCep = await pesquisarCep(target.value)// target - alvo "onde aconteceu o alvo" evita a necessidade de chamar novamente o 'cep', dessa maneira a função fica dinamica, e eu posso usa-la para outros eventos
        document.getElementById('endereco').value = infoCep.logradouro
        document.getElementById('bairro').value = infoCep.bairro
        document.getElementById('cidade').value = infoCep.localidade
        document.getElementById('estado').value = infoCep.uf
        

   

   
}

document.getElementById('cep')
        .addEventListener('focusout' , preencherCampos)

