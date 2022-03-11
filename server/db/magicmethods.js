const {db, models: {User, Quiz, Ring, Note} } = require('.')

for (let i of ['User', 'Quiz','Note','Ring']) {
  console.log('\n  --------------------------------  \n')
  console.log(`Magic methods for ${i}:`)
  console.log(Object.keys(eval(i).prototype))
}
