
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    document.getElementById("location").textContent =
      `Your Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
  },
  (error) => {
    document.getElementById("location").textContent = "Unable to retrieve location.";
    console.error(error);
  }
);


const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

if (connection) {
  const updateNetworkInfo = () => {
    document.getElementById("network").textContent =
      `Network: ${connection.effectiveType}, Downlink: ${connection.downlink} Mb/s`;
  };

  connection.addEventListener("change", updateNetworkInfo);
  updateNetworkInfo();
} else {
  document.getElementById("network").textContent = "Network info not available.";
}

function drawParking() {
  const canvas = document.getElementById("parkingCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rows = 5;
  const cols = 5;
  const size = 50;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * size;
      const y = r * size;
      const isAvailable = Math.random() > 0.3; 

      ctx.fillStyle = isAvailable ? "#4CAF50" : "#D32F2F";
      ctx.fillRect(x, y, size - 5, size - 5);
    }
  }
}

drawParking();
setInterval(drawParking, 10000);
