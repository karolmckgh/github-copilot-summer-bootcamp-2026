import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SessionDetail.module.css'

function SessionDetail({ index, idBase, level, levelClass, persona, title, desc }) {
  return (
    <Slide index={index} className={styles.detail}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.meta}>
          <span className={`${styles.level} ${styles[levelClass]}`}>{level}</span>
          <Editable as="span" id={`${idBase}.persona`} className={styles.persona}>{persona}</Editable>
        </div>
        <Editable as="h1" id={`${idBase}.title`}>{title}</Editable>
        <Editable as="p" id={`${idBase}.desc`} multiline className={styles.desc}>{desc}</Editable>
      </div>

      <BottomBar text={<Editable as="span" id={`${idBase}.footer`}>GitHub Copilot Summer Bootcamp</Editable>} />
    </Slide>
  )
}

export function FoundationsDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.foundations"
      level="L100"
      levelClass="l100"
      persona="Everyone"
      title="GitHub Copilot Foundations"
      desc="Get the fundamentals right and everything else compounds. Before you orchestrate agent squads, close the SDLC loop, or automate a pipeline, you need a Copilot that actually understands your project, your conventions, and your intent — and you get there by configuring it deliberately. We start with custom instructions: durable, version-controlled context that teaches Copilot how your team works and travels with your repo. From there we layer on skills that package repeatable expertise into reusable building blocks, and custom agents tuned for specific roles and tasks. Along the way we touch on prompt files, MCP servers, and extensions that wire Copilot into the systems you already use. Through hands-on demos you'll set up each piece and watch them click together into a shared, versioned configuration the whole team owns."
    />
  )
}

export function ContextDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.context"
      level="L200"
      levelClass="l200"
      persona="Everyone"
      title="Context & Token Optimization"
      desc="A deep dive into token optimization and context engineering to improve latency, cost, and output quality. As AI-powered development scales across teams, understanding how to structure prompts, manage context windows, and minimize unnecessary token usage becomes critical. This session covers techniques for designing efficient, high-performing AI interactions — from crafting precise system instructions and leveraging few-shot patterns, to pruning context for faster responses and better reasoning. Walk away with practical strategies you can apply immediately to reduce costs and get more value out of your GitHub Copilot tokens."
    />
  )
}

export function DataInfraDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.datainfra"
      level="L200"
      levelClass="l200"
      persona="Data & Infra"
      title="Copilot for Data & Infra"
      desc="From idea to done — in plain English. In one focused, fast-moving hour, discover how GitHub Copilot turns everyday technical work into something you can simply describe out loud and watch come to life — no deep coding background required. We go from a blank screen to real, working results through live demos, with you in the driver's seat and firmly in control the whole way — validating before anything goes live and keeping a close eye on the numbers. You'll pick up a simple, repeatable rhythm you can apply the moment you're back at your desk — whether you're untangling a messy export, spinning up an environment from scratch, or tired of doing the same fiddly pipeline by hand. If you live close to the data or the infrastructure, you'll feel right at home."
    />
  )
}

export function AgenticDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.agentic"
      level="L300"
      levelClass="l300"
      persona="DevOps"
      title="Agentic Workflows"
      desc="Agentic Workflows combine AI coding agents with GitHub Actions to automate complex development tasks through natural language instructions. Unlike rule-based automation, they understand repository context, reason about situations, and adapt their behavior accordingly. Common use cases include automated code-quality monitoring, security vulnerability audits, documentation updates, test analysis, and code deduplication — all running autonomously on every code change, without manual scripting for each scenario. In this session we dive into creating workflows that optimize your CI/CD pipelines with agentic capabilities."
    />
  )
}

export function SquadDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.squad"
      level="L300"
      levelClass="l300"
      persona="Everyone"
      title="Squad with Spec-Driven Development"
      desc="True spec-driven development means the specification is a durable, version-controlled artifact that precedes and governs implementation — capturing the 'what' and 'why' before any 'how.' With AI agent teams like Squad this matters even more: without a clear spec, agents and humans pull in different directions. We'll work through a practical spec template together — scope, expected behavior, edge cases, and acceptance criteria — building a shared habit around specs as a living artifact the whole team owns. Then you'll hand a spec to a pre-built Squad: eight specialized agents covering frontend, backend, docs, tests, devops, reviewer, architect, and security, coordinated by a single conversational coordinator. You'll drive them through seven capabilities — team setup, routing, model selection, response modes, parallel execution, memory, and skills — and watch the team divide the work."
    />
  )
}

export function SreDetailSlide({ index }) {
  return (
    <SessionDetail
      index={index}
      idBase="detail.sre"
      level="L300"
      levelClass="l300"
      persona="Engineers & SRE"
      title="Power of Cloud & SRE Agents"
      desc="Closing the SDLC loop. Software velocity is increasing more than ever now that we can use AI to code quicker — and that drives a lot more change in production, which we need to control. Ironically, solving the challenge introduced by AI with AI is the narrative of this session. We look at how to introduce agents at the tail end of the Software Delivery Lifecycle to close the loop when bugs and issues appear. To close it, we explore how to identify issues, diagnose them, and even automatically remediate them with a fix-forward delegated to the GitHub platform."
    />
  )
}
