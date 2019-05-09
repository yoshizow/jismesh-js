const { toMeshCode } = require('../');

const latTokyoTower = 35.658581;   // 東京タワー緯度 (度) 世界測地系
const lonTokyoTower = 139.745433;  // 東京タワー経度 (度) 世界測地系
const latKyotoTower = 34.987574;   // 京都タワー緯度 (度) 世界測地系
const lonKyotoTower = 135.759363;  // 京都タワー経度 (度) 世界測地系

const TEST_PARAMETERS = [
  { label: 'Lv1 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 1,     meshCode: '5339'        },
  { label: 'Lv2 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 2,     meshCode: '533935'      },
  { label: 'Lv3 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 3,     meshCode: '53393599'    },
  { label: 'Lv4 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 4,     meshCode: '533935992'   },
  { label: 'Lv5 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 5,     meshCode: '5339359921'  },
  { label: 'Lv6 Tokyo Tower',   lat: latTokyoTower, lon: lonTokyoTower, level: 6,     meshCode: '53393599212' },
  { label: '40000 Tokyo Tower', lat: latTokyoTower, lon: lonTokyoTower, level: 40000, meshCode: '53392'       },
  { label: '20000 Tokyo Tower', lat: latTokyoTower, lon: lonTokyoTower, level: 20000, meshCode: '5339235'     },
  { label: '16000 Tokyo Tower', lat: latTokyoTower, lon: lonTokyoTower, level: 16000, meshCode: '5339467'     },
  { label: '8000 Tokyo Tower',  lat: latTokyoTower, lon: lonTokyoTower, level: 8000,  meshCode: '5339476'     },
  { label: '5000 Tokyo Tower',  lat: latTokyoTower, lon: lonTokyoTower, level: 5000,  meshCode: '5339354'     },
  { label: '4000 Tokyo Tower',  lat: latTokyoTower, lon: lonTokyoTower, level: 4000,  meshCode: '533947637'   },
  { label: '2500 Tokyo Tower',  lat: latTokyoTower, lon: lonTokyoTower, level: 2500,  meshCode: '533935446'   },
  { label: '2000 Tokyo Tower',  lat: latTokyoTower, lon: lonTokyoTower, level: 2000,  meshCode: '533935885'   },

  { label: 'Lv1 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 1,     meshCode: '5235'        },
  { label: 'Lv2 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 2,     meshCode: '523536'      },
  { label: 'Lv3 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 3,     meshCode: '52353680'    },
  { label: 'Lv4 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 4,     meshCode: '523536804'   },
  { label: 'Lv5 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 5,     meshCode: '5235368041'  },
  { label: 'Lv6 Kyoto Tower',   lat: latKyotoTower, lon: lonKyotoTower, level: 6,     meshCode: '52353680412' },
  { label: '40000 Kyoto Tower', lat: latKyotoTower, lon: lonKyotoTower, level: 40000, meshCode: '52352'       },
  { label: '20000 Kyoto Tower', lat: latKyotoTower, lon: lonKyotoTower, level: 20000, meshCode: '5235245'     },
  { label: '16000 Kyoto Tower', lat: latKyotoTower, lon: lonKyotoTower, level: 16000, meshCode: '5235467'     },
  { label: '8000 Kyoto Tower',  lat: latKyotoTower, lon: lonKyotoTower, level: 8000,  meshCode: '5235476'     },
  { label: '5000 Kyoto Tower',  lat: latKyotoTower, lon: lonKyotoTower, level: 5000,  meshCode: '5235363'     },
  { label: '4000 Kyoto Tower',  lat: latKyotoTower, lon: lonKyotoTower, level: 4000,  meshCode: '523547647'   },
  { label: '2500 Kyoto Tower',  lat: latKyotoTower, lon: lonKyotoTower, level: 2500,  meshCode: '523536336'   },
  { label: '2000 Kyoto Tower',  lat: latKyotoTower, lon: lonKyotoTower, level: 2000,  meshCode: '523536805'   },
];

for (let p of TEST_PARAMETERS) {
  test(p.label, () => {
    expect(toMeshCode(p.lat, p.lon, p.level)).toBe(p.meshCode);
  });
}

test("Latitude out of range", () => {
  expect(() => {
    toMeshCode(-0.1, lonTokyoTower, 1);
  }).toThrowError(RangeError);

  expect(() => {
    toMeshCode(66.66, lonTokyoTower, 1);
  }).toThrowError(RangeError);
});

test("Longitude out of range", () => {
  expect(() => {
    toMeshCode(latTokyoTower, 99.99, 1);
  }).toThrowError(RangeError);

  expect(() => {
    toMeshCode(latTokyoTower, 180, 1);
  }).toThrowError(RangeError);
});

test("Unsupported level", () => {
  expect(() => {
    toMeshCode(latTokyoTower, lonTokyoTower, 0);
  }).toThrowError(RangeError);
});
