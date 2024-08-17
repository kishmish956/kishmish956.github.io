function play(userChoice) {
            const choices = ['камень', 'ножницы', 'бумага'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const resultText = document.getElementById('resultText');

            if (userChoice === computerChoice) {
                resultText.innerText = `Ничья! Вы оба выбрали ${userChoice}.`;
            } else if (
                (userChoice === 'камень' && computerChoice === 'ножницы') ||
                (userChoice === 'ножницы' && computerChoice === 'бумага') ||
                (userChoice === 'бумага' && computerChoice === 'камень')
            ) {
                resultText.innerText = `Вы выиграли! ${userChoice} побеждает ${computerChoice}.`;
            } else {
                resultText.innerText = `Вы проиграли! ${computerChoice} побеждает ${userChoice}.`;
            }
        
