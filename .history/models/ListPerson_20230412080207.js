import { Student, Employee, Customer } from "./Person.js";
export class ListPerson {
  danhSach = [];
  themDoiTuong(dt) {
    this.danhSach.push(dt);
  }
  renderTable(selectorTbody) {
    let htmlString = "";
    let string = "";
    for (let user of this.danhSach) {
      switch (user.class) {
        case "student":
          var person = new Student();
          Object.assign(person, user);
          string = `Tổng Điểm : ${person.tinhDiemTrungBinh()}`;
          break;
        case "employee":
          var person = new Employee();
          Object.assign(person, user);
          console.log(person);
          string = `Tổng Lương : ${person.tinhLuong()}`;
          break;
        case "customer":
          var person = new Customer();
          Object.assign(person, user);
          string = `-`;
          break;
      }

      htmlString += `<thead >
          <tr>
            <th>${user.ma}</th>
            <th>${user.hoTen}</th>
            <th>${user.email}</th>
            <th>${user.diaChi}</th>
            <th>${string}</th>									
            <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
            data-target="#myModal" onclick="suaDoiTuong('${user.ma}')"></button> 
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            </th>
          </tr>
          </thead>`;
    }
    document.querySelector(selectorTbody).innerHTML = htmlString;
    return htmlString;
  }
  save() {
    localStorage.setItem("dsnv", JSON.stringify(this.danhSach));
  }
  get() {
    if (localStorage.getItem("dsnv")) {
      this.danhSach = JSON.parse(localStorage.getItem("dsnv"));
    }
  }
  deleteDT(ma) {
    let indexDel = this.danhSach.findIndex((user) => user.ma === ma);
    if (indexDel !== -1) {
      this.danhSach.splice(indexDel, 1);
    }
  }
  layThongtin(maSv) {
    for (let dt of this.danhSach) {
      if ((dt.ma = maSv)) {
        return dt;
      }
    }
  }
  update(maSv) {
    for (let dt of this.danhSach) {
      if (dt.ma === maSv.ma) {
        for (let key in dt) {
          dt[key] = maSv[key];
        }
      }
    }
  }
}
