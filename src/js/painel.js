    //  quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem

    // a imagem atual começa no 0, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    // para saber que agora eu vou mostrar a próxima imagem

    // esconder todas as imagens
    // pegar todas as imagens usando o Dom e remover a classe mostrar

    // mostrar a próxima imagem
    // pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
    


const imagensPainel = document.querySelectorAll('.imagem-painel');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

btnAvancar.addEventListener('click', function(){
    
    const totalDeImagens = imagensPainel.length - 1

    if(imagemAtual === totalDeImagens){
        return;
    }
    
    
    imagemAtual++;
    
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

btnVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        console.log('não tem mais como voltar');
        return;
    }

    imagemAtual--;

    // Esconder todas as imagens
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    // Mostrar a imagem anterior
    imagensPainel[imagemAtual].classList.add('mostrar');
});


 