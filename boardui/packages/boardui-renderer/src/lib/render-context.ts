import { RenderProperties } from '@guinguin-instruments/boardui-core';
import { ElementIdProvider } from './element-id-provider';
import { Renderer } from './renderer';
import { ReusablesProvider } from './reusables-provider';

export class RenderContext {
  constructor(
    public reusablesProvider: ReusablesProvider,
    public elementIdProvider: ElementIdProvider,
    public renderProperties: RenderProperties,
    public getRenderer: (part: any) => Renderer<any>
  ) {}
}
