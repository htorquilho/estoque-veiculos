function load(page) {
    // pega o conteúdo da variável page e coloca no HTML da tag main
    content.innerHTML = window[page]();
}