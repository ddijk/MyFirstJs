/**
 * Created by dick on 25-4-16.
 */
describe("Test calculator", function() {

    describe("Test adding suite", function() {
    it("test adding", function() {
        expect(add(2,3)).toBe(5);
    })

        it("test adding", function() {
            expect(add(4,3)).toBe(7);
        })
    });

        describe("Test subtracting suite", function() {
            it("test subtracting", function() {
                expect(subtract(2,3)).toBe(-1);
            })

            it("test adding", function() {
                expect(subtract(4,3)).toBe(1);
            })
        });
}
)