import { MongoDBService } from './mongodb.service';
import { TestService } from './test.service';

export const SERVICES = [
    MongoDBService,
    TestService
];

export * from './mongodb.service';
export * from './test.service';
