# Hướng dẫn cho Claude – website mô phỏng Vật lí

## Bối cảnh
- Chủ dự án: giáo viên Vật lí THPT (chủ yếu **Vật lí 12**, chương trình GDPT 2018) ở Việt Nam. Giao tiếp và giao diện **bằng tiếng Việt**.
- Website: https://ntkhang2102.github.io/mophong-vatly/ (GitHub Pages, nhánh `main`, thư mục gốc). Repo: `ntkhang2102/mophong-vatly`.
- Mỗi lần giáo viên yêu cầu "tạo HTML / mô phỏng", mặc định là: **làm trang mới trong `sims/`, thêm vào mục lục, kiểm thử kỹ, commit và push lên `main`** (đẩy lên là web tự cập nhật sau 1–2 phút), rồi gửi kèm file HTML và bản offline `.zip`.
- Giáo viên muốn làm **cẩn thận, từng mục một, kiểm tra kỹ trước khi báo kết quả**. Báo cáo cuối bằng tiếng Việt, có link trang trên web.

## Cấu trúc
```
index.html      Trang mục lục (nền trắng): tìm kiếm, lọc lớp, gom theo `chuong`
danh-sach.js    window.MO_PHONG = [{ten, mota, chuong, lop, file, tags}, ...]
sims/*.html     Mỗi mô phỏng là MỘT file HTML độc lập (CSS + JS bên trong)
sims/lib/       three.min.js (r128), chart.umd.min.js (4.4.1) – bản cục bộ để chạy offline
tools/kiem-tra-site.mjs   Kiểm thử toàn site bằng Playwright
```

## Quy ước cho mỗi trang mô phỏng
- Nạp thư viện cục bộ, dự phòng CDN (CDN bị chặn trong môi trường cloud):
  ```html
  <script src="lib/three.min.js"></script>
  <script>window.THREE||document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>')</script>
  ```
- Có link quay lại: `<a class="back" href="../index.html">← Tất cả mô phỏng</a>` (bắt buộc có `class="back"` – kiểm thử dựa vào đó).
- Bố cục chuẩn (xem `sims/loa-dien-dong-3d.html` làm mẫu, chép phần `<head>`/CSS): khung 3D bên trái (nền sáng `#e5e9f0`), bảng điều khiển tối 370 px bên phải; ≤ 860 px xếp chồng cho điện thoại. Chip trạng thái góc trên trái, cột nút góc nhìn góc trên phải, dòng gợi ý dưới cùng.
- Các mục trong bảng: điều khiển → Hiển thị (checkbox bật/tắt từng thứ) → Kết quả (ô số + đồ thị canvas) → Giải thích từng bước (động theo trạng thái) → Đố nhanh (trả lời xong tự chuyển mô phỏng sang tình huống minh họa) → Ghi nhớ.
- 3D: Three.js r128, camera quỹ đạo tự viết (`cam`/`tc`, `VIEWS`, `setView`), kéo vùng trống để xoay, lăn chuột/chụm 2 ngón để zoom, kéo vật bằng raycast lên mặt phẳng. Nhãn chữ là Sprite vẽ bằng canvas (`makeLabel`). Mũi tên lực: nhóm trụ + nón (`mkArrow`/`setArrow`).
- Có `window.__ten={st,...}` để kiểm thử tự động.
- Vật lí phải **đúng số liệu**; kiểm tra định lượng bằng Playwright (gọi hàm bước thời gian, so với công thức).
- Lỗi hay gặp: `Object.assign(mesh,{position:...})` lỗi (position chỉ đọc) → dùng `.position.copy()`; thuộc tính `hidden` bị `display:flex` ghi đè → dùng `style.display`; `dt` âm ở khung hình đầu → `clamp((now-last)/1000,0,0.05)`.

## Thêm trang mới vào web
1. Tạo `sims/ten-trang.html` theo quy ước trên.
2. Thêm mục vào `danh-sach.js` (đúng `chuong` hiện có nếu phù hợp: "Từ trường", "Cảm ứng điện từ", "Ứng dụng cảm ứng điện từ", "Máy phát điện xoay chiều", "Máy biến áp – truyền tải điện năng", "Khí lí tưởng", "Vật lí hạt nhân").
3. Kiểm thử (máy tính 1280×800 và điện thoại 390×844, chụp ảnh và XEM ảnh; không cuộn ngang; không lỗi JS):
   ```bash
   (python3 -m http.server 8765 &)                    # chạy tại gốc repo
   node tools/kiem-tra-site.mjs                        # có mạng
   cp -r index.html danh-sach.js sims /tmp/off/ && node tools/kiem-tra-site.mjs /tmp/off   # offline
   ```
4. Commit với tác giả `ntkhang2102 <ntkhang2102@gmail.com>`, thông điệp tiếng Việt, rồi `git push origin main`.
5. Tạo bản offline: `zip -qr mophong-vatly-offline.zip index.html danh-sach.js README.md sims` và gửi cho giáo viên cùng file HTML.

## Nếu giáo viên gửi file HTML có sẵn
Chép vào `sims/`, thay link CDN của three.js / Chart.js bằng thư viện cục bộ + dự phòng CDN như trên, chèn link `class="back"` trước `<h1>` đầu tiên, thêm vào `danh-sach.js`, kiểm thử, push.
