import { Student, Employee, Customer } from "../models/Person.js";
import { ListPerson } from "../models/ListPerson.js";
import { renderForm } from "../util/render.js";
import { Validation } from "../models/validation.js";
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
const student1 = new Student(
  "0001",
  "Nguyen Phuc A",
  "HCM",
  "nguyenphuc@gmail.com",
  "8",
  "7",
  "9.5"
);
listPerson.themDoiTuong(student1);
listPerson.get();
listPerson.renderTable("#tableDanhSach");



document.querySelector("#btnThemNV").onclick = () => {
  let personUser = document.querySelector("#doiTuong").value;
  switch (personUser) {
    case "student":
      {
        let student = new Student();
        let arrinput = document.querySelectorAll(".input-group input");
        for (let input of arrinput) {
          let { id, value } = input;
          student[id] = value;
        }
        listPerson.themDoiTuong(student);
        listPerson.renderTable("#tableDanhSach");
        listPerson.save();
      }
      break;
    case "employee":
      {
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
    case "customer":
      {
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
  listPerson.deleteDT(ma);
  listPerson.renderTable("#tableDanhSach");
  listPerson.save();
};
window.suaDoiTuong = (ma) => {
  document.querySelector('#ma').disabled = 'true';
  document.querySelector("#doiTuong").disabled = 'true'
  document.querySelector("#btnThemNV").style.display = "none";
  document.querySelector("#btnCapNhat").style.display = "inline";

  let info = listPerson.layThongtin(ma);
  switch (info.class) {
    case "student":
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
      break;
    case "employee":
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
      break;
    default:
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
  }
  if (info) {
    let arrinput = document.querySelectorAll(".input-group input");
    for (let input of arrinput) {
      let { id } = input;
      input.value = info[id];
    }
  }
  
};
document.querySelector("#btnThem").onclick = () => {
  document.querySelector('#myForm').reset();
  document.querySelectorAll('#myForm input,#myForm select').forEach((input) => {
    input.disabled = false;
});
  document.querySelector("#btnCapNhat").style.display = "none";
  document.querySelector("#btnThemNV").style.display = "inline";
  renderForm()
};

document.querySelector('#btnCapNhat').onclick = () => {
    let personUser = document.querySelector("#doiTuong").value;
    switch (personUser) {
      case "student":
        {
          let student = new Student();
          let arrinput = document.querySelectorAll(".input-group input");
          for (let input of arrinput) {
            let { id, value } = input;
            student[id] = value;
          }
          listPerson.update(student);
          listPerson.renderTable("#tableDanhSach");
          listPerson.save();
        }
        break;
      case "employee":
        {
          let employee = new Employee();
          let arrinput = document.querySelectorAll(".input-group input");
          for (let input of arrinput) {
            let { id, value } = input;
            employee[id] = value;
          }
          listPerson.update(employee);
          listPerson.renderTable("#tableDanhSach");
          listPerson.save();
        }
        break;
      case "customer":
        {
          let arrinput = document.querySelectorAll(".input-group input");
          let customer = new Customer();
          for (let input of arrinput) {
            let { id, value } = input;
            customer[id] = value;
          }
          listPerson.update(customer);
          listPerson.renderTable("#tableDanhSach");
          listPerson.save();
        }
        break;
    }
    document.querySelector('#myForm').reset();
    
};
document.querySelector('#tang').addEventListener('click', () => {
  console.log('click');
  listPerson.sortName(listPerson.danhSach,1);
  listPerson.renderTable('#tableDanhSach');
  listPerson.save();
});
document.querySelector('#giam').addEventListener('click', () => {
    listPerson.sortName(listPerson.danhSach, -1);
    listPerson.renderTable('#tableDanhSach');
    listPerson.save();
});

document.querySelector('#findUser').addEventListener('change', (e) => {
  let user = e.target.value;
  let filterList =listPerson.filterUser(user);
  listPerson.renderTableUser('#tableDanhSach',filterList);
});