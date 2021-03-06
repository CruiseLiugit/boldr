import React from 'react';
import NavigationForm from '../NavigationForm';

export type Props = {
  onFormSubmit?: Function,
  initialValues?: {
    position?: number,
    link?: string,
    name?: string,
  },
};

const NavigationEditor = (props: Props) => {
  return (
    <div>
      <NavigationForm initialValues={ props.initialValues } enableReinitialize onSubmit={ props.onFormSubmit } />
    </div>
  );
};

export default NavigationEditor;
