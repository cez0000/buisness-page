import { ChangeDetectionStrategy, Component, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ASSET_PATH_MODELS } from 'src/assets/assets';
import { DRACOLoaderService, ThObject3D, ThScene } from 'ngx-three';
import { Clock } from 'three';
import * as THREE from 'three';

const ASSET_PATH =
  'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/assets/';
@Component({
  selector: 'app-skill-logo',
  templateUrl: './skill-logo-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillLogoComponent implements OnChanges {
  @ViewChild('model') model: ThObject3D;
  @ViewChild('scene') scene: ThScene;
  @Input() logoSrc: string = '';
  public selected:boolean = false;
  public glbPath:string = '';
  public readonly clock: Clock = new Clock(true);
  public logoObj;
  private quater = new THREE.Quaternion()
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  // public position: [number, number, number] = [3, 1.5, 5];
  public position: [number, number, number] = [3, 1.5, 5];
  nums:number[] = [0, 0, 0]
  public sprite = false;
  public readonly Math = Math;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['logoSrc'].currentValue) {
     this.glbPath = this.logoSrc;
    }
    
  }

  start() {
  setInterval(() => {
    
    this.model.objRef.getObjectByName('logo').rotateY(1);
  },100)
  }


  public onBeforeRender() {
   this.rotation = [0, this.rotation[1] + 0.02, 0];
  }
  
}
