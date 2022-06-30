const assert = require('assert');

Feature('Liking Destinations');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked destinations', ({ I }) => {
  I.seeElement('#no-data');
});

Scenario('liking one destination', async ({ I }) => {
  I.seeElement('#no-data');

  I.amOnPage('/#/explore');
  I.dontSee('#no-data');

  I.seeElement('h4 .card-title');

  const firstDestination = locate('h4 .card-title').first();
  const firstDestinationName = await I.grabTextFrom(firstDestination);
  I.click(firstDestination);

  I.seeElement('#favbutton');
  I.click('#favbutton');

  I.amOnPage('/#/favorite');
  I.dontSee('#no-data');
  I.seeElement('h4 .card-title');

  const likedDestinationName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstDestinationName, likedDestinationName);
});

Scenario('remove liked destination', ({ I }) => {
  I.seeElement('#no-data');

  I.amOnPage('/#/explore');

  I.seeElement('h4 .card-title');
  I.click(locate('h4 .card-title').first());

  I.seeElement('#favbutton');
  I.click('#favbutton');

  I.amOnPage('/#/favorite');
  I.dontSee('#no-data');
  I.seeElement('h4 .card-title');
  I.click(locate('h4 .card-title').first());

  I.seeElement('#favbutton');
  I.click('#favbutton');

  I.amOnPage('/#/favorite');
  I.seeElement('#no-data');
});
