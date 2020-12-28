class Utility{
    Simulation = () => {
        var stake = 100;
        var day = 1;
        var r1,r2;
        let array = [];
        array.length = 30;
        var dailyWin = 0;
        while(day<=30){            
            var winStake = 100;
            var lostStake = 100;
            var winAmount;
            var lostAmount;
            while(winStake<150 || lostStake>50){
                var Random = Math.floor((Math.random()*10));
                r1= Random%10;
                r2=r1%2;
                if(r2 == 0){                       
                    lostStake = lostStake-1;
                    dailyWin = dailyWin - 1;
                    array[day-1]=dailyWin;
                }
                else{
                    winStake = winStake+1;
                    dailyWin = dailyWin+1;
                    array[day-1]=dailyWin;
                }   
            }
            winAmount=winStake-stake;
            lostAmount=stake-lostStake;
            console.log("----------------------------------------------------------------------------------");
            console.log("Win amount of day"+day+" is :"+winAmount+" and Lost amount of day"+day+" is :"+lostAmount);
            if( winAmount > lostAmount ){
                console.log("Day"+day+" win by "+(winAmount-lostAmount));
            }
            else{
                console.log("Day"+day+" lost by "+(lostAmount-winAmount));
            }
            day=day+1;
        }
        var luckyDay = 0;
        var unluckyDay = 0;
        var high = array[0];
        var low = array[0];
        for (var i = 1; i < array.length; i++){
            if( high < array[i] ){
            high = array[i];   
            luckyDay = i+1;
        }
        if( low > array[i] ){
            low = array[i];
            unluckyDay = i+1;
        }
        console.log("Luckiest day is day : "+luckyDay+" and He won : "+high);
        console.log("Unluckiest day is day : "+unluckyDay+" and He lost : "+low);      
    }  
    while (winAmount>lostAmount);    
  }
}
module.exports = new Utility();