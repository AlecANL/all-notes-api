import express, { Application } from 'express';
import morgan from 'morgan';
import { config } from '../config/config';
import { TEndPoints } from '../types/server.types';
import { notesRouter } from '../routes/notes.route';
import { notFoundHandler } from '../utils/middlewares/note-found-handler';
import * as errorsHandler from '../utils/middlewares/error-handler';
import cors from 'cors';
class Server {
  private app: Application;
  private port: number;
  private endPoints: TEndPoints;

  constructor() {
    this.endPoints = {
      notes: '/api/notes',
    };
    this.app = express();
    this.port = +config.port;
    this.app.use(express.json());
    this.app.use(cors());
    this.router();
    this.middlewares();
  }

  init() {
    this.app.listen(this.port, () => {
      console.log(`server running... http://localhost:${this.port}`);
    });
  }
  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(notFoundHandler);
    this.app.use(errorsHandler.logErrors);
    this.app.use(errorsHandler.wrapperError);
    this.app.use(errorsHandler.errorHandler);
  }
  private router() {
    this.app.use(this.endPoints.notes, notesRouter);
  }
}

export default new Server();
