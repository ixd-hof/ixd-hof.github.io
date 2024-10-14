 document.addEventListener('DOMContentLoaded', function () {
        const trigger6 = document.querySelector('#trigger6');
        const trigger7 = document.querySelector('#trigger7');
        const Glas = document.querySelector('#Glas');
        const oglas = document.querySelector('#Ochsenkopfglas');

        // Event Listener für trigger6
        trigger6.addEventListener('click', function () {
          // Animation 1 nach 8 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.467 1.750 -3.666',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 8000);

          // Animation 2 nach 20 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.467 1.750 -3.666',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 20000);

          // Animation 3 nach 30 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: ' -0.467 1.9 -3.6661',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 30000);

          // Animation 4 nach 40 Sekunden
          setTimeout(() => {
            Glas.setAttribute('animation', {
              property: 'position',
              to: '-0.676 1.240 -5.2',
              dur: 4000,
              easing: 'easeInOutQuad'
            });
          }, 42000);

         

          // Animation 6 nach 20 Sekunden
          setTimeout(() => {
            oglas.setAttribute('animation', {
              property: 'rotation',
              to: '0 -179 0',
              dur: 12000,
              easing: 'easeInOutQuad'
            });
          }, 21000);

          // Animation 7 nach 31 Sekunden
          setTimeout(() => {
            oglas.setAttribute('animation', {
              property: 'rotation',
              to: '0 179 0',
              dur: 15000,
              easing: 'easeInOutQuad'
            });
          }, 32000);
        });

        // Event Listener für trigger7 (Reset-Trigger)
        trigger7.addEventListener('click', function () {
          // Zurücksetzen von Glas
          Glas.setAttribute('position', '-0.676 1.240 -5.2');
          Glas.setAttribute('animation', {
            property: 'position',
            to: '-0.676 1.240 -5.2',
            dur: 0, // Sofort zurücksetzen
            easing: 'linear'
          });

          // Zurücksetzen von Ochsenkopfglas
          oglas.setAttribute('rotation', '0 200 0');
          oglas.setAttribute('animation', {
            property: 'rotation',
            to: '0 190 0',
            dur: 0, // Sofort zurücksetzen
            easing: 'linear'
          });
        });
      });