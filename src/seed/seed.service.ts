import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB() {
    return 'Database populated with initial data';
  }
}
