class Utility{
    Simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        var r1,r2;
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
        if(winStake==150){
            console.log("Gambler win 50% of stake");
        }
        else{
            console.log("Gambler loose 50% of stake");
        }
    }

}
module.exports = new Utility();