import ImageSlot from './ImageSlot.jsx'

const schedule = [
  { time: '05:30', what: 'Thức dậy cùng tiếng gà', note: 'trong yên lặng, không vội' },
  { time: '06:00', what: 'Yoga & khởi động cơ thể', note: 'trên sân cỏ, chân trần' },
  { time: '07:00', what: 'Bữa sáng cùng nhau', note: 'các con dọn bàn, chia phần' },
  { time: '08:00', what: 'Tự chăm sóc cá nhân & dọn nhà', note: 'gấp chăn, giặt đồ' },
  { time: '09:30', what: 'Rèn luyện thể lực ngoài trời', note: 'võ, leo núi, bơi, đi bộ' },
  { time: '12:00', what: 'Bữa trưa & nghỉ trưa', note: '' },
  { time: '14:30', what: 'Lao động cùng nông trại', note: 'trồng cây, làm vườn' },
  { time: '16:30', what: 'Trò chơi nhóm & dự án nhỏ', note: '' },
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
            <ImageSlot
              placeholder="Trẻ tập yoga sáng trên sân cỏ"
              style={{ width: '100%', height: '100%' }}
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
