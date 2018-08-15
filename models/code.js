const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  namePerson: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "Email is Required"
  },
  message: {
    type: String,
    trim: true,
    required: "Message"
  },
  formCreated: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
