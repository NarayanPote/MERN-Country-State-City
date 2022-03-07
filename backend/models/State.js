const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const stateSchema = new Schema({
    _id: {
      type: Number
    },
    name: {
      type: String
    },
    cities: [
      {
        type: Schema.Types.String,
        ref: 'City'
      }
    ],
    country: {
      type: Schema.Types.String,
      ref: 'Country'
    }
  });


//   countrySchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });

// countrySchema.set('toJSON', {
//     virtuals: true
// });


module.exports = State = mongoose.model("state", stateSchema);

