import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SetupSlide.module.css'

export default function SetupSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.setup}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="setup.eyebrow" className={styles.eyebrow}>Before you join</Editable>
          <Editable as="h1" id="setup.title">Setup &amp; prerequisites</Editable>
          <Editable as="p" id="setup.subtitle" className={styles.subtitle}>
            Licenses and environments are on us — here's the little we need from you.
          </Editable>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>🔑</span>
            <Editable as="h3" id="setup.items.licenses.title">Copilot licenses</Editable>
            <Editable as="p" id="setup.items.licenses.desc">
              We provide GitHub Copilot licenses. They link only to a personal GitHub.com username — we collect it in the registration form. You can use your own license too, but for the Data &amp; Infra and Cloud &amp; SRE sessions you'll need to use ours.
            </Editable>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>⌨️</span>
            <Editable as="h3" id="setup.items.cli.title">GitHub Copilot CLI</Editable>
            <Editable as="p" id="setup.items.cli.desc">
              We work in the CLI — new to it? This is your chance. Install it locally, if you can't you will be able to use a cloud environment.
            </Editable>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>☁️</span>
            <Editable as="h3" id="setup.items.envs.title">Environments</Editable>
            <Editable as="p" id="setup.items.envs.desc">
              For Data &amp; Infra and Cloud &amp; SRE sessions you'll get GitHub Enterprise and/or Azure access. Details follow by email after registration.
            </Editable>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>🛟</span>
            <Editable as="h3" id="setup.items.support.title">Tested &amp; documented</Editable>
            <Editable as="p" id="setup.items.support.desc">
              We can't troubleshoot live during sessions, but we'll test everything beforehand and share an FAQ covering it all.
            </Editable>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="setup.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
