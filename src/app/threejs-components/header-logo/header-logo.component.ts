import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASSET_PATH_MODELS } from 'src/assets/assets';
import { DRACOLoaderService } from 'ngx-three';
import { Clock } from 'three';
import * as THREE from 'three';

const ASSET_PATH =
  'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/assets/';
@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoComponent {
  public selected = false;
  public readonly glbPath = `${ASSET_PATH}mac-draco.glb`;
  public readonly clock = new Clock(true);
  public rotation: [x: number, y: number, z: number] = [1, 0, 0];
  public position: [number, number, number] = [0, 0, 0];
  public sprite = false;
  public readonly Math = Math;
  constructor(dracoLoader: DRACOLoaderService) {
    // specify the draco decoder path used by the gltf loader instances
    dracoLoader.setDecoderPath(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/draco/gltf/'
    );
    // in this case we need to disable cors (should not be necessary if you host the decoder yourself)
    dracoLoader.setCrossOrigin('no-cors');

    this.calcPose();
  }

  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
  protected calcPose() {
    const t = this.clock.getElapsedTime();
    this.rotation = [
      THREE.MathUtils.lerp(this.rotation[0], Math.cos(t / 2) / 20 + 0.25, 0.1),
      THREE.MathUtils.lerp(this.rotation[1], Math.sin(t / 4) / 20, 0.1),
      THREE.MathUtils.lerp(this.rotation[2], Math.sin(t / 8) / 20, 0.1),
    ];

    this.position = [
      0,
      THREE.MathUtils.lerp(this.position[1], (-2 + Math.sin(t / 2)) / 2, 0.1),
      0,
    ];
  }
}
