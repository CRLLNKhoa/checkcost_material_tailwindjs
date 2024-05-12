export function getTomorrowDateString() {
    // Lấy ngày hiện tại
    const currentDate = new Date();
  
    // Tăng ngày hiện tại lên 1 để lấy ngày mai
    currentDate.setDate(currentDate.getDate() + 1);
  
    // Lấy ngày, tháng và năm của ngày mai
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const year = currentDate.getFullYear();
  
    // Đảm bảo ngày và tháng có định dạng dd/mm
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    // Trả về chuỗi ngày tháng năm của ngày mai
    return formattedDay + '/' + formattedMonth + '/' + year;
  }