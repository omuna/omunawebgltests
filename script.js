// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Stats module
var stats = new Stats();
stats.showPanel( 0 );
document.body.appendChild( stats.dom );
stats.begin();

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Sphere Mesh with basic material
var geometry1 = new THREE.SphereGeometry( 1, 128, 128 );
var material1 = new THREE.MeshPhongMaterial( { color: "#ffe4e1" } );
var mainSphere = new THREE.Mesh( geometry1, material1 );

// Add Sphere to Scene
scene.add( mainSphere );


// Create a Box Mesh with basic material
var geometry2 = new THREE.BoxGeometry( 1, 3, 1 );
var material2 = new THREE.MeshPhongMaterial( { color: "#ffe4e1" } );
var cube1 = new THREE.Mesh( geometry2, material2 );

// Add Box to Scene
scene.add( cube1 );


// Create a Box Mesh with basic material
var geometry3 = new THREE.BoxGeometry( 1, 1, 3 );
var material3 = new THREE.MeshPhongMaterial( { color: "#ffe4e1" } );
var cube2 = new THREE.Mesh( geometry3, material3 );

// Add Box to Scene
scene.add( cube2 );

// Create a Box Mesh with basic material
var geometry4 = new THREE.BoxGeometry( 3, 1, 1 );
var material4 = new THREE.MeshPhongMaterial( { color: "#ffe4e1" } );
var cube3 = new THREE.Mesh( geometry4, material4 );

// Add Box to Scene
scene.add( cube3 );


// Add some ambient light
var light = new THREE.AmbientLight( 0xffffff , 0.1); // soft white light
scene.add( light );

// Add some points of light
var sphere = new THREE.SphereBufferGeometry( 0.5, 16, 8 );
//lights
var light1 = new THREE.PointLight( 0xff0040, 2, 100 );
light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
scene.add( light1 );
var light2 = new THREE.PointLight( 0x0040ff, 2, 100 );
light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
scene.add( light2 );
var light3 = new THREE.PointLight( 0x80ff80, 2, 100 );
light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
scene.add( light3 );

var clock = new THREE.Clock();

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mainSphere.rotation.x += 0.01;
  mainSphere.rotation.y += 0.01;

  var time = Date.now() * 0.0005;
  var delta = clock.getDelta();

  if( mainSphere ) {
    mainSphere.rotation.z -= 0.1 * delta;
    mainSphere.rotation.y -= 0.5 * delta;
    mainSphere.rotation.z -= 0.3 * delta;

    cube1.rotation.z -= 0.5 * delta;
    cube1.rotation.y -= 0.2 * delta;
    cube1.rotation.z -= 0.1 * delta;

    cube2.rotation.z -= 0.5 * delta;
    cube2.rotation.y -= 0.2 * delta;
    cube2.rotation.z -= 0.1 * delta;

    cube3.rotation.z -= 0.5 * delta;
    cube3.rotation.y -= 0.2 * delta;
    cube3.rotation.z -= 0.1 * delta;
  }

  light1.position.x = Math.sin( time * 0.7 ) * 30;
  light1.position.y = Math.cos( time * 0.5 ) * 40;
  light1.position.z = Math.cos( time * 0.3 ) * 30;
  light2.position.x = Math.cos( time * 0.3 ) * 30;
  light2.position.y = Math.sin( time * 0.5 ) * 40;
  light2.position.z = Math.sin( time * 0.7 ) * 30;
  light3.position.x = Math.sin( time * 0.7 ) * 30;
  light3.position.y = Math.cos( time * 0.3 ) * 40;
  light3.position.z = Math.sin( time * 0.5 ) * 30;

  stats.update();

  // Render the scene
  renderer.render(scene, camera);
};

window.onresize = function(){
	console.log("Window size: "+window.innerWidth+"x"+window.innerHeight+"px");
	renderer.setSize(window.innerWidth,window.innerHeight);
	var aspectRatio = window.innerWidth/window.innerHeight;
	camera.aspect = aspectRatio;
	camera.updateProjectionMatrix();
}

render();
stats.end();