function filterProdutos() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let produtos = document.getElementsByClassName('produtos');
    for (let i = 0; i < produtos.length; i++) {
        let nome = produtos[i].getElementsByTagName('h3')[0];
        if (nome.innerHTML.toUpperCase().indexOf(input) > -1) {
            produtos[i].style.display = '';
        } else {
            produtos[i].style.display = 'none';
        }
    }
}