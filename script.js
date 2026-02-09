/* function copiarPix() {
    var content = document.getElementById('pix350');
                    content.select();                  
window.getSelection('copy')
        alert("Copied!");
        document.e
}
 */

async function copiarPix(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado para a área de transferência!');
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }

function copiarEmail() {
    const email = "arianacantina@gmail.com";
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copiado: " + email);
        }).catch(() => {
            copiarEmailFallback(email);
        });
    } else {
        copiarEmailFallback(email);
    }
}

function copiarEmailFallback(email) {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert("Email copiado: " + email);
    } catch (err) {
        alert("Não foi possível copiar. Email: " + email);
    }
    
    document.body.removeChild(textArea);
}

function selecionarEmail(event) {
    event.preventDefault();
    
    const emailElement = document.getElementById('emailPix');
    
    if (window.getSelection && document.createRange) {
        const range = document.createRange();
        range.selectNodeContents(emailElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        try {
            document.execCommand('copy');
            alert('Email copiado!');
        } catch (err) {
            // Apenas seleciona o texto para o usuário copiar manualmente
        }
    }
}
