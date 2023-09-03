function generateDie()
{
    n = Math.random();
    n = n*6;
    n = Math.floor(n) + 1; //Scaling Random number between 0 and 1 to 1 and 6
    return n;
}

die1 = generateDie();
die2 = generateDie();

//Displaying Player 1 Die
if (die1 === 1)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice1.png");
}
if (die1 === 2)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice2.png");
}
if (die1 === 3)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice3.png");
}
if (die1 === 4)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice4.png");
}
if (die1 === 5)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice5.png");
}
if (die1 === 6)
{
    document.querySelector(".die1").setAttribute("src", "./images/dice6.png");
}

//Displaying Player 2 Die
if (die2 === 1)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice1.png");
}
if (die2 === 2)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice2.png");
}
if (die2 === 3)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice3.png");
}
if (die2 === 4)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice4.png");
}
if (die2 === 5)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice5.png");
}
if (die2 === 6)
{
    document.querySelector(".die2").setAttribute("src", "./images/dice6.png");
}

//Displaying Result
if (die1 > die2)
{
    document.querySelector(".title").innerHTML = "🚩Player 1 Wins!";   
}

else if (die1 < die2)
{
    document.querySelector(".title").innerHTML = "Player 2 Wins!🚩";
}
else
{
    document.querySelector(".title").innerHTML = "Draw!⚔️";
}