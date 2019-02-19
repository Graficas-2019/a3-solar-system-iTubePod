
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

asteroidRotationPivot0 = null;
asteroidRotationPivot1 = null;
asteroidRotationPivot2 = null;
asteroidRotationPivot3 = null;
asteroidRotationPivot4 = null;
asteroidRotationPivot5 = null;
asteroidRotationPivot6 = null;
asteroidRotationPivot7 = null;
asteroidRotationPivot8 = null;
asteroidRotationPivot9 = null;
asteroidRotationPivot01 = null;
asteroidRotationPivot11 = null;
asteroidRotationPivot21 = null;
asteroidRotationPivot31 = null;
asteroidRotationPivot41 = null;
asteroidRotationPivot51 = null;
asteroidRotationPivot61 = null;
asteroidRotationPivot71 = null;
asteroidRotationPivot81 = null;
asteroidRotationPivot91 = null;
asteroidRotationPivot02 = null;
asteroidRotationPivot12 = null;
asteroidRotationPivot22 = null;
asteroidRotationPivot32 = null;
asteroidRotationPivot42 = null;
asteroidRotationPivot52 = null;
asteroidRotationPivot62 = null;
asteroidRotationPivot72 = null;
asteroidRotationPivot82 = null;
asteroidRotationPivot92 = null;
asteroidRotationPivot03 = null;
asteroidRotationPivot13 = null;
asteroidRotationPivot23 = null;
asteroidRotationPivot33 = null;
asteroidRotationPivot43 = null;
asteroidRotationPivot53 = null;
asteroidRotationPivot63 = null;
asteroidRotationPivot73 = null;
asteroidRotationPivot83 = null;
asteroidRotationPivot93 = null;
asteroidRotationPivot04 = null;
asteroidRotationPivot14 = null;
asteroidRotationPivot24 = null;
asteroidRotationPivot34 = null;
asteroidRotationPivot44 = null;
asteroidRotationPivot54 = null;
asteroidRotationPivot64 = null;
asteroidRotationPivot74 = null;
asteroidRotationPivot84 = null;
asteroidRotationPivot94 = null;

//mercury objects
mercury = null;
mercuryGroup = null;
mercuryMoonRotation = new Array();

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
marsMoonRotation = null;

//jupiter objects
jupiter = null;
jupiterGroup = null;
jupiterMoonRotation = null;


saturn = null;
saturnGroup = null;
saturnMoonRotation = null;

uranus = null;
uranusGroup = null;
uranusMoonRotation = null;

neptune = null;
neptuneGroup = null;
neptuneMoonRotation = null;

pluto = null;
plutoGroup = null;
plutoMoonRotation = null;

vectorAsteroidsRotation = null;


var duration = 20000; // ms
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
    mercuryRotationPivot.rotation.y +=  angle*2.5;
    venusRotationPivot.rotation.y -=    angle*1.2;
    earthRotationPivot.rotation.y +=    angle*2;
    marsRotationPivot.rotation.y -=     angle*0.8;
    jupiterRotationPivot.rotation.y +=  angle*1.6;
    saturnRotationPivot.rotation.y -=   angle/7;
    uranusRotationPivot.rotation.y +=   angle*1.2;
    neptuneRotationPivot.rotation.y -=  angle/10;
    plutoRotationPivot.rotation.y +=    angle*1.5;

    //set asteroid pivot roation
    asteroidRotationPivot0.rotation.y += angle*1.8;
    asteroidRotationPivot1.rotation.y -= angle*1.6;
    asteroidRotationPivot2.rotation.y += angle*1.4;
    asteroidRotationPivot3.rotation.y -= angle*1.3;
    asteroidRotationPivot4.rotation.y += angle*1.2;
    asteroidRotationPivot5.rotation.y -= angle*1.1;
    asteroidRotationPivot6.rotation.y += angle*1.9;
    asteroidRotationPivot7.rotation.y -= angle*1.55;
    asteroidRotationPivot8.rotation.y += angle*1.92;
    asteroidRotationPivot9.rotation.y -= angle*1.37;
    asteroidRotationPivot01.rotation.y += angle*1.85;
    asteroidRotationPivot11.rotation.y -= angle*1.61;
    asteroidRotationPivot21.rotation.y += angle*1.43;
    asteroidRotationPivot31.rotation.y -= angle*1.34;
    asteroidRotationPivot41.rotation.y += angle*1.27;
    asteroidRotationPivot51.rotation.y -= angle*1.18;
    asteroidRotationPivot61.rotation.y += angle*1.98;
    asteroidRotationPivot71.rotation.y -= angle*1.81;
    asteroidRotationPivot81.rotation.y += angle*1.52;
    asteroidRotationPivot91.rotation.y -= angle*1.77;
    asteroidRotationPivot02.rotation.y += angle*1.78;
    asteroidRotationPivot12.rotation.y -= angle*1.26;
    asteroidRotationPivot22.rotation.y += angle*1.74;
    asteroidRotationPivot32.rotation.y -= angle*1.33;
    asteroidRotationPivot42.rotation.y += angle*1.52;
    asteroidRotationPivot52.rotation.y -= angle*1.31;
    asteroidRotationPivot62.rotation.y += angle*1.79;
    asteroidRotationPivot72.rotation.y -= angle*1.55;
    asteroidRotationPivot82.rotation.y += angle*1.12;
    asteroidRotationPivot92.rotation.y -= angle*1.47;
    asteroidRotationPivot03.rotation.y += angle*1.9;
    asteroidRotationPivot13.rotation.y -= angle*1.12;
    asteroidRotationPivot23.rotation.y += angle*1.23;
    asteroidRotationPivot33.rotation.y -= angle*1.53;
    asteroidRotationPivot43.rotation.y += angle*1.23;
    asteroidRotationPivot53.rotation.y -= angle*1.12;
    asteroidRotationPivot63.rotation.y += angle*1.99;
    asteroidRotationPivot73.rotation.y -= angle*1.15;
    asteroidRotationPivot83.rotation.y += angle*1.22;
    asteroidRotationPivot93.rotation.y -= angle*1.77;
    asteroidRotationPivot04.rotation.y += angle*1.98;
    asteroidRotationPivot14.rotation.y -= angle*1.36;
    asteroidRotationPivot24.rotation.y += angle*1.74;
    asteroidRotationPivot34.rotation.y -= angle*1.93;
    asteroidRotationPivot44.rotation.y += angle*1.32;
    asteroidRotationPivot54.rotation.y -= angle*1.14;
    asteroidRotationPivot64.rotation.y += angle*1.95;
    asteroidRotationPivot74.rotation.y -= angle*1.15;
    asteroidRotationPivot84.rotation.y += angle*1.62;
    asteroidRotationPivot94.rotation.y -= angle*1.91;
}

function createMoons(planetGroup, numOfMoons)
{
    var i;
    var textureRandomMoonsUrl = "../images/eros2k.jpg";
    var textureRandomMoons = new THREE.TextureLoader().load(textureRandomMoonsUrl);        
    var materialRandomMoon = new THREE.MeshPhongMaterial({
        map: textureRandomMoons
    });
    for(i = 0; i < numOfMoons; i++)
    {        
        var random = Math.random() * (+10 - +0) + +0;
        random*=-1;
        var random2 = Math.random() * (+100 - +0) + +0;
        random2/=500;
        random2+=0.5;
        var random3 = Math.random() * (+1000 - +0) + +0;
        random3/=1000;
        random3+=1
        var random3 = Math.random() * (+4 - +1) + +1;
        var geometryMoon = new THREE.SphereGeometry(random2, 20, 20);
        var randommoon = new THREE.Mesh(geometryMoon, materialRandomMoon);        
        randommoon.position.set(i+5,0,-0.5);
        var randomPivot = new THREE.Object3D;
        randomPivot.position.set(0,0,-0.5);
        randomPivot.add(randommoon);
        randomPivot.rotation.x = Math.PI / random;
        randomPivot.rotation.y = Math.PI / random;
        randomPivot.rotation.z = Math.PI / random;
        planetGroup.add(randomPivot);
    }


}

function createAsteroids()
{
    vectorAsteroidsRotation = new Array();
    vectorAsteroidsRotation.push(asteroidRotationPivot0);
    vectorAsteroidsRotation.push(asteroidRotationPivot1);
    vectorAsteroidsRotation.push(asteroidRotationPivot2);
    vectorAsteroidsRotation.push(asteroidRotationPivot3);
    vectorAsteroidsRotation.push(asteroidRotationPivot4);
    vectorAsteroidsRotation.push(asteroidRotationPivot5);
    vectorAsteroidsRotation.push(asteroidRotationPivot6);
    vectorAsteroidsRotation.push(asteroidRotationPivot7);
    vectorAsteroidsRotation.push(asteroidRotationPivot8);
    vectorAsteroidsRotation.push(asteroidRotationPivot9);
    vectorAsteroidsRotation.push(asteroidRotationPivot01);
    vectorAsteroidsRotation.push(asteroidRotationPivot11);
    vectorAsteroidsRotation.push(asteroidRotationPivot21);
    vectorAsteroidsRotation.push(asteroidRotationPivot31);
    vectorAsteroidsRotation.push(asteroidRotationPivot41);
    vectorAsteroidsRotation.push(asteroidRotationPivot51);
    vectorAsteroidsRotation.push(asteroidRotationPivot61);
    vectorAsteroidsRotation.push(asteroidRotationPivot71);
    vectorAsteroidsRotation.push(asteroidRotationPivot81);
    vectorAsteroidsRotation.push(asteroidRotationPivot91);
    vectorAsteroidsRotation.push(asteroidRotationPivot02);
    vectorAsteroidsRotation.push(asteroidRotationPivot12);
    vectorAsteroidsRotation.push(asteroidRotationPivot22);
    vectorAsteroidsRotation.push(asteroidRotationPivot32);
    vectorAsteroidsRotation.push(asteroidRotationPivot42);
    vectorAsteroidsRotation.push(asteroidRotationPivot52);
    vectorAsteroidsRotation.push(asteroidRotationPivot62);
    vectorAsteroidsRotation.push(asteroidRotationPivot72);
    vectorAsteroidsRotation.push(asteroidRotationPivot82);
    vectorAsteroidsRotation.push(asteroidRotationPivot92);
    vectorAsteroidsRotation.push(asteroidRotationPivot03);
    vectorAsteroidsRotation.push(asteroidRotationPivot13);
    vectorAsteroidsRotation.push(asteroidRotationPivot23);
    vectorAsteroidsRotation.push(asteroidRotationPivot33);
    vectorAsteroidsRotation.push(asteroidRotationPivot43);
    vectorAsteroidsRotation.push(asteroidRotationPivot53);
    vectorAsteroidsRotation.push(asteroidRotationPivot63);
    vectorAsteroidsRotation.push(asteroidRotationPivot73);
    vectorAsteroidsRotation.push(asteroidRotationPivot83);
    vectorAsteroidsRotation.push(asteroidRotationPivot93);
    vectorAsteroidsRotation.push(asteroidRotationPivot04);
    vectorAsteroidsRotation.push(asteroidRotationPivot14);
    vectorAsteroidsRotation.push(asteroidRotationPivot24);
    vectorAsteroidsRotation.push(asteroidRotationPivot34);
    vectorAsteroidsRotation.push(asteroidRotationPivot44);
    vectorAsteroidsRotation.push(asteroidRotationPivot54);
    vectorAsteroidsRotation.push(asteroidRotationPivot64);
    vectorAsteroidsRotation.push(asteroidRotationPivot74);
    vectorAsteroidsRotation.push(asteroidRotationPivot84);
    vectorAsteroidsRotation.push(asteroidRotationPivot94);
    
    vectorAsteroidsRotation.push();
    var i;
    for (i = 0; i < 50; i++) {        
        var random2 = Math.random() * (+100 - +0) + +0;
        random2/=100;
        random2+=1;
        var asteroid = new THREE.Mesh(new THREE.SphereGeometry(random2,20,20), new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load("../images/eros2k.jpg")
        }));
        asteroid.position.set(-140-i,0,-0.5);        
        vectorAsteroidsRotation[i].position.set(0,0,-0.5);
        vectorAsteroidsRotation[i].add(asteroid);
        solarSystemGroup.add(vectorAsteroidsRotation[i]);
    }
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

function createRings(planetGroup, radius, url)
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
    var textureRingsUrl = url;
    var textureRings = new THREE.TextureLoader().load(textureRingsUrl);    
    var materialRings = new THREE.MeshPhongMaterial({
        map: textureRings,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
    });


    var geometryRings = new THREE.RingGeometry(1.2 * radius, 2 * radius, 2 * 100, 5, 0, Math.PI * 2);
    var ring = new THREE.Mesh(geometryRings, materialRings);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0,0,-0.5);
    planetGroup.add(ring);
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

    //Create rotationPivots
    asteroidRotationPivot0 = new THREE.Object3D;
    asteroidRotationPivot1 = new THREE.Object3D;
    asteroidRotationPivot2 = new THREE.Object3D;
    asteroidRotationPivot3 = new THREE.Object3D;
    asteroidRotationPivot4 = new THREE.Object3D;
    asteroidRotationPivot5 = new THREE.Object3D;
    asteroidRotationPivot6 = new THREE.Object3D;
    asteroidRotationPivot7 = new THREE.Object3D;
    asteroidRotationPivot8 = new THREE.Object3D;
    asteroidRotationPivot9 = new THREE.Object3D;
    asteroidRotationPivot01 = new THREE.Object3D;
    asteroidRotationPivot11 = new THREE.Object3D;
    asteroidRotationPivot21 = new THREE.Object3D;
    asteroidRotationPivot31 = new THREE.Object3D;
    asteroidRotationPivot41 = new THREE.Object3D;
    asteroidRotationPivot51 = new THREE.Object3D;
    asteroidRotationPivot61 = new THREE.Object3D;
    asteroidRotationPivot71 = new THREE.Object3D;
    asteroidRotationPivot81 = new THREE.Object3D;
    asteroidRotationPivot91 = new THREE.Object3D;
    asteroidRotationPivot02 = new THREE.Object3D;
    asteroidRotationPivot12 = new THREE.Object3D;
    asteroidRotationPivot22 = new THREE.Object3D;
    asteroidRotationPivot32 = new THREE.Object3D;
    asteroidRotationPivot42 = new THREE.Object3D;
    asteroidRotationPivot52 = new THREE.Object3D;
    asteroidRotationPivot62 = new THREE.Object3D;
    asteroidRotationPivot72 = new THREE.Object3D;
    asteroidRotationPivot82 = new THREE.Object3D;
    asteroidRotationPivot92 = new THREE.Object3D;
    asteroidRotationPivot03 = new THREE.Object3D;
    asteroidRotationPivot13 = new THREE.Object3D;
    asteroidRotationPivot23 = new THREE.Object3D;
    asteroidRotationPivot33 = new THREE.Object3D;
    asteroidRotationPivot43 = new THREE.Object3D;
    asteroidRotationPivot53 = new THREE.Object3D;
    asteroidRotationPivot63 = new THREE.Object3D;
    asteroidRotationPivot73 = new THREE.Object3D;
    asteroidRotationPivot83 = new THREE.Object3D;
    asteroidRotationPivot93 = new THREE.Object3D;
    asteroidRotationPivot04 = new THREE.Object3D;
    asteroidRotationPivot14 = new THREE.Object3D;
    asteroidRotationPivot24 = new THREE.Object3D;
    asteroidRotationPivot34 = new THREE.Object3D;
    asteroidRotationPivot44 = new THREE.Object3D;
    asteroidRotationPivot54 = new THREE.Object3D;
    asteroidRotationPivot64 = new THREE.Object3D;
    asteroidRotationPivot74 = new THREE.Object3D;
    asteroidRotationPivot84 = new THREE.Object3D;
    asteroidRotationPivot94 = new THREE.Object3D;

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
    createMoons(marsGroup,2);
    jupiterGroup.add(jupiter);
    createMoons(jupiterGroup,20);
    saturnGroup.add(saturn);
    createMoons(saturnGroup,20);
    uranusGroup.add(uranus);
    createMoons(uranusGroup,20);
    neptuneGroup.add(neptune);
    createMoons(neptuneGroup,24);
    plutoGroup.add(pluto);
    createMoons(plutoGroup,5);

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
    jupiterGroup.position.set(-200,0,0,5);
    saturnGroup.position.set(-230,0,0,5);
    createRings(saturnGroup, 5, "../images/saturnringcolor.jpg");
    uranusGroup.position.set(-260,0,0,5);
    createRings(uranusGroup, 5, "../images/uranusringcolour.jpg");
    neptuneGroup.position.set(-290,0,0,5);
    plutoGroup.position.set(-320,0,0,5);

    //Create planets' orbits
    createOrbits(solarSystemGroup, 30);
    createOrbits(solarSystemGroup, 60);
    createOrbits(solarSystemGroup, 90);
    createOrbits(solarSystemGroup, 120);
    createOrbits(solarSystemGroup, 200);
    createOrbits(solarSystemGroup, 230);
    createOrbits(solarSystemGroup, 260);
    createOrbits(solarSystemGroup, 290);
    createOrbits(solarSystemGroup, 320);

    createAsteroids();

    //mercuryTraslation.position.set(0,0,-0.5);

    
    // Now add the group to our scene
    scene.add (solarSystemGroup); 
    //scene.add(mercuryTraslation);
    solarSystemGroup.scale.set(0.05,0.05,0.05);  
    //mercuryTraslation.scale.set(0.05,0.05,0.05);
}