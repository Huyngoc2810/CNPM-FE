export default function ConfirmationPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="confirm-container">
      <div className="confirm-card">
        <div className="success-icon">✓</div>
        <h2>Đặt phòng thành công!</h2>
        <p className="booking-id-text">Mã đặt phòng: <strong>BK-20260427-0001</strong></p>
        <p className="sub-text">Thông tin xác nhận đã được gửi qua email.</p>
        <div className="confirm-actions">
          <button className="btn-view-order" onClick={() => setCurrentPage('account')}>Xem đơn</button>
          <button className="btn-go-home" onClick={() => setCurrentPage('home')}>Về trang chủ</button>
        </div>
      </div>
    </main>
  );
}