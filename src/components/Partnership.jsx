const invites = [
  {
    num: '01.',
    title: 'Cho con được trải nghiệm',
    body: 'Thay vì can thiệp quá sớm, ba mẹ có thể chậm lại một nhịp — để con tự thử, tự sai, tự sửa.',
  },
  {
    num: '02.',
    title: 'Chấp nhận con sẽ mệt, sẽ bẩn',
    body: 'Có thể con sẽ lóng ngóng, vụng về, hoặc thất bại một chút. Đó là một phần đẹp của hành trình.',
  },
  {
    num: '03.',
    title: 'Giảm thiết bị, chậm nhịp sống',
    body: 'Trong suốt chương trình, gia đình cùng giảm màn hình và những lịch trình quá tải để con có một mùa hè thật sự yên.',
  },
  {
    num: '04.',
    title: 'Xây một nếp sống đơn giản hơn',
    body: 'Một bữa cơm cùng nhau, một buổi đi bộ, một tối không màn hình — những điều nhỏ mà bền lâu.',
  },
]

export default function Partnership() {
  return (
    <section className="partnership">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Lời mời đồng hành</div>
          <h2>Gửi đến phụ huynh — bốn lời mời nhỏ.</h2>
          <p className="lead">
            Hành trình của con không chỉ diễn ra ở Yên Farm. Nó cũng bắt đầu từ trong chính ngôi nhà của mình — từ những điều ba mẹ chọn buông tay, và những điều ba mẹ chọn giữ lại.
          </p>
        </div>
        <div className="partnership-grid">
          {invites.map((invite) => (
            <div className="invite" key={invite.num}>
              <div className="num">{invite.num}</div>
              <h3 style={{ color: 'var(--cream)', fontSize: '20px' }}>{invite.title}</h3>
              <p>{invite.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
