'use strict'

const {db, models: {User, Quiz, Note, Ring} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody123', password: '123' , firstName: 'Cody',  email: 'cody@seed.js', type:'admin' }),
    User.create({ username: 'murphy123', password: '123', firstName: 'Murphy',  email: 'murphy@seed.js'  }),
  ])

  const quizzesVals = [
    {
      name: 'Enneagram',
      value: "7: The Enthusiast",
      description:
        "The Busy, Variety-Seeking Type: Spontaneous, Versatile, Acquisitive, and Scattered",
      image:
        "https://ih1.redbubble.net/image.884489008.4938/st,small,507x507-pad,600x600,f8f8f8.jpg",

      linkToResource: 'https://www.enneagraminstitute.com/type-descriptions',
      createdByAdmin: true,
    },
    {
      name: 'Enneagram',
      value: "4: The Individualist",
      description:
        "The Sensitive, Introspective Type:Expressive, Dramatic, Self-Absorbed, and Temperamental",
      image:
        "https://icon2.cleanpng.com/20180822/of/kisspng-the-enneagram-enneagram-of-personality-personality-inicio-5b7d2ed65d0561.322868241534930646381.jpg",
      linkToResource: 'https://www.enneagraminstitute.com/type-descriptions',
      createdByAdmin: true,
    },
    {
      name: "Love Language",
      value: 'Physical Touch',
      description:
        "All the LITERAL Feels",
      image:
        "https://sydneydoesart.files.wordpress.com/2020/01/physical-touch.png",
        linkToResource: 'https://www.mindbodygreen.com/articles/physical-touch-love-language',
        createdByAdmin: true,
    }
  ]
  const notes = [{note: 'hello'}, {note: 'goodbye'}]
  const [ennseven, ennfour, lovetouch] = await Promise.all(quizzesVals.map(quiz => Quiz.create(quiz)))
  const [note1, note2] = await Promise.all(notes.map(note => Note.create(note)))
  await users[0].addQuiz(ennseven);
  await users[0].addQuiz(lovetouch);
  await users[1].addQuiz(lovetouch);
  await users[1].addQuiz(ennfour);

  const ring1 = await Ring.findOne({where: {userId: 1, quizId: 1}});
  await ring1.addNote(note1)
  

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
