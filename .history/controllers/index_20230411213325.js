
import { Student, Employee, Customer } from "../models/Person.js";
import {ListPerson} from "../models/ListPerson.js";
import { renderForm } from "../util/render.js";
let listPerson = new ListPerson();


document.querySelector("#btnThem").addEventListener("click", () => {
  renderForm();
});

document.querySelector("#doiTuong").addEventListener("change", (e) => {
  let personUser = e.target.value;
  switch (personUser) {
    case "student":
      renderForm(personUser);
      break;
    case "employee":
      renderForm(personUser);
      break;
    default:
      renderForm(personUser);
  }
});
const student1 = new Student('0001', 'Nguyen Phuc A', 'HCM', 'nguyenphuc@gmail.com', '8', '7', '9.5');
listPerson.themDoiTuong(student1)
listPerson.get();

listPerson.renderTable("#tableDanhSach");

document.querySelector("#btnThemNV").onclick = () => {
  let personUser = document.querySelector("#doiTuong").value;
  
  switch (personUser) {
    case "student": {
      let student = new Student();
      let arrinput = document.querySelectorAll(".input-group input");
      for (let input of arrinput) {
        let { id, value } = input;
        student[id] = value;
      }
      console.log('asdsd', student)
      listPerson.themDoiTuong(student);
      listPerson.renderTable("#tableDanhSach");
      listPerson.save();
    }
    break;
    case "customer": {
      let employee = new Employee();
      let arrinput = document.querySelectorAll(".input-group input");
      for (let input of arrinput) {
        let { id, value } = input;
        employee[id] = value;
      }
      listPerson.themDoiTuong(employee);
      listPerson.renderTable("#tableDanhSach");
      listPerson.save();
    }
    break;
    case "employee": {
      let arrinput = document.querySelectorAll(".input-group input");
      let customer = new Customer();
      for (let input of arrinput) {
        let { id, value } = input;
        customer[id] = value;
      }
      listPerson.themDoiTuong(customer);
      listPerson.renderTable("#tableDanhSach");
      listPerson.save();
    }
    break;
  }
};
window.xoaDoiTuong = function (ma) {
  listPerson.deleteDT(ma)
  listPerson.renderTable("#tableDanhSach");
};
window.suaDoiTuong = function (ma) {
  document.querySelector('#btnThem').click();
  
}

let max = 
