export default function ImageSlot({ placeholder, src, style }) {
  if (src) {
    return (
      <img
        src={src}
        alt={placeholder || ''}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      />
    )
  }

  return (
    <div className="img-slot" style={style}>
      <div className="slot-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
          <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M2 22 L9 15 L15 21 L21 14 L30 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinejoin="round" />
        </svg>
      </div>
      {placeholder && (
        <span className="slot-cap">{placeholder}</span>
      )}
    </div>
  )
}
