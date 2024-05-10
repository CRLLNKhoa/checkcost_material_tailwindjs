export function pickGift(gifts) {
    let totalRatio = 0;
  
    // Tính tổng tỉ lệ của tất cả các quà
    gifts.forEach(gift => {
      totalRatio += gift.ratio;
    });
  
    // Sinh số ngẫu nhiên trong khoảng từ 0 đến tổng tỉ lệ
    let randomNumber = Math.random() * totalRatio;
    let selectedGift = null;
  
    // Lặp qua danh sách quà và chọn quà dựa trên tỉ lệ
    for (let i = 0; i < gifts.length; i++) {
      if (randomNumber < gifts[i].ratio) {
        selectedGift = gifts[i];
        break;
      }
      randomNumber -= gifts[i].ratio;
    }
  
    return selectedGift;
  }