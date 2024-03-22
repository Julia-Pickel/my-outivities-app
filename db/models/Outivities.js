import mongoose from "mongoose";

const { Schema } = mongoose;

const outivitySchema = new Schema({
  title: { type: String, required: true },
  area: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  lat: { type: Number, required: false },
  lng: { type: Number, required: false },
  author: String,
});

const Outivity =
  mongoose.models.Outivity || mongoose.model("Outivity", outivitySchema);

export default Outivity;
//
