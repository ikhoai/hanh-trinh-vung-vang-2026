import { GOOGLE_FORM_URL } from '../config.js'

export default function FormCTA() {
  return (
    <section className="form-cta" id="dang-ky">
      <div className="wrap">
        <div className="form-cta-card">
          <div className="form-cta-inner">
            <div className="eyebrow">Phiếu đăng ký tham gia</div>
            <h2 style={{ marginTop: '18px' }}>Gửi một chút về gia đình mình.</h2>
            <p className="lead" style={{ marginTop: '22px', maxWidth: '620px' }}>
              Ba mẹ có thể viết bằng giọng của mình, không cần trang trọng. Chúng tôi muốn hiểu con, hiểu nhịp sống của gia đình — chứ không cần một mẫu CV. Phiếu mất khoảng <strong>8–10 phút</strong>.
            </p>
            <ul className="form-cta-list">
              <li>
                <span className="d"></span>
                <span>Thông tin về con và nhịp sinh hoạt hiện tại</span>
              </li>
              <li>
                <span className="d"></span>
                <span>Những điều ba mẹ mong con rèn luyện mùa hè này</span>
              </li>
              <li>
                <span className="d"></span>
                <span>Định hướng giáo dục & sự sẵn sàng đồng hành của gia đình</span>
              </li>
            </ul>
            <div className="form-cta-actions">
              <a
                href={GOOGLE_FORM_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mở phiếu đăng ký (Google Form) <span className="arrow">→</span>
              </a>
              <small>Ban Điều phối sẽ phản hồi trong vòng 5 ngày làm việc.</small>
            </div>
          </div>
          <div className="form-cta-aside">
            <div className="stamp-large">
              Bản phiếu được gửi đến<br />
              Ban Điều phối Yên Farm
            </div>
            <div
              className="hand"
              style={{
                fontSize: '40px',
                lineHeight: '1',
                color: 'var(--forest)',
                transform: 'rotate(-2deg)',
                marginTop: '18px',
              }}
            >
              cảm ơn ba mẹ.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
