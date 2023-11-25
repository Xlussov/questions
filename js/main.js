// //? str

// const str1 = 'one'
// const str2 = "two 'one'"
// const str3 = `tilda "two" 'one'`

// //! ``


// const str4 = `
// test
// test
// test
// `
// console.log(str4);

// function strFun(a,b){
//    return a + b
// }

// const str5 = `test test ${str4} ${strFun(5,5)}`
// console.log(str5);


//! cпец символи

// const str6 = 'test \\ \'test\' \\ test'
// console.log(str6);

//! юнікод символи


// const str7 = `test test test \u1008ဈ`
// console.log(str7);


//! довжину str.length

// const str8 = 'test'
// console.log(str8.length);


//! певний символ

// const str9 = 'test'
// console.log(str9[3]);


//! регістри в str
// const str9 = 'Test'
// console.log(str9.toLowerCase() === 'test');

//! пошук в str

// const str10 = 'Test'
// console.log(str10.indexOf('e')); //1
// console.log(str10.includes('b')); //false

// console.log(str10.startsWith(""));
// console.log(str10.endsWith('t'));

// console.log(str10.slice(2,4));



//? Number
// const num1 = 5
// const num2 = 5.62345

// //! що такое e


// const num3 = 5000000000
// console.log(num3);

// const num4 = 5e9
// console.log(num4);


//! округлення
// console.log(Math.floor(5.958458));
// console.log(Math.ceil(5.958458));
// console.log(Math.round(5.5));

// console.log(5.958458.toFixed(3));
// console.log(+5.958458.toFixed(3));
// console.log(-5.958458.toFixed(3));



//! parsInt and parsFloat

// console.log('960');
// console.log(+'960');
// console.log(Number(960));

// console.log(parseInt('960'));
// console.log(parseInt('961.2'));


// console.log(parseInt('12.85px'));
// console.log(parseFloat('12.8px5'));

//! Math

// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 100));



//! max min

// const arr = [1,3,5,3,63,4]
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


// console.log(-111);
// console.log(Math.abs(-111));

//! степінь pow

// console.log(Math.pow(2,3));


// const a = /^[a-zа-я]+$/
// const button1 = document.querySelector('.button1')
// // console.log(button1);
// button1.addEventListener('click', function(){

// })



const answers = [
   'лелека',
   'криниця',
   'чайник',
   'дідмороз',
   'вогонь',
   'морозиво',
   'зошит',
   'вікно',
   'часник',
   'свічка',
]
// const list = /^[a-zа-я]+$/
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
   btn.addEventListener('click', ()=>{
   const inputVal = btn.parentElement.children[0].value
   const ansewrId = parseFloat(btn.parentElement.parentElement.className)
   small = inputVal.toLowerCase()
   small = small.replace(/\s+/g, '');
   if(/[a-zа-я]/i.test(small) && small === answers[ansewrId - 1]){
         btn.parentElement.parentElement.children[0].style.backgroundColor = 'green'
         btn.parentElement.children[0].style.display = 'none'
         btn.parentElement.children[1].style.display = 'none'
         btn.parentElement.children[2].style.display = 'block'
      }else if (/[a-zа-я]/i.test(small) && small !== answers[ansewrId - 1]) {
         btn.parentElement.parentElement.children[0].style.backgroundColor = 'red'
         btn.parentElement.children[0].style.display = 'none'
         btn.parentElement.children[1].style.display = 'none'
         btn.parentElement.children[3].style.display = 'block'
      }else {
         alert('Введіть тільки букви')
      }
   });
});
