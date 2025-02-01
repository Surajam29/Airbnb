const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    description:String,
    image: {
        filename: { type: String, required: false },
        url: {
            type: String,
            default:
                "https://www.istockphoto.com/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background-gm1127245421-297029234",
            set: (v) =>
                v === ""
                    ? "https://www.istockphoto.com/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background-gm1127245421-297029234"
                    : v,
        },
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;