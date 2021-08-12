// AN APP THAT COLLECTS FORM DATA FROM ORIE REGISTER PAGE
//list all the IDs dor the input inside an object. Create an empty array
let vendors = [];
let btn = document.getElementById("register");
const addVendor = (ev) => { //this creates an object of data, when input is submitted
    ev.preventDefault(); // this prevents the browser from reloading
    let vendor = {
        id: Date.now(),
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        shop: document.getElementById("shop").value,
        market: document.getElementById('market').value,
        product: document.getElementById("product").value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value
    }
    vendors.push(vendor); //this pushes data into the empty array vendors

    //this displays in the console area
    document.forms[0].reset();
    console.warn("Added", { vendor });

    //this saves to local storage on the console
    localStorage.setItem('MyVendorList', JSON.stringify(vendors));
}
document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', addVendor); //when we click the button, it should perform the function addVendor
});