import * as THREE from 'three';

export function addLighting(scene) {
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.7);
    dir.position.set(5, 10, 7.5);
    dir.castShadow = true;
    scene.add(dir);

    const point = new THREE.PointLight(0xffee88, 0.8, 20);
    point.position.set(0, 5, 5);
    scene.add(point);
}
