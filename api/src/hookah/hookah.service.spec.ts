import { Test, TestingModule } from '@nestjs/testing';
import { HookahService } from './hookah.service';

describe('HookahService', () => {
  let service: HookahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HookahService],
    }).compile();

    service = module.get<HookahService>(HookahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
