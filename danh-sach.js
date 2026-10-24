// Danh sách mô phỏng. Thêm bài mới: chép file HTML vào thư mục sims/ rồi thêm một mục vào mảng dưới đây.
//   chuong : tên chương (các bài cùng chương được gom thành một nhóm)
//   lop    : 10, 11 hoặc 12
//   file   : đường dẫn tới file trong thư mục sims/
//   tags   : từ khóa để tìm kiếm
window.MO_PHONG = [
  {
    ten: "Ampe kế khung quay (lò xo xoắn) 3D",
    mota: "Cấu tạo: nam châm móng ngựa, lõi sắt non (từ trường xuyên tâm), khung dây trên khung nhôm, hai lò xo xoắn, kim và thang đo, điện trở sơn. Ngẫu lực từ M = NBIS cân bằng mômen lò xo kθ ⇒ thang đo chia đều. So sánh khung nhôm/bìa (cản dịu Fu-cô), bỏ lõi sắt, lò xo mềm/cứng, mắc ngược cực, đổi thang đo.",
    chuong: "Từ trường",
    lop: 12,
    file: "sims/ampe-ke-khung-quay-3d.html",
    tags: ["ampe kế", "điện kế", "khung quay", "lò xo xoắn", "ngẫu lực từ", "điện trở sơn", "cản dịu", "3D"]
  },
  {
    ten: "Điện kế số 0 ở giữa – chỉ số âm và dương 3D",
    mota: "Điện kế khung quay có vạch 0 chính giữa: dòng điện chiều thuận kim lệch phải (số dương), đổi chiều kim lệch trái (số âm). Thang ±50 μA, ±1 mA, ±10 mA; dòng xoay chiều 0,25 Hz kim lắc hai phía, 50 Hz kim đứng yên ở 0. Dùng trong thí nghiệm cảm ứng điện từ.",
    chuong: "Từ trường",
    lop: 12,
    file: "sims/dien-ke-so-0-giua-3d.html",
    tags: ["điện kế", "số 0 ở giữa", "galvanometer", "chiều dòng điện", "khung quay", "lò xo xoắn", "xoay chiều", "3D"]
  },
  {
    ten: "Cân dòng điện – đo cảm ứng từ 3D",
    mota: "Nam châm chữ U đặt trên cân điện tử, khung dây đồng treo trong khe từ. Thay đổi I, L, góc α, đảo chiều dòng điện; lực từ F = BIL sin α làm số chỉ cân thay đổi (định luật III Newton). Ghi bảng số liệu, vẽ đồ thị F – I, đo B của nam châm bí ẩn.",
    chuong: "Từ trường",
    lop: 12,
    file: "sims/can-dong-dien-3d.html",
    tags: ["lực từ", "cảm ứng từ", "cân dòng điện", "F = BIL sin α", "quy tắc bàn tay trái", "thực hành", "3D"]
  },
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
    ten: "Đàn ghi-ta điện 3D",
    mota: "Không gian 3D: đàn 6 dây, hai bộ thu (pickup) gồm nam châm và cuộn dây, ampli và loa. Kéo dây để gảy, thấy đoạn dây nhiễm từ, đường sức co giãn, dòng điện cảm ứng; nghe tiếng đàn thật; so sánh dây nylon, bỏ nam châm, số vòng dây, vị trí pickup.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/guitar-dien-3d.html",
    tags: ["ghi ta điện", "guitar", "pickup", "cuộn cảm ứng", "nam châm", "âm thanh", "3D"]
  },
  {
    ten: "Thí nghiệm về dòng điện Foucault 3D",
    mota: "Không gian 3D (Hình 18.5): kéo tấm kim loại sang bên rồi thả, con lắc dao động giữa hai cực nam châm. Tấm liền khối dừng nhanh, tấm có rãnh xẻ dao động lâu, tấm nhựa không bị cản; đồ thị so sánh nhiều lần thả.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/thi-nghiem-foucault-3d.html",
    tags: ["Foucault", "Fuco", "dòng điện xoáy", "con lắc", "rãnh xẻ", "3D"]
  },
  {
    ten: "Bếp từ 3D",
    mota: "Không gian 3D: cuộn dây phẳng bằng đồng, thanh ferit, mạch tạo dòng cao tần dưới mặt kính. Kéo thả nồi gang/nhôm/sứ, quan sát đường sức đi vào đáy nồi, dòng Fu-cô làm nóng nồi, đun sôi nước; bếp báo E1 khi không nhận nồi.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/bep-tu-3d.html",
    tags: ["bếp từ", "bếp cảm ứng", "Foucault", "Fuco", "nồi", "3D", "kéo thả"]
  },
  {
    ten: "Phanh điện từ 3D",
    mota: "Không gian 3D: đĩa nhôm/đồng quay qua khe nam châm điện lõi chữ C. Kéo mép đĩa để quay, quan sát hai xoáy dòng Fu-cô ngược chiều, đường sức B, vectơ v và lực phanh; so sánh đĩa liền, đĩa xẻ rãnh, đĩa nhựa.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/phanh-dien-tu-3d.html",
    tags: ["phanh từ", "phanh điện từ", "3D", "Foucault", "Fuco", "tàu điện", "đĩa xẻ rãnh"]
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
  },
  {
    ten: "Sạc không dây 3D – cấu tạo và nguyên tắc",
    mota: "Cuộn dây phẳng sơ cấp trong đế sạc tạo từ trường biến thiên; kéo thả điện thoại có cuộn thứ cấp lên đế để sinh suất điện động xoay chiều, chỉnh lưu bằng điốt nạp vào pin. Đồ thị i₁, e₂ và dòng nạp.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/sac-khong-day-3d.html",
    tags: ["sạc không dây", "3D", "kéo thả", "cuộn dây phẳng", "điốt", "chỉnh lưu", "pin", "Chart.js"]
  },
  {
    ten: "Nam châm rơi trong ống đồng 3D",
    mota: "Thả nam châm vào hai ống đặt cạnh nhau (nhựa, nhôm, đồng, đồng xẻ khe): trong ống đồng nam châm rơi từ từ do dòng điện xoáy trên thành ống. Quan sát hai vòng dòng điện ngược chiều, lực P và F từ, đồ thị quãng đường – thời gian.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/nam-cham-roi-ong-dong-3d.html",
    tags: ["nam châm rơi", "ống đồng", "dòng điện xoáy", "Foucault", "Fuco", "Lenz", "3D", "kéo thả"]
  },
  {
    ten: "Loa điện động và micro điện động 3D",
    mota: "Mặt cắt 3D: nam châm lõi N – vành S, khe từ xuyên tâm, cuộn dây gắn nón loa. Dòng xoay chiều tạo lực F = BIℓ làm màng dao động phát âm (có âm thanh thật); chế độ micro: kéo màng sinh suất điện động cảm ứng.",
    chuong: "Ứng dụng cảm ứng điện từ",
    lop: 12,
    file: "sims/loa-dien-dong-3d.html",
    tags: ["loa", "loa điện động", "micro", "lực từ", "quy tắc bàn tay trái", "âm thanh", "3D"]
  },
  {
    ten: "Từ thông và hiện tượng cảm ứng điện từ",
    mota: "Kéo, quay nam châm thẳng gần cuộn dây nối bóng đèn và khóa K; quan sát đường sức, từ thông, dòng điện cảm ứng, từ trường cảm ứng và cực từ của cuộn dây theo định luật Lenz.",
    chuong: "Cảm ứng điện từ",
    lop: 12,
    file: "sims/tu-thong-cam-ung-dien-tu.html",
    tags: ["từ thông", "Lenz", "Faraday", "nam châm", "cuộn dây", "khóa K"]
  },
  {
    ten: "Máy phát điện xoay chiều – khung dây quay trong từ trường",
    mota: "Khung dây quay đều giữa hai cực nam châm (3D): Φ = NBScos ωt, e = ωNBS sin ωt. Vành khuyên, chổi quét, đèn; đồ thị Φ(t), e(t); chế độ ẩn đáp án.",
    chuong: "Máy phát điện xoay chiều",
    lop: 12,
    file: "sims/may-phat-dien-xoay-chieu.html",
    tags: ["máy phát điện", "xoay chiều", "khung dây", "từ thông", "3D", "Chart.js"]
  },
  {
    ten: "Máy phát điện nhiều cặp cực",
    mota: "Rôto 3 cặp cực (nam châm vĩnh cửu hoặc nam châm điện), stato 6 cuộn dây mắc nối tiếp quấn ngược chiều xen kẽ; f = p·n (3D).",
    chuong: "Máy phát điện xoay chiều",
    lop: 12,
    file: "sims/may-phat-dien-nhieu-cap-cuc.html",
    tags: ["máy phát điện", "cặp cực", "rôto", "stato", "f = pn", "3D"]
  },
  {
    ten: "Máy phát điện xoay chiều ba pha",
    mota: "Ba cuộn dây lệch nhau 120°, rôto nam châm quay; ba suất điện động lệch pha 2π/3, giản đồ vectơ quay, mạch hình sao và dây trung hòa (3D).",
    chuong: "Máy phát điện xoay chiều",
    lop: 12,
    file: "sims/may-phat-dien-ba-pha.html",
    tags: ["ba pha", "máy phát điện", "lệch pha", "hình sao", "dây trung hòa", "3D"]
  },
  {
    ten: "Khí lí tưởng và áp suất thủy tĩnh – bọt khí",
    mota: "Kéo bọt khí lên xuống trong nước sâu đến 30 m: p = p₀ + ρgh, pV = nRT; thể tích và bán kính bọt khí thay đổi theo độ sâu.",
    chuong: "Khí lí tưởng",
    lop: 12,
    file: "sims/khi-li-tuong-bot-khi.html",
    tags: ["khí lí tưởng", "pV = nRT", "áp suất thủy tĩnh", "bọt khí", "độ sâu"]
  },
  {
    ten: "Khí lí tưởng trong xi lanh – động học phân tử 3D",
    mota: "Xi lanh thủy tinh với 160 phân tử chuyển động hỗn loạn (tô màu theo tốc độ, vết một phân tử). Đẳng nhiệt (kéo pít-tông), đẳng áp (quả nặng + bếp điện), đẳng tích (chốt khóa); áp kế, nhiệt kế, đồ thị p–V, V–T, p–T; áp suất tính từ va chạm phân tử khớp pV = nRT.",
    chuong: "Khí lí tưởng",
    lop: 12,
    file: "sims/khi-li-tuong-xi-lanh-3d.html",
    tags: ["khí lí tưởng", "Boyle", "Charles", "đẳng nhiệt", "đẳng áp", "đẳng tích", "động học phân tử", "pV = nRT", "3D"]
  },
  {
    ten: "Hạt nhân 3D: phóng xạ – chu kì bán rã, phân hạch dây chuyền",
    mota: "Hai chế độ. (1) Mẫu Ra-226, C-14, Co-60, I-131 phân rã ngẫu nhiên, phát tia α, β, γ; ống đếm Geiger kêu lách cách; tấm chắn giấy/nhôm/chì; đồ thị N = N₀·2^(−t/T). (2) Lò phản ứng: nơtron gây phân hạch U-235, thanh điều khiển, nước làm chậm, hệ số k, dừng khẩn cấp, tự động giữ k ≈ 1.",
    chuong: "Vật lí hạt nhân",
    lop: 12,
    file: "sims/hat-nhan-3d.html",
    tags: ["phóng xạ", "chu kì bán rã", "tia alpha", "tia beta", "tia gamma", "Geiger", "phân hạch", "phản ứng dây chuyền", "lò phản ứng", "nhà máy điện hạt nhân", "3D"]
  }
];
