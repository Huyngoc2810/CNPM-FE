export default function Header({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <header className="header">
      <div className="logo-wrapper" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
        <img src="/ht-luxury.png" alt="Logo" className="logo-img" />
        <h2>HT LUXURY</h2>
      </div>
      <nav className="nav-menu">
        <a href="#" onClick={() => setCurrentPage('home')}>Trang chủ</a>
        <a href="#" onClick={() => setCurrentPage('rooms')}>Phòng</a>
        <a href="#" onClick={() => setCurrentPage('services')}>Dịch vụ</a>
        <a href="#" onClick={() => setCurrentPage('contact')}>Liên hệ</a>
      </nav>
      <div className="auth-btn">
        <button className="btn-login" onClick={() => setCurrentPage('auth')}>Đăng nhập</button>
      </div>
    </header>
  );
}