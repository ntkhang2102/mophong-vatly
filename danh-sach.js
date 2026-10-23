// Danh sách mô phỏng. Thêm bài mới: chép file HTML vào thư mục sims/ rồi thêm một mục vào mảng dưới đây.
//   chuong : tên chương (các bài cùng chương được gom thành một nhóm)
//   lop    : 10, 11 hoặc 12
//   file   : đường dẫn tới file trong thư mục sims/
//   tags   : từ khóa để tìm kiếm
window.MO_PHONG = [
  {
    ten: "Dòng điện cảm ứng: ống dây, biến trở và khung dây",
    mota: "Dịch con chạy, đóng/mở khóa K, đưa khung lại gần hoặc ra xa để xem chiều dòng điện cảm ứng theo định luật Lenz. Có chế độ ẩn đáp án và đố nhanh 9 dạng câu hỏi.",
    chuong: "Cảm ứng điện từ",
    lop: 12,
    file: "sims/cam-ung-ong-day-bien-tro.html",
    tags: ["Lenz", "từ thông", "ống dây", "biến trở", "khung dây"]
  },
  {
    ten: "Nam châm, cuộn dây và điện kế",
    mota: "Kéo nam châm lại gần hoặc ra xa cuộn dây, quan sát kim điện kế, cực của mặt X, lực từ và sự chuyển hóa cơ năng thành điện năng. Luyện đề Đúng/Sai có chấm điểm và minh họa từng ý.",
    chuong: "Cảm ứng điện từ",
    lop: 12,
    file: "sims/nam-cham-cuon-day-dien-ke.html",
    tags: ["Lenz", "Faraday", "nam châm", "điện kế", "đúng sai", "năng lượng"]
  },
  {
    ten: "Máy biến áp: cấu tạo, đường sức từ và dòng điện Foucault",
    mota: "Chọn nguồn xoay chiều hoặc một chiều, có hoặc không có lõi thép, lõi lá thép mỏng hoặc khối đặc. Quan sát đường sức đổi chiều trong lõi, dòng Foucault làm nóng lõi, đóng/mở khóa K₂ ở cuộn thứ cấp.",
    chuong: "Cảm ứng điện từ",
    lop: 12,
    file: "sims/may-bien-ap.html",
    tags: ["máy biến áp", "Foucault", "Fuco", "dòng điện xoáy", "lõi thép", "xoay chiều", "tăng áp", "hạ áp"]
  },
  {
    ten: "Sạc điện thoại không dây",
    mota: "Cuộn dây trong đế sạc (sơ cấp) và trong điện thoại (thứ cấp). Kéo điện thoại ra xa hoặc lệch tâm, đổi nguồn xoay chiều/một chiều để xem khi nào pin được sạc.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#sac",
    tags: ["sạc không dây", "điện thoại", "máy biến áp", "cảm ứng điện từ"]
  },
  {
    ten: "Đàn ghi-ta điện",
    mota: "Dây thép bị nam châm từ hóa, dao động làm từ thông qua cuộn dây biến thiên. Gảy đàn, xem tín hiệu điện, nghe âm thanh thật; thử dây nylon và bỏ nam châm.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#guitar",
    tags: ["ghi ta điện", "guitar", "cuộn cảm ứng", "nam châm", "âm thanh"]
  },
  {
    ten: "Thí nghiệm về dòng điện Foucault",
    mota: "Con lắc là tấm kim loại dao động giữa hai cực nam châm: tấm liền khối dừng nhanh, tấm có rãnh xẻ dao động lâu hơn, tấm nhựa không bị cản.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#foucault",
    tags: ["Foucault", "Fuco", "dòng điện xoáy", "con lắc", "rãnh xẻ"]
  },
  {
    ten: "Bếp từ",
    mota: "Dòng xoay chiều tần số cao trong cuộn dây phẳng tạo dòng Foucault làm nóng đáy nồi. So sánh nồi gang, nhôm, sứ; nhấc nồi lên; quan sát mặt kính không tự nóng.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#bep",
    tags: ["bếp từ", "bếp cảm ứng", "Foucault", "Fuco", "nồi"]
  },
  {
    ten: "Phanh điện từ",
    mota: "Đĩa kim loại quay qua từ trường của nam châm điện: dòng Foucault tạo lực phanh tỉ lệ với tốc độ. Đổi cường độ dòng điện và vật liệu đĩa.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#phanh",
    tags: ["phanh từ", "phanh điện từ", "Foucault", "Fuco", "tàu điện"]
  },
  {
    ten: "Lò nung cao tần (lò cảm ứng)",
    mota: "Phối cảnh 3D: cuộn dây ống đồng quanh nồi nung, đường sức từ đổi chiều, dòng Fu-cô trong kim loại làm thép nóng đỏ rồi nóng chảy. So sánh xoay chiều/một chiều, tần số, thép/đồng/thủy tinh.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/ung-dung-cam-ung.html#lo",
    tags: ["lò nung", "lò cao tần", "lò cảm ứng", "Foucault", "Fuco", "nóng chảy"]
  },
  {
    ten: "Lò nung cao tần 3D – kéo thả kim loại",
    mota: "Không gian 3D xoay, phóng to được. Kéo phôi thép, thỏi đồng, lon nhôm, khối thủy tinh thả vào nồi nung; quan sát dòng điện trong cuộn dây, đường sức từ, dòng Fu-cô và kim loại nóng chảy.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/lo-nung-cao-tan-3d.html",
    tags: ["lò nung", "3D", "kéo thả", "lò cảm ứng", "Foucault", "Fuco", "nóng chảy"]
  }
];
