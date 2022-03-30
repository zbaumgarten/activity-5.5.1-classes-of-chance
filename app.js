class Casino {
    constructor(name, isFakeCoin, timesPlayed) {
        this.name = name
        this.timesPlayed = 0
        this.isFakeCoin = isFakeCoin
    }

    playGame(betAmount) {
        if (Math.random() <= 0.5 || this.isFakeCoin) {
            console.log(`${this.name} wins!`)
        } else {
            this.timesPlayed ++
            console.log(`Player wins ${betAmount * this.timesPlayed}!`)
        }
    }

    rollDie(d) {
        // let roll = Math.floor(Math.random() * d) + 1;
        let roll = Math.ceil(Math.random() * d);
        console.log(roll)
    }
        

};

// TESTS
// const myCasino = new Casino("HackerU Casino");
// console.log(myCasino);
// myCasino.playGame(5);
// myCasino.playGame(15);
// myCasino.playGame(25);
// myCasino.playGame(35);



// BONUS TESTS

// const myBonusCasino = new Casino("HackerU Bonus Casino", true);
// console.log(myBonusCasino);
// myBonusCasino.playGame(5);
// myBonusCasino.playGame(15);
// myBonusCasino.playGame(25);
// myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(12);
myExtraBonusCasino.rollDie(20);

