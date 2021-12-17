function perfectNumber(number) {

    for (let j = 1; j <= number; j++) {
        let toplam = 0
        //p.t.b toplamı
        for (let i = 1; i <= j; i++) {

            if (j % i == 0) {
                toplam += i
            }

        }
        //m.s=p.t.b toplamının yarısına eşittir.
        if ((toplam / 2) == j) {
            console.log("Mükemmel sayı -->" + j)
        }
    }

}
perfectNumber(1000)

