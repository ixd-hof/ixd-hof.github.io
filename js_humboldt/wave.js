AFRAME.registerComponent('wave-component', {
  schema: {
    texturepath: { default: 'Vorderseite_Fahne-min.png' }
  },
  init: function () {
    var el = this.el;
    const loader = new THREE.TextureLoader();

    // Creating a plane geometry using BufferGeometry
    var geometry = new THREE.PlaneGeometry(5, 5, 50, 50);
  

    // Creating a material with the texture path provided
    var material = new THREE.MeshStandardMaterial({
      map: loader.load(this.data.texturepath),
      transparent: true,
      color: 0xffffff,
      emissive: 0x000000
    });

    var wave = new THREE.Mesh(geometry, material);

    wave.rotation.set(-0.1, 0, 0);
    const clock = new THREE.Clock();

    el.setObject3D('WaveMesh', wave);

    // Extracting the positions attribute
    const positionAttribute = wave.geometry.attributes.position;
    const vertex = new THREE.Vector3();

    // Function to animate each vertex of the texture to simulate a wave effect
    function animate() {
      const t = clock.getElapsedTime();

      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);

        const waveX1 = 0.75 * Math.sin(vertex.x * 2 + t * 3);
        const waveX2 = 0.25 * Math.sin(vertex.x * 3 + t * 2);
        const waveY1 = 0.1 * Math.sin(vertex.y * 3 + t * 0.5);
        const multi = (vertex.x + 2.5) / 5;

        vertex.z = (waveX1 + waveX2 + waveY1) * multi;

        // Updating the position attribute
        positionAttribute.setZ(i, vertex.z);
      }

      positionAttribute.needsUpdate = true;
      requestAnimationFrame(animate);
    }

    animate();
  }
});
