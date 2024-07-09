import { Schema } from "mongoose";


export const HouseSchema = new Schema({
    bedrooms: { type: Number, required: true, min: 1, max: 30, default: 1 },
    bathrooms: { type: Number, required: true, min: 1, max: 40, default: 1 },
    levels: { type: Number, required: true, min: 1, max: 4, default: 1 },
    imgUrl: { type: String, required: true, minLength: 0, maxLength: 500, default: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    price: { type: Number, required: true, min: 0, max: 3000000, default: 50000 },
    description: { type: String, minLength: 0, maxLength: 500 },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
}, { toJSON: { virtuals: true } })

HouseSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true,
})

// bedrooms: Number, required
// bathrooms: Number, required
// levels: Number, required
// imgUrl: String,
//     year: Number, required
// price: Number, required
// description: String,
//     creatorId: SchemaObjectId, required
//         * creator: Object(Virtual Added by Database)
//             * createdAt: ISO Timestamp(Virtual Added by Database)
//                 * updatedAt: ISO Timestamp(Virtual Added by Database)