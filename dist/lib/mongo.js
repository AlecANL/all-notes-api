"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
class MongoLib {
    constructor() {
        this.DB_NAME = config_1.config.dbName;
        this.DB_USER = config_1.config.dbUSer;
        this.DB_CLUSTER = config_1.config.dbCluster;
        this.DB_PASSWORD = config_1.config.dbPassword;
        this.mongoUri = `mongodb+srv://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_CLUSTER}/${this.DB_NAME}?retryWrites=true&w=majority`;
        this.connect()
            .then(db => console.log('db connected'))
            .catch(err => console.error(err));
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield mongoose_1.default.connect(this.mongoUri);
                return this.connection.connection;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getAll(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield collection.find({});
                return notes;
            }
            catch (error) {
                console.log('whops from mongo lib');
                console.error(error);
            }
        });
    }
    get(collection, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield collection.findOne({ _id: id });
                return note;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    create(collection, note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noteCreated = new collection(Object.assign({}, note));
                yield noteCreated.save();
                return noteCreated;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    update(collection, note, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            try {
                yield collection.findOneAndUpdate({ _id: id }, Object.assign({}, note));
                const noteUpdated = yield collection.findOne({ _id: id });
                return noteUpdated;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    delete(collection, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noteDeleted = yield collection.findByIdAndDelete(id);
                return noteDeleted;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = MongoLib;
//# sourceMappingURL=mongo.js.map