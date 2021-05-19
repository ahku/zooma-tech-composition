import {
  withAttack,
  withDefence,
  withEvasion,
  composePlayer,
} from './abilities'
import type { Player } from './abilities'

export function method1_ObjectAssign() {
  let output = '<h2>Method 1: Object Assign</h2>'

  //------------------------------------------------------------------------
  //  Create archetypes
  //------------------------------------------------------------------------
  const createSlacker = ({ name }: Player) => {
    const player = { name }
    return Object.assign(withDefence(player), withEvasion(player))
  }

  const createBesserwisser = ({ name }: Player) => {
    const player = { name }
    return Object.assign(withAttack(player))
  }

  const createLeader = ({ name }: Player) => {
    const player = { name }
    return Object.assign(
      withDefence(player),
      withEvasion(player),
      withAttack(player)
    )
  }

  //------------------------------------------------------------------------
  //  Create our players
  //------------------------------------------------------------------------
  const roger = createSlacker({
    name: 'Roger',
  })
  const richard = createBesserwisser({
    name: 'Richard',
  })
  const diana = createLeader({
    name: 'Diana',
  })

  output += '<ul>'
  output += [
    roger.defend(),
    roger.evade(),
    richard.attack(),
    diana.defend(),
    diana.evade(),
    diana.attack(),
  ]
    .map((move) => `<li>${move}</li>`)
    .join('\n')

  output += '</ul>'

  //------------------------------------------------------------------------
  //  Using the dynamic composer function (loses dynamic typings)
  //------------------------------------------------------------------------
  const freestyler = composePlayer('Freestyler', [withDefence, withAttack])

  output += '<h3>Method 1.2. Incomplete compose function</h3>'
  output += '<ul>'
  output += [freestyler.attack(), freestyler.defend()]
    .map((move) => `<li>${move}</li>`)
    .join('\n')

  output += '</ul>'

  return output
}
