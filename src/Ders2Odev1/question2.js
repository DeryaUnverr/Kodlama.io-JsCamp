function friendNumber(number1,number2) {
    let toplam1=0;
    let toplam2=0;
    for (let i = 0; i < number1; i++) {
        
       if (number1%i==0) {
           toplam1+=i
       }
    }
    for (let j = 0; j < number2; j++) {
      
        if (number2%j==0) {
            toplam2+=j
        }
    }
    if (toplam1==number2 && toplam2==number1) {
     console.log("Arkadaş sayıdır.")   
    }
    else{
        console.log("Arkadaş sayı değildir.")
    }
}
friendNumber(1184, 1210)

