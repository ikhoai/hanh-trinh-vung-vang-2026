import heroImg from '../assets/test.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Sinh hoạt hè nội bộ · Mùa hè 2026</div>
            <h1 style={{ marginTop: '22px' }}>
              Hành Trình<br />
              <span className="it">Vững Vàng</span> 2026
            </h1>
            <p className="sub">Xây dựng lối sống căn bản và rèn luyện nền tảng theo tự nhiên.</p>
            <p className="intro">
              Một mùa hè dài, đủ để con tự gấp chăn của mình mỗi sáng, đủ để bàn tay quen với đất, với nước, với bữa cơm cùng bạn — và đủ để ba mẹ thấy con lớn lên theo một cách rất khác.
            </p>
            <div className="hero-cta">
              <a href="#dang-ky" className="btn btn-primary">
                Điền phiếu đăng ký <span className="arrow">→</span>
              </a>
              <a href="#triet-ly" className="btn btn-ghost">Tìm hiểu hành trình</a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="k">Thời gian</span>
                <span className="v">14/06 – 12/07 · 2026</span>
              </div>
              <div>
                <span className="k">Địa điểm</span>
                <span className="v">Yên Farm, Ba Vì</span>
              </div>
              <div>
                <span className="k">Độ tuổi</span>
                <span className="v">Trẻ 06 – 11 tuổi</span>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img
              src={heroImg}
              alt="Buổi sáng trên đồi cỏ — Yên Farm"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div className="hero-caption">mùa hè ở Yên Farm</div>
          </div>
        </div>
      </div>
    </section>
  )
}
