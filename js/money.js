// Mô hình 3 khối
// Khối 1: Người dùng nhập số ngày làm
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính hợp lý với kết quả mà người dùng nhập
    // Bước 5: Xuất kết quả phép tính cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập


document.querySelector('#btnTinhTien').onclick =  function tinhTien(){
    var soNgay = +document.querySelector('#bai1').value ;
    if(isNaN(soNgay)){
        document.getElementById("workDay").innerHTML = `Nhập sai`
    } else {
        var tienLuong = soNgay * 100000;
        console.log('Tiền Lương Nhận Được Là : ', tienLuong);
        document.getElementById("workDay").innerHTML = `Tiền lương nhận được là ${tienLuong} VNĐ`
    }
}
