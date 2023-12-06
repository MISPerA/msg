document.addEventListener('DOMContentLoaded', function () {
    // Mensagens predefinidas
    var messages = [
        "Mensagem 1",
        "Mensagem 2",
        "Mensagem 3",
        // Adicione mais mensagens conforme necessário
    ];

    // Seleciona aleatoriamente uma mensagem
    function getRandomMessage() {
        var randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    // Atualiza a mensagem na página
    function updateMessage() {
        var randomMessageElement = document.getElementById('randomMessage');
        var randomMessage = getRandomMessage();
        randomMessageElement.innerHTML = randomMessage || 'Nenhuma mensagem disponível.';
        console.log('Mensagem atualizada:', randomMessage);
    }

    // Chama a função ao carregar a página
    updateMessage();
});
