AFRAME.registerShader("transparent-video", {
  schema: { src: { type: "map" } },
  init: function (data) {
    var texture = new THREE.VideoTexture(data.src);
    texture.minFilter = THREE.LinearFilter;
    texture.encoding = THREE.sRGBEncoding;
    texture.format = THREE.RGBAFormat;
    // Verwenden von MeshBasicMaterial statt MeshLambertMaterial
    this.material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  }
});
