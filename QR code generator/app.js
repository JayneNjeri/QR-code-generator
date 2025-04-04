function generateQR() {
    const text = document.getElementById('text-input').value;
    const qrCodeDiv = document.getElementById('qr-code');
  
    // Clear any previous QR code
    qrCodeDiv.innerHTML = '';
  
    if (text) {
      // Generate QR code using qrcode.js
      QRCode.toCanvas(text, { width: 200 }, function (error, canvas) {
        if (error) {
          console.error(error);
          qrCodeDiv.innerHTML = '<p>Something went wrong. Try again!</p>';
          return;
        }
        qrCodeDiv.appendChild(canvas);
      });
    } else {
      qrCodeDiv.innerHTML = '<p>Please enter some text or a URL!</p>';
    }
  }