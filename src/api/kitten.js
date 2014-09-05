// var Schema   = mongoose.Schema;
 
// var FBUser = new Schema({
//     user_id    : String,
//     firstname  : String,
//     lastname   : String,
//     created_at : Date,
//     updated_at : Date
// });
 
// mongoose.model( 'FBUser', FBUser );

module.exports = {

    mongoose.connect( 'mongodb://localhost/music-quiz' );

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log("mongoose connection OK " );
        var kittenSchema = mongoose.Schema({
            name: String
        })
        kittenSchema.methods.speak = function () {
          var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name"
          console.log(greeting);
        }

        var kitten = mongoose.model('kitten', kittenSchema)
        var Edwina = new kitten({ name: 'Edwina' });
        Edwina.save(); 
        Edwina.speak(); 

    });

};