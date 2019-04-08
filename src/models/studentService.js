function studentService() {
    this.layDanhSachSinhVien = function () {
    $.ajax({
        url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
        type: "GET"
    })
        .done(function (danhSachNguoiDung) {
            // taoBang(danhSachNguoiDung);
            var DSND = JSON.stringify(danhSachNguoiDung);
            localStorage.setItem("DSND", DSND);
        	console.log(DSND);
        })
        .fail(function (err) {
            console.log(err);
        })
	}

	this.kiemTraThongTinDangNhap = function(taikhoan,matkhau){
		$.ajax({
			url:`http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
			type: "GET"
		})
		    .done(function (result) {
                // location.href = "";
                console.log('Đăng nhập thành công')
            })
            .fail(function (err) {
                console.log(err);
            })
	}

    this.layThongTinNguoiDung = function (taiKhoan) {
    var nguoiDung;
    var DSND = JSON.parse(localStorage.getItem("DSND"));
    DSND.map(function(item){
        if(item.TaiKhoan === taiKhoan){
            nguoiDung = item;
            return;
        }
    })
    return nguoiDung;
	}
}