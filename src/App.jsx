import { useEffect } from 'react'
import { InlineEditProvider, Navigation, SlideErrorBoundary, SlideProvider, useSlides } from '@deckio/deck-engine'
import '@deckio/deck-engine/styles/editable.css'
import project from '../deck.config.js'

function FloatingCopilot() {
  const { current, totalSlides } = useSlides()
  const lastSlide = totalSlides - 1
  if (current <= 0 || current === lastSlide) return null
  return (
    <img
      src={`${import.meta.env.BASE_URL}copilot-mascot.png`}
      alt="GitHub Copilot"
      className="floating-copilot"
    />
  )
}

export default function App() {
  const { accent, id, slides, theme, title } = project

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.title = title
  }, [accent, title])

  return (
    <InlineEditProvider overrides={{}} project={id}>
      <SlideProvider totalSlides={slides.length} project={id} slides={slides} theme={theme}>
        <Navigation />
        <div className="deck" data-project-id={id}>
          {slides.map((SlideComponent, index) => (
            <SlideErrorBoundary key={`${id}-slide-${index}`} index={index}>
              <SlideComponent index={index} project={project} />
            </SlideErrorBoundary>
          ))}
        </div>
        <FloatingCopilot />
      </SlideProvider>
    </InlineEditProvider>
  )
}
