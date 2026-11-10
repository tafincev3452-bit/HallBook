import { Test, TestingModule } from '@nestjs/testing';
import { HookahController } from './hookah.controller';

describe('HookahController', () => {
  let controller: HookahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HookahController],
    }).compile();

    controller = module.get<HookahController>(HookahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
