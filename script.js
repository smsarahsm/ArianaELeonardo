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
