// Quando a página carregar
window.onload = function() {
    // Obter a imagem icone2
    var icone2 = document.getElementById('icone2');

    // Quando a imagem icone2 for clicada
    icone2.onclick = function() {
        // Exibir a mini janela
        document.getElementById('myModal').style.display = "block";
    }

    // Quando o usuário clicar em qualquer lugar fora da mini janela, feche-a
    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = "none";
        }
    }
}