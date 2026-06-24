import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TeamSlide.module.css'

const TEAM = [
  { id: 'ana', name: 'Ana Negru', title: 'Solution Engineer', photo: `${import.meta.env.BASE_URL}team/ana.png` },
  { id: 'emile', name: 'Emile Verbunt', title: 'Sr Solution Engineer', photo: `${import.meta.env.BASE_URL}team/emile.png` },
  { id: 'joran', name: 'Joran Bergfeld', title: 'Sr Solution Engineer', photo: `${import.meta.env.BASE_URL}team/joran.png` },
  { id: 'karol', name: 'Karol Muciek', title: 'Sr Solution Engineer', photo: `${import.meta.env.BASE_URL}team/karol.png` },
  { id: 'lili', name: 'Lili Nazer', title: 'Solution Engineer Intern', photo: `${import.meta.env.BASE_URL}team/lili.png` },
  { id: 'marin', name: 'Marin Fankovic', title: 'Sr Solution Engineer', photo: `${import.meta.env.BASE_URL}team/marin.png` },
  { id: 'sharanya', name: 'Sharanya Konandur', title: 'Sr Solution Engineer', photo: `${import.meta.env.BASE_URL}team/sharanya.png` },
]

export default function TeamSlide({ index }) {
  return (
    <Slide index={index} className={styles.team}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h1" id="team.title">Brought to you by</Editable>
        </div>

        <div className={styles.grid}>
          {TEAM.map((m) => (
            <div key={m.id} className={styles.card}>
              <div className={styles.photoWrap}>
                <img src={m.photo} alt={m.name} className={styles.photo} />
              </div>
              <Editable as="h3" id={`team.${m.id}.name`} className={styles.name}>{m.name}</Editable>
              <Editable as="p" id={`team.${m.id}.title`} className={styles.role}>{m.title}</Editable>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="team.footer">GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}
