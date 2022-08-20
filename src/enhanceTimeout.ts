import { EnhancedTimeout, Timer } from './types'

export const enhanceTimeout = (): EnhancedTimeout => {
  let timerId: Timer

  return {
    getTimer: () => timerId,
    clearTimer: () => {
      if (timerId) {
        clearTimeout(timerId)
        timerId = undefined
      }
    },
    setTimer: (timerFn: Function, time: number) => {
      timerId = setTimeout(timerFn, time) as unknown as Timer
    },
  }
}

export default enhanceTimeout
