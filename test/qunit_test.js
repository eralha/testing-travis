
function Person(){

}


test('Deve instanciar um objecto Person', function() {
  var pessoa = new Person("Emanuel", "Ralha", 28);
  expect(1);

  equal('LOL', 'LOL', 'should be able to access the DOM.');
});


test('basic test', function() {
  expect(1);
  ok(true, 'this had better work.');
});


test('can access the DOM', function() {
  expect(1);
  var fixture = document.getElementById('qunit-fixture');
  equal(fixture.innerText, 'this had better work.', 'should be able to access the DOM.');
});