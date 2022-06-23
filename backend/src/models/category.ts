import { Schema, model, Model } from 'mongoose';

export interface CategoryDto {
    name?: string;
    description?: string;
}

const CategorySchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
});

export const Category = model('Category', CategorySchema);
