class Utility{
    Simulation = () => {
        var stake = 100;
        var day = 1;
        var winStake = 100;
        var lostStake = 100;
        var r1,r2;
        while(day == 1){
        var Random = Math.floor((Math.random()*10));
        r1= Random%10;
        r2=r1%2;
        if(r2 == 0){
        lostStake = lostStake-1;
        console.log("Stake after lost = "+lostStake);
        console.log("-----Gambler Loose-----");
        }
        else{
            winStake = winStake+1;
            console.log("Stake after lost = "+winStake);
            console.log("-----Gambler Win-----");
        }
        day = day+1;
       }
     }
}
module.exports = new Utility();