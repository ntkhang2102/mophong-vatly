---
name: mo-phong-vat-ly
description: Tạo, sửa và đưa lên web các mô phỏng Vật lí (HTML/3D Three.js, tiếng Việt) của giáo viên Vật lí 12 vào website GitHub Pages https://ntkhang2102.github.io/mophong-vatly/ (repo ntkhang2102/mophong-vatly). Dùng khi người dùng yêu cầu "tạo mô phỏng / tạo HTML / mô hình 3D / thí nghiệm ảo", gửi file HTML để đưa lên web, hoặc muốn sửa một trang có link ntkhang2102.github.io/mophong-vatly/sims/....
---

# Mô phỏng Vật lí → website mophong-vatly

Người dùng là giáo viên Vật lí THPT ở Việt Nam (chủ yếu Vật lí 12, chương trình GDPT 2018). Trả lời và làm giao diện **bằng tiếng Việt**. Làm **cẩn thận, từng mục một, kiểm tra kỹ trước khi báo kết quả**.

## 0. Bảo đảm có repo
- Nếu phiên chưa có thư mục repo `mophong-vatly`: gắn repo `ntkhang2102/mophong-vatly` (công cụ add_repo, quyền push) rồi clone theo hướng dẫn công cụ trả về. Nếu không gắn được, báo người dùng mở phiên mới có chọn repo này (hoặc kết nối GitHub tại https://claude.ai/connect-github).
- Đọc `CLAUDE.md` ở gốc repo – đó là quy ước chi tiết, luôn ưu tiên làm theo.

## 1. Tạo trang mới
- Một file độc lập `sims/<ten-khong-dau>.html` (CSS + JS bên trong). Lấy phần `<head>`/CSS và khung bố cục từ `sims/loa-dien-dong-3d.html` làm mẫu.
- Thư viện cục bộ + dự phòng CDN:
  ```html
  <script src="lib/three.min.js"></script>
  <script>window.THREE||document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>')</script>
  ```
  (Chart.js: `lib/chart.umd.min.js`, CDN `chart.js@4.4.1`.)
- Bắt buộc: `<a class="back" href="../index.html">← Tất cả mô phỏng</a>`.
- Bố cục: khung 3D trái (nền sáng), bảng điều khiển tối 370 px phải, ≤ 860 px xếp chồng (điện thoại). Bảng gồm: điều khiển → Hiển thị (bật/tắt) → Kết quả (số + đồ thị) → Giải thích từng bước (động) → Đố nhanh (trả lời xong tự minh họa) → Ghi nhớ.
- 3D: Three.js r128, camera quỹ đạo tự viết, nút góc nhìn, kéo vật bằng raycast, nhãn Sprite canvas, mũi tên lực trụ + nón. Xuất `window.__ten={st,...}` để kiểm thử.
- Vật lí phải đúng số liệu (công thức SGK, đơn vị SI, số thập phân dùng dấu phẩy).

## 2. Đưa lên mục lục
Thêm mục vào `danh-sach.js`: `{ten, mota, chuong, lop, file, tags}`. Dùng lại tên chương có sẵn nếu phù hợp ("Từ trường", "Cảm ứng điện từ", "Ứng dụng cảm ứng điện từ", "Máy phát điện xoay chiều", "Máy biến áp – truyền tải điện năng", "Khí lí tưởng", "Vật lí hạt nhân").

Nếu người dùng **gửi file HTML có sẵn**: chép vào `sims/`, đổi link CDN three.js/Chart.js sang thư viện cục bộ + dự phòng, chèn link `class="back"` trước `<h1>` đầu tiên, thêm vào `danh-sach.js`.

## 3. Kiểm thử (bắt buộc trước khi báo cáo)
- Playwright với Chromium `/opt/pw-browsers/chromium` (args `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`), máy chủ `python3 -m http.server 8765` tại gốc repo.
- Chụp ảnh 1280×800 và 390×844, **xem ảnh**, sửa chữ chồng/nhỏ/khuất; không cuộn ngang; không lỗi JS.
- Kiểm tra định lượng: gọi hàm bước thời gian qua `window.__ten`, so với công thức.
- Toàn site: `node tools/kiem-tra-site.mjs` (có mạng) và `node tools/kiem-tra-site.mjs <bản sao index.html+danh-sach.js+sims>` (offline).

## 4. Đẩy lên web và giao kết quả
- Nếu push bị từ chối: `git fetch origin main` → xem commit mới → `git rebase origin/main` (không ghi đè việc người khác) → push lại.
- Commit tác giả `ntkhang2102 <ntkhang2102@gmail.com>`, thông điệp tiếng Việt; `git push origin main` (web cập nhật sau 1–2 phút).
- Đóng gói offline: `zip -qr mophong-vatly-offline.zip index.html danh-sach.js README.md sims`.
- Gửi người dùng: file HTML, ảnh minh họa, file zip; báo cáo ngắn bằng tiếng Việt kèm link `https://ntkhang2102.github.io/mophong-vatly/sims/<file>.html`.
