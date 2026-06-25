import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './BootcampTitleSlide.module.css'

export default function BootcampTitleSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.section}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <h1>
            <Editable as="span" id="bootcampTitle.titleBefore">GitHub Copilot Summer</Editable> <Editable as="span" id="bootcampTitle.titleHighlight" className={styles.highlight}>Bootcamp</Editable>
          </h1>
          <Editable as="p" id="bootcampTitle.subtitle" multiline className={styles.subtitle}>
            Code Smarter This Summer. From Zero to Agent Orchestrator.
          </Editable>
        </div>
      </div>

      <div className={styles.logosWrap}>
        <div className={styles.logos}>
          <img src={`${import.meta.env.BASE_URL}logos/microsoft-mark.svg`} alt="Microsoft" className={`${styles.logo} ${styles.logoMicrosoft}`} />
          <span className={styles.logoDivider} />
          <img src={`${import.meta.env.BASE_URL}logos/github-mark.svg`} alt="GitHub" className={`${styles.logo} ${styles.logoGitHub}`} />
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="bootcampTitle.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
