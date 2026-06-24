import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './WorkshopOfferingSlide.module.css'

export default function WorkshopOfferingSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.offering}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="offering.eyebrow" className={styles.eyebrow}>Your invitation · Online event</Editable>
          <h1>
            <Editable as="span" id="offering.titleBefore">Engineer with agents.</Editable>{' '}
            <Editable as="span" id="offering.titleHighlight" className={styles.highlight}>Multiply your impact.</Editable>
          </h1>
          <Editable as="p" id="offering.subtitle" className={styles.subtitle}>
            A hands-on program that 10x's your developers' output and value.
          </Editable>
        </div>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <span className={styles.icon}>🛠️</span>
            <Editable as="h3" id="offering.items.handson.title">Hands-on, not theory</Editable>
            <Editable as="p" id="offering.items.handson.desc">We bring all the materials — you sit back and drive with the agent.</Editable>
          </div>
          <div className={styles.pillar}>
            <span className={styles.icon}>📈</span>
            <Editable as="h3" id="offering.items.adoption.title">Adoption that sticks</Editable>
            <Editable as="p" id="offering.items.adoption.desc">Licensed to effective — we survey what engineers learned and how ready they are to apply it.</Editable>
          </div>
          <div className={styles.pillar}>
            <span className={styles.icon}>🚀</span>
            <Editable as="h3" id="offering.items.journey.title">Agentic orchestration</Editable>
            <Editable as="p" id="offering.items.journey.desc">From first prompt to multi-agent workflows.</Editable>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Editable as="span" id="offering.stats.online.value" className={styles.statValue}>Online</Editable>
              <Editable as="span" id="offering.stats.online.label" className={styles.statLabel}>Join live from anywhere</Editable>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Editable as="span" id="offering.stats.weeks.value" className={styles.statValue}>6 weeks</Editable>
              <Editable as="span" id="offering.stats.weeks.label" className={styles.statLabel}>Same content weekly, drop-in</Editable>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Editable as="span" id="offering.stats.levels.value" className={styles.statValue}>All levels</Editable>
              <Editable as="span" id="offering.stats.levels.label" className={styles.statLabel}>Content suitable for any level</Editable>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Editable as="span" id="offering.stats.cost.value" className={styles.statValue}>Cost</Editable>
              <Editable as="span" id="offering.stats.cost.label" className={styles.statLabel}>Only your time — we provide licenses</Editable>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Editable as="span" id="offering.stats.team.value" className={styles.statValue}>Delivered by</Editable>
              <Editable as="span" id="offering.stats.team.label" className={styles.statLabel}>Microsoft Solution Engineers and Architects</Editable>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="offering.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
