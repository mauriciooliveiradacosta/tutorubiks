// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true
});

// Define cube geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors
});

// Create 26 mini-cubes
const miniCubes = [];
for (let i = 0; i < 26; i++) {
    const miniCube = new THREE.Mesh(geometry, material);
    miniCube.position.set(...getMiniCubePosition(i));
    scene.add(miniCube);
    miniCubes.push(miniCube);
}

// Define mini-cube positions using three nested loops
function getMiniCubePosition(i) {
    const x = (i % 3) - 1;
    const y = Math.floor((i / 3) % 3) - 1;
    const z = Math.floor(i / 9) - 1;
    return [x, y, z];
}

// Add event listeners for rotation
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            rotateCube('x', 0.05);
            break;
        case 'ArrowDown':
            rotateCube('x', -0.05);
            break;
        case 'ArrowLeft':
            rotateCube('y', 0.05);
            break;
        case 'ArrowRight':
            rotateCube('y', -0.05);
            break;
        default:
            break;
    }
});

// Rotate cube
function rotateCube(axis, angle) {
    for (const miniCube of miniCubes) {
        miniCube.rotation[axis] += angle;
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();