const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const countrySchema = new Schema({
    _id: {
      type: String
    },
    sortname: {
      type: String
    },
    name: {
      type: String
    },
    states: [
      {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
    ]
  });



//   countrySchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });

// countrySchema.set('toJSON', {
//     virtuals: true
// });

module.exports = Country = mongoose.model("countries", countrySchema);
