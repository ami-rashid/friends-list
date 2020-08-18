const Promise = require("bluebird");
const {
  Friend,
  db
} = require('./index');

async function seed() {
    try {
      await db.sync({force: true});
      console.log("Dropped old data, now inserting data");
  
     await Promise.all([
      Friend.create({
        name: 'Bob',
        rating: 9
      }), 
      Friend.create({
        name: 'Alli',
        rating: 1
      }),
      Friend.create({
        name: 'Samantha',
        rating: 7
      })
     ])
     
      console.log("Finished inserting data");
    } catch (err) {
      console.error('There wasc a problem', err, err.stack);
    } finally {
      console.log("connection closed");
    }
  }
  
module.exports = {
  seed
}

