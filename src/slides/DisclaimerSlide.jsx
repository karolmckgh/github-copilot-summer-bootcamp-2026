import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './DisclaimerSlide.module.css'

export default function DisclaimerSlide({ index }) {
  return (
    <Slide index={index} className={styles.disclaimer}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="disclaimer.eyebrow" className={styles.eyebrow}>Please note</Editable>
          <Editable as="h1" id="disclaimer.title">Workshop disclaimer</Editable>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>🎓</span>
            <Editable as="h3" id="disclaimer.items.advisory.title">Educational, not consulting</Editable>
            <Editable as="p" id="disclaimer.items.advisory.desc">
              This is an educational, hands-on workshop series. Microsoft's role is advisory and facilitative on a best-effort basis. The sessions are not a consulting engagement, managed service, implementation project, or delivery of a finished product. Exercises are for learning only and should not be used in production without participants' own review, testing, security, privacy, and compliance approvals.
            </Editable>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>🔒</span>
            <Editable as="h3" id="disclaimer.items.data.title">No sensitive data</Editable>
            <Editable as="p" id="disclaimer.items.data.desc">
              Participants should not use real customer data, personal data, confidential information, production credentials, production systems, or business-critical repositories during the workshops. Use sample, synthetic, or non-sensitive materials only.
            </Editable>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>🧪</span>
            <Editable as="h3" id="disclaimer.items.outputs.title">Sample artifacts only</Editable>
            <Editable as="p" id="disclaimer.items.outputs.desc">
              Any workshop outputs are sample/learning artifacts only. Participants are responsible for reviewing, adapting, testing, securing, and approving any later use outside the workshop.
            </Editable>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="disclaimer.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
