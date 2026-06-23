import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AppendixDividerSlide.module.css'

export default function AppendixDividerSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.section}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="appendix.eyebrow" className={styles.eyebrow}>Appendix</Editable>
          <Editable as="h1" id="appendix.title" className={styles.title}>Session Descriptions</Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="appendix.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
