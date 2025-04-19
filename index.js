const names = ["Edith","Cole","Sandra"]

function writeCards(names, birthDay) {
    let birthDaymessages = [];
    for (let i = 0; i < names.length; i++) {
      birthDaymessages.push(`Thank you, ${names[i]}, for the wonderful ${birthDay} gift!`);
    }
    return birthDaymessages;
  }
  
function countDown(Number) {
    while (Number >= 0) {
      console.log(Number);
      Number--;
    }
  }
  