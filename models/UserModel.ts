import { model, Schema, Document } from 'mongoose';
export interface UserModelInterface {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmHash: string;
  about?: string;
  website?: string;
  location?: string;
  tweets?: string[];
}
export type UserModelDocumentInterface = UserModelInterface & Document;
const UserSchema = new Schema<UserModelDocumentInterface>(
  {
    email: {
      unique: true,
      required: true,
      type: String,
    },
    fullname: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirmHash: {
      required: true,
      type: String,
    },
    about: String,
    website: String,
    location: String,
    tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
  },

  {
    timestamps: true,
  },
);

UserSchema.set('toJSON', {
  transform: function (_, obj) {
    delete obj.password;
    delete obj.confirmHash;
    return obj;
  },
});
export const UserModel = model<UserModelDocumentInterface>('User', UserSchema);
