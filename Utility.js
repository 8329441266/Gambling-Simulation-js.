class Utility{
    Simulation = () => {
        var stake = 100;
        var day = 1;
        var r1,r2;
        var winAmount;
        var lostAmount;
        while(day<=20){
            var winStake = 100;
            var lostStake = 100;
            while(winStake<150 || lostStake>50){
            var Random = Math.floor((Math.random()*10));           
            r1= Random%10;
            r2=r1%2;
            if(r2 == 0){               
                lostStake = lostStake-1;
            }
            else{
                winStake = winStake+1;
            }
        }
        winAmount=winStake-stake;
        lostAmount=stake-lostStake;
        console.log("Win amount of day"+day+" is :"+winAmount+" and Lost amount of day"+day+" is :"+lostAmount);
        if( winAmount > lostAmount ){
            console.log("Day"+day+" win by "+(winAmount-lostAmount));
            }
            else{
                console.log("Day"+day+" lost by "+(lostAmount-winAmount));
            }
           day=day+1;
        }
    }
}
module.exports = new Utility();