let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn5 = document.querySelector('#btn5');

let arrow1 = document.querySelector('#arrow1');
let arrow2 = document.querySelector('#arrow2');
let arrow3 = document.querySelector('#arrow3');
let arrow4 = document.querySelector('#arrow4');
let arrow5 = document.querySelector('#arrow5');

let logo1 = document.querySelector('#logo1');
let logo2 = document.querySelector('#logo2');
let logo3 = document.querySelector('#logo3');

let logobtn1 = document.querySelector('#logobtn1');

let logobtn2 = document.querySelector('#logobtn2');

let logobtn3 = document.querySelector('#logobtn3');
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

        

arrow1.addEventListener('click', function() {
    btn1.click();
});
arrow2.addEventListener('click', function() {
    btn2.click();

});
arrow3.addEventListener('click', function() {
    btn3.click();

});
arrow4.addEventListener('click', function() {
    btn4.click();

});

arrow5.addEventListener('click', function() {
    btn5.click();

});

logo1.addEventListener('click', function() {
    logobtn1.click();
});

logo2.addEventListener('click', function() {
    logobtn2.click();
});

logo3.addEventListener('click', function() {
    logobtn3.click();
});
