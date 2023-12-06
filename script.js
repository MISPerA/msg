document.addEventListener('DOMContentLoaded', function () {
    // URL da sua planilha
    var spreadsheetUrl = 'COLOQUE_AQUI_O_URL_DA_SUA_PLANILHA';

    // Obtém as mensagens da planilha
    function getMessages() {
        return axios.get(spreadsheetUrl)
            .then(function (response) {
                // Verifica se a resposta e a entrada estão presentes
                if (response.data && response.data.feed && response.data.feed.entry) {
                    var rows = response.data.feed.entry;
                    var messages = rows.map(function (row) {
                        return row.gsx$mensagem ? row.gsx$mensagem.$t : null;
                    });
                    // Filtra mensagens nulas ou vazias
                    messages = messages.filter(function (message) {
                        return message !== null && message !== undefined && message.trim() !== '';
                    });
                    return messages;
                } else {
                    console.error('Resposta inesperada da API:', response);
                    return [];
                }
            })
            .catch(function (error) {
                console.error('Erro ao obter mensagens da planilha:', error);
                return [];
            });
    }

    // Seleciona aleatoriamente uma mensagem
    function getRandomMessage(messages) {
        var randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    // Atualiza a mensagem na página
    function updateMessage() {
        var randomMessageElement = document.getElementById('randomMessage');

        // Obtém as mensagens da planilha e atualiza a página
        getMessages().then(function (messages) {
            var randomMessage = getRandomMessage(messages);
            randomMessageElement.innerHTML = randomMessage || 'Nenhuma mensagem disponível.';
            console.log('Mensagem atualizada:', randomMessage);
        });
    }

    // Chama a função ao carregar a página
    updateMessage();
});
