import { Student, Employee, Customer } from "./Person.js";
export class ListPerson {
  danhSach = [];
  themDoiTuong(dt) {
    this.danhSach.push(dt);
  }
  renderTable(selectorTbody) {
  renderTable(selectorTbody) {
    let htmlString = "";
    let htmlString = "";
    let string = "";
    let string = "";
    for (let user of this.danhSach) {
    for (let user of this.danhSach) {
      switch (user.class) {
      switch (user.class) {
        case "student":
        case "student":
          var person = new Student();
          var person = new Student();
          Object.assign(person, user);
          Object.assign(person, user);
          string = `Tổng Điểm : ${person.tinhDiemTrungBinh()}`;
          string = `Tổng Điểm : ${person.tinhDiemTrungBinh()}`;
          break;
          break;
        case "employee":
        case "employee":
          var person = new Employee();
          var person = new Employee();
          Object.assign(person, user);
          Object.assign(person, user);
          string = `Tổng Lương : ${person.tinhLuong()}`;
          string = `Tổng Lương : ${person.tinhLuong()}`;
          break;
          break;
        case "customer":
        case "customer":
          var person = new Customer();
          var person = new Customer();
          Object.assign(person, user);
          Object.assign(person, user);
          string = `-`;
          string = `-`;
          break;
          break;
      }
      }

      htmlString += `<thead >
      htmlString += `<thead >
          <tr>
          <tr>
            <th>${user.ma}</th>
            <th>${user.ma}</th>
            <th>${user.hoTen}</th>
            <th>${user.hoTen}</th>
            <th>${user.email}</th>
            <th>${user.email}</th>
            <th>${user.diaChi}</th>
            <th>${user.diaChi}</th>
            <th>${string}</th>									
            <th>${string}</th>									
            <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
            <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
            <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
            <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
            data-target="#myModal" onclick="suaDoiTuong('${user.ma}')"></button> 
            data-target="#myModal" onclick="suaDoiTuong('${user.ma}')"></button> 
            data-target="#myModal" onclick="suaDoiTuong('${user.ma}')"></button> 
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            </th>
            </th>
          </tr>
          </tr>
          </thead>`;
          </thead>`;
    }
    }
    document.querySelector(selectorTbody).innerHTML = htmlString;
    document.querySelector(selectorTbody).innerHTML = htmlString;
    return htmlString;
    return htmlString;
  }
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
  layThongtin(ma) {
    let edit = this.danhSach.find( user => {
      return user.ma === ma;
    });
    return edit;
  }
  update(arr) {
    let user = this.layThongtin(arr.ma);
    Object.assign(user, arr);
  }
  sortName(list, number) {
    if (number === 1) {
      list.sort((a, b) => {
        let x = a.hoTen.toLowerCase();
        let y = b.hoTen.toLowerCase();
        if (x < y) -1;
        if (x > y)  1;
        return 0;
      });
    } else {
      list.sort((a, b) => {
        let x = a.hoTen.toLowerCase();
        let y = b.hoTen.toLowerCase();
        if (x < y) 1;
        if (x > y) -1;
        return 0;
      });
    }
    return list;
  }

  filterUser(type) {
    if (type) {
      let filterList = this.danhSach.filter((user) => {
        return user.class === type;
      });
      return filterList;
    } else {
      return this.danhSach;
    }
  }
}
