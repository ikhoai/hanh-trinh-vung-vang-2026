import { GOOGLE_FORM_URL } from '../config.js'

export default function Closing() {
  return (
    <section className="closing">
      <div className="narrow">
        <div className="eyebrow">Lời khép lại</div>
        <h2>
          "Một mùa hè không chỉ để nghỉ ngơi, mà để con học cách vững vàng hơn — trong thân thể, trong tâm thế và trong ý chí."
        </h2>
        <a
          href={GOOGLE_FORM_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đăng ký hành trình <span className="arrow">→</span>
        </a>
        <div className="closing-mark">Yên Farm · Làng Gạo · Ba Vì · 2026</div>
      </div>
    </section>
  )
}
