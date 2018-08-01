import { SecuritiesManagementModule } from './SecuritiesManagement.module';

describe('SecuritiesManagementModule', () => {
  let securitiesManagementModule: SecuritiesManagementModule;

  beforeEach(() => {
    securitiesManagementModule = new SecuritiesManagementModule();
  });

  it('should create an instance', () => {
    expect(securitiesManagementModule).toBeTruthy();
  });
});
