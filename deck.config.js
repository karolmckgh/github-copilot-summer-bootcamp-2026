import BootcampTitleSlide from './src/slides/BootcampTitleSlide.jsx'
import WorkshopOfferingSlide from './src/slides/WorkshopOfferingSlide.jsx'
import SessionsSlide from './src/slides/SessionsSlide.jsx'
import TimetableSlide from './src/slides/TimetableSlide.jsx'
import SetupSlide from './src/slides/SetupSlide.jsx'
import SurveySlide from './src/slides/SurveySlide.jsx'
import AppendixDividerSlide from './src/slides/AppendixDividerSlide.jsx'
import {
  FoundationsDetailSlide,
  ContextDetailSlide,
  DataInfraDetailSlide,
  AgenticDetailSlide,
  SquadDetailSlide,
  SreDetailSlide,
} from './src/slides/SessionDetailSlides.jsx'
import HowToRegisterSlide from './src/slides/HowToRegisterSlide.jsx'
import TeamSlide from './src/slides/TeamSlide.jsx'
import DisclaimerSlide from './src/slides/DisclaimerSlide.jsx'
import ThankYouSlide from './src/slides/ThankYouSlide.jsx'

export default {
  id: 'github-copilot-summer-bootcamp-2026',
  title: 'GitHub Copilot Summer Bootcamp',
  subtitle: 'Code Smarter This Summer. From Zero to Agent Orchestrator.',
  description: 'Code Smarter This Summer. From Zero to Agent Orchestrator.',
  icon: '🎴',
  accent: '#3fb950',
  theme: 'dark',
  appearance: 'dark',
  order: 1,
  slides: [
    BootcampTitleSlide,
    WorkshopOfferingSlide,
    SessionsSlide,
    TimetableSlide,
    SetupSlide,
    SurveySlide,
    AppendixDividerSlide,
    FoundationsDetailSlide,
    ContextDetailSlide,
    DataInfraDetailSlide,
    AgenticDetailSlide,
    SquadDetailSlide,
    SreDetailSlide,
    HowToRegisterSlide,
    TeamSlide,
    DisclaimerSlide,
    ThankYouSlide,
  ],
}
