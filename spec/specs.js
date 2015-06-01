
describe('wordReplace', function() {
  it("remove's a user provided word from a user provided sentence", function() {
    expect(wordReplace("Tbone walks on water", "water", "")).to.equal("Tbone walks on ");
  });


});
