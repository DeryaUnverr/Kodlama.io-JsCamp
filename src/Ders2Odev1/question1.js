
function PrimeNumber(...numbers) {
    let durum = true
    for (let i = 0; i < numbers.length; i++) {
       
        for (let j = 2; j < numbers[i]; j++) {
          
            if (numbers[i] % j == 0) {
                durum = false
            }
        }

        if (durum == true) {
            console.log(numbers[i]+"-->sayı asaldır")
        }
        else {
            console.log(numbers[i]+"-->sayı asal değildir")
            durum=true
        }

    }
}
PrimeNumber(20,13,7,9,3,2)
