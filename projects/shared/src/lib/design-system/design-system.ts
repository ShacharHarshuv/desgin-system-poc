import {
  Type,
  InjectionToken,
} from '@angular/core';

export type InstanceOf<T> = T extends Type<infer U> ? U : never;

export type DesignSystemComponentsInputs = {
  button: {
    type: 'primary' | 'secondary';
    content: string;
  }
}

export type DesignSystemComponents = {[key in keyof DesignSystemComponentsInputs]: Type<DesignSystemComponentsInputs[key]>};

export const DESIGN_SYSTEM_COMPONENTS = new InjectionToken<DesignSystemComponents>('DesignSystemComponents');
