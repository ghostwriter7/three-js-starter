import { PerspectiveCamera, WebGLRenderer } from 'three';

export interface Control {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  update?: () => void;
}
