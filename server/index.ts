import express, { Application } from 'express';
import morgan from 'morgan';
import { notesRouter } from '../routes/notes.route';
import {
  logErrors,
  wrapperError,
  errorHandler,
} from '../utils/middlewares/error-handler';
import cors from 'cors';
import { notFoundHandler } from '../utils/middlewares/note-found-handler';

type TEndPoints = {
  users: string;
  notes: string;
};

class Server {
  private app: Application;
  private endPoints: TEndPoints;
  constructor() {
    this.endPoints = {
      users: '/api/users',
      notes: '/api/notes',
    };
    this.app = express();
    this.app.use(express.json());
    this.router();
    this.middlewares();
  }
  listen() {
    this.app.listen(3001, () => {
      console.log(`server running: http://localhost:3001`);
    });
  }
  private router() {
    this.app.use(this.endPoints.notes, notesRouter);
  }
  private middlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(notFoundHandler);
    this.app.use(logErrors);
    this.app.use(wrapperError);
    this.app.use(errorHandler);
  }
}

export default new Server();
