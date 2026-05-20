import ImageSlot from './ImageSlot.jsx'

const members = [
  {
    id: 'ngocanh',
    placeholder: 'Chân dung Cô Ngọc Anh',
    role: 'Quản lý Giáo dục & Chuyên môn',
    name: 'Cô Ngọc Anh',
    bio: 'Phụ trách định hướng giáo dục và nội dung chương trình — người giữ tinh thần "nền tảng sống" xuyên suốt hành trình.',
  },
  {
    id: 'tho',
    placeholder: 'Chân dung Cô Thơ',
    role: 'Quản lý Vận hành & Bếp trưởng',
    name: 'Cô Thơ',
    bio: 'Phụ trách hậu cần, lịch sinh hoạt, an toàn hằng ngày — và thực đơn ăn uống thuận tự nhiên cho các con.',
  },
  {
    id: 'dieu',
    placeholder: 'Chân dung Cô Diệu',
    role: 'Phụ trách Nề nếp sống',
    name: 'Cô Diệu',
    bio: 'Đồng hành trực tiếp cùng các con trong thói quen sinh hoạt, lễ phép, và sự kỷ luật trong đời sống thường ngày.',
  },
]

export default function Team() {
  return (
    <section id="doi-ngu">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Đội ngũ điều phối</div>
          <h2>Những người sẽ ở bên con mỗi ngày.</h2>
          <p className="lead">
            Không phải "staff". Không phải "coach". Là những người cô, người thầy, người bác sẽ ăn cùng, ngủ cùng, và bước cùng các con suốt một tháng hè.
          </p>
        </div>
        <div className="team-grid">
          {members.map((member) => (
            <div className="person" key={member.id}>
              <div className="person-img">
                <ImageSlot
                  placeholder={member.placeholder}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div className="role">{member.role}</div>
                <h3 style={{ marginTop: '6px' }}>{member.name}</h3>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-extras">
          Cùng sự đồng hành của Thầy Phương, Cô Huyền, Cô Thoa, Thầy Tùng, Bác Vân, Cô Cảnh…
        </div>
      </div>
    </section>
  )
}
