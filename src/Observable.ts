import { Observer } from "./types"

export default class Observable<S> {
    observers: Observer<S>[] = []
    
    subscribe(...observers: Observer<S>[]) {
        this.observers = [...this.observers, ...observers]
    } 

    unsubscribe(...observerNames: string[]) {
        this.observers = this.observers.filter((o) => !observerNames.includes(o.name))
    }

    notify(data: S) {
        this.observers.forEach((o) => {
            o.update(data)
        })
    }
}