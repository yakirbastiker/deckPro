export  function checkCardValue(card) {
    if(card === 'J' || card === 'Q' || card === 'K') {
        card = 10;
    }else if(card === 'A') {
        card = 11;
    }

    return card
}