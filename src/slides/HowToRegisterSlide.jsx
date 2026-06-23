import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './HowToRegisterSlide.module.css'

export default function HowToRegisterSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.register}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="howtoregister.eyebrow" className={styles.eyebrow}>Ready to join?</Editable>
          <Editable as="h1" id="howtoregister.title">How to register</Editable>
          <Editable as="p" id="howtoregister.subtitle" multiline className={styles.subtitle}>
            Your Microsoft contact will share a registration link. Fill it in to pick your sessions and weeks — that's all it takes.
          </Editable>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <Editable as="span" id="howtoregister.steps.link" className={styles.stepText}>Your Microsoft contact shares a registration link</Editable>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <Editable as="span" id="howtoregister.steps.form" className={styles.stepText}>Complete the short form — sessions, weeks, and details</Editable>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <Editable as="span" id="howtoregister.steps.email" className={styles.stepText}>We follow up by email with everything you need</Editable>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="howtoregister.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
