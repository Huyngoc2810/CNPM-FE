export default function RoomDetailPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="room-detail-container">
      <div className="detail-left">
        <h2 className="page-title">Chi tiết phòng</h2>
        <img src="/hinhnen.jpg" alt="Main View" className="main-room-img" />
        <div className="thumbnail-list">
          <img src="/hinhnen.jpg" alt="thumb1" />
          <img src="/hinhnen.jpg" alt="thumb2" />
          <img src="/hinhnen.jpg" alt="thumb3" />
          <img src="/hinhnen.jpg" alt="thumb4" />
        </div>
        <div className="room-description">
          <h3>Luxury Suite Ocean View</h3>
          <p>Phòng cao cấp với view biển, bồn tắm, ánh sáng tự nhiên, spa và dịch vụ phòng 24/7.</p>
        </div>
      </div>
      <div className="detail-right">
        <div className="booking-card">
          <h3 className="price-title">3.800.000 VNĐ/đêm</h3>
          <div className="booking-field"><label>Ngày nhận</label><input type="date" defaultValue="2026-04-27" /></div>
          <div className="booking-field"><label>Ngày trả</label><input type="date" defaultValue="2026-04-29" /></div>
          <div className="booking-field"><label>Số khách</label><input type="text" defaultValue="2 người" /></div>
          <div className="total-price"><p>Tổng tạm tính: <strong>7.600.000 VNĐ</strong></p></div>
          <button className="btn-book-now" onClick={() => setCurrentPage('booking')}>Đặt phòng ngay</button>
        </div>
      </div>
    </main>
  );
}