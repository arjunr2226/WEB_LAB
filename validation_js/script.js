let btn = document.getElementById("btnSubmit");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let dob = document.getElementById("dob");
let gndr = document.getElementsByName("gender");
let no = document.getElementById("phone");
let addr = document.getElementById("addr");
let mail = document.getElementById("email");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");

let fm = document.getElementById("fnameM");
let lm = document.getElementById("lnameM");
let dm = document.getElementById("dobM");
let gm = document.getElementById("genderM");
let mm = document.getElementById("mailM");
let pm = document.getElementById("phoneM");
let am = document.getElementById("addrM");
let passm = document.getElementById("passM");
let repassm = document.getElementById("repassM");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  //FIRST NAME
  if (!isNaN(fname.value) || fname.value == "" || fname.value.length < 3) {
    fname.style.border = "2px solid red";
    fm.style.visibility = "visible";
    fm.textContent = "Must be more than 3 *Characters*";
  } else {
    fname.style.border = "none";
    fm.style.visibility = "hidden";
  }
  //LAST NAME
  if (!isNaN(lname.value) || lname.value == "" || lname.value.length < 3) {
    lname.style.border = "2px solid red";
    lm.style.visibility = "visible";
    lm.textContent = "Must be more than 3 *Characters*";
  } else {
    lname.style.border = "none";
    lm.style.visibility = "hidden";
  }
  //DOB
  if (dob.value.length < 1) {
    dob.style.border = "2px solid red";
    dm.style.visibility = "visible";
    dm.textContent = "Required!";
  } else {
    dob.style.border = "none";
    dm.style.visibility = "hidden";
  }
  //GENDER
  if (gndr[0].checked == false && gndr[1].checked == false) {
    gm.style.visibility = "visible";
    gm.textContent = "Please Select Gender!";
  } else {
    gm.style.visibility = "hidden";
  }
  //EMAIL
  if (
    !mail.value ||
    (!mail.value.includes("@") && !mail.value.includes(".com"))
  ) {
    mail.style.border = "2px solid red";
    mm.style.visibility = "visible";
    mm.textContent = "Please provide valid Email";
  } else {
    mail.style.border = "none";
    mm.style.visibility = "hidden";
  }
  //PHONE NUMBER
  if (isNaN(no.value) || no.value.length < 10) {
    no.style.border = "2px solid red";
    pm.style.visibility = "visible";
    pm.textContent = "Should have 10 Numbers!";
  } else {
    no.style.border = "none";
    pm.style.visibility = "hidden";
  }
  // ADDRESS
  if (addr.value.length < 10) {
    addr.style.border = "2px solid red";
    am.style.visibility = "visible";
    am.textContent = "Minimum 10 Characters!";
  } else {
    addr.style.border = "none";
    am.style.visibility = "hidden";
  }
  //PASSWORD
  let up = /[A-Z]/g;
  let low = /[a-z]/g;
  let num = /[0-9]/g;
  // console.log(up);
  if (
    !pass.value.match(low) ||
    !pass.value.match(up) ||
    !pass.value.match(num) ||
    pass.value.trim() == ""
  ) {
    pass.style.border = "2px solid red";
    passm.style.visibility = "visible";
    passm.textContent = "Minimum a Character, Special Symbol and a Number!";
  } else {
    pass.style.border = "none";
    passm.style.visibility = "hidden";
  }
  if (repass.value == "" || pass.value != repass.value) {
    repass.style.border = "2px solid red";
    repassm.style.visibility = "visible";
    repassm.textContent = "Does not Match!";
  } else {
    repass.style.border = "none";
    repassm.style.visibility = "hidden";
  }
});
