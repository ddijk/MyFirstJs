/**
 * Created by dick on 25-4-16.
 */
describe('testing monad', function() {


    it('test my capitalcase monad', function() {
        expect(MONAD()('dick').bind(hello)).toBe('hallo dick');
    })
});