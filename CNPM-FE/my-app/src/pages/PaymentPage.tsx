export default function PaymentPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="payment-container">
      <h2 className="page-title">Thanh toán</h2>
      <div className="payment-content">
        <div className="payment-info-card">
          <h3>Thông tin đơn</h3>
          <p><strong>Mã đơn:</strong> BK-20260427-0001</p>
          <p>Phòng: Luxury Suite</p>
          <p>Thời gian: 27/04 - 29/04</p>
          <h3 className="total-highlight">Tổng tiền: 7.600.000 VNĐ</h3>
        </div>
        <div className="payment-method-card">
          <h3>Chọn phương thức thanh toán</h3>
          <div className="method-options">
            <label className="radio-label"><input type="radio" name="payment" /> Thanh toán online</label>
            <label className="radio-label"><input type="radio" name="payment" defaultChecked /> Chuyển khoản QR</label>
            <label className="radio-label"><input type="radio" name="payment" /> Thanh toán tại quầy</label>
          </div>
          <div className="qr-section">
            <div className="qr-img" style={{display: 'flex', alignItems: 'center', justifyContent:'center', background: '#e0e0e0', width: '150px', height: '150px'}}>QR Mẫu</div> 
            <div className="qr-details">
              <p>Nội dung CK:</p>
              <strong>BK-20260427-0001</strong>
              <p>Số tiền:</p>
              <strong className="qr-amount">7.600.000 VNĐ</strong>
            </div>
          </div>
          <button className="btn-confirm-payment" onClick={() => setCurrentPage('confirmation')}>Xác nhận thanh toán</button>
        </div>
      </div>
    </main>
  );
}