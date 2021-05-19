import { compose } from '../utils/utils'
import {
  Player,
  withAttack,
  withEvasion,
  withDefence,
  WithAttack,
  WithDefence,
  WithEvasion,
} from './abilities'

export function method2_Compose() {
  let output = '<h2>Method 2: Compose Function</h2>'

  //------------------------------------------------------------------------
  //  Create archetypes
  //------------------------------------------------------------------------
  const createSlacker = compose<Player & WithDefence & WithEvasion>(
    withDefence,
    withEvasion
  )
  const createBesserwisser = compose<Player & WithAttack>(withAttack)

  const createLeader = compose<Player & WithDefence & WithEvasion & WithAttack>(
    withAttack,
    withDefence,
    withEvasion,
    withDefence
  )

  //------------------------------------------------------------------------
  //  Create our players
  //------------------------------------------------------------------------
  const roger = createSlacker({
    name: 'RogerRoger',
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

  return output
}
