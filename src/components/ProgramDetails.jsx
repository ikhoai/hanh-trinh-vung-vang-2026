const details = [
  { k: 'Độ tuổi', v: 'Trẻ từ 06 – 11 tuổi' },
  { k: 'Thời gian', v: 'CN 14/06 – CN 12/07 · 2026' },
  { k: 'Địa điểm', v: 'Yên Farm — Làng Gạo, Ba Vì' },
  { k: 'Kinh phí', v: 'Đóng góp nội bộ · Không bắt buộc' },
  { k: 'Hình thức', v: 'Sinh hoạt hè nội bộ, dài ngày' },
]

export default function ProgramDetails() {
  return (
    <section id="chi-tiet">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Thông tin chương trình</div>
          <h2>Chi tiết hành trình.</h2>
        </div>
        <div className="details-grid">
          {details.map((item) => (
            <div className="detail" key={item.k}>
              <span className="k">{item.k}</span>
              <span className="v">{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
