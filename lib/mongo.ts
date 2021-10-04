import { INotes, IPostNote } from '../types/notes.types';
import mongoose, { Model } from 'mongoose';
import { config } from '../config/config';
import { INoteSchema } from '../utils/schemas/note.schema';

export type TGetNotesResponse = {
  notes: INotes[];
  message: string;
};

class MongoLib {
  private connection: any;
  private DB_NAME: string | undefined = config.dbName;
  private DB_USER: string | undefined = config.dbUSer;
  private DB_CLUSTER: string | undefined = config.dbCluster;
  private DB_PASSWORD: string | undefined = config.dbPassword;
  private mongoUri: string = `mongodb+srv://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_CLUSTER}/${this.DB_NAME}?retryWrites=true&w=majority`;

  constructor() {
    this.connect()
      .then(db => console.log('db connected'))
      .catch(err => console.error(err));
  }
  async connect() {
    try {
      this.connection = await mongoose.connect(this.mongoUri);
      return this.connection.connection;
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(collection: Model<INoteSchema>) {
    try {
      const notes = await collection.find({});
      return notes;
    } catch (error) {
      console.log('whops from mongo lib');
      console.error(error);
    }
  }
  async get(collection: Model<INoteSchema>, id: string) {
    try {
      const note = await collection.findOne({ _id: id });
      return note;
    } catch (error) {
      console.error(error);
    }
  }
  async create(collection: Model<INoteSchema>, note: IPostNote) {
    try {
      const noteCreated = new collection({
        ...note,
      });
      await noteCreated.save();
      return noteCreated;
    } catch (error) {
      console.error(error);
    }
  }
  async update(collection: Model<INoteSchema>, note: IPostNote, id: string) {
    console.log(id);
    try {
      await collection.findOneAndUpdate({ _id: id }, { ...note });
      const noteUpdated = await collection.findOne({ _id: id });
      return noteUpdated;
    } catch (error) {
      console.error(error);
    }
  }
  async delete(collection: Model<INoteSchema>, id: string) {
    try {
      const noteDeleted = await collection.findByIdAndDelete(id);
      return noteDeleted;
    } catch (error) {
      console.error(error);
    }
  }
}

export default MongoLib;
