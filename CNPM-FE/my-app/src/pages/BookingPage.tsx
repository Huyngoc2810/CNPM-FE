export default function BookingPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="booking-container">
      <div className="progress-bar">
        <div className="step active"><span className="step-num">1</span>Chọn phòng</div>
        <div className="step-line active"></div>
        <div className="step active"><span className="step-num">2</span>Thông tin</div>
        <div className="step-line"></div>
        <div className="step"><span className="step-num">3</span>Thanh toán</div>
        <div className="step-line"></div>
        <div className="step"><span className="step-num">4</span>Hoàn tất</div>
      </div>
      <div className="booking-content">
        <div className="customer-info-form">
          <h2>Thông tin khách hàng</h2>
          <div className="form-row">
            <div className="form-group"><label>Họ tên *</label><input type="text" placeholder="Nguyen Van A" /></div>
            <div className="form-group"><label>Số điện thoại *</label><input type="tel" placeholder="0901234567" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Email *</label><input type="email" placeholder="abc@email.com" /></div>
            <div className="form-group"><label>Yêu cầu đặc biệt</label><input type="text" placeholder="Gần thang máy" /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Ngày nhận *</label><input type="text" defaultValue="27/04/2026" readOnly className="readonly-input" /></div>
            <div className="form-group"><label>Ngày trả *</label><input type="text" defaultValue="29/04/2026" readOnly className="readonly-input" /></div>
          </div>
          <button className="btn-continue" onClick={() => setCurrentPage('payment')}>Tiếp tục thanh toán</button>
        </div>
        <div className="order-summary">
          <h2>Tóm tắt đơn</h2>
          <h3 className="room-name">Luxury Suite</h3>
          <p className="stay-dates">27/04/2026 - 29/04/2026</p>
          <p className="stay-details">2 đêm x 3.800.000 VNĐ</p>
          <div className="summary-total"><span>Tổng cộng</span><span className="total-amount">7.600.000 VNĐ</span></div>
        </div>
      </div>
    </main>
  );
}