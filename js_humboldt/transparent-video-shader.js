!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){AFRAME.registerShader("transparent-video",{schema:{src:{type:"map"}},init:function(e){var t=new THREE.VideoTexture(e.src);t.minFilter=THREE.LinearFilter,t.encoding=THREE.sRGBEncoding,t.format=THREE.RGBAFormat,this.material=new THREE.MeshLambertMaterial({map:t})}})});
//# sourceMappingURL=aframe-transparent-video-shader.umd.js.map