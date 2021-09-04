
const mostWinningSummonerTank = (possibleTeamsList) => {
    mostWinningDeck = { fire: 0, death: 0, earth: 0, water: 0, life: 0 }
    const mostWinningSummoner = {};
    const mostWinningTank = {};
    const mostWinningBackline = {};
    const mostWinningSecondBackline = {};
    const mostWinningThirdBackline = {};
    const mostWinningForthBackline = {};
    const monster4Count = possibleTeamsList.filter(x => x[4] > 0).length
    const monster5Count = possibleTeamsList.filter(x => x[5] > 0).length
    const monster6Count = possibleTeamsList.filter(x => x[6] > 0).length
    let pickTeamWithNumberOfMonster = 3;
    if (monster6Count > 25) {
        pickTeamWithNumberOfMonster = 6;
    } else if (monster5Count > 25) {
        pickTeamWithNumberOfMonster = 5;
    } else if (monster4Count > 25) {
        pickTeamWithNumberOfMonster = 4;
    }
    console.log('Monster4: ', monster4Count)
    console.log('Monster5: ', monster5Count)
    console.log('Monster6: ', monster6Count)
    console.log('PickTeamWithMonster: ', pickTeamWithNumberOfMonster)
    possibleTeamsList.forEach(x => {
        const summoner = x[0];
        const monster1 = x[1];
        const monster2 = x[2];
        const monster3 = x[3];
        const monster4 = x[4];
        const monster5 = x[5];
        const monster6 = x[6];

        if (pickTeamWithNumberOfMonster == 6) {
            if (monster1 > 0 && monster2 > 0 && monster3 > 0 && monster4 > 0 && monster5 > 0 && monster6 > 0) {
                mostWinningSummoner[summoner] = mostWinningSummoner[summoner] ? mostWinningSummoner[summoner] + 1 : 1;
            }
        } else if (pickTeamWithNumberOfMonster == 5) {
            if (monster1 > 0 && monster2 > 0 && monster3 > 0 && monster4 > 0 && monster5) {
                mostWinningSummoner[summoner] = mostWinningSummoner[summoner] ? mostWinningSummoner[summoner] + 1 : 1;
            }
        } else if (pickTeamWithNumberOfMonster == 4) {
            if (monster1 > 0 && monster2 > 0 && monster3 > 0 && monster4 > 0) {
                mostWinningSummoner[summoner] = mostWinningSummoner[summoner] ? mostWinningSummoner[summoner] + 1 : 1;
            }
        } else {
            mostWinningSummoner[summoner] = mostWinningSummoner[summoner] ? mostWinningSummoner[summoner] + 1 : 1;
        }
    })
    const bestSummoner = Object.keys(mostWinningSummoner).length && Object.keys(mostWinningSummoner).reduce((a, b) => mostWinningSummoner[a] > mostWinningSummoner[b] ? a : b);
    console.log('BESTSUMMONER: ', bestSummoner)
    if (bestSummoner) {
        possibleTeamsList.filter(team => team[0] == bestSummoner).forEach(team => {
            const tank = team[1];
            mostWinningTank[tank] = mostWinningTank[tank] ? mostWinningTank[tank] + 1 : 1;
        })
        const bestTank = mostWinningTank && Object.keys(mostWinningTank).length && Object.keys(mostWinningTank).reduce((a, b) => mostWinningTank[a] > mostWinningTank[b] ? a : b);

        if (bestTank) {
            possibleTeamsList.filter(team => team[0] == bestSummoner && team[1] == bestTank).forEach(team => {
                const backline = team[2];
                mostWinningBackline[backline] = mostWinningBackline[backline] ? mostWinningBackline[backline] + 1 : 1;
            })
            const bestBackline = mostWinningBackline && Object.keys(mostWinningBackline).length && Object.keys(mostWinningBackline).reduce((a, b) => mostWinningBackline[a] > mostWinningBackline[b] ? a : b);

            if (bestBackline) {
                possibleTeamsList.filter(team => team[0] == bestSummoner && team[1] == bestTank && team[2] == bestBackline).forEach(team => {
                    const secondBackline = team[3];
                    mostWinningSecondBackline[secondBackline] = mostWinningSecondBackline[secondBackline] ? mostWinningSecondBackline[secondBackline] + 1 : 1;
                })
                const bestSecondBackline = mostWinningSecondBackline && Object.keys(mostWinningSecondBackline).length && Object.keys(mostWinningSecondBackline).reduce((a, b) => mostWinningSecondBackline[a] > mostWinningSecondBackline[b] ? a : b);
                
                if (bestSecondBackline) {
                    possibleTeamsList.filter(team => team[0] == bestSummoner && team[1] == bestTank && team[2] == bestBackline && team[3] == bestSecondBackline).forEach(team => {
                        const thirdBackline = team[4];
                        mostWinningThirdBackline[thirdBackline] = mostWinningThirdBackline[thirdBackline] ? mostWinningThirdBackline[thirdBackline] + 1 : 1;
                    })
                    const bestThirdBackline = mostWinningThirdBackline && Object.keys(mostWinningThirdBackline).length && Object.keys(mostWinningThirdBackline).reduce((a, b) => mostWinningThirdBackline[a] > mostWinningThirdBackline[b] ? a : b);
                    
                    if (bestThirdBackline) {
                        possibleTeamsList.filter(team => team[0] == bestSummoner && team[1] == bestTank && team[2] == bestBackline && team[3] == bestSecondBackline && team[4] == bestThirdBackline).forEach(team => {
                            const forthBackline = team[5];
                            mostWinningForthBackline[forthBackline] = mostWinningForthBackline[forthBackline] ? mostWinningForthBackline[forthBackline] + 1 : 1;
                        })
                        const bestForthBackline = mostWinningForthBackline && Object.keys(mostWinningForthBackline).length && Object.keys(mostWinningForthBackline).reduce((a, b) => mostWinningForthBackline[a] > mostWinningForthBackline[b] ? a : b);
                        
                        return { 
                            bestSummoner: bestSummoner, 
                            summonerWins: mostWinningSummoner[bestSummoner], 
                            tankWins: mostWinningTank[bestTank], 
                            bestTank: bestTank, 
                            bestBackline: bestBackline, 
                            backlineWins: mostWinningBackline[bestBackline], 
                            bestSecondBackline: bestSecondBackline, 
                            secondBacklineWins: mostWinningSecondBackline[bestSecondBackline],
                            bestThirdBackline: bestThirdBackline, 
                            thirdBacklineWins: mostWinningThirdBackline[bestThirdBackline],
                            bestForthBackline: bestForthBackline, 
                            forthBacklineWins: mostWinningForthBackline[bestForthBackline] 
                        }
                    }

                    return { 
                        bestSummoner: bestSummoner, 
                        summonerWins: mostWinningSummoner[bestSummoner], 
                        tankWins: mostWinningTank[bestTank], 
                        bestTank: bestTank, 
                        bestBackline: bestBackline, 
                        backlineWins: mostWinningBackline[bestBackline], 
                        bestSecondBackline: bestSecondBackline, 
                        secondBacklineWins: mostWinningSecondBackline[bestSecondBackline],
                        bestThirdBackline: bestThirdBackline, 
                        thirdBacklineWins: mostWinningThirdBackline[bestThirdBackline] 
                    }
                }

                return { 
                    bestSummoner: bestSummoner, 
                    summonerWins: mostWinningSummoner[bestSummoner], 
                    tankWins: mostWinningTank[bestTank], 
                    bestTank: bestTank, 
                    bestBackline: bestBackline, 
                    backlineWins: mostWinningBackline[bestBackline], 
                    bestSecondBackline: bestSecondBackline, 
                    secondBacklineWins: mostWinningSecondBackline[bestSecondBackline] 
                }
            }

            return { 
                bestSummoner: bestSummoner, 
                summonerWins: mostWinningSummoner[bestSummoner], 
                tankWins: mostWinningTank[bestTank], 
                bestTank: bestTank, 
                bestBackline: bestBackline, 
                backlineWins: mostWinningBackline[bestBackline] 
            }
        }

        return { 
            bestSummoner: bestSummoner, 
            summonerWins: mostWinningSummoner[bestSummoner], 
            tankWins: mostWinningTank[bestTank], 
            bestTank: bestTank 
        }
    }
    return { 
        bestSummoner: bestSummoner, 
        summonerWins: mostWinningSummoner[bestSummoner] 
    }
}

module.exports.mostWinningSummonerTank = mostWinningSummonerTank;