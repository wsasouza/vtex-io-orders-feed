import { IOClients } from '@vtex/api';
import { PointsClient } from './pointsClient';

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get points() {
    return this.getOrSet('points', PointsClient)
  }
}
