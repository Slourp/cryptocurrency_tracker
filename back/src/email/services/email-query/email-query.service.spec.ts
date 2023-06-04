import { Test, TestingModule } from '@nestjs/testing';
import { EmailQueryService } from './email-query.service';

describe('EmailQueryService', () => {
  let service: EmailQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailQueryService],
    }).compile();

    service = module.get<EmailQueryService>(EmailQueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
