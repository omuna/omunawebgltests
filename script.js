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

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Add some ambient light
var light = new THREE.AmbientLight( 0x404040 , 1.0); // soft white light
scene.add( light );

// Add some point light
var light = new THREE.PointLight( 0xff0000, 5.5, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

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