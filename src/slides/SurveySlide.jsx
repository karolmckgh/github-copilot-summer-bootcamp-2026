import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SurveySlide.module.css'

export default function SurveySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.survey}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="survey.eyebrow" className={styles.eyebrow}>One request from us</Editable>
          <Editable as="h1" id="survey.title">A 2-minute survey at the end</Editable>
          <Editable as="p" id="survey.subtitle" multiline className={styles.subtitle}>
            We'll ask you to complete a very short survey after each session. It helps us measure what landed and keep improving — and it takes barely two minutes.
          </Editable>

          <div className={styles.points}>
            <div className={styles.point}>
              <span className={styles.icon}>⏱️</span>
              <Editable as="span" id="survey.points.short" className={styles.pointText}>Very short — about 2 minutes</Editable>
            </div>
            <div className={styles.point}>
              <span className={styles.icon}>🔒</span>
              <Editable as="span" id="survey.points.pii" className={styles.pointText}>No PII captured — feedback linked to a company, not to a person</Editable>
            </div>
            <div className={styles.point}>
              <span className={styles.icon}>📊</span>
              <Editable as="span" id="survey.points.improve" className={styles.pointText}>Shapes how we improve the program</Editable>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="survey.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
