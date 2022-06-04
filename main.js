let form = document.getElementById("form");

//Form Event
form.addEventListener("submit", (e) => {
  //Not Reload Page
  e.preventDefault();
  checkInputValidation("name");
  checkInputValidation("email");
  checkInputValidation("number");
  checkInputValidation("password");
});

//Validation Function
const checkInputValidation = (inputDiv) => {
  let inputFiled = document.getElementById(inputDiv);

  //Text Filed
  if (inputFiled.type == "text") {
    if (inputFiled.value.trim() == "") {
      showErrorMsg(inputDiv, "nameError", "Filed should not blank");
    } else {
      showSuccessMsg(inputDiv);
    }
  }
  //Email Filed
  else if (inputFiled.type == "email") {
    let emailValue = inputFiled.value;
    const validateRgx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputFiled.value.trim() == "") {
      showErrorMsg(inputDiv, "emailError", "Filed should not blank");
    } else if (validateRgx.test(String(emailValue).toLowerCase())) {
      showSuccessMsg(inputDiv);
    } else {
      showErrorMsg(inputDiv, "emailError", "Please enter right email");
    }
  }
  //Number Filed
  else if (inputFiled.type == "number") {
    let inputFiledLength = inputFiled.value.length;

    if (inputFiled.value.trim() == "") {
      showErrorMsg(inputDiv, "numberError", "Filed should not blank");
    } else if (inputFiledLength == 13) {
      showSuccessMsg(inputDiv);
    } else if (inputFiledLength < 13) {
      let numberCalculate = 13 - inputFiledLength;
      showErrorMsg(
        inputDiv,
        "numberError",
        `Please enter ${numberCalculate} digit`
      );
    } else if (inputFiledLength > 13) {
      let numberCalculate = inputFiledLength - 13;
      showErrorMsg(
        inputDiv,
        "numberError",
        `Number Must be 13 digti , Please remvoe any ${numberCalculate} digit`
      );
    } else {
      showSuccessMsg(inputDiv);
    }
  }
  //Password Filed
  else if (inputFiled.type == "password") {
    let inputFiledLength = inputFiled.value.length;

    if (inputFiled.value.trim() == "") {
      showErrorMsg(inputDiv, "passwordError", "Filed should not blank");
    } else if (inputFiledLength >= 6 && inputFiledLength <= 12) {
      showSuccessMsg(inputDiv);
    } else if (inputFiledLength < 6) {
      let numberCalculate = 6 - inputFiledLength;
      showErrorMsg(
        inputDiv,
        "passwordError",
        `Please enter ${numberCalculate} digit`
      );
    } else if (inputFiledLength > 12) {
      let numberCalculate = inputFiledLength - 12;
      showErrorMsg(
        inputDiv,
        "passwordError",
        `Password Must be 6-13 digti , Please remvoe any ${numberCalculate} digit`
      );
    } else {
      showErrorMsg(inputDiv, "passwordError", "Please Enter Right Password");
    }
  }
};

//Display Error Message
const showErrorMsg = (inputDiv, errrorDiv, errorMsg) => {
  let inputFiled = document.getElementById(inputDiv);
  let inputRowDiv = inputFiled.parentElement;
  inputRowDiv.classList.add("erroActive");
  inputRowDiv.classList.remove("sucessActive");
  document.getElementById(errrorDiv).textContent = errorMsg;
};

//Display Success Message
const showSuccessMsg = (inputDiv) => {
  let inputFiled = document.getElementById(inputDiv);
  let inputRowDiv = inputFiled.parentElement;
  inputRowDiv.classList.add("sucessActive");
  inputRowDiv.classList.remove("erroActive");
};
