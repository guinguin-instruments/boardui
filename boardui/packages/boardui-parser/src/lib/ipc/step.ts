import { Component } from './component';
import { Contour } from './contour';
import { LayerFeature } from './layer-feature';
import { Package } from './package';
import { NonstandardAttribute } from './nonstandard-attribute';

export class Step {
  name: string = null!;
  profile: Contour | null = null;
  nonstandardAttributes: NonstandardAttribute[] = [];
  layerFeatures: LayerFeature[] = [];
  packages: Package[] = [];
  components: Component[] = [];
}
