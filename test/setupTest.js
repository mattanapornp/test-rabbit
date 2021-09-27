import { configure } from '@testing-library/react';

// speeds up *ByRole queries a bit
configure({ defaultHidden: true });

// make debug output for TestingLibrary Errors larger
process.env.DEBGU_PRINT_LIMIT = 15000;

// TODO: Mock APIs via creating testing server
beforeAll(() => null);

// TODO: Kill the API server
afterEach(() => null);
