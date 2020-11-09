const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for this employee"
    },
    office: {
      type: Number,
      required: "Enter an office number"
    },
    email: {
      type: String,
      required: "Enter an email for this employee"
    }
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;