import { Scene } from 'three';

export interface SceneSubject {
  scene: Scene;
  update?: () => void;
}
