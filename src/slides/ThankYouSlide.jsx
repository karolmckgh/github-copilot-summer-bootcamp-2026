import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'

export default function ThankYouSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <span className={styles.accentDash} />
          <Editable as="h2" id="thankYou.title" className={styles.title}>Thank You</Editable>
          <Editable as="p" id="thankYou.subtitle" multiline className={styles.subtitle}>
            Code Smarter This Summer. From Zero to Agent Orchestrator.
          </Editable>
        </div>
      </div>

      <div className={styles.mascots}>
        <img src={`${import.meta.env.BASE_URL}mascot-duck.png`} alt="" className={`${styles.mascot} ${styles.m1}`} />
        <img src={`${import.meta.env.BASE_URL}copilot-mascot.png`} alt="" className={`${styles.mascot} ${styles.m2}`} />
      </div>

      <BottomBar text={<Editable as="span" id="thankYou.footer">{project.title}</Editable>} />
    </Slide>
  )
}
