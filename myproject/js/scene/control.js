import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let controls;

export function initControls(camera, renderer) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1, 0);
    controls.update();
    return controls;
}

export function updateControls() {
    if (controls) controls.update();
}
