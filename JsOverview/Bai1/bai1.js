function displayDate() {
    let day = prompt("Nhâp ngày:");
    let month = prompt("Nhâp tháng:");
    let year = prompt("Nhâp năm:");
    document.write(day + "-" + month + "-" + year);
}

function calRate() {
    let myMoney = prompt("Nhập số tiền bạn muốn gửi:");
    let rate = prompt("Nhập vào lãi suất hàng năm:");
    let year = prompt("Nhập vào sô năm gửi:");
    let moneyLastYear = myMoney + rate * year
    document.write("Số tiền nhận được sau" + year + "là:" + moneyLastYear);
}

function searchUer() {
    let name = prompt("Nhập tên người nhân:");
    let address = prompt("Nhập dịa chỉ nhận:");
    let date = prompt("Nhập ngày gửi:");
    document.write(name+ " thương nhớ, Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn. Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào. Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều." +address + "," + date)
}

function area() {
    let r = prompt("nhập bán kính của hình tròn:");
    let C = 2 * r * Math.PI
    let S = r**2 * r
    document.getElementById('demo').innerHTML = "Chu vi hình tròn là:" + C + "<br>" + "Diện tích hình tròn là:" + S;
}

