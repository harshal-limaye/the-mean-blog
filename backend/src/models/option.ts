import { Model, model, Schema, Document } from "mongoose";

export interface IOption extends Document {
  key: string;
  value: any;
}

const OptionSchema: Schema<IOption> = new Schema<IOption>({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export const Option: Model<IOption> = model("Option", OptionSchema);
