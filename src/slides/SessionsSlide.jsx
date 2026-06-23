import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SessionsSlide.module.css'

const SESSIONS = [
  {
    id: 'foundations',
    level: 'L100',
    levelClass: 'l100',
    title: 'GitHub Copilot Foundations',
    desc: 'Configure Copilot deliberately — instructions, skills, custom agents, and MCP your whole team owns.',
    persona: 'Everyone',
  },
  {
    id: 'context',
    level: 'L200',
    levelClass: 'l200',
    title: 'Context & Token Optimization',
    desc: 'Token optimization and context engineering to cut cost and latency while lifting output quality.',
    persona: 'Everyone',
  },
  {
    id: 'datainfra',
    level: 'L200',
    levelClass: 'l200',
    title: 'Copilot for Data & Infra',
    desc: 'From idea to done in plain English — describe data and infra work and watch it run.',
    persona: 'Data & Infra',
  },
  {
    id: 'agentic',
    level: 'L300',
    levelClass: 'l300',
    title: 'Agentic Workflows',
    desc: 'AI agents and GitHub Actions that automate dev tasks autonomously on every code change.',
    persona: 'DevOps',
  },
  {
    id: 'squad',
    level: 'L300',
    levelClass: 'l300',
    title: 'Squad with Spec-Driven Development',
    desc: 'Write a durable spec, then hand it to a Squad of eight specialized agents to build.',
    persona: 'Everyone',
  },
  {
    id: 'sre',
    level: 'L300',
    levelClass: 'l300',
    title: 'Power of Cloud & SRE Agents',
    desc: 'Close the SDLC loop — agents identify, diagnose, and auto-remediate production issues.',
    persona: 'Engineers & SRE',
  },
]

export default function SessionsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.sessions}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <Editable as="p" id="sessions.eyebrow" className={styles.eyebrow}>The lineup</Editable>
            <Editable as="h1" id="sessions.title">Six sessions, three levels</Editable>
            <Editable as="p" id="sessions.subtitle" className={styles.subtitle}>
              From Copilot foundations to multi-agent and SRE — pick the level that fits each developer.
            </Editable>
          </div>
          <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={`${styles.dot} ${styles.dotTalk}`} />
              <Editable as="span" id="sessions.legend.talk">10 min talk</Editable>
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.dot} ${styles.dotHack}`} />
              <Editable as="span" id="sessions.legend.hack">50 min hands-on</Editable>
            </span>
          </div>
        </div>

        <div className={styles.list}>
          {SESSIONS.map((s) => (
            <div className={styles.row} key={s.id}>
              <div className={styles.rowInner}>
                <span className={`${styles.level} ${styles[s.levelClass]}`}>{s.level}</span>
                <div className={styles.rowMain}>
                  <Editable as="h3" id={`sessions.items.${s.id}.title`} className={styles.rowTitle}>{s.title}</Editable>
                  <Editable as="p" id={`sessions.items.${s.id}.desc`} className={styles.rowIntro}>{s.desc}</Editable>
                </div>
                <Editable as="span" id={`sessions.items.${s.id}.persona`} className={styles.persona}>{s.persona}</Editable>
              </div>
              <div className={styles.bar} aria-hidden="true">
                <span className={styles.barTalk} />
                <span className={styles.barHack} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="sessions.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
