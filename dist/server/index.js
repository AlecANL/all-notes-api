"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("../config/config");
const notes_route_1 = require("../routes/notes.route");
const note_found_handler_1 = require("../utils/middlewares/note-found-handler");
const errorsHandler = __importStar(require("../utils/middlewares/error-handler"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.endPoints = {
            notes: '/api/notes',
        };
        this.app = (0, express_1.default)();
        this.port = +config_1.config.port;
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.router();
        this.middlewares();
    }
    init() {
        this.app.listen(this.port, () => {
            console.log(`server running... http://localhost:${this.port}`);
        });
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(note_found_handler_1.notFoundHandler);
        this.app.use(errorsHandler.logErrors);
        this.app.use(errorsHandler.wrapperError);
        this.app.use(errorsHandler.errorHandler);
    }
    router() {
        this.app.use(this.endPoints.notes, notes_route_1.notesRouter);
    }
}
exports.default = new Server();
//# sourceMappingURL=index.js.map