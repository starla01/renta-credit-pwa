export default function cleanStorage() {
  localStorage.clear();
  window.location.href = "/";
}
