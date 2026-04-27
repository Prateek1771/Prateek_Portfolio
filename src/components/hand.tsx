'use client'
import { TegakiRenderer } from 'tegaki'
import bundle from 'tegaki/fonts/caveat'

export default function Hand({ onComplete }: { onComplete: () => void }) {
  return (
    <TegakiRenderer
      font={bundle}
      time={{ mode: 'uncontrolled', speed: 1, loop: false }}
      style={{ fontSize: 72, color: 'currentColor' }}
      onComplete={onComplete}
    >
      Prateek Hitli
    </TegakiRenderer>
  )
}
