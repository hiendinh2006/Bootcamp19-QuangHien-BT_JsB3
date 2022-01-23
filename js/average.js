// Mô hình 3 khối
// Khối 1: Người dùng nhập 5 số tự nhiên
// Khối 2: 
    // Bước 1: Nắm bắt sự kiện của nút button
    // Bước 2: Khai báo biến vào gán giá trị mà người dùng nhập vào cho biến
    // Bước 3: Kiểm tra giá trị của người dùng có phụ hợp với phép tính, nếu sai yêu cầu nhập lại
    // Bước 4: Thực hiện phép tính với 5 cạnh cộng lại chia 5
    // Bước 5: Xuất kết quả phép tính cuối cùng theo kết quả mà người dùng nhập
// Khối 3: Xuất kết quả ra màn hình theo kết quả mà người dùng nhập





document.querySelector('#btnTrungBinh').onclick =  function trungBinh(){
    
    var a2 = 0 ;
    var averag_value = 0;
    var soThuc1 = document.querySelector('#bai2_numb1').value ;
    var soThuc2 = document.querySelector('#bai2_numb2').value ;
    var soThuc3 = document.querySelector('#bai2_numb3').value ;
    var soThuc4 = document.querySelector('#bai2_numb4').value ;
    var soThuc5 = document.querySelector('#bai2_numb5').value ;

    if(isNaN(soThuc1) || isNaN(soThuc2) || isNaN(soThuc3) || isNaN(soThuc4) ||isNaN(soThuc5)){
        document.getElementById("averageValue").innerHTML = `Nhập sai`
    } else {
        var averag_value = Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5);
        var a2 = averag_value / 5 ;
        console.log('Giá trị trung bình là : ', a2);
        document.getElementById('averageValue').innerHTML = `Giá trị trung bình là: ${a2}`
    }
}