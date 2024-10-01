import { Test, TestingModule } from '@nestjs/testing';
import { HashService } from './hash.service';
import { ConfigService } from '@nestjs/config';
import { UtilService } from '@app/shared';
const configServiceValue = {
  get: jest.fn().mockReturnValue('blah blah'),
};
const utilServiceValue = {
  b64decode: jest.fn().mockReturnValue(Buffer.from('blah blah')),
};
describe('HashService', () => {
  let service: HashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HashService,
        { provide: ConfigService, useValue: configServiceValue },
        { provide: UtilService, useValue: utilServiceValue },
      ],
    }).compile();

    service = module.get<HashService>(HashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be same: verify', async () => {
    expect(
      await service.verify(await service.hash('behzad'), 'behzad'),
    ).toBeTruthy();
  });

  it('should be same: hash', async () => {
    const h1 = await service.hash('behzad');
    const h2 = await service.hash('behzad');
    expect(
      (await service.verify(h1, 'behzad')) ===
        (await service.verify(h2, 'behzad')),
    ).toBeTruthy();
  });
});
