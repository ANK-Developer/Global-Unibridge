import { useState } from 'react'
import styles from './Accordion.module.css'

export default function Accordion({ items, allowMultiple = false, defaultOpen = 0 }) {
  const [open, setOpen] = useState(() => (defaultOpen === null ? new Set() : new Set([defaultOpen])))

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div className={styles.panel} style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className={styles.panelInner}>
                <div className={styles.panelContent}>
                  {item.paragraphs
                    ? item.paragraphs.map((p, k) => <p key={k}>{p}</p>)
                    : <p>{item.a}</p>}
                  {item.list && item.list.length > 0 && (
                    <ul>
                      {item.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
