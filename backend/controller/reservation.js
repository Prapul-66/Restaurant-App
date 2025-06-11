import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const createReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;

  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
    });

    return res.status(200).json({
      success: true,
      message: "Reservation created successfully",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationError = Object.values(err.errors).map(
        (value) => value.message
      );
      return next(new ErrorHandler(validationError.join(", "), 400));
    }
    return next(err);
  }
};
