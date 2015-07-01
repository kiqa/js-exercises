var slaying = true;

// 0 or 1
var youHit = Math.floor(Math.random() * 2);

// random number 1 through 5
var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;
while (slaying === true){
    if (youHit === 1){
        console.log("Congratulation! You hit the dragon.");
        totalDamage = totalDamage += damageThisRound;
        if (totalDamage >= 4){
            console.log("Slew the dragon, you win!");
             slaying = false;
        }else{
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log ("The dragon defeated you");
    }
    slaying = false;
}
