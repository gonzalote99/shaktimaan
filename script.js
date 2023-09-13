const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,


);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var textureShaktimaan = new THREE.TextureLoader().load('https://raw.githubusercontent.com/bhavesh-chaudhari/vault-of-mini-projects/main/js-html-css/11-threejs-shaktimaan/shaktimaan.png');
const geometry = new THREE.CylinderGeometry(3, 3, 40, 40);
const material = new THREE.MeshBasicMaterial({map: textureShaktimaan});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);


const loader = new THREE.TextureLoader();
loader.load('https://raw.githubusercontent.com/bhavesh-chaudhari/vault-of-mini-projects/main/js-html-css/11-threejs-shaktimaan/city1.jpg', (texture1) => {
  scene.background = texture1;
})

camera.position.z = 100;


const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cylinder.rotation.y += 0.03;
  setTimeout(() => {
    cylinder.rotation.y += 0.5;
  }, 2500);


}

animate();


const text = document.getElementById('text');


const moveShaktimaan = () => {
xm = Math.floor(40 * Math.random()) * (Math.random() < 0.5 === true ? -1 : 1);
ym = Math.floor(5 * Math.random()) * (Math.random() < 0.5 === true ? -1 : 1);
zm = 0;

setTimeout(() => {
  cylinder.translateY(ym);
  cylinder.translateX(xm);
  cylinder.translateZ(zm);
}, 2000);
};

setInterval(() => {
  text.style.visibility = 'visible';
  text.style.top = `${Math.floor(window.innerHeight * Math.random()) - 40}px`;
  text.style.left = `${Math.floor(window.innerWidth * Math.random()) - 40}px`;
}, 1500);

setInterval(() => {
  moveShaktimaan();
}, 500);