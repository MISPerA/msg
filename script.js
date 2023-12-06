/* styles.css */

body {
    font-family: 'Courier New', monospace;
    text-align: center;
    margin: 50px;
    background-color: #FEFEFE; /* Cor de fundo da carta */
}

.card {
    border: 2px solid #01BAD2; /* Cor da borda da carta */
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #FEFEFE; /* Cor de fundo da carta */
    transform-origin: top center;
    animation: openCardAnimation 1s ease-in-out;
}

.handwriting {
    font-family: 'Dancing Script', cursive;
    font-size: 24px; /* Tamanho da fonte aumentado para melhorar a legibilidade */
    line-height: 1.6;
    color: #000000; /* Cor do texto da carta */
}

.handwriting-animation::after {
    content: '|';
    display: inline-block;
    margin-left: 3px;
    font-size: 24px;
    animation: handwritingAnimation 2s steps(40, end) 1s forwards;
}

.instagram-text {
    font-family: 'Arial', sans-serif; /* Substitua pela fonte desejada */
    font-size: 20px; /* Tamanho da fonte */
    font-weight: bold; /* Negrito, se desejar */
    color: #4CAF50; /* Cor do texto */
}

.instagram-logo {
    font-size: 24px; /* Tamanho do ícone */
    margin-right: 5px; /* Espaçamento entre o ícone e o texto */
    vertical-align: middle;
}

.instagram-link {
    text-decoration: none;
    color: #000000; /* Cor do texto do link */
    transition: underline 0.3s ease; /* Adiciona transição para o sublinhado */
}

.instagram-link:hover {
    text-decoration: underline;
}

@keyframes openCardAnimation {
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
}

@keyframes handwritingAnimation {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
