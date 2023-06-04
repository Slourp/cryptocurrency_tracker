import { Test, TestingModule } from '@nestjs/testing';
import { EmailCommandService } from './email-command.service';

describe('EmailCommandService', () => {
  let service: EmailCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailCommandService],
    }).compile();

    service = module.get<EmailCommandService>(EmailCommandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
