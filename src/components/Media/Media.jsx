import styles from './Media.module.css'

// Image with a graceful cream placeholder until real assets are dropped
// into /public/images (P8 asset pass). Keeps layout dimensions stable.
export default function Media({ src, alt = '', className = '', ratio = '4 / 3', rounded = true }) {
  return (
    <div
      className={`${styles.media} ${rounded ? styles.rounded : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
      />
    </div>
  )
}
