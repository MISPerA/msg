document.addEventListener('DOMContentLoaded', function () {
    // URL da sua planilha
    var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1tOocVgAMV_M28jMX-_gQ0pWUwFOZUaV_RdhBJbjDKqk/edit?usp=sharing';

    // Obtém as mensagens da planilha
    function getMessages() {
        return axios.get(spreadsheetUrl)
            .then(function (response) {
                var rows = response.data.feed.entry;
                var messages = rows.map(function (row) {
                    return row.gsx$mensagem.$t;
                });
                return messages;
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
