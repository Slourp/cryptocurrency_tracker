import { Test, TestingModule } from '@nestjs/testing';
import { CommandServiceService } from './command-service.service';

describe('CommandServiceService', () => {
  let service: CommandServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandServiceService],
    }).compile();

    service = module.get<CommandServiceService>(CommandServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
