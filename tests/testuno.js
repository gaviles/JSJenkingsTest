describe("bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  it("testing case 1", function() {
    expect(bar.times(2)).toEqual(4);
  });
}