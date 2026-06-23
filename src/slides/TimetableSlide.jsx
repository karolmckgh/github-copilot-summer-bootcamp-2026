import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TimetableSlide.module.css'

const WEEKS = [
  { id: 'w1', week: 'Week 1', date: 'Jul 31' },
  { id: 'w2', week: 'Week 2', date: 'Aug 7' },
  { id: 'w3', week: 'Week 3', date: 'Aug 14' },
  { id: 'w4', week: 'Week 4', date: 'Aug 21' },
  { id: 'w5', week: 'Week 5', date: 'Aug 28' },
  { id: 'w6', week: 'Week 6', date: 'Sep 4' },
]

const SESSIONS = [
  'GitHub Copilot Foundations',
  'Context & Token Optimization',
  'Copilot for Data & Infra',
  'Agentic Workflows',
  'Squad with Spec-Driven Development',
  'Power of Cloud & SRE Agents',
]

export default function TimetableSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.timetable}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="timetable.eyebrow" className={styles.eyebrow}>How it works</Editable>
          <Editable as="h1" id="timetable.title">Six Fridays, your way</Editable>
          <Editable as="p" id="timetable.subtitle" className={styles.subtitle}>
            Each Friday over six weeks. Join one or many — whatever fits your availability.
          </Editable>
        </div>

        <div className={styles.calendar}>
          {WEEKS.map((w) => (
            <div key={w.id} className={styles.day}>
              <div className={styles.dayHead}>
                <Editable as="span" id={`timetable.days.${w.id}.week`} className={styles.week}>{w.week}</Editable>
                <Editable as="span" id={`timetable.days.${w.id}.date`} className={styles.date}>{w.date}</Editable>
              </div>
              <ul className={styles.sessions}>
                {SESSIONS.map((s, i) => (
                  <li key={i} className={styles.session}>
                    <span className={styles.tick} aria-hidden="true" />
                    <span className={styles.sessionName}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Editable as="p" id="timetable.caption" className={styles.caption}>
          Pick the sessions you want attend in the registration form.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="timetable.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
