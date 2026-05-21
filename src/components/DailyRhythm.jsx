import morning from '../assets/morning.jpg'

const schedule = [
  { time: '05:30', what: 'Thức dậy cùng tiếng gà', note: 'trong yên lặng, không vội' },
  { time: '06:00', what: 'Yoga & khởi động cơ thể', note: 'trên sân cỏ, chân trần' },
  { time: '07:00', what: 'Bữa sáng cùng nhau', note: 'các con dọn bàn, chia phần' },
  { time: '08:00', what: 'Lao động cùng nông trại', note: 'tưới cây, thu hoạch, chăm sóc vật nuôi' },
  { time: '09:30', what: 'Dọn nhà', note: 'mỗi con một góc, cùng nhau làm sạch' },
  { time: '12:00', what: 'Bữa trưa & nghỉ trưa', note: '' },
  { time: '14:00', what: 'Hoạt động nhóm và dự án nhỏ', note: 'làm đồ thủ công, vẽ tranh, hoặc các dự án sáng tạo khác' },
  { time: '16:30', what: 'Rèn luyện thể lực ngoài trời', note: '' },
  { time: '18:00', what: 'Bữa tối — bữa cơm chung', note: '' },
  { time: '19:30', what: 'Vòng tròn chia sẻ / lửa trại', note: 'mỗi con nói về ngày của mình' },
  { time: '21:00', what: 'Ngủ — sớm, sâu, và đủ', note: '' },
]

export default function DailyRhythm() {
  return (
    <section id="nhip-song">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Một ngày ở Yên Farm</div>
          <h2>Nhịp sống đơn giản, lành, và đầy đủ.</h2>
          <p className="lead">
            Không có một thời khóa biểu cứng — chỉ có một nhịp sống. Buổi sáng bắt đầu sớm, buổi tối khép lại nhẹ nhàng, ở giữa là một ngày của tay và chân, của bạn bè, của thiên nhiên.
          </p>
        </div>
        <div className="rhythm-wrap">
          <div className="rhythm-img">
            <img
              src={morning}
              alt="Buổi sáng tại Yên Farm"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <ul className="rhythm-list">
            {schedule.map((item) => (
              <li key={item.time}>
                <span className="time">{item.time}</span>
                <span className="what">{item.what}</span>
                <span className="note">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
