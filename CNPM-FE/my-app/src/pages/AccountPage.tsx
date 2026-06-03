import { useState } from 'react';

export default function AccountPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  // Biến điều khiển tab đã được đưa vào đúng nơi nó thuộc về
  const [accountTab, setAccountTab] = useState('history');

  return (
    <main className="account-container">
      <h2 className="page-title">Tài khoản khách hàng</h2>
      <div className="account-layout">
        <aside className="account-sidebar">
          <ul>
            <li className={accountTab === 'profile' ? 'active' : ''} onClick={() => setAccountTab('profile')}>Hồ sơ cá nhân</li>
            <li className={accountTab === 'history' ? 'active' : ''} onClick={() => setAccountTab('history')}>Lịch sử đặt phòng</li>
            <li className={accountTab === 'payment' ? 'active' : ''} onClick={() => setAccountTab('payment')}>Thanh toán</li>
            <li className={accountTab === 'password' ? 'active' : ''} onClick={() => setAccountTab('password')}>Đổi mật khẩu</li>
            <li className={accountTab === 'support' ? 'active' : ''} onClick={() => setAccountTab('support')}>Chăm sóc KH</li>
            <li onClick={() => setCurrentPage('home')} style={{cursor: 'pointer', color: 'red', marginTop: '20px'}}>Đăng xuất</li>
          </ul>
        </aside>
        <div className="account-content">
          
          {accountTab === 'history' && (
            <>
              <div className="history-card">
                <h3>Lịch sử đặt phòng</h3>
                <table className="history-table">
                  <thead><tr><th>Mã đơn</th><th>Phòng</th><th>Ngày ở</th><th>Thanh toán</th><th>Trạng thái</th><th>Thao tác</th></tr></thead>
                  <tbody>
                    <tr><td>BK-0001</td><td>Luxury Suite</td><td>27/04-29/04</td><td>Đã TT</td><td>Đã xác nhận</td><td><a href="#">Chi tiết</a></td></tr>
                    <tr><td>BK-0002</td><td>Deluxe Room</td><td>12/05-14/05</td><td>Chưa TT</td><td>Chờ duyệt</td><td><a href="#">Thanh toán</a></td></tr>
                    <tr><td>BK-0003</td><td>Premier Suite</td><td>20/03-21/03</td><td>Đã TT</td><td>Đã trả phòng</td><td><a href="#">Đánh giá</a></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hint-card"><h4>🔔 Gợi ý</h4><p>Gửi yêu cầu hỗ trợ hoặc xem lại trạng thái thanh toán tại đây.</p></div>
            </>
          )}

          {accountTab === 'profile' && (
            <div className="account-form-card">
              <h3>Hồ sơ cá nhân</h3>
              <div className="form-group"><label>Họ và tên</label><input type="text" defaultValue="Nguyễn Văn A" /></div>
              <div className="form-group"><label>Số điện thoại</label><input type="text" defaultValue="0901234567" /></div>
              <div className="form-group"><label>Email</label><input type="email" defaultValue="nguyenvana@gmail.com" /></div>
              <button className="btn-save-acc">Lưu thay đổi</button>
            </div>
          )}

          {accountTab === 'password' && (
            <div className="account-form-card">
              <h3>Đổi mật khẩu</h3>
              <div className="form-group"><label>Mật khẩu hiện tại</label><input type="password" /></div>
              <div className="form-group"><label>Mật khẩu mới</label><input type="password" /></div>
              <div className="form-group"><label>Xác nhận mật khẩu mới</label><input type="password" /></div>
              <button className="btn-save-acc">Cập nhật mật khẩu</button>
            </div>
          )}

          {(accountTab === 'payment' || accountTab === 'support') && (
            <div className="account-form-card">
              <h3>Tính năng đang phát triển</h3>
              <p>Phần này sẽ được cập nhật dữ liệu từ Back-end sau.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}