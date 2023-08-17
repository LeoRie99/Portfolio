particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, // Cantidad de partículas
      density: {
        enable: true,
        value_area: 800 // Área de densidad de partículas
      }
    },
    color: {
      value: "#ffffff" // Color de las partículas
    },
    shape: {
      type: "circle", // Forma de las partículas (círculo, triángulo, etc.)
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5, // Opacidad de las partículas
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5, // Tamaño de las partículas
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150, // Distancia entre partículas enlazadas
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6, // Velocidad de movimiento de las partículas
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab" // Efecto al pasar el mouse sobre las partículas
      },
      onclick: {
        enable: true,
        mode: "push" // Efecto al hacer clic en las partículas
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});