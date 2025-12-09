import { mount } from 'cypress/react';
import Input from '../../src/components/Input';

describe('Input component', () => {

  it('рендериться з placeholder', () => {
    mount(<Input placeholder="Enter name" />);
    cy.get('input').should('have.attr', 'placeholder', 'Enter name');
  });

  it('рендериться з кастомним типом', () => {
    mount(<Input type="email" />);
    cy.get('input').should('have.attr', 'type', 'email');
  });

  it('рендериться з атрибутом name', () => {
    mount(<Input name="username" />);
    cy.get('input').should('have.attr', 'name', 'username');
  });

  it('рендериться з початковим значенням', () => {
    mount(<Input value="test123" />);
    cy.get('input').should('have.value', 'test123');
  });

  it('викликає onChange при введенні', () => {
    const onChange = cy.spy().as('changeSpy');

    mount(<Input onChange={onChange} />);

    cy.get('input').type('Hello');
    cy.get('@changeSpy').should('have.callCount', 5);
  });

  it('позначає input як обовязковий', () => {
    mount(<Input required />);
    cy.get('input').should('have.attr', 'required');
  });

  it('має правильний клас', () => {
    mount(<Input />);
    cy.get('input').should('have.class', 'custom-input');
  });

});
