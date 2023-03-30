// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function pick(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function getCard() {
  const val = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {value: pick(val), suit: pick(suits)}
}

console.log(getCard());