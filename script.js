document.addEventListener("DOMContentLoaded", () => {
    const catImage = document.getElementById("catImage");
    const loadCatImageButton = document.getElementById("loadCatImage");

    // Substitua com sua chave de API se necessário
    const apiKey = "SUA_CHAVE_DE_API_AQUI"; // Caso precise de uma chave de API
    const apiUrl = "https://api.thecatapi.com/v1/images/search";

    const fetchCatImage = async () => {
        try {
            // Se precisar de autenticação, adicione a chave ao cabeçalho
            const response = await fetch(apiUrl, {
                headers: {
                    "x-api-key": apiKey, // Se necessário
                },
            });

            const data = await response.json();
            catImage.src = data[0].url; // Obtém a URL da imagem do gato
        } catch (error) {
            console.error("Erro ao buscar imagem da API", error);
        }
    };

    loadCatImageButton.addEventListener("click", fetchCatImage);

    // Carrega uma imagem inicial ao abrir a página
    fetchCatImage();
});
