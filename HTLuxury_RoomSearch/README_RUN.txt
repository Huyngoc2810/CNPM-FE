HƯỚNG DẪN CHẠY PROJECT HT LUXURY

Cấu trúc:
HTLuxury_RoomSearch/
├── API/
│   ├── db.php
│   └── rooms.php
├── CSS/
│   └── style.css
├── DATABASE/
│   └── ht_luxury.sql
├── IMAGES/
├── JS/
│   └── script.js
└── index.html

Cách chạy bằng WampServer:

1. Giải nén project.
2. Copy thư mục HTLuxury_RoomSearch vào:
   C:\wamp64\www\

3. Mở WampServer, bật Apache và MySQL.
   Đợi icon Wamp chuyển sang màu xanh.

4. Vào phpMyAdmin:
   http://localhost/phpmyadmin

5. Import file:
   HTLuxury_RoomSearch/DATABASE/ht_luxury.sql

6. Mở website:
   http://localhost/HTLuxury_RoomSearch/index.html

Nếu WampServer dùng port khác:
   http://localhost:8080/HTLuxury_RoomSearch/index.html

Ghi chú:
- Chức năng đã làm: tìm kiếm phòng và bộ lọc.
- Bộ lọc gồm: từ khóa, loại phòng, khoảng giá, ngày nhận/trả, số khách.
- Backend PHP kiểm tra ngày trả phải sau ngày nhận.
- Database MySQL có bảng rooms và bookings.
- Nếu mở trực tiếp index.html, PHP không chạy; khi đó web dùng dữ liệu mẫu trong JS.


Bản cập nhật mới:
- Tăng danh sách lên 14 phòng.
- Hero banner dùng ảnh khách sạn do người dùng cung cấp.
- Ảnh phòng đã được tạo sẵn dạng WEBP dung lượng nhẹ và đã gắn trực tiếp vào website.
