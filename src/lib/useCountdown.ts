import { useEffect, useState } from 'react'
import { CAMPAIGN_END, CAMPAIGN_START } from '../config'

export type Phase = 'before' | 'live' | 'ended'
const start = new Date(CAMPAIGN_START).getTime()
const end = new Date(CAMPAIGN_END).getTime()

export function getState(now: number) {
  const phase: Phase = now < start ? 'before' : now < end ? 'live' : 'ended'
  const diff = Math.max(0, start - now)
  const s = Math.floor(diff / 1000)
  return {
    phase,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

/** `override` permite simular o "agora" em testes (?now=2026-11-06T12:00:00-03:00). */
export function useCountdown() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const o = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('now') : null
  const t = o ? new Date(o).getTime() : NaN
  return getState(Number.isNaN(t) ? now : t + (now - initial))
}
const initial = Date.now()
