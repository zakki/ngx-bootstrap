import { browser } from 'protractor';
import { tooltipEl } from '../selectors.json';

describe('Tooltip page test on bootstrap 3.', () => {
  const tooltipText = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

  beforeAll(() => {
    browser.get('#/tooltip');
  });


  it('Check the tooltip for Simple demo button.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonSimpleDemo)
      .perform();
    tooltipEl.tooltipElement.isDisplayed().then(value => expect(value).toBeTruthy());
  });

  it('Four directions tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsLeft)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsTop)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsBottom)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonFourDirectionsRight)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());
  });

  it('Dismissible tooltip.', () => {
    browser.actions()
      .click(tooltipEl.buttonDismissible)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());
  });

  it('Dynamic Content tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonSimpleBinding)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonTemplateRefBinding)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());
  });

  it('Dynamic Html tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonDynamicHTML)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());
  });

  it('Append to body.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonDefaultTooltip)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonAppendedToBody)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());
  });

  it('Preconfigured tooltip.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonPreconfiguredTooltip)
      .perform();
    expect(tooltipEl.buttonPreconfiguredTooltip.getAttribute('tooltip')).toContain(tooltipText);
  });

  it('Custom triggers.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonCustomTriggers)
      .perform(); // Moving over button to show tooltip.
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .mouseMove(tooltipEl.buttonPreconfiguredTooltip)
      .perform(); // Moving to to another button to test than tooltip still showed.
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .click(tooltipEl.buttonCustomTriggers)
      .perform(); // Clicking the button - tooltip must be hidden.
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeFalsy());
  });

  it('Manual triggering.', () => {
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeFalsy());

    browser.actions()
      .click(tooltipEl.buttonManualTriggeringShow)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeTruthy());

    browser.actions()
      .click(tooltipEl.buttonManualTriggeringHide)
      .perform();
    tooltipEl.tooltipElement.isPresent().then(value => expect(value).toBeFalsy());
  });

  it('Component level styling.', () => {
    browser.actions()
      .mouseMove(tooltipEl.buttonComponentLevelStyling)
      .perform();
    expect(tooltipEl.buttonComponentLevelStyling.getAttribute('tooltip')).toContain(tooltipText);
  });
});
