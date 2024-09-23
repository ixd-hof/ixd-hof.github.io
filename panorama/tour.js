// No need to update crossOrigin manually from A-Frame 1.6.0 onwards
// if (THREE && THREE.ImageLoader) {
//   THREE.ImageLoader.prototype.crossOrigin = '';
// }

AFRAME.registerPrimitive('a-tour', {
  defaultComponents: {
    tour: {}
  }
});

AFRAME.registerComponent('tour', {
  init: function () {
    // Create and append the sky element to the current element
    this.sky = document.createElement('a-sky');
    this.el.appendChild(this.sky);

    // Get all a-panorama elements and store them as an array
    var images = Array.prototype.slice.call(this.el.querySelectorAll('a-panorama'));
    if (images.length === 0) {
      console.error('You need to specify at least 1 image!');
      return;
    }

    // Set the first panorama as the starting scene
    var start = images[0];
    this.startId = start.getAttribute('id');
    this.loadSceneId(this.startId);
  },

  loadSceneId: function(id) {
    // Find the panorama by ID and load the image and hotspots
    var panorama = this.el.querySelector('a-panorama#' + id);
    if (!panorama) {
      console.error(`Panorama with ID ${id} not found.`);
      return;
    }
    this.loadImage(panorama);
    this.setHotspots(id);
    this.setPanos(id);
  },

  loadImage: function (image) {
    // Update sky element's src attribute with the new panorama image
    this.sky.setAttribute('src', image.getAttribute('src'));

    // Update camera rotation to match the panorama's rotation attribute
    var camera = this.el.sceneEl.camera.el;
    if (camera) {
      camera.setAttribute('rotation', image.getAttribute('rotation'));
    }
  },

  setHotspots: function(id) {
    // Iterate over all hotspots and manage visibility based on the active panorama
    var hotspots = Array.prototype.slice.call(this.el.querySelectorAll('a-hotspot'));
    hotspots.forEach(function (spot) {
      var isActive = spot.getAttribute('for') === id;
      spot.setAttribute('visible', isActive);
      spot.setAttribute('scale', isActive ? '1 1 1' : '0 0 0');
    });
  },

  setPanos: function(id) {
    // Show the active panorama and hide others based on the active ID
    var panos = Array.prototype.slice.call(this.el.querySelectorAll('a-panorama'));
    panos.forEach(function (pano) {
      var isVisible = pano.getAttribute('id') === id;
      pano.setAttribute('visible', isVisible);
      pano.setAttribute('scale', isVisible ? '1 1 1' : '0 0 0');
    });
  }
});
