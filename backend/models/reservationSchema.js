import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters"],
    maxlength: [30, "First name must be at most 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last name must be at least 3 characters"],
    maxlength: [30, "Last name must be at most 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, "Please enter a valid phone number"],
    minlength: [10, "Phone number must contain 10 digits"],
    maxlength: [10, "Phone number must contain 10 digits"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Reservation", reservationSchema);
