import { mount } from 'cypress/react';
import Button from '../../src/components/Button';

describe('Button component', () => {

  it('рендерить текст кнопки', () => {
    mount(<Button>Click me</Button>);
    cy.contains('Click me').should('exist');
  });

  it('викликає onClick при кліку', () => {
    const onClick = cy.spy().as('clickSpy');
    mount(<Button onClick={onClick}>Press</Button>);

    cy.contains('Press').click();
    cy.get('@clickSpy').should('have.been.calledOnce');
  });

  it('застосовує disabled і запобігає кліку', () => {
    const onClick = cy.spy().as('disabledClick');
    mount(<Button disabled onClick={onClick}>Disabled</Button>);

    cy.contains('Disabled').should('be.disabled');
    cy.contains('Disabled').click({ force: true });
    cy.get('@disabledClick').should('not.have.been.called');
  });

  it('рендерить правильний тип кнопки', () => {
    mount(<Button type="submit">Submit</Button>);
    cy.get('button').should('have.attr', 'type', 'submit');
  });

  it('додає клас  btn-disabled коли disabled', () => {
    mount(<Button disabled>Test</Button>);
    cy.get('button').should('have.class', 'btn-disabled');
  });

});
