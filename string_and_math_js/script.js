const str = document.getElementById("textbox");
const choice = document.getElementById("choicebox");
const btn = document.getElementById("btn");
const res = document.getElementById("result");
const extraboxSlice = document.querySelectorAll(".h-slice");
const extraboxReplace = document.querySelectorAll(".h-replace");
const extraboxconcat = document.querySelector(".h-concat");
btn.addEventListener("click", () => {
  switch (parseInt(choice.value)) {
    case 1:
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }
      extraboxconcat.style.display = "none";
      res.value = "Length is " + str.value.length;
      break;
    case 2:
      extraboxconcat.style.display = "none";
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "block";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }

      res.value = str.value.slice(
        document.getElementById("startbox").value,
        document.getElementById("endbox").value
      );
      break;
    case 3:
      extraboxconcat.style.display = "none";
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "block";
      }
      res.value = str.value.substring(
        document.getElementById("startbox").value,
        document.getElementById("endbox").value
      );
      break;
    case 4:
      extraboxconcat.style.display = "none";
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "block";
      }

      res.value = str.value.replace(
        document.getElementById("replacebox1").value,
        document.getElementById("replacebox2").value
      );
      break;
    case 5:
      extraboxconcat.style.display = "none";
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "block";
      }

      res.value = str.value.replaceAll(
        document.getElementById("replacebox1").value,
        document.getElementById("replacebox2").value
      );
      break;
    case 6:
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }
      extraboxconcat.style.display = "none";
      res.value = str.value.toUpperCase();
      break;
    case 7:
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }
      extraboxconcat.style.display = "none";

      res.value = str.value.toLowerCase();
      break;
    case 8:
      for (let i = 0; i < extraboxSlice.length; i += 1) {
        extraboxSlice[i].style.display = "none";
      }
      for (let i = 0; i < extraboxReplace.length; i += 1) {
        extraboxReplace[i].style.display = "none";
      }
      extraboxconcat.style.display = "block";
      res.value = str.value.concat(document.getElementById("concatbox").value);
      break;
    default:
      alert("WRONG CHOICE !");
  }
});

// MATHS OPERATION
const num = document.getElementById("mathtextbox");
const math_result = document.getElementById("mathresult");
const rnd = document.getElementById("round");
const flr = document.getElementById("floor");
const ceil = document.getElementById("ceil");
const sqrt = document.getElementById("sqrt");
const log = document.getElementById("log");

rnd.addEventListener("click", () => {
  math_result.value = Math.round(num.value);
});
flr.addEventListener("click", () => {
  math_result.value = Math.floor(num.value);
});
ceil.addEventListener("click", () => {
  math_result.value = Math.ceil(num.value);
});
sqrt.addEventListener("click", () => {
  math_result.value = Math.sqrt(num.value);
});
log.addEventListener("click", () => {
  math_result.value = Math.log(num.value);
});
