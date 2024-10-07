// Seleciona o input de busca
const searchInput = document.getElementById('campoBusca');

// Quando o usuário interagir com o input, esta função será executada
searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value); // Armazena e formata o valor do input
    const items = document.querySelectorAll('.container .produtos'); // Seleciona todos os itens
    const noResults = document.getElementById('#no_results'); // Seleciona o elemento da mensagem "nenhum resultado"
    let hasResults = false; // Indica se há resultados correspondentes

    // Se existir valor no input
    if (value !== '') {
        items.forEach(produtos => {
            const itemTitle = produtos.querySelector('.titulo_anuncio').textContent; // Obtém o texto do título do item
            const itemDescription = produtos.querySelector('.preco').textContent; // Obtém o texto da descrição do item

            // Se o valor digitado está contido nesse texto
            if (formatString(itemTitle).indexOf(value) !== -1
                || formatString(itemDescription).indexOf(value) !== -1
            ) {
                // Exibe o item
                produtos.style.display = 'flexbox';

                // Indica que existem resultados
                hasResults = true;
            } else {
                // Oculta o item
                produtos.style.display = 'none';
            }
        });

        // Exibe ou oculta a mensagem "nenhum resultado"
        if (hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'flex';
        }

    } else {
        // Sempre exibe todos os itens quando o input está vazio
        items.forEach(produtos => produtos.style.display = 'block');
        noResults.style.display = 'none'; // Oculta a mensagem "nenhum resultado"
    }
});

// Função para formatar strings: remove espaços em branco, transforma em lowercase e remove acentos
function formatString(value) {
    return value
        .trim() // Remove espaços em branco
        .toLowerCase() // Transforma em lowercase
        .normalize('NFD') // Normaliza para separar os acentos
        .replace(/[\u0300-\u036f]/g, ''); // Remove os acentos
}