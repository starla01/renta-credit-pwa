export default function getCookie(a) {
  a += "\x3d";
  for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
    var d = b[c].trim();
    if (0 === d.indexOf(a)) return d.substring(a.length, d.length);
  }
  return "";
}
