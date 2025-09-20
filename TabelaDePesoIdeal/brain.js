(() => {

    const form = document.querySelector('.dados');

    const altura = document.getElementById('altura');

    const peso = document.getElementById('peso');

    const result = document.querySelector('.result');

    const parseNum = v => parseFloat(String(v).replace(',', '.'));

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Você está abaixo do peso ideal!';

        if (imc < 25) return 'Você está no peso ideal para sua estatura !';

        if (imc < 30) return 'Você passou um pouco além do seu peso ideal, fica esperto !';

        if (imc < 35) return 'Você está com obesidade nível 1, recomendo que busque um nutricionista com apoio psicólogico !';

        if (imc < 40) return 'Você está em obesidade nível 2, aconselhamos que busque ajuda médica e psicólogica, para que não ocorra algum problema mais sério com você !';

        return 'Você está na obesidade grau 3, é de extrema importância que procure ajuda médica imediatamente!';
    };

    const validar = (alturaCm, pesoKg) => {
        const errs = [];
        if (!alturaCm || alturaCm < 50 || alturaCm > 250) errs.push('Sua altura deve ser entre 50 cm até no máximo 2 metros e 50 ! ');

        if (!pesoKg || pesoKg < 10 || pesoKg > 400) errs.push('Seu peso deve está entre 10Kg até no máximo 400Kg !')

        return errs;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const alturaCm = parseNum(altura.value);

        const pesoKg = parseNum(peso.value)

        const erros = validar(alturaCm, pesoKg);
        if (erros.length) {
            result.classList.add('erro');
            result.innerHTML = `<span style="color:#b00020">${erros.join(' ')}</span>`;
            return;
        }

        const altM = alturaCm / 100;
        const h2 = altM ** 2;
        const imc = pesoKg / h2;

        // faixa de peso “normal” (18.5–24.9)
        const idealMin = 18.5 * h2;
        const idealMax = 24.9 * h2;

        const dentro = pesoKg >= idealMin && pesoKg <= idealMax;
        const delta = dentro ? 0 : (pesoKg < idealMin ? (idealMin - pesoKg) : (pesoKg - idealMax));
        const sugestao = dentro
            ? 'Você já está na faixa de peso normal.'
            : `Para ficar na faixa normal, você precisaria ${pesoKg < idealMin ? 'ganhar' : 'perder'} ~${delta.toFixed(1)} kg.`;

        result.classList.remove('erro');
        result.innerHTML = `
      <strong>IMC:</strong> ${imc.toFixed(2)} — <strong>${classificarIMC(imc)}</strong><br>
      <strong>Peso normal (ideal):</strong> ${idealMin.toFixed(1)} kg a ${idealMax.toFixed(1)} kg.<br>
      ${sugestao}
    `;


    });

    form.addEventListener('reset', () => {
        outerHeight.textContent = '',
            setTimeout(() => altura.focus(), 0);

    });

})();