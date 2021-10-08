var cards0 = ["mem0.jpg","mem4.jpg","mem5.jpg","mem0.jpg","mem9.jpg",
				"mem7.jpg","mem2.jpg","mem3.jpg","mem1.jpg","mem6.jpg",
				"mem7.jpg","mem9.jpg","mem4.jpg","mem8.jpg","mem2.jpg",
				"mem5.jpg","mem1.jpg","mem6.jpg","mem3.jpg","mem8.jpg"];
var cards = new Array(cards0.length);
var picNr;
var picQ = 20;
for(i=0;i<20;i++)
{
	picNr = Math.floor(Math.random()*picQ);
	cards[i] = cards0[picNr];
	cards0.splice(picNr,1);//usuniecie elementu tablicy (index elementu, liczba elementow)
	picQ--;
}

for(let i=0;i<20;i++)//bez let nie dziala
{
 document.getElementById('c'+i).addEventListener("click", function () {revealCard(i);});
}

var oneVisible = false; //czy pierwsza karta zostala okryta
var turnCounter = 0;
var nr1;
var lock = false;
var pairsLeft = 10;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');


	if (opacityValue != 0 && lock == false)
	{
		lock = true;
		var image = "url(img/"+cards[nr]+")";

		$('#c'+nr).css('background-image',image);//metoda jquery do edycji stylow

		if(oneVisible && nr != nr1)//second card, nr!=nr zapobiega powtornemu kliknieciu w te sama karte
		{
			if(cards[nr]==cards[nr1])
			{
				setTimeout("hideImage("+nr+","+nr1+")",750);
			}
			else
			{
				setTimeout("changeImage("+nr+","+nr1+")",750);
			}
			turnCounter++;
			$('.score').html('Turn counter: '+turnCounter);
			oneVisible = false;
		}
		else//first card
		{		
			oneVisible = true;
			nr1=nr;
			lock = false;
		}
	}	
}
function changeImage(nb1,nb2)
{
	$('#c'+nb1).css('background-image', "url('img/empty.jpg')");
	$('#c'+nb2).css('background-image', "url('img/empty.jpg')");
	lock = false;
	no.play();
}
function hideImage(n1,n2)
{
	$('#c'+n1).css('opacity', 0);
	$('#c'+n2).css('opacity', 0);
	$('#c'+n1).css('cursor', 'default');
	$('#c'+n2).css('cursor', 'default');
	lock = false;
	pairsLeft--;
	yes.play();
	if (pairsLeft == 0) 
	{
		$('.board').html("You won in "+turnCounter+" turns");
		$('.board').addClass("won");
		$('.score').html("Play again");
		var finish = document.querySelector('.score');
		finish.addEventListener("click", function () {location.reload()});
		$('.score').addClass("finish");
	}
}			