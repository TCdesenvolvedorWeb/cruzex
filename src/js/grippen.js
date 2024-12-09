const grippen = document.getElementsByClassName('grippen');
const setaVoltar = document.getElementById('grippen-voltar');
const setaAvançar = document.getElementById('grippen-avançar');

let grippenAtual = 0;

function mostrarGrippen() {
    grippen[grippenAtual].classList.add('mostrar');
    
}

setaAvançar.addEventListener('click', () => {
    if (grippenAtual === grippen.length - 1) {
        return;
    }

    grippenAtual++ ;

    mostrarGrippen();
    esconderGrippen();
})

setaVoltar.addEventListener('click', () => {
    if (grippenAtual === 0) {
        return;
    }

    grippenAtual-- ;

    esconderGrippen();
    mostrarGrippen();
})

function esconderGrippen() {
    const grippenAvista = document.querySelector('.mostrar');
    grippenAvista.classList.remove('mostrar');
}