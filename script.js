document.addEventListener('DOMContentLoaded', function () {
    // URL do seu arquivo CSV no GitHub
    var githubUser = 'MISPerA';
    var githubRepo = 'msg';
    var githubPath = 'Cartas Para Missionários - Cartas.csv';
    var csvUrl = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/main/${githubPath}`;

    // Obtém as mensagens do arquivo CSV
    function getMessages() {
        return new Promise(function (resolve, reject) {
            Papa.parse(csvUrl, {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (result) {
                    if (result.errors.length > 0) {
                        reject(result.errors);
                    } else {
                        resolve(result.data.map(row => row.Mensagens).filter(msg => msg !== undefined));
                    }
                }
            });
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

        // Obtém as mensagens do arquivo CSV e atualiza a página
        getMessages().then(function (messages) {
            var randomMessage = getRandomMessage(messages);
            randomMessageElement.innerHTML = randomMessage || 'Nenhuma mensagem disponível.';
            console.log('Mensagem atualizada:', randomMessage);
        }).catch(function (error) {
            console.error('Erro ao obter mensagens do arquivo CSV:', error);
        });
    }

    // Chama a função ao carregar a página
    updateMessage();
});

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundAudio');
    var hasUserInteracted = false;

    // Adiciona um ouvinte de toque para indicar interação do usuário
    document.addEventListener('touchstart', function () {
        if (!hasUserInteracted) {
            audio.play();
            hasUserInteracted = true;
        }
    });

    // Adiciona um ouvinte de clique do mouse para indicar interação do usuário
    document.addEventListener('click', function () {
        if (!hasUserInteracted) {
            audio.play();
            hasUserInteracted = true;
        }
    });

    // Se o usuário ainda não interagiu após um tempo, tenta iniciar a reprodução
    setTimeout(function () {
        if (!hasUserInteracted) {
            audio.play();
            hasUserInteracted = true;
        }
    }, 5000); // Atraso de 5 segundos
});
