const mongoose = require("mongoose");
const { unique } = require("next/dist/build/utils");
const {
  stringToUint8Array,
} = require("next/dist/server/app-render/encryption-utils");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    profileImage: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: "",
      },
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["admin", "lead", "volunteer"],
      default: "volunteer"
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("user", userSchema);
