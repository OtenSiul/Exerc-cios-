function meuEscopo () {
    const form = document.querySelector('.form');
    const resultadosDiv = document.querySelector('.resultados');
    
    const pessoas = []; //Fica vazio por que vai ser preenchido. Array aqui. 
    
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const novaPessoa = { //Esse é o bjeto que tem que ser adcionado ao array.
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        };

        pessoas.push(novaPessoa); //Isso aqui adcionar o objeto dentro do array. 

        resultadosDiv.innerHTML = `<h2>Resultado:</h2>` //Atualizando a DIV resultado. 

        pessoas.forEach(pessoa => {
            resultadosDiv.innerHTML += `<br><p><strong>Nome:</strong> ${pessoa.nome}</p>
            <br><p><strong>Sobrenome:</strong> ${pessoa.sobrenome}</p>
            <br><p><strong>Peso:</strong> ${pessoa.peso}</p>
            <br><p><strong>Altura:</strong> ${pessoa.altura}</p><hr />`;

            
        });



    };

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo ();
