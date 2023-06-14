import mongoose from "mongoose";

const User = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    ket:{
        type: String,
        required: true
    },
    harga:{
        type: Number,
        required: true
    },
    jumlah:{
        type: Number,
        required: true
    },
});

export default mongoose.model("Users", User);