document.getElementById("btnTinhLuong").onclick = function (event) {
  event.preventDefault();

  let nhanVien = {};
  let arrInput = document.querySelectorAll("#form input, #form select");
  console.log(arrInput);

  for (let i = 0; i < arrInput.length; i++) {
    let tagInput = arrInput[i];
    let { id, value } = tagInput;

    nhanVien = { ...nhanVien, [id]: value };
  }

  let contentNV = `
          <h3 class="text-white">Thông tin nhân viên</h3>
                <p class="text-warning">Mã nhân viên: ${nhanVien.maNV}</p>
                <p class="text-warning">Tên nhân viên: ${nhanVien.tenNV}</p>
                <p class="text-warning">Chức vụ: ${nhanVien.chucVu} </p>
                <p class="text-warning">Tổng lương: ${
                  nhanVien.hsLuong * nhanVien.luongCB
                }</p>`;
  document.getElementById("showInfo").innerHTML = contentNV;
};
