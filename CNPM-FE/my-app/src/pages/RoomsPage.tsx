export default function RoomsPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="rooms-container">
      <aside className="filter-sidebar">
        <h3>Bộ lọc</h3>
        <div className="filter-group"><label>Loại phòng</label><select><option>Deluxe</option><option>Suite</option><option>Presidential</option></select></div>
        <div className="filter-group"><label>Bảng giá</label><input type="text" placeholder="1M - 5M" /></div>
        <div className="filter-group"><label>Ngày nhận</label><input type="date" defaultValue="2026-04-27" /></div>
        <div className="filter-group"><label>Ngày trả</label><input type="date" defaultValue="2026-04-29" /></div>
        <div className="filter-group"><label>Số khách</label><input type="number" defaultValue="2" min="1" /></div>
        <button className="btn-apply-filter">Áp dụng</button>
      </aside>

      <section className="room-list">
        <h2>Danh Sách phòng phù hợp</h2>
        <div className="room-card">
          <img src="/hinhnen.jpg" alt="Deluxe" className="room-img" />
          <div className="room-info">
            <h3>Deluxe Room</h3>
            <p className="amenities">Wifi - Smart TV - Bàn làm việc - Cửa sổ kính</p>
            <span className="status">Còn trống</span>
          </div>
          <div className="room-action">
            <p className="price">2.500.000 VNĐ/Đêm</p>
            <button className="btn-view-detail" onClick={() => setCurrentPage('room-detail')}>Xem chi tiết</button>
          </div>
        </div>
        <div className="room-card">
          <img src="/hinhnen.jpg" alt="Premier Suite" className="room-img" />
          <div className="room-info">
            <h3>Premier Suite</h3>
            <p className="amenities">Wifi - View siêu đẹp - Sofa cao cấp - Bồn tắm</p>
            <span className="status">Còn trống</span>
          </div>
          <div className="room-action">
            <p className="price">3.200.000 VNĐ/Đêm</p>
            <button className="btn-view-detail" onClick={() => setCurrentPage('room-detail')}>Xem chi tiết</button>
          </div>
        </div>
      </section>
    </main>
  );
}