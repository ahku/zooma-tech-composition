import { method1_ObjectAssign } from './method1-object-assign'
import { method2_Compose } from './method2-compose-function'
import { method3_ClassMixins } from './method3-class-mixins'

let output = '<h1>Composition with functions & classes</h1>\n'
output += method1_ObjectAssign()
output += method2_Compose()
output += method3_ClassMixins()

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `${output}`

