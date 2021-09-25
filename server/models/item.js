const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      attack:{
          type: Number,
          required: true,
  
      },
      HP:{
          type: Number,
          required: true
      },
      
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  
  
  
  
  module.exports = itemSchema ;