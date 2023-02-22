const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const phn = document.getElementById("phone");
const email = document.getElementById("email");
const hname = document.getElementById("hname");
const city = document.getElementById("city");
const state = document.getElementById("state");
const pin = document.getElementById("pin");
const btn = document.getElementById("btn");

const f_err = document.getElementById("f_err");
const l_err = document.getElementById("l_err");
const g_err = document.getElementById("g_err");
const b_err = document.getElementById("b_err");
const p_err = document.getElementById("p_err");
const e_err = document.getElementById("e_err");
const h_err = document.getElementById("h_err");
const c_err = document.getElementById("c_err");
const s_err = document.getElementById("s_err");
const pin_err = document.getElementById("pin_error");

btn.addEventListener("click", (e) => {
  const gndr = document.querySelector('input[name="gender"]:checked');
  let flag = false;
  console.log("ok");
  if (fname.value == " " || !isNaN(fname.value)) {
    f_err.style.visibility = "visible";
    f_err.textContent = "HEllo";
    flag = true;
  } else {
    f_err.style.visibility = "hidden";
  }
  if (lname.value == " " || !isNaN(lname.value)) {
    l_err.style.visibility = "visible";
    l_err.textContent = "HEllo";
    flag = true;
  } else {
    l_err.style.visibility = "hidden";
  }
  if (gndr == null) {
    g_err.style.visibility = "visible";
    g_err.textContent = "HEllo";
    flag = true;
    console.log("hello");
  } else {
    g_err.style.visibility = "hidden";

    console.log(gndr.value);
  }
  if (!dob.value) {
    b_err.style.visibility = "visible";
    b_err.textContent = "hello";
    flag = true;
  } else {
    b_err.style.visibility = "hidden";
  }
  if (!phn.value || phn.value.length < 10) {
    p_err.style.visibility = "visible";
    p_err.textContent = "hello";
    flag = true;
  } else {
    p_err.style.visibility = "hidden";
  }
  if (
    !email.value ||
    !email.value.includes("@") ||
    !email.value.includes(".com")
  ) {
    e_err.style.visibility = "visible";
    e_err.textContent = "hello";
    flag = true;
  } else {
    e_err.style.visibility = "hidden";
  }
  if (flag) {
    e.preventDefault();
  }
});
