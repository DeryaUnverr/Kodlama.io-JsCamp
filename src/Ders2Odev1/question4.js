
function PrimeAllNumber(number) {
    for (let i = 0; i < number; i++) {
       let durum=true
        for (let j = 2; j < i; j++) {
          
            if (i % j == 0) {
             durum=false
            }
        }
        if (durum == true) {
            console.log(j)
        }
    }
}
PrimeAllNumber(1000)

