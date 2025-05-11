import { initScene, getScene, getCamera, getRenderer, render } from './scene/scenemanager.js';
import { addLighting } from './scene/lighting.js';
import { initControls, updateControls } from './scene/control.js';
import { createObjects } from './objects/Objectfactory.js';
import { initRaycaster } from './interaction/Raycaster.js';
import { setSelectedObject, renderHighlight } from './interaction/Highlighter.js';

let controls, objects;

function main() {
    const container = document.getElementById('threejs-container');
    initScene(container);
    const scene = getScene();
    const camera = getCamera();
    const renderer = getRenderer();

    addLighting(scene);
    controls = initControls(camera, renderer);

    objects = createObjects();
    objects.forEach(obj => scene.add(obj));

    initRaycaster(camera, renderer, objects, (selected) => {
        setSelectedObject(selected, scene);
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    updateControls();
    render();
    renderHighlight(getRenderer(), getScene(), getCamera());
}

main();
