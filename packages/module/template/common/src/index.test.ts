import { sum } from '.';

describe('sum', () => {
    it('should return expected result', () => {
        expect(sum(2, 3)).toEqual(5);
    });
});
