Card components {
    clicked: true || false,
    onClick() {
        if true, set score to 0 and set clicked of all cards.clicked to false
        else 
        set clicked to true and shuffle cards
    }

}

Scoreboard component {
    currentScore: {
        increment function,

    },
    bestScore: {
        if currentScore > bestScore set bestScore = currentScore
    }
}