// cards: suit, value

class Card {
	constructor(suit, value){
		this.suit = suit
		this.value = value
		
		var values = {
			1: "Ace",
			11: "Jack",
			12: "Queen",
			13: "King"
		}

		var suits = ["Spades", "Clubs", "Hearts", "Diamonds"]

		this.name = `${ values[this.value] || this.value } of ${suits[this.suit]}`
	}
}

// deck: array of cards, shuffle method, reset method, draw/deal 

function Deck(){
	this.reset = function(){
		deck = []

		for (var suit=0; suit < 4; suit++){
			for(var value=1; value <= 13; value++){
				deck.push(new Card(suit, value))
			}
		}
		
	}

	var deck = []
	this.reset()


	this.deal = function(){
		return deck.pop()
	}

	this.shuffle = function(){
		for(var i=0; i<deck.length; i++){
			var j = Math.floor(Math.random()*deck.length)
			var temp = deck[j]
			deck[j] = deck[i]
			deck[i] = temp
		}
	}

	this.length = function(){
		return deck.length
	}
}

var my_deck = new Deck()
var my_other_deck = new Deck()

my_deck.shuffle()

for(var i=0; i<5; i++){
	console.log(my_deck.deal().name)
}

console.log(my_deck.length(), my_other_deck.length())