export default function AuthPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="auth-container">
      <h2 className="page-title">Xác thực tài khoản</h2>
      <div className="auth-grid">
        <div className="auth-card">
          <h3>Đăng nhập</h3>
          <div className="form-group"><label>Email/Tên tài khoản</label><input type="text" /></div>
          <div className="form-group"><label>Mật khẩu</label><input type="password" /></div>
          <button className="btn-auth" onClick={() => setCurrentPage('account')}>Đăng nhập</button>
        </div>
        <div className="auth-card">
          <h3>Đăng ký</h3>
          <div className="form-group"><label>Họ tên</label><input type="text" /></div>
          <div className="form-group"><label>Email</label><input type="email" /></div>
          <div className="form-group"><label>Số điện thoại</label><input type="tel" /></div>
          <div className="form-group"><label>Mật khẩu</label><input type="password" /></div>
          <button className="btn-auth">Đăng ký</button>
        </div>
        <div className="auth-card">
          <h3>Quên mật khẩu</h3>
          <div className="form-group"><label>Email/Số điện thoại</label><input type="text" /></div>
          <div className="form-group"><label>Mã OTP</label><input type="text" /></div>
          <div className="form-group"><label>Mật khẩu mới</label><input type="password" /></div>
          <button className="btn-auth">Đặt lại mật khẩu</button>
        </div>
      </div>
    </main>
  );
}