
// === QR Scanner ===
const output = document.getElementById("output");

const scanner = new Html5Qrcode("video");

Html5Qrcode.getCameras().then(devices => {
  if (devices && devices.length > 0) {
    let cameraId = devices[0].id;

    scanner.start(
      { facingMode: "environment" }, // Use default back camera
      {
        fps: 10,
        qrbox: 250
      },
      (decodedText, decodedResult) => {
        output.innerText = `Scanned QR Code: ${decodedText}`;
        scanner.stop(); // stop after scan
      },
      (errorMessage) => {
        // Optional: console.log(errorMessage);
      }
    ).catch(err => {
      output.innerText = `Start Error: ${err}`;
    });

  } else {
    output.innerText = "No camera found.";
  }
}).catch(err => {
  output.innerText = `Camera access error: ${err}`;
});
