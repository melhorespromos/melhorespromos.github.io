window.onload=function()
{
    function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++)
        {
            setTimeout(() => elemento.innerHTML += textoArray[i], 85 * i);
        }
    }
    var frase = document.querySelector('h1');
    typeWrite(frase)

}


