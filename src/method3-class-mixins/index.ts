import { applyMixins } from '../utils/utils'
import { Evadable, Attackable, Defendable } from './mixins'

//------------------------------------------------------------------------
//  Create archetypes
//------------------------------------------------------------------------

// ---------- SLACKER ----------
class Slacker {
  name = 'Slacker'

  constructor(name: string) {
    this.name = name
  }
}

interface Slacker extends Defendable, Evadable {}

applyMixins(Slacker, [Attackable, Defendable, Evadable])

// ---------- BESSERWISSER ----------
class Besserwisser {
  name = 'Besserwisser'

  constructor(name: string) {
    this.name = name
  }
}

interface Besserwisser extends Attackable {}

applyMixins(Besserwisser, [Attackable])

// ---------- LEADER ----------
class Leader {
  name = 'Leader'

  constructor(name: string) {
    this.name = name
  }
}

interface Leader extends Defendable, Evadable, Attackable {}

applyMixins(Leader, [Defendable, Evadable, Attackable])

//------------------------------------------------------------------------
//  Create our players
//------------------------------------------------------------------------
export function method3_ClassMixins() {
  let output = '<h2>Method 3: Class Mixins</h2>'

  let roger = new Slacker('Roger')
  let richard = new Besserwisser('Richard')
  let diana = new Leader('diana')

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
