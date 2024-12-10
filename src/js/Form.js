let dados = document.querySelectorAll('.dados');
const cadastrar = document.getElementById('cadastrar');
const bntCadastreSe = document.getElementById('Cadastre-se');
const formulário = document.getElementById('seção');
const bntfecharFormulário = document.getElementById('fechar')

console.log(bntfecharFormulário);

bntCadastreSe.addEventListener('click', () => abrirFormulário() )

function abrirFormulário() {
    if (bntCadastreSe){
        formulário.classList.remove('esconder');
    }
}

bntfecharFormulário.addEventListener('click', () => fecharFormulário() )

function fecharFormulário() {
    if (bntfecharFormulário) {
        formulário.classList.add('esconder')
    }
}

cadastrar.addEventListener('click', () => { 
    validação();
    // enviarFormulário(cadastrar , valido);
})

function validação() {
    dados.forEach((item) => {
        if (item.value === "") {
            item.classList.remove('ok')
            item.classList.add('obrigatório'); 
        } else {
            item.classList.add('ok');
            item.classList.remove('obrigatório');
        }
    })
}


/*
if (cadastrar){
    var valido = true;
}
let enviarFormulário = (cadastrar , valido) => {
    return new Promise((resolve, reject) => {
        if (cadastrar && valido) {
            alert('Cadastro realizado com sucesso.')
            resolve()
        } else {
            alert('É necessário preencher todos os campos!')
            reject()
        }
    })
}
*/