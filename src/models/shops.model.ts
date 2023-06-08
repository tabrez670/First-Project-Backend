import { Document, Schema, model, Types } from "mongoose";
import { IShop } from "../types/shops.type.js";
import { CollectionNames } from "../types/collection.types.js";
import config from "../config/config.js";
// const AWS_S3_URL = "https://video-streaming-application.s3.amazonaws.com"; //sample

const ShopSchema: Schema = new Schema<IShop>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        author: { type: Types.ObjectId, ref: "Users" },
        // thumbnail: { data: Buffer, contentType: String },
        comments: [{ type: Types.ObjectId, ref: "Comments" }],
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


export default model<IShop & Document>(CollectionNames.Video, ShopSchema);
