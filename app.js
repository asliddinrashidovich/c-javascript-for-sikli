// masala 1

// let k = 5; // k soni
// let n = 3; // n marta chiqarish (n > 0)

// // k sonini n marta chiqarish
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// maslala 2;

// function maslala(a, b) {
//     if(a < b) {
//         for(let i = a; i <= b; i++) {
//             console.log(i)
//         }
//         console.log(b-a+1 +' ta son bor')
//     } else {
//         console.log(`a soni b dan katta`)
//     }
// }
// maslala(3,5)

// masala 3;

// function maslala(a, b) {
//     if(a < b) {
//         for(let i = (b-1); i > a; i--) {
//             console.log(i)
//         }
//         console.log(b - a - 1 +' ta son bor')
//     } else {
//         console.log(`a soni b dan katta`)
//     }
// }
// maslala(3,7)

// masala 4;

// function maslala(a) {
//     for(let i = 1; i <= 10; i++) {
//         console.log(a * i + ' som')
//     }
// }
// maslala(25000);

// masala 5;

// function maslala(a) {
//     for(let i = 1; i <= 10; i++) {
//         console.log(a * i / 10 + ' som')
//     }
// }
// maslala(25000)

// masala 6;

// function maslala(a) {
//     for(let i = 12; i <= 20; i++) {
//         if(i%2 == 0) {
//             console.log(i / 10 * a + ' somdan')
//         }
//     }
// }
// maslala(25000)

// masala 7;

// function maslala(a, b) {
//     if(a < b) {
//         let num = 0;
//         for(let i = a; i <= b; i++) {
//             num += i;
//         }
//         console.log(num)
//     } else {
//         console.log(`a soni b dan katta`)
//     }
// }

// maslala(1, 9)

// masala 8;

// function maslala(a, b) {
//     if(a < b) {
//         let num = 1;
//         for(let i = a; i <= b; i++) {
//             num *= i;
//         }
//         console.log(num)
//     } else {
//         console.log(`a soni b dan katta`)
//     }
// }
// maslala(1,5)

// masala 9;

// function maslala(a, b) {
//     if(a < b) {
//         let num = 0;
//         for(let i = a; i <= b; i++) {
//             num += i**2;
//         }
//         console.log(num)
//     } else {
//         console.log(`a soni b dan katta`)
//     }
// }
// maslala(1,3)

// masala 10;

// function maslala(n) {
//     if(n > 0) {
//         let num = 0;
//         for(let i = 1; i <= n; i++) {
//             num += (1 / i)
//         }
//         console.log(num)
//     } else {
//         console.log(`n soni 0 dan kichik` )
//     }
// }
// maslala(0)

// masala 11


// function masala(n) {
//     let num = 0;
//     if(n > 0) {
//         for(let i = 0; i <= n; i++) {
//             num += (n+i)**2;
//         }
//         console.log(num)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }

// masala(2)

// masala 12;

// function masala(n) {
//     let num = 1;
//     if(n > 0) {
//         for(let i = 11; i <= 10 + n; i++) {
//             num *= i/ 10;
//         }
//         console.log(num)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }

// masala(2)

// maslaa 13

// function masala(n) {
//     let num = 0;
//     let a = 1;
//     if(n > 0) {
//         for(let i = 11; i <= 10 + n; i++) {
//             let term = i;
//             num += (term * a);
//             a *= -1
//         }
//         console.log(num / 10)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }

// masala(3)

// masala 14;

// function masala(n) {
//     let num = 0;
//     let a = 1;
//     if(n > 0) {
//         for(let i = 1; i <= n; i++) {
//             num += (2*i -1)
//         }
//         console.log(num )
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }

// masala(3)

// masala 15;

// function masala(n, a) {
//     let result = 1;
//     if(n > 0) {
//         for(let i = 0; i < n; i++) {
//             result *= a
//         }
        
//         console.log(result)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }

// masala(3, 2)


// masala 16;

// function masala(n, a) {
//     let result = 0;
//     if(n > 0) {
//         for(let i = 1; i <= n; i++) {
//             result += (a ** i)
//             console.log(result)
//             result = 0
//         }
        
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }
// masala(4, 2)

// masala 17;

// function masala(n, a) {
//     let result = 0;
//     let all = 0;
//     if(n > 0) {
//         for(let i = 0; i <= n; i++) {
//             result += (a ** i)
//             all += result
//             console.log(result)
//             result = 0;
//         }
//         console.log("Jami " + all)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }
// masala(4, 2)

// masala 18;

// function masala(n, a) {
//     let result = 0;
//     let all = 0;
//     let ish = 1
//     if(n > 0) {
//         for(let i = 0; i <= n; i++) {
//             result += (a ** i)
//             console.log(result);
//             result *= ish;
//             all += result
//             ish *= -1
//             result = 0;
//         }
//         console.log(`Jami yigi'indi ${all} ga teng`)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }
// masala(3, 2)

// masala 19;

// function masala(n) {
//     let result = 1;
//     let all = 0;
//     if(n > 0) {
//         for(let i = 1; i <= n; i++) {
//             result *= i
//         }
//         console.log(result)
//     } else {
//         console.log(`n soni manfiy son`)
//     }
// }
// masala(5)

// masala 20;

function masala(n) {
    let result = 1;
    let all = 0;
    if(n > 0) {
        for(let i = 1; i <= n; i++) {
            result *= i;
            all += result
        }
        console.log(all)
    } else {
        console.log(`n soni manfiy son`)
    }
}
masala(3)