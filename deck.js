function Deck() {
	let suits = ["spades", "diamonds", "clubs", "hearts"];
	let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	let deck = [];

	for (let s = 0; s < suits.length; s++) {
		for (let v = 0; v < values.length; v++) {
			let card = {Value: values[v], Suit: suits[s]};
			deck.push(card);
		}
	}
	
	function shuffle() {
		let getRandomInt = function(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

		let swap = function(array, i, j) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		for (let i = 0; i < array.length; i++) {
			swap(this.deck, i, getRandomInt(52));
		}
	}
}