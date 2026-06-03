CREATE DATABASE IF NOT EXISTS ht_luxury
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE ht_luxury;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    type VARCHAR(80) NOT NULL,
    price INT NOT NULL,
    capacity INT NOT NULL,
    bed_type VARCHAR(120) NOT NULL,
    area VARCHAR(50) NOT NULL,
    view VARCHAR(120) NOT NULL,
    amenities TEXT NOT NULL,
    status ENUM('available', 'booked', 'maintenance', 'unavailable') DEFAULT 'available',
    image VARCHAR(255) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_price (price),
    INDEX idx_capacity (capacity),
    INDEX idx_status (status)
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_code VARCHAR(40) NOT NULL UNIQUE,
    room_id INT NOT NULL,
    customer_name VARCHAR(120) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(120) NOT NULL,
    checkin_date DATE NOT NULL,
    checkout_date DATE NOT NULL,
    guests INT NOT NULL,
    status ENUM('pending', 'confirmed', 'checked_in', 'checked_out', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    INDEX idx_booking_date (checkin_date, checkout_date),
    INDEX idx_booking_status (status)
);

INSERT INTO rooms
(name, type, price, capacity, bed_type, area, view, amenities, status, image)
VALUES
('Deluxe City Room', 'Deluxe', 2500000, 2, '1 giường King', '35m²', 'View thành phố', 'Wifi, Smart TV, Bồn tắm, Cửa sổ kính', 'available', 'IMAGES/room-01.webp'),
('Premier Suite', 'Premier Suite', 3200000, 3, '1 King + sofa', '52m²', 'View hồ bơi', 'Wifi, Sofa cao cấp, Bồn tắm, Mini bar', 'available', 'IMAGES/room-02.webp'),
('Presidential Skyline', 'Presidential', 5900000, 4, '2 giường King', '86m²', 'View panorama', 'Wifi, Phòng khách riêng, Mini bar, Bếp nhỏ', 'available', 'IMAGES/room-03.webp'),
('Family Comfort Room', 'Family', 2800000, 4, '2 giường Queen', '48m²', 'View vườn', 'Wifi, Khu sinh hoạt chung, Smart TV, Bàn ăn', 'available', 'IMAGES/room-04.webp'),
('Superior Cozy Room', 'Superior', 1800000, 2, '1 giường Queen', '28m²', 'View nội khu', 'Wifi, Smart TV, Bàn làm việc, Tủ lạnh', 'available', 'IMAGES/room-05.webp'),
('Luxury Ocean View', 'Deluxe', 3800000, 2, '1 giường King', '45m²', 'View biển', 'Wifi, Ban công, Bồn tắm, Mini bar', 'available', 'IMAGES/room-06.webp'),
('Garden Suite', 'Premier Suite', 3000000, 3, '1 King + sofa', '50m²', 'View sân vườn', 'Wifi, Sofa, Ban công, Bồn tắm', 'available', 'IMAGES/room-07.webp'),
('Executive Room', 'Superior', 2200000, 2, '1 giường King', '32m²', 'View thành phố', 'Wifi, Bàn làm việc, Smart TV, Mini bar', 'available', 'IMAGES/room-08.webp'),
('Royal Twin Room', 'Deluxe', 2600000, 2, '2 giường đơn', '36m²', 'View thành phố', 'Wifi, Smart TV, Bàn làm việc, Ấm đun nước', 'available', 'IMAGES/room-09.webp'),
('Honeymoon Suite', 'Premier Suite', 4100000, 2, '1 giường King', '58m²', 'View biển', 'Wifi, Jacuzzi, Ban công, Mini bar', 'available', 'IMAGES/room-10.webp'),
('Business Executive', 'Superior', 2400000, 2, '1 giường Queen', '34m²', 'View thành phố', 'Wifi, Bàn làm việc, Máy pha cà phê, Smart TV', 'available', 'IMAGES/room-11.webp'),
('Grand Family Suite', 'Family', 3600000, 5, '1 King + 2 giường đơn', '62m²', 'View vườn', 'Wifi, Sofa, Bàn ăn, Khu vui chơi nhỏ', 'available', 'IMAGES/room-12.webp'),
('Sunset Presidential', 'Presidential', 6500000, 4, '2 giường King', '92m²', 'View hoàng hôn biển', 'Wifi, Phòng khách riêng, Quầy bar nhỏ, Bồn tắm lớn', 'available', 'IMAGES/room-13.webp'),
('Balcony Deluxe', 'Deluxe', 2900000, 3, '1 giường King', '40m²', 'View hồ bơi', 'Wifi, Ban công, Smart TV, Ghế thư giãn', 'available', 'IMAGES/room-14.webp');

INSERT INTO bookings
(booking_code, room_id, customer_name, phone, email, checkin_date, checkout_date, guests, status)
VALUES
('BK-20260510-0001', 1, 'Nguyễn Văn A', '0901234567', 'a@example.com', '2026-05-10', '2026-05-12', 2, 'confirmed'),
('BK-20260605-0002', 3, 'Trần Thị B', '0902222333', 'b@example.com', '2026-06-05', '2026-06-07', 3, 'confirmed');
