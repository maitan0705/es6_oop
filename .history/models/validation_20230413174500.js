export function Validation() {
  this.checkName = function (value, idError, name, idIcon) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (regexLetter.test(value)) {
      document.getElementById(
        idIcon
      ).innerHTML = `<i class="fa fa-check align-items-center"></i>`;
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Chỉ Nhập Ký Tự`;
    return false;
  };

  this.checkEmail = function (value, idError, name, idIcon) {
    var regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return;
    } else if (regexEmail.test(value)) {
      document.getElementById(
        idIcon
      ).innerHTML = `<i class="fa fa-check align-items-center"></i>`;
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Sai Định Dạng `;
    return false;
  };

  this.checkNumber = function (value, idError, name, min, max,) {
    var regexNumber = /^[0-9]*$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexNumber.test(value)) {
      if (Number(value) < min || Number(value) > max) {
        document.getElementById(
          idError
        ).innerHTML = `${name} : ${min} - ${max}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Phải Là Số`;
    return false;
  };
  this.checkText = function (value, idError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexLetter.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Phải Là Ký tự`;
    return false;
  };
  this.checkNumber1 = function (value, idError, name, min,) {
    var regexNumber = /^[0-9]*$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexNumber.test(value)) {
      if (Number(value) < min) {
        document.getElementById(
          idError
        ).innerHTML = `${name} lớn hơn ${min}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Phải Là Số`;
    return false;
  };

  this.checkLength = function (value, idError, name, min, max) {
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (value.length < min || value.length > max) {
      document.getElementById(
        idError
      ).innerHTML = `${name} Từ ${min} Đến ${max} `;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };

  this.checkPassword = function (value, idError, name, idIcon) {
    var regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{5,9}$/;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (regexPassword.test(value)) {
      document.getElementById(
        idIcon
      ).innerHTML = `<i class="fa fa-check align-items-center"></i>`;
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(
      idError
    ).innerHTML = `${name} Phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ,độ dài từ 6 đến 10 ký tự`;
    return false;
  };

  

  this.checkDate = function (value, idError, name, idIcon) {
    const regexDate =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (value.trim() === " ") {
      document.getElementById(idError).innerHTML = `Vui Lòng nhập ${name}!`;
      return false;
    } else if (regexDate.test(value)) {
      document.getElementById(
        idIcon
      ).innerHTML = `<i class="fa fa-check align-items-center"></i>`;
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Sai Định Dạng `;
    return false;
  };

  this.checkRong = function (value, idError, name) {
    if(value.trim()=== '') {
      document.getElementById(idError).innerHTML = `Vui Lòng nhập ${name}!`;
      return false;
    }
    document.getElementById(idError).innerHTML = " ";
    return true;
  };
}
