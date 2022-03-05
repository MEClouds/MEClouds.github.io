const names = document.getElementById("name").value;
const msg = document.getElementById("msg").value;
payload = names + "\n" + msg;
sendWa = () => {
  encodedPayload = encodeURIComponent(payload);
  // غير رقم التواصل
  url = "https://wa.me/249998108960?text=" + encodedPayload;
  window.open(url);
};
