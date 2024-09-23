
AFRAME.registerPrimitive('a-hotspot', {
  defaultComponents: {
    hotspot: {}
  },
  mappings: {
    for: 'hotspot.for',
    to: 'hotspot.to'
  }
});

AFRAME.registerComponent('hotspot', {
  schema: {
    for: { type: 'string' },
    to: { type: 'string' },
    positioning: { type: 'boolean', default: false }
  },

  init: function () {
    this.tour = document.querySelector('a-tour');
    this.hotspotClickHandler = this.handleClick.bind(this); // Speichern des Event-Handlers
    this.el.addEventListener('click', this.hotspotClickHandler); // Hinzufügen des Event-Handlers
  },

  handleClick: function () {
    if (this.data.positioning) return;
    var tour = this.tour.components['tour'];
    console.log("for: " + this.data.for);
    console.log("to: " + this.data.to);
    tour.loadSceneId(this.data.to);
  }
});