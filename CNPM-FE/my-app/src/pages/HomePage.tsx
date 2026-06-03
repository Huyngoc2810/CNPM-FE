export default function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <main className="main-content">
      <div className="hero-banner">
        <img src="/hinhnen.jpg" alt="Luxury Hotel" className="hero-img" />
      </div>
      <div className="search-container">
        <div className="search-box">
          <div className="search-field">
            <label>Ngày nhận</label>
            <input type="date" />
          </div>
          <div className="search-field">
            <label>Ngày trả</label>
            <input type="date" />
          </div>
          <div className="search-field">
            <label>Số khách</label>
            <input type="number" min="1" defaultValue="2" />
          </div>
          <button className="btn-search" onClick={() => setCurrentPage('rooms')}>Tìm phòng</button>
        </div>
      </div>
    </main>
  );
}