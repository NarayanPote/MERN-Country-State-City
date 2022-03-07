
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    _id: {
      type: Number
    },
    name: {
      type: String
    },
    state: {
      type: Schema.Types.String,
      ref: 'State'
    }
  });

  
//   countrySchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });

// countrySchema.set('toJSON', {
//     virtuals: true
// });

module.exports = City = mongoose.model("cities", citySchema);
