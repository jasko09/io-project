
QUnit.test('Czy wyswietl_koszyk jest funkcja', function(assert) {
    assert.ok(typeof wyswietl_koszyk === 'function')
});

QUnit.test('Czy dodaj_do_koszyka jest funkcja ', function(assert) {
    assert.ok(typeof dodaj_do_koszyka === 'function')
});

QUnit.test('Czy wyszukaj_produkt jest funkcja', function(assert) {
    assert.ok(typeof wyszukaj_produkt === 'function')
});

QUnit.test('Czy koszyk jest nowym obiektem', function(assert) {
    assert.ok(typeof koszyk === 'object')
});

QUnit.test('Czy koszyk.lista.produktow jest tablica', function(assert) {
    assert.ok(typeof koszyk.listaProduktow === 'object')
});