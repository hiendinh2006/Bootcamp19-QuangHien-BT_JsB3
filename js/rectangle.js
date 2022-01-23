// Mô hình 3 khối
// Khối 1: Người dùng nhập số chiều cao và chiều dài mong muốn
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính hợp lý với chuvi=(dai+rong)*2 và diệntích=dài*rộng 
    // Bước 5: Xuất kết quả phép tính cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập






document.querySelector('#btnHCN').onclick =  function hinhCN(){
    var chieuDai = document.querySelector('#bai4_long').value ;
    var chieuRong = document.querySelector('#bai4_wide').value ;
    if(isNaN(chieuDai) || isNaN(chieuRong) ){
        document.getElementById("acreage").innerHTML = `Nhập sai giá trị chiều dài hoặc chiều rộng`
    } else {
        var dienTich = chieuDai * chieuRong
        var chuVi = (Number(chieuDai)+Number(chieuRong))*2
        console.log('chu vi HCN la:' , chuVi);
        console.log('dien tich HCN la:' , dienTich)
        document.getElementById("acreage").innerHTML = `Diện tích hình chữ nhật là: ${dienTich}`
        document.getElementById("perimeter").innerHTML = `Chu vi hình chữ nhật là: ${chuVi}`
    }
    
}