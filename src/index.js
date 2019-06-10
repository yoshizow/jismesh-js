'use strict';

const _unitLv1Lat = 40/60;
const _unitLv1Lon = 1;
const _unitLv2Lat = 5/60;
const _unitLv2Lon = 7.5/60;
const _unitLv3Lat = 30/3600;
const _unitLv3Lon = 45/3600;
const _unitLv4Lat = 15/3600;
const _unitLv4Lon = 22.5/3600;
const _unitLv5Lat = 7.5/3600;
const _unitLv5Lon = 11.25/3600;
const _unitLv6Lat = 3.75/3600;
const _unitLv6Lon = 5.625/3600;
const _unit40000Lat = 40/120;
const _unit40000Lon = 1/2;
const _unit20000Lat = 40/240;
const _unit20000Lon = 1/4;
const _unit16000Lat = 40/300;
const _unit16000Lon = 1/5;
const _unit8000Lat = 4/60;
const _unit8000Lon = 6/60;
const _unit5000Lat = 2.5/60;
const _unit5000Lon = 3.75/60;
const _unit4000Lat = 2/60;
const _unit4000Lon = 3/60;
const _unit2500Lat = 2.5/120;
const _unit2500Lon = 3.75/120;
const _unit2000Lat = 1/60;
const _unit2000Lon = 1.5/60;

function _toMeshCodeLv1(lat, lon) {
  const y = Math.floor(lat / _unitLv1Lat);
  const west = Math.floor(lon);
  const x = west - 100;
  const code = String(100 * y + x);
  const south = y * _unitLv1Lat;
  return { south, west, code };
}

function _toMeshCodeLv2(lat, lon) {
  const cellLv1 = _toMeshCodeLv1(lat, lon);
  const y = Math.floor((lat - cellLv1.south) / _unitLv2Lat);
  const x = Math.floor((lon - cellLv1.west)  / _unitLv2Lon);
  const code = cellLv1.code + y + x;
  const south = cellLv1.south + y * _unitLv2Lat;
  const west  = cellLv1.west  + x * _unitLv2Lon;
  return { south, west, code };
}

function _toMeshCodeLv3(lat, lon) {
  const cellLv2 = _toMeshCodeLv2(lat, lon);
  const y = Math.floor((lat - cellLv2.south) / _unitLv3Lat);
  const x = Math.floor((lon - cellLv2.west)  / _unitLv3Lon);
  const code = cellLv2.code + y + x;
  const south = cellLv2.south + y * _unitLv3Lat;
  const west  = cellLv2.west  + x * _unitLv3Lon;
  return { south, west, code };
}

function _toMeshCodeLv4(lat, lon) {
  const cellLv3 = _toMeshCodeLv3(lat, lon);
  const y = Math.floor((lat - cellLv3.south) / _unitLv4Lat);
  const x = Math.floor((lon - cellLv3.west)  / _unitLv4Lon);
  const code = cellLv3.code + (2 * y + x + 1);
  const south = cellLv3.south + y * _unitLv4Lat;
  const west  = cellLv3.west  + x * _unitLv4Lon;
  return { south, west, code };
}

function _toMeshCodeLv5(lat, lon) {
  const cellLv4 = _toMeshCodeLv4(lat, lon);
  const y = Math.floor((lat - cellLv4.south) / _unitLv5Lat);
  const x = Math.floor((lon - cellLv4.west)  / _unitLv5Lon);
  const code = cellLv4.code + (2 * y + x + 1);
  const south = cellLv4.south + y * _unitLv5Lat;
  const west  = cellLv4.west  + x * _unitLv5Lon;
  return { south, west, code };
}

function _toMeshCodeLv6(lat, lon) {
  const cellLv5 = _toMeshCodeLv5(lat, lon);
  const y = Math.floor((lat - cellLv5.south) / _unitLv6Lat);
  const x = Math.floor((lon - cellLv5.west)  / _unitLv6Lon);
  const code = cellLv5.code + (2 * y + x + 1);
  return { code };
}

function _toMeshCode40000(lat, lon) {
  const cellLv1 = _toMeshCodeLv1(lat, lon);
  const y = Math.floor((lat - cellLv1.south) / _unit40000Lat);
  const x = Math.floor((lon - cellLv1.west)  / _unit40000Lon);
  const code = cellLv1.code + (2 * y + x + 1);
  const south = cellLv1.south + y * _unit40000Lat;
  const west  = cellLv1.west  + x * _unit40000Lon;
  return { south, west, code };
}

function _toMeshCode20000(lat, lon) {
  const cell40000 = _toMeshCode40000(lat, lon);
  const y = Math.floor((lat - cell40000.south) / _unit20000Lat);
  const x = Math.floor((lon - cell40000.west)  / _unit20000Lon);
  const code = cell40000.code + (2 * y + x + 1) + '5';
  return { code };
}

function _toMeshCode16000(lat, lon) {
  const cellLv1 = _toMeshCodeLv1(lat, lon);
  const y = Math.floor((lat - cellLv1.south) / _unit16000Lat);
  const x = Math.floor((lon - cellLv1.west)  / _unit16000Lon);
  const code = cellLv1.code + (y * 2) + (x * 2) + '7';
  return { code };
}

function _toMeshCode8000(lat, lon) {
  const cellLv1 = _toMeshCodeLv1(lat, lon);
  const y = Math.floor((lat - cellLv1.south) / _unit8000Lat);
  const x = Math.floor((lon - cellLv1.west)  / _unit8000Lon);
  const code = cellLv1.code + y + x + '6';
  const south = cellLv1.south + y * _unit8000Lat;
  const west  = cellLv1.west  + x * _unit8000Lon;
  return { south, west, code };
}

function _toMeshCode5000(lat, lon) {
  const cellLv2 = _toMeshCodeLv2(lat, lon);
  const y = Math.floor((lat - cellLv2.south) / _unit5000Lat);
  const x = Math.floor((lon - cellLv2.west)  / _unit5000Lon);
  const code = cellLv2.code + (2 * y + x + 1);
  const south = cellLv2.south + y * _unit5000Lat;
  const west  = cellLv2.west  + x * _unit5000Lon;
  return { south, west, code };
}

function _toMeshCode4000(lat, lon) {
  const cell8000 = _toMeshCode8000(lat, lon);
  const y = Math.floor((lat - cell8000.south) / _unit4000Lat);
  const x = Math.floor((lon - cell8000.west)  / _unit4000Lon);
  const code = cell8000.code + (2 * y + x + 1) + '7';
  return { code };
}

function _toMeshCode2500(lat, lon) {
  const cell5000 = _toMeshCode5000(lat, lon);
  const y = Math.floor((lat - cell5000.south) / _unit2500Lat);
  const x = Math.floor((lon - cell5000.west)  / _unit2500Lon);
  const code = cell5000.code + (2 * y + x + 1) + '6';
  return { code };
}

function _toMeshCode2000(lat, lon) {
  const cellLv2 = _toMeshCodeLv2(lat, lon);
  const y = Math.floor((lat - cellLv2.south) / _unit2000Lat);
  const x = Math.floor((lon - cellLv2.west)  / _unit2000Lon);
  const code = cellLv2.code + (y * 2) + (x * 2) + '5';
  return { code };
}

const _toMeshCodeProcs = {
  1: _toMeshCodeLv1,
  2: _toMeshCodeLv2,
  3: _toMeshCodeLv3,
  4: _toMeshCodeLv4,
  5: _toMeshCodeLv5,
  6: _toMeshCodeLv6,
  40000: _toMeshCode40000,
  20000: _toMeshCode20000,
  16000: _toMeshCode16000,
  8000: _toMeshCode8000,
  5000: _toMeshCode5000,
  4000: _toMeshCode4000,
  2500: _toMeshCode2500,
  2000: _toMeshCode2000,
};

function toMeshCode(lat, lon, level) {
  if (lat < 0 || 66.66 <= lat) {
    throw new RangeError(`Latitude is out of bound: ${lat}`);
  }
  if (lon < 100 || 180 <= lon) {
    throw new RangeError(`Longitude is out of bound: ${lon}`);
  }

  const toMeshCodeProc = _toMeshCodeProcs[level];
  if (!toMeshCodeProc) {
    throw new RangeError(`Unsupported level: ${level}`);
  }

  return toMeshCodeProc(lat, lon).code;
}

function toMeshLevel(meshCode) {
  meshCode = String(meshCode);

  switch (meshCode.length) {
  case 4:
    return 1;
  case 5:
    return 40000;
  case 6:
    return 2;
  case 7:
    switch (meshCode.charAt(6)) {
    case '1': case '2': case '3': case '4':
      return 5000;
    case '6':
      return 8000;
    case '5':
      return 20000;
    case '7':
      return 16000;
    }
    break;
  case 8:
    return 3;
  case 9:
    switch (meshCode.charAt(8)) {
    case '1': case '2': case '3': case '4':
      return 4;
    case '5':
      return 2000;
    case '6':
      return 2500;
    case '7':
      return 4000;
    }
    break;
  case 10:
    switch (meshCode.charAt(9)) {
    case '1': case '2': case '3': case '4':
      return 5;
    }
    break;
  case 11:
    switch (meshCode.charAt(10)) {
    case '1': case '2': case '3': case '4':
      return 6;
    }
    break;
  }

  throw new Error(`Unsupported mesh code: ${meshCode}`);
}

function _toMeshPointLv1(meshCode) {
  const y = parseInt(meshCode.substring(0, 2));
  const x = parseInt(meshCode.substring(2, 4));
  const unitLat = _unitLv1Lat;
  const unitLon = _unitLv1Lon;
  const south = y * unitLat;
  const west  = x * unitLon + 100;
  return { south, west, unitLat, unitLon };
}

function _toMeshPointLv2(meshCode) {
  const cellLv1 = _toMeshPointLv1(meshCode);
  const y = parseInt(meshCode.charAt(4));
  const x = parseInt(meshCode.charAt(5));
  const unitLat = _unitLv2Lat;
  const unitLon = _unitLv2Lon;
  const south = cellLv1.south + y * unitLat;
  const west  = cellLv1.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPointLv3(meshCode) {
  const cellLv2 = _toMeshPointLv2(meshCode);
  const y = parseInt(meshCode.charAt(6));
  const x = parseInt(meshCode.charAt(7));
  const unitLat = _unitLv3Lat;
  const unitLon = _unitLv3Lon;
  const south = cellLv2.south + y * unitLat;
  const west  = cellLv2.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPointLv4(meshCode) {
  const cellLv3 = _toMeshPointLv3(meshCode);
  const c = parseInt(meshCode.charAt(8)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unitLv4Lat;
  const unitLon = _unitLv4Lon;
  const south = cellLv3.south + y * unitLat;
  const west  = cellLv3.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPointLv5(meshCode) {
  const cellLv4 = _toMeshPointLv4(meshCode);
  const c = parseInt(meshCode.charAt(9)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unitLv5Lat;
  const unitLon = _unitLv5Lon;
  const south = cellLv4.south + y * unitLat;
  const west  = cellLv4.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPointLv6(meshCode) {
  const cellLv5 = _toMeshPointLv5(meshCode);
  const c = parseInt(meshCode.charAt(10)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unitLv6Lat;
  const unitLon = _unitLv6Lon;
  const south = cellLv5.south + y * unitLat;
  const west  = cellLv5.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint40000(meshCode) {
  const cellLv1 = _toMeshPointLv1(meshCode);
  const c = parseInt(meshCode.charAt(4)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unit40000Lat;
  const unitLon = _unit40000Lon;
  const south = cellLv1.south + y * unitLat;
  const west  = cellLv1.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint20000(meshCode) {
  const cell40000 = _toMeshPoint40000(meshCode);
  const c = parseInt(meshCode.charAt(5)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unit20000Lat;
  const unitLon = _unit20000Lon;
  const south = cell40000.south + y * unitLat;
  const west  = cell40000.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint16000(meshCode) {
  const cellLv1 = _toMeshPointLv1(meshCode);
  const y = parseInt(meshCode.charAt(4)) / 2;
  const x = parseInt(meshCode.charAt(5)) / 2;
  const unitLat = _unit16000Lat;
  const unitLon = _unit16000Lon;
  const south = cellLv1.south + y * unitLat;
  const west  = cellLv1.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint8000(meshCode) {
  const cellLv1 = _toMeshPointLv1(meshCode);
  const y = parseInt(meshCode.charAt(4));
  const x = parseInt(meshCode.charAt(5));
  const unitLat = _unit8000Lat;
  const unitLon = _unit8000Lon;
  const south = cellLv1.south + y * unitLat;
  const west  = cellLv1.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint5000(meshCode) {
  const cellLv2 = _toMeshPointLv2(meshCode);
  const c = parseInt(meshCode.charAt(6)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unit5000Lat;
  const unitLon = _unit5000Lon;
  const south = cellLv2.south + y * _unit5000Lat;
  const west  = cellLv2.west  + x * _unit5000Lon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint4000(meshCode) {
  const cell8000 = _toMeshPoint8000(meshCode);
  const c = parseInt(meshCode.charAt(7)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unit4000Lat;
  const unitLon = _unit4000Lon;
  const south = cell8000.south + y * unitLat;
  const west  = cell8000.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint2500(meshCode) {
  const cell5000 = _toMeshPoint5000(meshCode);
  const c = parseInt(meshCode.charAt(7)) - 1;
  const y = Math.floor(c / 2);
  const x = c % 2;
  const unitLat = _unit2500Lat;
  const unitLon = _unit2500Lon;
  const south = cell5000.south + y * unitLat;
  const west  = cell5000.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

function _toMeshPoint2000(meshCode) {
  const cellLv2 = _toMeshPointLv2(meshCode);
  const y = parseInt(meshCode.charAt(6)) / 2;
  const x = parseInt(meshCode.charAt(7)) / 2;
  const unitLat = _unit2000Lat;
  const unitLon = _unit2000Lon;
  const south = cellLv2.south + y * unitLat;
  const west  = cellLv2.west  + x * unitLon;
  return { south, west, unitLat, unitLon };
}

const _toMeshPointProcs = {
  1: _toMeshPointLv1,
  2: _toMeshPointLv2,
  3: _toMeshPointLv3,
  4: _toMeshPointLv4,
  5: _toMeshPointLv5,
  6: _toMeshPointLv6,
  40000: _toMeshPoint40000,
  20000: _toMeshPoint20000,
  16000: _toMeshPoint16000,
  8000: _toMeshPoint8000,
  5000: _toMeshPoint5000,
  4000: _toMeshPoint4000,
  2500: _toMeshPoint2500,
  2000: _toMeshPoint2000,
};

function toMeshPoint(meshCode, latMultiplier = 0, lonMultiplier = 0) {
  meshCode = String(meshCode);
  const level = toMeshLevel(meshCode);
  const { south, west, unitLat, unitLon } = _toMeshPointProcs[level](meshCode);
  const lat = south + latMultiplier * unitLat;
  const lon = west  + lonMultiplier * unitLon;
  return [lat, lon];
}

module.exports = {
  toMeshCode,
  toMeshPoint,
  toMeshLevel,
};
