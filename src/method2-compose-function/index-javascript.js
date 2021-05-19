import { compose } from '../utils/utils'
import { withAttack, withEvasion, withDefence } from './abilities'

export function method2_Compose() {
  let output = '<h2>Method 2: Compose Function</h2>'

  //------------------------------------------------------------------------
  //  Create archetypes
  //------------------------------------------------------------------------
  const createSlacker = compose(withDefence, withEvasion)
  const createBesserwisser = compose(withAttack)

  const createLeader = compose(
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
