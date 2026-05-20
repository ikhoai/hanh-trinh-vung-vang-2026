import philo1 from '../assets/philo1.jpg'
import philo2 from '../assets/philo2.jpg'
import philo3 from '../assets/philo3.jpg'
import philo4 from '../assets/philo4.jpg'
import philo5 from '../assets/philo5.jpg'

const gallery = [
  { key: 'main', className: 'pg-main', src: philo1, alt: 'Các con làm việc bằng tay tại Yên Farm' },
  { key: 'b',    className: 'pg-cell', src: philo2, alt: 'Hoạt động ngoài trời tại Yên Farm' },
  { key: 'c',    className: 'pg-cell', src: philo3, alt: 'Sinh hoạt chung tại Yên Farm' },
  { key: 'd',    className: 'pg-cell', src: philo4, alt: 'Rèn luyện nề nếp tại Yên Farm' },
  { key: 'e',    className: 'pg-cell', src: philo5, alt: 'Trải nghiệm thật tại Yên Farm' },
]

export default function Philosophy() {
  return (
    <section id="triet-ly-2">
      <div className="wrap">
        <div className="philosophy-grid">
          <div>
            <div className="eyebrow">Triết lý chương trình</div>
            <h2 style={{ marginTop: '18px' }}>Yên Farm — một xã hội thu nhỏ giữa thiên nhiên.</h2>
            <p className="lead" style={{ marginTop: '22px' }}>
              Trong một tháng, các con không chỉ là "khách". Các con là một phần của làng — của cộng đồng nhỏ này. Mỗi sáng thức dậy, mỗi bữa ăn, mỗi giờ lao động, mỗi vòng tròn buổi tối đều là một bài học sống.
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              Chúng tôi tin rằng trẻ em không cần được phục vụ vô điều kiện. Trẻ em cần được tin cậy, được trao việc, và được nhìn thấy giá trị mà chính mình tạo ra.
            </p>
          </div>
          <div>
            <ul className="philosophy-list">
              <li><span className="num">01</span><span className="txt">Sống đơn giản — ăn, ngủ, vận động theo nhịp tự nhiên.</span></li>
              <li><span className="num">02</span><span className="txt">Làm việc bằng tay — chăm sóc đồ dùng, không gian, và bạn bè.</span></li>
              <li><span className="num">03</span><span className="txt">Tự phục vụ bản thân — và đỡ đần người xung quanh.</span></li>
              <li><span className="num">04</span><span className="txt">Thực hành nề nếp — không như một quy tắc, mà như một thói quen.</span></li>
              <li><span className="num">05</span><span className="txt">Trưởng thành qua trải nghiệm thật — không qua lời giảng.</span></li>
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="phil-gallery">
          {gallery.map((img) => (
            <div key={img.key} className={img.className}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
          <div className="pg-caption">Hình ảnh từ Yên Farm · Ba Vì</div>
        </div>
      </div>
    </section>
  )
}
