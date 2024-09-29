window.THREE.ImageLoader.prototype.crossOrigin = '';

AFRAME.registerPrimitive('a-tour', {
  defaultComponents: {
    tour: {}
  }
});

AFRAME.registerComponent('tour', {
  init: function () {
    this.sky = document.createElement('a-sky');
    this.el.appendChild(this.sky);
    var images = Array.prototype.slice.call(this.el.querySelectorAll('a-panorama'));
    if (images.length === 0) {
      console.error('You need to specify at least 1 image!');
      return;
    }
    // Set the start panorama
    var start = images[0];
    this.startId = start.getAttribute('id');
    this.loadSceneId(this.startId);
  },

  loadSceneId: function(id) {
    this.loadImage(this.el.querySelector('a-panorama#' + id));
    this.setHotspots(id);
    this.setPanos(id);
  },

  loadImage: function (image) {
    var sky = this.sky;
    sky.setAttribute('src', image.getAttribute('src'));
    var camera = this.el.sceneEl.camera.el;
    camera.setAttribute('rotation', image.getAttribute('rotation'));
  },

  setHotspots: function(id) {
    var hotspots = Array.prototype.slice.call(this.el.querySelectorAll('a-hotspot'));
    hotspots.forEach(function (spot) {
      var visible = spot.getAttribute('for') == id;
      spot.setAttribute('visible', visible);
      if (visible) {
        spot.setAttribute('scale', '1 1 1');
      } else {
        spot.setAttribute('scale', '0 0 0');
      }
    });
  },

  setPanos: function(id) {
    var panos = Array.prototype.slice.call(this.el.querySelectorAll('a-panorama'));
    panos.forEach(function (pano) {
      var isVisible = pano.getAttribute('id') == id;
      pano.setAttribute('visible', isVisible);
      pano.setAttribute('scale', isVisible ? '1 1 1' : '0 0 0');
    });
  }
});






