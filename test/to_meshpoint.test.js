const { toMeshPoint } = require('../lib/jismesh.js');

const DICT_LEVEL_UNIT = {
  1: [40/60, 1],
  40000: [40/120, 1/2],
  20000: [40/240, 1/4],
  16000: [40/300, 1/5],
  2: [5/60, 7.5/60],
  8000: [4/60, 6/60],
  5000: [2.5/60, 3.75/60],
  4000: [2/60, 3/60],
  2500: [2.5/120, 3.75/120],
  2000: [1/60, 1.5/60],
  3: [30/3600, 45/3600],
  4: [15/3600, 22.5/3600],
  5: [7.5/3600, 11.25/3600],
  6: [3.75/3600, 5.625/3600],
};

const TEST_PARAMETERS = [
  { label: 'Lv1 Tokyo Tower',   south: 35.33333333333333, west: 139,         level: 1,     meshCode: '5339'        },
  { label: 'Lv2 Tokyo Tower',   south: 35.58333333333333, west: 139.625,     level: 2,     meshCode: '533935'      },
  { label: 'Lv3 Tokyo Tower',   south: 35.65833333333333, west: 139.7375,    level: 3,     meshCode: '53393599'    },
  { label: 'Lv4 Tokyo Tower',   south: 35.65833333333333, west: 139.74375,   level: 4,     meshCode: '533935992'   },
  { label: 'Lv5 Tokyo Tower',   south: 35.65833333333333, west: 139.74375,   level: 5,     meshCode: '5339359921'  },
  { label: 'Lv6 Tokyo Tower',   south: 35.65833333333333, west: 139.7453125, level: 6,     meshCode: '53393599212' },
  { label: '40000 Tokyo Tower', south: 35.33333333333333, west: 139.5,       level: 40000, meshCode: '53392'       },
  { label: '20000 Tokyo Tower', south: 35.5,              west: 139.5,       level: 20000, meshCode: '5339235'     },
  { label: '16000 Tokyo Tower', south: 35.6,              west: 139.6,       level: 16000, meshCode: '5339467'     },
  { label: '8000 Tokyo Tower',  south: 35.6,              west: 139.7,       level: 8000,  meshCode: '5339476'     },
  { label: '5000 Tokyo Tower',  south: 35.625,            west: 139.6875,    level: 5000,  meshCode: '5339354'     },
  { label: '4000 Tokyo Tower',  south: 35.63333333333333, west: 139.7,       level: 4000,  meshCode: '533947637'   },
  { label: '2500 Tokyo Tower',  south: 35.64583333333333, west: 139.71875,   level: 2500,  meshCode: '533935446'   },
  { label: '2000 Tokyo Tower',  south: 35.65,             west: 139.725,     level: 2000,  meshCode: '533935885'   },

  { label: 'Lv1 Kyoto Tower',   south: 34.66666666666666, west: 135,         level: 1,     meshCode: '5235'        },
  { label: 'Lv2 Kyoto Tower',   south: 34.91666666666666, west: 135.75,      level: 2,     meshCode: '523536'      },
  { label: 'Lv3 Kyoto Tower',   south: 34.98333333333333, west: 135.75,      level: 3,     meshCode: '52353680'    },
  { label: 'Lv4 Kyoto Tower',   south: 34.9875,           west: 135.75625,   level: 4,     meshCode: '523536804'   },
  { label: 'Lv5 Kyoto Tower',   south: 34.9875,           west: 135.75625,   level: 5,     meshCode: '5235368041'  },
  { label: 'Lv6 Kyoto Tower',   south: 34.9875,           west: 135.7578125, level: 6,     meshCode: '52353680412' },
  { label: '40000 Kyoto Tower', south: 34.66666666666666, west: 135.5,       level: 40000, meshCode: '52352'       },
  { label: '20000 Kyoto Tower', south: 34.83333333333333, west: 135.75,      level: 20000, meshCode: '5235245'     },
  { label: '16000 Kyoto Tower', south: 34.93333333333333, west: 135.6,       level: 16000, meshCode: '5235467'     },
  { label: '8000 Kyoto Tower',  south: 34.93333333333333, west: 135.7,       level: 8000,  meshCode: '5235476'     },
  { label: '5000 Kyoto Tower',  south: 34.95833333333333, west: 135.75,      level: 5000,  meshCode: '5235363'     },
  { label: '4000 Kyoto Tower',  south: 34.96666666666666, west: 135.75,      level: 4000,  meshCode: '523547647'   },
  { label: '2500 Kyoto Tower',  south: 34.97916666666666, west: 135.75,      level: 2500,  meshCode: '523536336'   },
  { label: '2000 Kyoto Tower',  south: 34.98333333333333, west: 135.75,      level: 2000,  meshCode: '523536805'   },
];

function testHelper({ meshCode, latMultiplier, lonMultiplier, expectedLat, expectedLon }) {
  const { lat, lon } = toMeshPoint(meshCode, latMultiplier, lonMultiplier);

  expect(lat).toBeCloseTo(expectedLat, 7);
  expect(lon).toBeCloseTo(expectedLon, 7);
}

function testHelperCorners({ meshCode, level, south, west }) {
  const [unitLat, unitLon] = DICT_LEVEL_UNIT[level];

  // sw
  let latMultiplier = 0;
  let lonMultiplier = 0;
  testHelper({
    meshCode,
    latMultiplier,
    lonMultiplier,
    expectedLat: south+unitLat*latMultiplier,
    expectedLon: west+unitLon*lonMultiplier,
  });

  // se
  latMultiplier = 0;
  lonMultiplier = 1;
  testHelper({
    meshCode,
    latMultiplier,
    lonMultiplier,
    expectedLat: south+unitLat*latMultiplier,
    expectedLon: west+unitLon*lonMultiplier,
  });

  // nw
  latMultiplier = 1;
  lonMultiplier = 0;
  testHelper({
    meshCode,
    latMultiplier,
    lonMultiplier,
    expectedLat: south+unitLat*latMultiplier,
    expectedLon: west+unitLon*lonMultiplier,
  });

  // ne
  latMultiplier = 1;
  lonMultiplier = 1;
  testHelper({
    meshCode,
    latMultiplier,
    lonMultiplier,
    expectedLat: south+unitLat*latMultiplier,
    expectedLon: west+unitLon*lonMultiplier,
  });

  // center
  latMultiplier = 0.5;
  lonMultiplier = 0.5;
  testHelper({
    meshCode,
    latMultiplier,
    lonMultiplier,
    expectedLat: south+unitLat*latMultiplier,
    expectedLon: west+unitLon*lonMultiplier,
  });
}

for (let p of TEST_PARAMETERS) {
  test(p.label, () => {
    testHelperCorners(p);
  });
}
