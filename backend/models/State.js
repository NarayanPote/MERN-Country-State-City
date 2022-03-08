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




module.exports = State = mongoose.model("state", stateSchema);

