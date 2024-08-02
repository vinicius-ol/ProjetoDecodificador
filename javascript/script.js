function criptografar() {
    let entradaDeTexto = document.querySelector('#input-texto').value;
 
    let resultadoCriptografia = entradaDeTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    exibirResultado(resultadoCriptografia);
}

function descriptografar() {
    let entradaDeTexto = document.querySelector('#input-texto').value;

    let resultadoDescriptografia = entradaDeTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    exibirResultado(resultadoDescriptografia);
}

function exibirResultado(resultado) {
    
    if (resultado.length === 0) {
        alert('Por favor, digite pelo menos um carácter.');
        return; 
    }

    let outputSection = document.querySelector('.output');
    outputSection.innerHTML = '';

    let textoResultado = document.createElement('h2');
    textoResultado.classList.add('texto-resultado');
    textoResultado.textContent = resultado;
    outputSection.appendChild(textoResultado);

    let lembrete = document.createElement('p');
    lembrete.textContent = 'Clique no texto para copiar';
    lembrete.classList.add('lembrete');
    outputSection.appendChild(lembrete);

    textoResultado.addEventListener('click', function() {
        copiarTexto(resultado);
    });
}

function copiarTexto(texto) {
    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Texto copiado para a área de transferência!');
}
