$(document).ready(function(){

	console.log("success");
	// alert("ahihi");

	var studentServices = new studentService();

	$('#btnSearch').click( function(){
		layDanhSachNguoiDung();	
	});
    

	$('body').delegate('#btnLogin','click',function(){
		var inputUserName = $('#userName').val();
		var inputPassWord = $('#passWord').val();
		studentServices.kiemTraThongTinDangNhap(inputUserName,inputPassWord);
		console.log(inputUserName);
		console.log(inputPassWord);	
	});
	
	function layDanhSachNguoiDung() {
        studentServices.layDanhSachSinhVien();
    };
})
