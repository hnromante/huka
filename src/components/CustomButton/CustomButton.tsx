import * as React from 'react';
import { Component } from 'react';
import './CustomButton.scss';

/**
 * CustomButton Propiedades.
 */
export interface ICustomButton {
  /** Título del botón*/
  title: string;
  /** Estilo del botón */
  buttonType: 'primary' | 'secondary' | 'warning' | 'danger';
  /**
   * Función handler de click
   */
  onClick: () => void;
}

/**
 * Botón personalizado.
 */
export default class CustomButton extends Component<ICustomButton, {}> {
  render() {
    const {buttonType, title, onClick} = this.props;
    return (
          <button className={buttonType} onClick={onClick}>{title}</button>
    );
  }
}