# Mô phỏng Vật lí

Bộ mô phỏng Vật lí tương tác cho học sinh THPT, chạy trực tiếp trên trình duyệt (GitHub Pages).

## Cấu trúc

```
index.html      Trang mục lục (tìm kiếm, lọc theo lớp, gom theo chương)
danh-sach.js    Danh sách mô phỏng hiển thị trên trang mục lục
sims/           Mỗi mô phỏng là một file HTML độc lập
```

## Thêm mô phỏng mới

1. Chép file HTML vào thư mục `sims/`.
2. Trong file đó, thêm link quay lại: `<a href="../index.html">← Tất cả mô phỏng</a>`.
3. Thêm một mục vào `danh-sach.js` (tên, mô tả, chương, lớp, đường dẫn file, từ khóa).

## Bật GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, thư mục `/ (root)` → Save.
