const setCookie = (sKey, sValue, vEnd, sPath, sDomain, bSecure) => {
  if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }
  var sExpires = "";
  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires =
          vEnd === Infinity
            ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
            : "; max-age=" + vEnd;
        break;
      case String:
        sExpires = "; expires=" + vEnd;
        break;
      case Date:
      default:
        sExpires = "; expires=" + vEnd.toUTCString();
        break;
    }
  }
  document.cookie =
    sKey +
    "=" +
    sValue +
    sExpires +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "") +
    (bSecure ? "; secure" : "");
  return true;
};

export default setCookie;
