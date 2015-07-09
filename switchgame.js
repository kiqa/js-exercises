var user = prompt("How do you choice your love couple? are you looking for a fisical apeal, money or value the feelings").toUpperCase();
switch (user){
    case 'fisical apeal':
        var good = prompt("Are you look for someone that has a good appearence?") .toUpperCase();
        var bad = prompt("can you meet with someone without know his/her aspect?") .toUpperCase();
        if ( good === "yes" && bad === "yes"){
            console.log("is important a good appearance!");
        } else {
            console.log("the appearance gone with the time!");
        }
    break;
    case 'money':
        var rich = prompt("Is money important in a relationship for you?") .toUpperCase();
        var poor = prompt("can money buy your love?") .toUpperCase();
        if( rich === "yes" || poor ==="yes"){
            cosole.log("Rich couple is the best because money is important in love.");
        } else{
            console.log("No, love is the most important and money is the last thing to think.");
        }
    break;
    case 'value the feelings':
        var value = prompt("Are you value feelings in a relationship?") .toUpperCase();
        var feelings= prompt("Are you believe in love?") .toUpperCase();
        if(value === "yes" || feelings === "yes"){
            console.log("Is important love in a relationship!");
        } else{
            console.log("without love can not exit a real relationship");
        }
    break;
    default:
    console.log("I'm really confused! That is why I'm not in a relationship");
}