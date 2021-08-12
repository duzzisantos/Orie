

var myButton = document.getElementById("myButton");
var myDialog = document.getElementById("myDialog");
var outPut = document.querySelector("output");
var submit = document.getElementById("submit");
var input = document.querySelector("input");
var shut = document.getElementById("shut");

myButton.addEventListener('click', function onOpen() {
    shut.addEventListener('click', function onClick() {
        myDialog.close();
    });
    if (typeof myDialog.showModal() === 'function') {
        myDialog.showModal();
    } else {
        console.log("This <dialog> is not supported by your browser");
    }
});

// myDialog.addEventListener('close', function onClose() {
//     outPut.value = 'Thanks for subscribing to our page';
// });
