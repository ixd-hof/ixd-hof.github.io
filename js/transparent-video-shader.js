AFRAME.registerShader("transparent-video", {
  schema: { src: { type: "map" } },
  
  init: function (e) {
    const src = e.src;
    const format = src.currentSrc.split('.').pop().toLowerCase();

    if (format === "webm") {
      this.applyWebmShader(src);
    } else {
      this.applyHEVCShader(src);
    }
  },
  
  applyWebmShader: function (video) {
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.format = THREE.RGBAFormat;

    this.material = new THREE.MeshBasicMaterial({
      map: videoTexture,
      transparent: true,
    });
  },
  
  applyHEVCShader: function (video) {
    const videoTexture = new THREE.VideoTexture(video);
    const alphaTexture = new THREE.VideoTexture(video); // Duplizierte Texture für Alpha

    videoTexture.format = THREE.RGBAFormat;
    alphaTexture.format = THREE.AlphaFormat;

    this.material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D videoTexture;
        uniform sampler2D alphaTexture;

        void main() {
          vec4 videoColor = texture2D(videoTexture, vUv);
          vec4 alphaColor = texture2D(alphaTexture, vUv);
          gl_FragColor = vec4(videoColor.rgb, alphaColor.a);
        }
      `,
      uniforms: {
        videoTexture: { value: videoTexture },
        alphaTexture: { value: alphaTexture },
      },
      transparent: true,
    });
  }
});
