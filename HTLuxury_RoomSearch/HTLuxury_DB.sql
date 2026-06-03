-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS HTLuxury_DB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE HTLuxury_DB;

-- 1. BẢNG NguoiDung (Người Dùng)
CREATE TABLE NguoiDung (
    MaNguoiDung INT AUTO_INCREMENT PRIMARY KEY,
    TenDangNhap VARCHAR(100) NOT NULL,
    MatKhauBaoMat VARCHAR(255) NOT NULL,
    ChuoiBaoMat VARCHAR(255), -- Dùng để lưu Salt (muối) bảo mật
    Email VARCHAR(100) UNIQUE NOT NULL,
    SoDienThoai VARCHAR(20) NOT NULL,
    VaiTro VARCHAR(50) DEFAULT 'KhachHang', -- KhachHang, NhanVien, QuanLy
    SoLanDangNhapSai INT DEFAULT 0,
    ThoiGianMoKhoa DATETIME NULL
);

-- 2. BẢNG PhienDangNhap (Phiên Đăng Nhập)
CREATE TABLE PhienDangNhap (
    MaPhien INT AUTO_INCREMENT PRIMARY KEY,
    MaNguoiDung INT NOT NULL,
    ChuoiToken VARCHAR(255) NOT NULL,
    ThoiGianHetHan DATETIME NOT NULL,
    TrangThaiHoatDong BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (MaNguoiDung) REFERENCES NguoiDung(MaNguoiDung) ON DELETE CASCADE
);

-- 3. BẢNG KhoiPhucMatKhau (Khôi Phục Mật Khẩu)
CREATE TABLE KhoiPhucMatKhau (
    MaKhoiPhuc INT AUTO_INCREMENT PRIMARY KEY,
    MaNguoiDung INT NOT NULL,
    MaXacThuc_OTP VARCHAR(50) NOT NULL,
    ThoiGianHetHan DATETIME NOT NULL,
    DaSuDung BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (MaNguoiDung) REFERENCES NguoiDung(MaNguoiDung) ON DELETE CASCADE
);

-- 4. BẢNG NhatKyHeThong (Nhật Ký Hệ Thống)
CREATE TABLE NhatKyHeThong (
    MaNhatKy INT AUTO_INCREMENT PRIMARY KEY,
    MaNhanVien INT, -- Khóa ngoại liên kết tới NguoiDung (Vai trò nhân viên)
    HanhDong VARCHAR(255) NOT NULL,
    ThoiGian DATETIME DEFAULT CURRENT_TIMESTAMP,
    ChiTiet TEXT,
    FOREIGN KEY (MaNhanVien) REFERENCES NguoiDung(MaNguoiDung) ON DELETE SET NULL
);

-- 5. BẢNG Phong (Phòng)
CREATE TABLE Phong (
    MaPhong INT AUTO_INCREMENT PRIMARY KEY,
    LoaiPhong VARCHAR(100) NOT NULL,
    GiaPhong DECIMAL(15, 2) NOT NULL,
    ToiDaNguoiLon INT NOT NULL,
    ToiDaTreEm INT NOT NULL,
    TienNghi TEXT,
    TrangThai VARCHAR(50) DEFAULT 'ConTrong', -- ConTrong, DaDat, BaoTri
    MoTa TEXT,
    DanhSachAnh TEXT -- Lưu chuỗi tên ảnh hoặc URL
);

-- 6. BẢNG DatPhong (Đặt Phòng)
CREATE TABLE DatPhong (
    MaDatPhong INT AUTO_INCREMENT PRIMARY KEY,
    MaNguoiDung INT NOT NULL,
    MaPhong INT NOT NULL,
    NgayNhanPhong DATETIME NOT NULL,
    NgayTraPhong DATETIME NOT NULL,
    SoNguoiLon INT DEFAULT 2,
    SoTreEm INT DEFAULT 0,
    TongTien DECIMAL(15, 2) NOT NULL,
    TrangThai VARCHAR(50) DEFAULT 'ChoDuyet', -- ChoDuyet, DaXacNhan, DaHuy
    YeuCauDacBiet TEXT,
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    ThoiGianHetHanGiuPhong DATETIME,
    FOREIGN KEY (MaNguoiDung) REFERENCES NguoiDung(MaNguoiDung),
    FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong)
);

-- 7. BẢNG ThanhToan (Thanh Toán)
CREATE TABLE ThanhToan (
    MaThanhToan INT AUTO_INCREMENT PRIMARY KEY,
    MaDatPhong INT NOT NULL,
    PhuongThucThanhToan VARCHAR(50) NOT NULL,
    SoTien DECIMAL(15, 2) NOT NULL,
    NgayGiaoDich DATETIME DEFAULT CURRENT_TIMESTAMP,
    TrangThai VARCHAR(50) DEFAULT 'ChuaThanhToan',
    MaGiaoDich VARCHAR(100),
    FOREIGN KEY (MaDatPhong) REFERENCES DatPhong(MaDatPhong) ON DELETE CASCADE
);

-- 8. BẢNG DichVu (Dịch Vụ)
CREATE TABLE DichVu (
    MaDichVu INT AUTO_INCREMENT PRIMARY KEY,
    TenDichVu VARCHAR(255) NOT NULL,
    MoTa TEXT,
    GiaDichVu DECIMAL(15, 2) NOT NULL
);

-- 9. BẢNG DichVuDatPhong (Dịch Vụ Đặt Phòng)
CREATE TABLE DichVuDatPhong (
    MaDichVuDatPhong INT AUTO_INCREMENT PRIMARY KEY,
    MaDatPhong INT NOT NULL,
    MaDichVu INT NOT NULL,
    SoLuong INT NOT NULL DEFAULT 1,
    TongTien DECIMAL(15, 2) NOT NULL,
    NgaySuDung DATETIME,
    FOREIGN KEY (MaDatPhong) REFERENCES DatPhong(MaDatPhong) ON DELETE CASCADE,
    FOREIGN KEY (MaDichVu) REFERENCES DichVu(MaDichVu)
);

-- 10. BẢNG HoTroKhachHang (Hỗ Trợ Khách Hàng)
CREATE TABLE HoTroKhachHang (
    MaHoTro INT AUTO_INCREMENT PRIMARY KEY,
    MaNguoiDung INT NOT NULL,
    LoaiVanDe VARCHAR(100),
    NoiDung TEXT NOT NULL,
    TrangThai VARCHAR(50) DEFAULT 'Moi', -- Moi, DangXuLy, DaGiaiQuyet
    NgayTao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (MaNguoiDung) REFERENCES NguoiDung(MaNguoiDung)
);

-- ==============================================================
-- BƠM DỮ LIỆU MẪU ĐỂ BẠN LINH CÓ CÁI TEST CHỨC NĂNG
-- ==============================================================

INSERT INTO NguoiDung (TenDangNhap, MatKhauBaoMat, Email, SoDienThoai, VaiTro) 
VALUES ('nguyenvana', 'hash_123', 'nguyenvana@email.com', '0901234567', 'KhachHang');

INSERT INTO Phong (LoaiPhong, GiaPhong, ToiDaNguoiLon, ToiDaTreEm, TienNghi, TrangThai, MoTa)
VALUES 
('Luxury Suite', 3800000, 2, 1, 'Wifi, Bồn tắm, View biển', 'ConTrong', 'Phòng sang trọng nhất'),
('Deluxe Room', 2500000, 2, 0, 'Wifi, Smart TV', 'ConTrong', 'Phòng tiêu chuẩn');

INSERT INTO DichVu (TenDichVu, MoTa, GiaDichVu)
VALUES 
('Massage Spa', 'Massage thư giãn 60 phút', 500000),
('Buffet Sáng', 'Buffet tiêu chuẩn 5 sao', 300000);