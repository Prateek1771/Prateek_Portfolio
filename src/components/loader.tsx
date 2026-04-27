'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Hand = dynamic(() => import('./hand'), { ssr: false })

type Phase = 'loading' | 'transitioning' | 'ready'

export default function Loader() {
  const [phase, setPhase] = useState<Phase>('loading')

  const handleComplete = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('ready')
      return
    }
    setPhase('transitioning')
    setTimeout(() => setPhase('ready'), 750)
  }

  if (phase === 'ready') return null

  return (
    <div
      className={`loader-overlay${phase === 'transitioning' ? ' loader-overlay--exit' : ''}`}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && e.propertyName === 'opacity') {
          setPhase('ready')
        }
      }}
    >
      <Hand onComplete={handleComplete} />
    </div>
  )
}
