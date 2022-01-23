// Mô hình 3 khối
// Khối 1: Người dùng nhập số tiền muốn quy đổi
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính hợp lý với kết quả mà người dùng nhập
    // Bước 5: Xuất kết quả phép tính cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập




document.querySelector('#btnUSD').onclick =  function doiTien(){
    var USD = document.querySelector('#bai3').value ;
    if(isNaN(USD)){
        document.getElementById("doiTien").innerHTML = `Nhập sai`
    } else {
        var VND = USD * 23500;
        console.log(VND +' ' + 'VND');
        document.getElementById("doiTien").innerHTML = `Số tiền quy đổi là: ${VND} VNĐ`
    }    
}