// array methods
// const products = ['apple', 'samsung', 'sony', 'tommy', 'kenvin']
const numbers = [1, 2, 5, 3, 4, 0, 6, 5, 45]

// apple, samsung, sony
// console.log(products.toString())

// // apple.samsung.sony
// console.log(products.join('|'))

// // apple'samsung'sony
// console.log(products.join("'"))

// // apple"samsung"sony
// console.log(products.join('"'))

// // length
// console.log(products.length)

// // in ra cac phan tu trong mang
// // prefix -> a-apple, a-samsung, a-sony
// for (let i = 0; i < products.length; i++) {
//     console.log(`a-${products[i]}`)
// }

// // template literal ``
// const a = 10 // 10 la so chan
// console.log(`${a} la so chan, ${a} chia het cho 5`)

// // tao mang moi 2 phan tu dau tien cua mang
// // slice : cắt 1 mảng từ vị trí start -> end (lưu ý không lấy end)
// const newProducts = products.slice(0)
// console.log(newProducts)

// // tao 1 function in ra 2 pt kế cuối
// function print(array) {
//     // your code here
//     console.log(array.slice(-3, -1).join(' '))
// }

// print(products) // sony tommy
// print(numbers) // 6 5


// // them 1 pt vao cuoi mang

// products.push("viettel")
// console.log(products)

// // lay 1 pt cuoi mang
// const last = products.pop()
// console.log(last)
// console.log(products)
// console.log(products[products.length - 1])

//  them pt dau mang
// const len = products.unshift("BBQ")
// console.log(products)
// console.log(len)

//  lay pt dau mang
// const len = products.shift()
// console.log(products)
// console.log(len)

// add giua mang
// console.log(`initial: ${products}`)
// apple,samsung,viettel,sony,tommy,kenvin

// splice(start: number, deleteCount?: number ,add element): string[]
// const products = ['apple', 'samsung', 'sony', 'tommy', 'kenvin']

// const newProducts = products.splice()
// console.log(products) // apple , samsung 
// console.log(newProducts) //


// slice , splice => co the ap dung cho string
const str = "hello, my name is Ken"
function getName(str) {
    const arrStr = str.split(" ");
    console.log(arrStr[arrStr.length - 1]);
}
// lay ra tên từ string