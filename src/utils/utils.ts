export const pipe = <T extends any[], R>(
    fn1: (...args: T) => R,
    ...fns: Array<(a: R) => R>
) => {
  const piped = fns.reduce(
      (prevFn, nextFn) => (value: R) => nextFn(prevFn(value)),
      (value) => value
  )
  return (...args: T) => piped(fn1(...args))
}

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
    fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1)

// This can live anywhere in your codebase:
export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      )
    })
  })
}
