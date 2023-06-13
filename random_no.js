let random=Math.floor(Math.random() * 101);
let guess
let no_of_guess=0
let final_result
console.log("welcome to number guessing game")
console.log("enter a no. b/w  1 to 100")
do{
  guess= Number.parseInt(prompt("enter your number:"));
  if(guess<random)
  {
    alert("try a greater no")
    no_of_guess++
  }
  else if(guess>random)
  {
    alert("try a lower no.")
    no_of_guess++
  }
  else
  {
    alert("you guessed correct no")
  }
}while(guess!=random)
console.log("the actual no. is "+ random + " and you did it in "+ no_of_guess + " no of guess")
final_result=100-no_of_guess
console.log("final score is "+ final_result)