const { toMeshLevel } = require('../lib/jismesh.js');

const TEST_PARAMETERS = [
  { label: 'Lv1',   level: 1,     meshCode: '5339'        },
  { label: 'Lv2',   level: 2,     meshCode: '533935'      },
  { label: 'Lv3',   level: 3,     meshCode: '53393599'    },
  { label: 'Lv4',   level: 4,     meshCode: '533935992'   },
  { label: 'Lv5',   level: 5,     meshCode: '5339359921'  },
  { label: 'Lv6',   level: 6,     meshCode: '53393599212' },
  { label: '40000', level: 40000, meshCode: '53392'       },
  { label: '20000', level: 20000, meshCode: '5339235'     },
  { label: '16000', level: 16000, meshCode: '5339467'     },
  { label: '8000',  level: 8000,  meshCode: '5339476'     },
  { label: '5000',  level: 5000,  meshCode: '5339354'     },
  { label: '4000',  level: 4000,  meshCode: '533947637'   },
  { label: '2500',  level: 2500,  meshCode: '533935446'   },
  { label: '2000',  level: 2000,  meshCode: '533935885'   },
];

for (let p of TEST_PARAMETERS) {
  test(p.label, () => {
    expect(toMeshLevel(p.meshCode)).toBe(p.level);
  });
}

test("Invalid meshcode", () => {
  expect(() => {
    toMeshLevel('0');
  }).toThrowError(/Unsupported mesh code/);
});
