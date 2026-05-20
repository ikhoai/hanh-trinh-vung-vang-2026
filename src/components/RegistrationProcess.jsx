const steps = [
  {
    n: 'Bước 01',
    title: 'Điền phiếu đăng ký',
    body: 'Ba mẹ chia sẻ về con và định hướng giáo dục của gia đình.',
  },
  {
    n: 'Bước 02',
    title: 'Ban Điều phối đọc kỹ',
    body: 'Chúng tôi dành thời gian đọc từng phiếu, không vội vàng.',
  },
  {
    n: 'Bước 03',
    title: 'Trò chuyện qua Zoom',
    body: 'Một buổi gặp ngắn trước 07/06/2026 để cùng hiểu nhau.',
  },
  {
    n: 'Bước 04',
    title: 'Cùng xác nhận tham gia',
    body: 'Khi cả gia đình và Ban Điều phối đều thấy sẵn sàng.',
  },
]

export default function RegistrationProcess() {
  return (
    <section style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Cách thức đăng ký tham gia</div>
          <h2>Một cuộc trò chuyện trước khi cùng đi.</h2>
          <p className="lead">
            Sau khi ba mẹ điền phiếu đăng ký, Ban Điều phối sẽ đọc kỹ thông tin của từng gia đình và hẹn một buổi trò chuyện qua Zoom trước ngày <strong>07/06/2026</strong>. Cuộc trò chuyện này giúp hai bên hiểu nhau hơn về định hướng giáo dục, nhịp sống và sự sẵn sàng đồng hành — trước khi cùng xác nhận tham gia.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <div className="step" key={step.n}>
              <div className="n">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
