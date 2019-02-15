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

//rotation pivots
earthRotationPivot = null;
mercuryRotationPivot = null;
venusRotationPivot = null;
marsRotationPivot = null;
jupiterRotationPivot = null;
saturnRotationPivot = null;
uranusRotationPivot = null;
neptuneRotationPivot = null;
plutoRotationPivot = null;

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

//mars objects
mars = null;
marsGroup = null;

//jupiter objects
jupiter = null;
jupiterGroup = null;

saturn = null;
saturnGroup = null;

uranus = null;
uranusGroup = null;

neptune = null;
neptuneGroup = null;

pluto = null;
plutoGroup = null;


var duration = 6500; // ms
var currentTime = Date.now();

function animate() 
{
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.001;

    //set each planet's rotation speeds
    solarSystemGroup.rotation.y -= angle;
    mercuryGroup.rotation.y -= angle*15;
    venusGroup.rotation.y -= angle*12;
    earthGroup.rotation.y -= angle*10;
    marsGroup.rotation.y -= angle*8;
    jupiterGroup.rotation.y -= angle*6;
    saturnGroup.rotation.y -= angle*4;
    uranusGroup.rotation.y -= angle*2;
    neptuneGroup.rotation.y -= angle;
    plutoGroup.rotation.y -= angle;

    //set pivot rotation for planet traslation
    mercuryRotationPivot.rotation.y += angle*2.5;
    venusRotationPivot.rotation.y -= angle*1.2;
    earthRotationPivot.rotation.y += angle*2;
    marsRotationPivot.rotation.y -= angle*0.8;
    jupiterRotationPivot.rotation.y += angle*1.6;
    saturnRotationPivot.rotation.y -= angle/7;
    uranusRotationPivot.rotation.y += angle*1.2;
    neptuneRotationPivot.rotation.y -= angle/10;
    plutoRotationPivot.rotation.y += angle*1.5;
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

function createOrbits(solarSystemGroup, radius)
{
    var shape = new THREE.Shape();
    shape.moveTo(radius, 0);
    shape.absarc(0, 0, radius, 0, 2 * Math.PI, false);
    var spacedPoints = shape.createSpacedPointsGeometry(360);

    var vertexColors = [];
    spacedPoints.vertices.forEach( function( vertex ){
        vertexColors.push( new THREE.Color( 0xffffff ))
    });
    spacedPoints.colors = vertexColors;

    var orbit = new THREE.Line(spacedPoints, new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        opacity: 0.3,
        transparent: true
    }));
    orbit.rotation.x = Math.PI / 2;
    orbit.position.set(0,0,-0.5);
    solarSystemGroup.add(orbit);
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

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 10;
    scene.add(camera);

    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

    //Create Rotation Pivots
    mercuryRotationPivot = new THREE.Object3D;
    venusRotationPivot = new THREE.Object3D;
    earthRotationPivot = new THREE.Object3D;
    marsRotationPivot = new THREE.Object3D;
    jupiterRotationPivot = new THREE.Object3D;
    saturnRotationPivot = new THREE.Object3D;
    uranusRotationPivot = new THREE.Object3D;
    neptuneRotationPivot = new THREE.Object3D;
    plutoRotationPivot = new THREE.Object3D;

    //creating sun to hold all the planets, animals, forms of life, asteroids
    solarSystemGroup = new THREE.Object3D;
    //creatin mercury group to hold mercury objects and moons
    mercuryGroup = new THREE.Object3D;
    //creating earth to hold all venus objects and moon
    venusGroup = new THREE.Object3D;
    //creating earth to hold all earth objects and moon
    earthGroup = new THREE.Object3D;
    earthRotationPivot = new THREE.Object3D;
    //creating mars group to hold all mars objects
    marsGroup = new THREE.Object3D;
    //creating jupiter group to hold all jupiter objects
    jupiterGroup = new THREE.Object3D;

    saturnGroup = new THREE.Object3D;

    uranusGroup = new THREE.Object3D;

    neptuneGroup = new THREE.Object3D;

    plutoGroup = new THREE.Object3D;
    
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
    var textureMarsUrl = "../images/mars_1k_color.jpg";
    var textureJupiterUrl = "../images/jupitermap.jpg";
    var textureSaturnUrl = "../images/saturnmap.jpg";
    var textureSaturnRingsUrl = "../images/saturnringcolor.jpg";
    var textureUranusUrl = "../images/uranusmap.jpg";
    var textureNeptuneUrl = "../images/neptunemap.jpg";
    var texturePlutoUrl = "../images/plutomap1k.jpg";

    // Planet textures
    var textureSun = new THREE.TextureLoader().load(textureSunUrl);
    var textureMercury = new THREE.TextureLoader().load(textureMercuryUrl);
    var textureVenus = new THREE.TextureLoader().load(textureVenusUrl);
    var textureEarth = new THREE.TextureLoader().load(textureEarthUrl);
    var textureMoon = new THREE.TextureLoader().load(textureMoonUrl);
    var textureMars = new THREE.TextureLoader().load(textureMarsUrl);
    var textureJupiter = new THREE.TextureLoader().load(textureJupiterUrl);
    var textureSaturn = new THREE.TextureLoader().load(textureSaturnUrl);
    var textureSaturnRings = new THREE.TextureLoader().load(textureSaturnRingsUrl);
    var textureUranus = new THREE.TextureLoader().load(textureUranusUrl);
    var textureNeptune = new THREE.TextureLoader().load(textureNeptuneUrl);
    var texturePluto = new THREE.TextureLoader().load(texturePlutoUrl);

    // Materials
    var materialSun = new THREE.MeshPhongMaterial({
        map: textureSun
    });
    var materialMercury = new THREE.MeshPhongMaterial({
        map: textureMercury
    });
    var materialVenus = new THREE.MeshPhongMaterial({
        map: textureVenus
    });
    var materialEarth = new THREE.MeshPhongMaterial({
        map: textureEarth
    });
    var materialMoon = new THREE.MeshPhongMaterial({
        map: textureMoon
    });
    var materialMars = new THREE.MeshPhongMaterial({
        map: textureMars
    });
    var materialJupiter = new THREE.MeshPhongMaterial({
        map: textureJupiter
    });
    var materialSaturn = new THREE.MeshPhongMaterial({
        map: textureSaturn
    });
    var materialSaturnRings = new THREE.MeshPhongMaterial({
        map: textureSaturnRings,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
    });
    var materialUranus = new THREE.MeshPhongMaterial({
        map: textureUranus
    });
    var materialNeptune = new THREE.MeshPhongMaterial({
        map: textureNeptune
    });
    var materialPluto = new THREE.MeshPhongMaterial({
        map: texturePluto
    });
    var materialTraslations = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });

    // Create the cube geometry
    var geometry = new THREE.CubeGeometry(2, 2, 2);
    var geometrySun = new THREE.SphereGeometry(10, 20, 20);
    var geometryMercury = new THREE.SphereGeometry(1, 20, 20);
    var geometryVenus = new THREE.SphereGeometry(2, 20, 20);
    var geometryEarth = new THREE.SphereGeometry(3, 20, 20);
    var geometryMoon = new THREE.SphereGeometry(0.8, 20, 20);
    var geometryMars = new THREE.SphereGeometry(3.2,20,20);
    var geometryJupiter = new THREE.SphereGeometry(4,20,20);
    var geometrySaturn = new THREE.SphereGeometry(5,20,20);
    var geometryUranus = new THREE.SphereGeometry(5,20,20);
    var geometryNeptune = new THREE.SphereGeometry(5,20,20);
    var geometryPluto = new THREE.SphereGeometry(2,20,20);


    // And put the geometry and material together into a mesh
    //cube = new THREE.Mesh(geometry, material);
    sun = new THREE.Mesh(geometrySun, materialSun);
    mercury = new THREE.Mesh(geometryMercury, materialMercury);
    venus = new THREE.Mesh(geometryVenus, materialVenus);
    earth = new THREE.Mesh(geometryEarth, materialEarth);
    moon = new THREE.Mesh(geometryMoon, materialMoon);
    mars = new THREE.Mesh(geometryMars, materialMars);
    jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
    saturn = new THREE.Mesh(geometrySaturn, materialSaturn);
    uranus = new THREE.Mesh(geometryUranus, materialUranus);
    neptune = new THREE.Mesh(geometryNeptune, materialNeptune);
    pluto = new THREE.Mesh(geometryPluto, materialPluto);

    // Tilt the mesh toward the viewer
    /*cube.rotation.x = Math.PI / 5;
    cube.rotation.y = Math.PI / 5;*/

    // Add the cube mesh to our group

    //add groups to its traslation pivot

    mercuryRotationPivot.add(mercuryGroup);
    venusRotationPivot.add(venusGroup);
    earthRotationPivot.add(earthGroup);
    marsRotationPivot.add(marsGroup);
    jupiterRotationPivot.add(jupiterGroup);
    saturnRotationPivot.add(saturnGroup);
    uranusRotationPivot.add(uranusGroup);
    neptuneRotationPivot.add(neptuneGroup);
    plutoRotationPivot.add(plutoGroup);

    mercuryGroup.add(mercury);
    venusGroup.add(venus);
    earthGroup.add( earth );
    earthGroup.add (moon);
    marsGroup.add(mars);
    jupiterGroup.add(jupiter);
    saturnGroup.add(saturn);
    uranusGroup.add(uranus);
    neptuneGroup.add(neptune);
    plutoGroup.add(pluto);

    //add objects to solar system
    solarSystemGroup.add( sun );

    //Add Planet Traslation pivot
    solarSystemGroup.add(mercuryRotationPivot);
    solarSystemGroup.add(venusRotationPivot);
    solarSystemGroup.add(earthRotationPivot);
    solarSystemGroup.add(marsRotationPivot);
    solarSystemGroup.add(jupiterRotationPivot);
    solarSystemGroup.add(saturnRotationPivot);
    solarSystemGroup.add(uranusRotationPivot);
    solarSystemGroup.add(neptuneRotationPivot);
    solarSystemGroup.add(plutoRotationPivot);

    //set solar system position
    solarSystemGroup.position.set(0,0,-0.5);

    //Set traslation pivots position to center
    mercuryRotationPivot.position.set(0,0,-0.5);
    venusRotationPivot.position.set(0,0,-0.5);
    earthRotationPivot.position.set(0,0,-0.5);
    marsRotationPivot.position.set(0,0,-0.5);
    jupiterRotationPivot.position.set(0,0,-0.5);
    saturnRotationPivot.position.set(0,0,-0.5);
    uranusRotationPivot.position.set(0,0,-0.5);
    neptuneRotationPivot.position.set(0,0,-0.5);
    plutoRotationPivot.position.set(0,0,-0.5);

    //Set planets distance to sun
    mercuryGroup.position.set(-30,0,0.5);
    venusGroup.position.set(-60, 0, 0.5);
    earthGroup.position.set(-90,0,-0.5);
    moon.position.set(-5,0,-0.5);
    marsGroup.position.set(-120,0,-0.5);
    jupiterGroup.position.set(-150,0,0,5);
    saturnGroup.position.set(-180,0,0,5);
    uranusGroup.position.set(-210,0,0,5);
    neptuneGroup.position.set(-240,0,0,5);
    plutoGroup.position.set(-270,0,0,5);

    //Create planets' orbits
    createOrbits(solarSystemGroup, 30);
    createOrbits(solarSystemGroup, 60);
    createOrbits(solarSystemGroup, 90);
    createOrbits(solarSystemGroup, 120);
    createOrbits(solarSystemGroup, 150);
    createOrbits(solarSystemGroup, 180);
    createOrbits(solarSystemGroup, 210);
    createOrbits(solarSystemGroup, 240);
    createOrbits(solarSystemGroup, 270);

    //mercuryTraslation.position.set(0,0,-0.5);

    
    // Now add the group to our scene
    scene.add (solarSystemGroup); 
    //scene.add(mercuryTraslation);
    solarSystemGroup.scale.set(0.05,0.05,0.05);  
    //mercuryTraslation.scale.set(0.05,0.05,0.05);
}