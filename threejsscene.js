var renderer = null,

orbitControls = null;


scene = null, 
camera = null,
cubeGroup = null,
cube = null,
sphereGroup = null,
sphere = null,
cone = null;

//sun objects (sun group is solar system)
sun = null;
solarSystemGroup = null;

//mercury objects
mercury = null;
mercuryGroup = null;

//venus objects
venus = null;
venusGroup = null;

//earth objects
earth = null;
earthGroup = null;
moon = null;

var duration = 4000; // ms
var currentTime = Date.now();

function animate() 
{
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.001;

    cubeGroup.rotation.x += angle;

    // Rotate the cube about its Y axis
    cube.rotation.y += angle;

    // Rotate the sphere group about its Y axis
    sphereGroup.rotation.y -= angle / 2;
    sphere.rotation.x += angle;
    solarSystemGroup.rotation.y -= angle/2;
    earthGroup.rotation.y -= angle;
    mercuryGroup.rotation.y -= angle*4;
    venusGroup.rotation.y -= angle*3;

    earth.rotation.x *=2;
    earth.rotation.y *=2;
    earth.rotation.z *=2;

    // Rotate the cone about its X axis (tumble forward)
    cone.rotation.z += angle;
}

function run() {
    requestAnimationFrame(function() { run(); });
    
    // Render the scene
    renderer.render( scene, camera );


    // Update the camera controller
    orbitControls.update();

    // Spin the cube for next frame
    animate();
}

function createScene(canvas)
{    
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);
    
    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Set the background color 
    scene.background = new THREE.Color( 0, 0, 0 );
    // scene.background = new THREE.Color( "rgb(100, 100, 100)" );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 10;
    scene.add(camera);

    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

    // Create a group to hold all the objects
    cubeGroup = new THREE.Object3D;
    //creating sun to hold all the planets, animals, forms of life, asteroids
    solarSystemGroup = new THREE.Object3D;
    //creatin mercury group to hold mercury objects and moons
    mercuryGroup = new THREE.Object3D;
    //creating earth to hold all venus objects and moon
    venusGroup = new THREE.Object3D;
    //creating earth to hold all earth objects and moon
    earthGroup = new THREE.Object3D;
    
    // Add a directional light to show off the objects
    var light = new THREE.DirectionalLight( 0xffffff, 1.0);
    // var light = new THREE.DirectionalLight( "rgb(255, 255, 100)", 1.5);

    // Position the light out from the scene, pointing at the origin
    light.position.set(-.5, .2, 1);
    light.target.position.set(0,-2,0);
    scene.add(light);

    // This light globally illuminates all objects in the scene equally.
    // Cannot cast shadows
    var ambientLight = new THREE.AmbientLight(0xffcc00, 0.5);
    scene.add(ambientLight);

    var textureUrl = "../images/ash_uvgrid01.jpg";
    var textureSunUrl = "../images/sunmap.jpg";
    var textureMercuryUrl = "../images/mercurymap.jpg";
    var textureVenusUrl = "../images/venusmap.jpg";
    var textureEarthUrl = "../images/earthmap1k.jpg";
    var textureMoonUrl = "../images/moonmap1k.jpg";
    var texture = new THREE.TextureLoader().load(textureUrl);
    var textureSun = new THREE.TextureLoader().load(textureSunUrl);
    var textureMercury = new THREE.TextureLoader().load(textureMercuryUrl);
    var textureVenus = new THREE.TextureLoader().load(textureVenusUrl);
    var textureEarth = new THREE.TextureLoader().load(textureEarthUrl);
    var textureMoon = new THREE.TextureLoader().load( textureMoonUrl );
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var materialSun = new THREE.MeshPhongMaterial( { map: textureSun });
    var materialMercury = new THREE.MeshPhongMaterial( { map: textureMercury } );
    var materialVenus = new THREE.MeshPhongMaterial( { map: textureVenus } );
    var materialEarth = new THREE.MeshPhongMaterial( { map: textureEarth } );
    var materialMoon = new THREE.MeshPhongMaterial( { map: textureMoon } );

    // Create the cube geometry
    var geometry = new THREE.CubeGeometry(2, 2, 2);
    var geometrySun = new THREE.SphereGeometry(10, 20, 20);
    var geometryMercury = new THREE.SphereGeometry(1, 20, 20);
    var geometryVenus = new THREE.SphereGeometry(2, 20, 20);
    var geometryEarth = new THREE.SphereGeometry(3, 20, 20);
    var geometryMoon = new THREE.SphereGeometry(0.8, 20, 20);


    // And put the geometry and material together into a mesh
    cube = new THREE.Mesh(geometry, material);
    sun = new THREE.Mesh(geometrySun, materialSun);
    mercury = new THREE.Mesh(geometryMercury, materialMercury);
    venus = new THREE.Mesh(geometryVenus, materialVenus);
    earth = new THREE.Mesh(geometryEarth, materialEarth);
    moon = new THREE.Mesh(geometryMoon, materialMoon);

    // Tilt the mesh toward the viewer
    cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;

    // Add the cube mesh to our group
    mercuryGroup.add(mercury);
    venusGroup.add(venus);
    earthGroup.add( earth );
    earthGroup.add (moon);
    solarSystemGroup.add( sun );
    solarSystemGroup.add(mercuryGroup);
    solarSystemGroup.add(venusGroup);
    solarSystemGroup.add( earthGroup );

    cubeGroup.position.set(1, 0, -0.5);
    solarSystemGroup.position.set(0,0,-0.5);

    mercuryGroup.position.set(-20,0,0.5);

    venusGroup.position.set(-30, 0, 0.5);

    earthGroup.position.set(-50,0,-0.5);
    moon.position.set(-5,0,-0.5);

    // Create a group for the sphere
    sphereGroup = new THREE.Object3D;
    cubeGroup.add(sphereGroup);
    
    // Move the sphere group up and back from the cube
    sphereGroup.position.set(0, -3, -4);

    // Create the sphere geometry
    geometry = new THREE.SphereGeometry(1, 20, 20);
    
    // And put the geometry and material together into a mesh
    sphere = new THREE.Mesh(geometry, material);

    // Add the sphere mesh to our group
    sphereGroup.add( sphere );

    // Create the cone geometry
    geometry = new THREE.CylinderGeometry(0, .333, .444, 20, 5);

    // And put the geometry and material together into a mesh
    cone = new THREE.Mesh(geometry, material);

    // Move the cone up and out from the sphere
    cone.position.set(1, 1, -.667);
        
    // Add the cone mesh to our group
    sphereGroup.add( cone );
    
    // Now add the group to our scene
    //scene.add( cubeGroup );

    scene.add (solarSystemGroup); 
    solarSystemGroup.scale.set(0.09,0.09,0.09);  
}