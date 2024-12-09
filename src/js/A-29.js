const A29 = document.querySelectorAll('.A-29');
const setaVoltarA29 = document.getElementById('A-29-voltar');
const setaAvançarA29 = document.getElementById('A-29-avançar');

let A29Atual = 0;

function mostrarA29() {
    A29[A29Atual].classList.add('mostrarA-29');
}

setaAvançarA29.addEventListener('click', () => {
    if (A29Atual === A29.length - 1) {
        return;
    }

    A29Atual++ ;

    mostrarA29();
    esconderA29();
})

setaVoltarA29.addEventListener('click', () => {
    if (A29Atual === 0) {
        return;
    }

    A29Atual-- ;

    esconderA29();
    mostrarA29();
})

function esconderA29(){
    const A29Avista = document.querySelector('.mostrarA-29');
    A29Avista.classList.remove('mostrarA-29');
}