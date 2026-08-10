import { useRef, useState } from 'react'
import styles from './Portfolio.module.css'
import SectionLabel from '@/components/ui/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { useTranslations } from '@/i18n/LocaleContext'

const showcaseVideos = [
  {
    id: 'demo-1',
    src: '/videos/project-demo-1.mp4',
    poster: '/images/portfolio/project-demo-1-poster.jpg',
    audioSrc: '/audio/portfolio-voiceover.mp3',
    rating: 5,
  },
  {
    id: 'demo-2',
    src: '/videos/project-demo-2.mp4',
    poster: '/images/portfolio/project-demo-2-poster.jpg',
    audioSrc: '/audio/portfolio-voiceover-2.mp3',
    rating: 5,
  },
  {
    id: 'demo-3',
    src: '/videos/project-demo-3.mp4',
    poster: '/images/portfolio/project-demo-3-poster.jpg',
    audioSrc: '/audio/portfolio-voiceover-3.mp3',
    rating: 5,
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.2 6.6L12 17.6l-5.8 3 1.2-6.6-4.9-4.6 6.6-.8Z" />
  </svg>
)

export default function Portfolio() {
  const t = useTranslations()
  const showcaseVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const showcaseAudioRefs = useRef<Record<string, HTMLAudioElement | null>>({})
  const progressBarRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [mutedIds, setMutedIds] = useState<Record<string, boolean>>({})
  const [progress, setProgress] = useState<Record<string, number>>({})

  const toggleShowcasePlay = (id: string) => {
    const video = showcaseVideoRefs.current[id]
    const audio = showcaseAudioRefs.current[id]
    if (!video) return

    if (playingId === id) {
      video.pause()
      audio?.pause()
      setPlayingId(null)
      return
    }

    if (playingId) {
      const prevVideo = showcaseVideoRefs.current[playingId]
      const prevAudio = showcaseAudioRefs.current[playingId]
      prevVideo?.pause()
      prevAudio?.pause()
    }

    video.currentTime = 0
    video.play()
    if (audio) {
      audio.currentTime = 0
      audio.play()
    }
    setPlayingId(id)
  }

  const handleShowcaseEnded = (id: string) => {
    showcaseAudioRefs.current[id]?.pause()
    setPlayingId((current) => (current === id ? null : current))
    setProgress((prev) => ({ ...prev, [id]: 0 }))
  }

  const handleTimeUpdate = (id: string) => {
    const video = showcaseVideoRefs.current[id]
    if (!video || !video.duration) return
    setProgress((prev) => ({ ...prev, [id]: (video.currentTime / video.duration) * 100 }))
  }

  const seek = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const video = showcaseVideoRefs.current[id]
    const bar = progressBarRefs.current[id]
    if (!video || !bar || !video.duration) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    video.currentTime = ratio * video.duration
    setProgress((prev) => ({ ...prev, [id]: ratio * 100 }))
  }

  const toggleShowcaseMute = (id: string) => {
    const audio = showcaseAudioRefs.current[id]
    if (!audio) return
    audio.muted = !audio.muted
    setMutedIds((prev) => ({ ...prev, [id]: audio.muted }))
  }

  const expandShowcase = (id: string) => {
    const video = showcaseVideoRefs.current[id] as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null
    if (!video) return
    if (video.requestFullscreen) video.requestFullscreen()
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen()
  }

  return (
    <section className={styles.section} id="portfolio" data-nav-theme="dark">
      <div className="container">
        <Reveal className={styles.header}>
          <div>
            <SectionLabel variant="dark">{t.portfolio.label}</SectionLabel>
            <h2 className={styles.heading}>{t.portfolio.heading}</h2>
            <p className={styles.sub}>{t.portfolio.sub}</p>
          </div>
        </Reveal>

        <div className={styles.showcaseGrid}>
          {showcaseVideos.map((v, index) => {
            const isPlaying = playingId === v.id
            const isMuted = mutedIds[v.id] ?? false

            return (
              <Reveal key={v.id} className={styles.showcaseCard} delay={index * 120}>
                <video
                  ref={(el) => { showcaseVideoRefs.current[v.id] = el }}
                  className={styles.showcaseVideo}
                  src={v.src}
                  poster={v.poster}
                  playsInline
                  onEnded={() => handleShowcaseEnded(v.id)}
                  onTimeUpdate={() => handleTimeUpdate(v.id)}
                />

                {v.audioSrc && (
                  <audio
                    ref={(el) => { showcaseAudioRefs.current[v.id] = el }}
                    src={v.audioSrc}
                  />
                )}

                <button
                  type="button"
                  className={styles.showcasePlayBtn}
                  onClick={() => toggleShowcasePlay(v.id)}
                  aria-label={isPlaying ? t.portfolio.pauseLabel : t.portfolio.playLabel}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 5v14l12-7Z" />
                    </svg>
                  )}
                </button>

                <div className={styles.showcaseTopControls}>
                  {v.audioSrc && (
                    <button
                      type="button"
                      className={styles.showcaseIconBtn}
                      onClick={() => toggleShowcaseMute(v.id)}
                      aria-label={isMuted ? t.portfolio.soundOnLabel : t.portfolio.soundOffLabel}
                    >
                      {isMuted ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" />
                          <path d="M17 9l4 6M21 9l-4 6" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" />
                          <path d="M16 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
                          <path d="M18.5 6a8.5 8.5 0 0 1 0 12" strokeLinecap="round" />
                        </svg>
                      )}
                    </button>
                  )}

                  <button
                    type="button"
                    className={styles.showcaseIconBtn}
                    onClick={() => expandShowcase(v.id)}
                    aria-label={t.portfolio.expandLabel}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className={styles.rating} aria-label={`${v.rating} / 5`}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`${styles.star} ${i < v.rating ? styles.starFilled : ''}`}
                      >
                        <StarIcon />
                      </span>
                    ))}
                  </div>
                  <span className={styles.ratingValue}>{v.rating.toFixed(1)}</span>
                </div>

                <div
                  className={styles.showcaseProgress}
                  ref={(el) => { progressBarRefs.current[v.id] = el }}
                  onClick={(e) => seek(v.id, e)}
                >
                  <div
                    className={styles.showcaseProgressFill}
                    style={{ width: `${progress[v.id] ?? 0}%` }}
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
