import * as THREE from 'three';

export function createObjects() {
    const objects = [];

    const box = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    );
    box.position.set(-3, 0.5, 0);
    box.name = 'Box';
    objects.push(box);

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xaa8844 })
    );
    sphere.position.set(-1.5, 0.7, 0);
    sphere.name = 'Sphere';
    objects.push(sphere);

    const torus = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.2, 16, 100),
        new THREE.MeshPhongMaterial({ color: 0x8844aa })
    );
    torus.position.set(0, 0.5, 0);
    torus.name = 'Torus';
    objects.push(torus);

    const cone = new THREE.Mesh(
        new THREE.ConeGeometry(0.6, 1.2, 32),
        new THREE.MeshPhongMaterial({ color: 0x2288cc })
    );
    cone.position.set(1.5, 0.6, 0);
    cone.name = 'Cone';
    objects.push(cone);

    const cylinder = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32),
        new THREE.MeshPhongMaterial({ color: 0xcc2288 })
    );
    cylinder.position.set(3, 0.6, 0);
    cylinder.name = 'Cylinder';
    objects.push(cylinder);

    return objects;
}
