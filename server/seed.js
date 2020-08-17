const Promise = require("bluebird");
const {
  Friend,
  db
} = require('./index');

const data =  {
    friends: [
        {
            name: "Star Patinum",
            rating: 10
        }, 
        {
            name: "Batman",
            rating: 8
        }, 
        {
            name: "Samurai Jack",
            rating: 7
        }, 
        {
            name: "Samantha",
            rating: 5
        }, 
        {
            name: "The aliens from 'Mars Attacks'",
            rating: 1
        }
    ]
}

async function seed() {
    try {
      await db.sync({force: true});
      console.log("Dropped old data, now inserting data");
  
      await Promise.map(Object.keys(data), async function (name) {
        await Promise.map(data[name], async function(item) {
          await db.model(name).create(item);
        })
      })
  
      console.log("Finished inserting data");
    } catch (err) {
      console.error('There was totally a problem', err, err.stack);
    } finally {
      db.close();
      console.log("connection closed");
    }
  }
  
  seed();