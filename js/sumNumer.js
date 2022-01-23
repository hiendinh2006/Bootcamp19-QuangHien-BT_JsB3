// Mô hình 3 khối
// Khối 1: Người dùng nhập số có 2 chữ số
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính hợp lý với kết quả mà người dùng nhập
    // Bước 5: Xuất kết quả phép tính cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập




document.querySelector('#btnKySo').onclick =  function kySo(){
    var So=document.querySelector('#bai5').value;
    if(isNaN(So)){
        document.getElementById("kySo").innerHTML = `Nhập sai`
    } else if(So>=100 || So<10){
        document.getElementById("kySo").innerHTML = `Nhập sai`
    } else {
        var soHangdv=So%10;
        var soHangChuc=Math.floor(So/10);
        var tongKySo= Number(soHangdv) + Number(soHangChuc);
        console.log('Tổng của 2 số là:' , tongKySo)
        document.getElementById("kySo").innerHTML = `Tổng ký số là: ${tongKySo}`
    }
}
