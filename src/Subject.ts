import Observable from './Observable'

export default class Subject<S> extends Observable<S> {
  state: S

  constructor(value: S) {
    super()
    this.state = value
    this.notify(this.state)
  }

  get(): S {
    return this.state
  }

  update(nextState: S) {
    this.state = nextState
    this.notify(this.state)
  }
}
