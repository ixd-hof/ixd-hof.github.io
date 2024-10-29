!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  AFRAME.registerShader("transparent-video", {
    schema: { src: { type: "map" } },
    applyWebmShader: function (e) {
      var a = new THREE.VideoTexture(e);
      a.format = THREE.RGBAFormat;

      // Erstellen des benutzerdefinierten ShaderMaterials für WebM
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

          void main() {
            vec4 videoColor = texture2D(videoTexture, vUv);
            // Verringern der Helligkeit um 20%
            videoColor.rgb *= 0.9;
            gl_FragColor = videoColor;
          }
        `,
        uniforms: {
          videoTexture: { type: "t", value: a },
        },
        transparent: true,
      });
    },
    applyHEVCShader: function (e) {
      var a = new THREE.VideoTexture(e),
        r = new THREE.VideoTexture(e);
      a.format = THREE.RGBAFormat;
      r.format = THREE.AlphaFormat;
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
          videoTexture: { type: "t", value: a },
          alphaTexture: { type: "t", value: r },
        },
        transparent: true,
      });
    },
    init: function (e) {
      var a,
        r = e.src,
        n = new URL(r.currentSrc).pathname.split("."),
        t = null == (a = n[n.length - 1]) ? void 0 : a.toLowerCase();
      e.transparent = true;
      "webm" === t ? this.applyWebmShader(r) : this.applyHEVCShader(r);
    },
  });
});
