var app;
var map;

class App {
  constructor() {
    this.placeList = [];
  }

  initialize() {
    if (navigator.share === undefined) {
      document.getElementById("share").remove();
    }

    this.initializePlaces();

    console.log("create the map");

    map = L.map("map", { zoomControl: false }).setView(
      [51.508328, -0.124819],
      13
    );

    const tiles = L.tileLayer(
      "https://api.mapbox.com/styles/v1/kailan/clnmjy811006901qpergtfrho/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2FpbGFuIiwiYSI6ImNreHh6MjNtNzJhd3oyb21wYjRkY2U0aGsifQ.tZzQ-GAom5_D8SLwrqmy-Q",
      {
        minZoom: 10,
        maxZoom: 16,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    let foundPlaces = JSON.parse(window.localStorage.getItem("places-dlr") || "{}");
    this.placeList.forEach((place) => {
      if (foundPlaces[place.name]) {
        place.showOverlay();
      }
    });

    document.getElementById("guess").addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        app.enterGuess();
      }
    });

    this.displayScore();
  }
}

const roundelIcon = L.icon({
  iconUrl:
    "https://cdn.freebiesupply.com/logos/thumbs/2x/transport-for-london-1-logo.png",
  iconSize: [32, 32],
});

class Place {
  constructor(name, pt) {
    this.name = name;
    this.pt = pt;

    this.overlay = null;
  }

  showOverlay() {
    L.marker(this.pt, {
      icon: roundelIcon,
    })
      .bindTooltip(this.name, {
        direction: "right",
        className: "place-tooltip",
      })
      .addTo(map);
  }
  pan() {
    map.panTo(this.pt, {
      animate: true,
    });
  }
}

function loadPage() {
  console.log("load page");

  app = new App();
  app.initialize();

  document.getElementById("guess").focus();
}
