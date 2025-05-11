import * as THREE from 'three';

let selectedObject = null;
let outlineMesh = null;

function createOutlineMesh(object) {
    const outlineMat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.BackSide,
        depthTest: true,
        depthWrite: false,
        stencilWrite: true,
        stencilFunc: THREE.AlwaysStencilFunc,
        stencilRef: 1,
        stencilZPass: THREE.ReplaceStencilOp,
        stencilFail: THREE.KeepStencilOp,
        stencilZFail: THREE.KeepStencilOp,
    });
    const outline = new THREE.Mesh(object.geometry.clone(), outlineMat);
    outline.position.copy(object.position);
    outline.rotation.copy(object.rotation);
    outline.scale.copy(object.scale).multiplyScalar(1.08);
    outline.name = 'Outline';
    return outline;
}

export function setSelectedObject(object, scene) {
    if (outlineMesh) {
        scene.remove(outlineMesh);
        outlineMesh.geometry.dispose();
        outlineMesh.material.dispose();
        outlineMesh = null;
    }
    selectedObject = object;
    if (object) {
        outlineMesh = createOutlineMesh(object);
        scene.add(outlineMesh);
    }
}

export function renderHighlight(renderer, scene, camera) {
    if (!selectedObject || !outlineMesh) return;
    // Sync outline mesh transform with selected object (in case it moves)
    outlineMesh.position.copy(selectedObject.position);
    outlineMesh.rotation.copy(selectedObject.rotation);
    outlineMesh.scale.copy(selectedObject.scale).multiplyScalar(1.08);
    // Render the outline mesh with stencil buffer
    renderer.clearStencil();
    renderer.state.buffers.stencil.setTest(true);
    renderer.render(outlineMesh, camera);
    renderer.state.buffers.stencil.setTest(false);
}
