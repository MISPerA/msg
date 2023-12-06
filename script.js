document.addEventListener('DOMContentLoaded', function () {
    // ID da planilha do Google Sheets
    var spreadsheetId = '1tOocVgAMV_M28jMX-_gQ0pWUwFOZUaV_RdhBJbjDKqk';

    // ID da folha da planilha
    var sheetId = '1611553868';

    // Chave de API
    var apiKey = 'AIzaSyAd5Ta1t2ELy0QDp4Adc7-7gB6FptqsMZ0';

    // Número da coluna que você deseja usar (1 para a primeira coluna, 2 para a segunda, e assim por diante)
    var columnNumber = 1;

    // Obtém todas as linhas preenchidas da coluna desejada
    function getFilledRows() {
        return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetId}?majorDimension=COLUMNS&key=${apiKey}`)
            .then(function (response) {
                var values = response.data.values;
                console.log('Valores obtidos:', values);
                var column = values && values.length >= columnNumber ? values[columnNumber - 1] : [];
                console.log('Coluna desejada:', column);
                // Filtra as células não vazias
                var filledRows = column.filter(function (value) {
                    return value.trim() !== '';
                });
                console.log('Linhas preenchidas:', filledRows);
                return filledRows;
            })
            .catch(function (error) {
                console.error('Erro ao obter dados da planilha', error);
                throw error;
            });
    }

    // Seleciona aleatoriamente uma linha preenchida
    function getRandomRow(rows) {
        var randomIndex = Math.floor(Math.random() * rows.length);
        return rows[randomIndex];
    }

    // Atualiza a mensagem na página
    function updateMessage() {
        getFilledRows().then(function (filledRows) {
            var randomMessageElement = document.getElementById('randomMessage');
            var randomRow = getRandomRow(filledRows);
            randomMessageElement.innerHTML = randomRow || 'Nenhuma mensagem disponível.';
            console.log('Mensagem atualizada:', randomMessageElement.innerHTML);
        }).catch(function (error) {
            console.error('Erro ao atualizar a mensagem', error);
        });
    }

    // Chama a função ao carregar a página
    updateMessage();
});
