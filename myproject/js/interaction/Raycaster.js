import * as THREE from 'three';

let raycaster, mouse, camera, renderer, objects, onSelect;

export function initRaycaster(_camera, _renderer, _objects, _onSelect) {
    camera = _camera;
    renderer = _renderer;
    objects = _objects;
    onSelect = _onSelect;
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
}

function onPointerDown(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects, false);
    if (intersects.length > 0) {
        onSelect(intersects[0].object);
    } else {
        onSelect(null);
    }
}
