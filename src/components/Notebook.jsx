export default function Notebook() {
  return (
    <section className="notebook">
      <div className="wrap">
        <div className="notebook-wrap">
          <div>
            <div className="eyebrow">Cơ chế đồng hành</div>
            <h2 style={{ marginTop: '18px' }}>Sổ tay Hành Trình Vững Vàng.</h2>
            <p className="lead" style={{ marginTop: '22px' }}>
              Ở Yên Farm, không có cuộc thi cá nhân nào. Không có bảng xếp hạng. Không có "con giỏi nhất". Mỗi nhóm có một cuốn sổ tay riêng — nơi các con cùng nhau ghi lại những gì nhóm đã nỗ lực, đã đóng góp, đã chăm sóc lẫn nhau.
            </p>
            <ul className="philosophy-list" style={{ marginTop: '8px' }}>
              <li>
                <span className="num">●</span>
                <span className="txt" style={{ fontSize: '17px' }}>Mỗi nhóm cùng nhau ghi nề nếp, sự nỗ lực và tinh thần hỗ trợ.</span>
              </li>
              <li>
                <span className="num">●</span>
                <span className="txt" style={{ fontSize: '17px' }}>Điểm nhóm được đổi lấy hạt giống, vật liệu thủ công, hoặc dự án nhỏ.</span>
              </li>
              <li>
                <span className="num">●</span>
                <span className="txt" style={{ fontSize: '17px' }}>Cuối hành trình, sản phẩm của các con được giới thiệu trong buổi gây quỹ cộng đồng.</span>
              </li>
            </ul>
            <p style={{ marginTop: '24px', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--forest-deep)' }}>
              "Nỗ lực → Tạo ra giá trị → Biết chia sẻ và đóng góp cho xã hội."
            </p>
          </div>
          <div className="notebook-card">
            <div className="stamp">Nhóm Cỏ May · Tuần 02</div>
            <div className="title-hand">Sổ tay của nhóm.</div>
            <div className="entries">
              <div className="entry">
                <span className="dot"></span>
                <span>Thứ Hai — Cả nhóm gấp chăn đúng giờ, sạch.</span>
              </div>
              <div className="entry">
                <span className="dot" style={{ background: 'var(--clay)' }}></span>
                <span>Thứ Ba — Linh giúp bạn Minh rửa bát sau bữa tối.</span>
              </div>
              <div className="entry">
                <span className="dot" style={{ background: 'var(--sun)' }}></span>
                <span>Thứ Tư — Nhóm hoàn thành luống rau xà lách.</span>
              </div>
              <div className="entry">
                <span className="dot"></span>
                <span>Thứ Năm — Bo bị đau chân, cả nhóm đợi nhau lên đồi.</span>
              </div>
              <div className="entry">
                <span className="dot" style={{ background: 'var(--clay)' }}></span>
                <span>Thứ Sáu — Đã đổi điểm lấy 1 gói hạt giống cải.</span>
              </div>
              <div className="entry" style={{ marginTop: '8px', fontFamily: 'var(--hand)', fontSize: '22px', color: 'var(--forest)' }}>
                — một tuần đẹp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
