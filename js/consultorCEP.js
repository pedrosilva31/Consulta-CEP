let Cep = document.querySelector('#Cep')
let Rua = document.querySelector('#Rua')
let Bairro = document.querySelector('#Bairro')
let Cidade = document.querySelector('#Cidade')
let Estado = document.querySelector('#Estado')

Cep.value = '01001000';

Cep.addEventListener('blur', function(e) {         
    let Cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+Cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
    
});
function popularForm(resposta){

    if('erro' in resposta){
        alert('CEP não encontrado')
        return;
    }
    Rua.value = resposta.logradouro;
    Bairro.value = resposta.bairro;
    Cidade.value = resposta.localidade;
    Estado.value = resposta.uf;
}