const { Schema, model } = require('mongoose');

const CharSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index:{ unique: true, sparse: true }
    },
    attack:{
        type: Number,
        required: true,
    },
    HP:{
        type: Number,
        required: true
    }
    
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);



const Character = model('Character', CharSchema);

module.exports = {Character, CharSchema} ;