describe("makeup-prevent-scroll-keys", function() {
    var scrollKeyPreventer = require('../index.js');

    describe('when module is imported', function() {
        it("module should not be undefined", function() {
            expect(scrollKeyPreventer).not.toEqual(undefined);
        });
    });
});
