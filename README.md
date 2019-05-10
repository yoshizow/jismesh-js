jismesh-js
==========

[![Build Status](https://travis-ci.com/yoshizow/jismesh-js.svg?branch=master)](https://travis-ci.com/yoshizow/jismesh-js)

Utilities for the Japanese regional grid system defined in Japanese Industrial Standards (JIS X 0410 地域メッシュ).

python の [jismesh パッケージ](https://pypi.org/project/jismesh/) を JavaScript に移植したものです。

対応地域メッシュコード
----------------------

- 1次(標準地域メッシュ 80km四方): 1
- 40倍(拡張地域メッシュ 40km四方): 40000
- 20倍(拡張地域メッシュ 20km四方): 20000
- 16倍(拡張地域メッシュ 16km四方): 16000
- 2次(標準地域メッシュ 10km四方): 2
- 8倍(拡張地域メッシュ 8km四方): 8000
- 5倍(拡張地域メッシュ 5km四方): 5000
- 4倍(拡張地域メッシュ 4km四方): 4000
- 2.5倍(拡張地域メッシュ 2.5km四方): 2500
- 2倍(拡張地域メッシュ 2km四方): 2000
- 3次(標準地域メッシュ 1km四方): 3
- 4次(分割地域メッシュ 500m四方): 4
- 5次(分割地域メッシュ 250m四方): 5
- 6次(分割地域メッシュ 125m四方): 6

インストール
------------

```bash
npm install jismesh-js
```

または、CDN から読み込む場合

```html
<script src="https://unpkg.com/jismesh-js/dist/jismesh.min.js"></script>
```

グローバル変数 `jismesh` が定義されます。

使用例
------

### 緯度経度から地域メッシュコードを求める

メッシュコードに変換する世界測地系緯度経度と変換するメッシュコードの次数を指定します。

```javascript
const jismesh = require('jismesh-js');

// 緯度経度からメッシュコードを求める。
const meshCode = jismesh.toMeshCode(35.658581, 139.745433, 3);
console.log(meshCode);  // => 53393599
```

### 地域メッシュコードから次数を求める

メッシュコードからそのメッシュコードの次数を判定します。

```javascript
const jismesh = require('jismesh-js');

const meshLevel = jismesh.toMeshLevel('53393599');
console.log(meshLevel);  // => 3
```

### 地域メッシュコードから緯度経度を求める

求める緯度経度で表される点は、当該メッシュの基準点(南西端)から、
緯度座標上の点の位置(当該メッシュの単位経度の倍数)、経度座標上の点の位置(当該メッシュの単位緯度の倍数)
を指定します。

```javascript
const jismesh = require('jismesh-js');

// 南西端の緯度経度を求める。
const [latSW, lonSW] = jismesh.toMeshPoint('53393599', 0, 0);
console.log(latSW, lonSW);  // => 35.65833333333333 139.7375

// 北東端の緯度経度を求める。
const [latNE, lonNE] = jismesh.toMeshPoint('53393599', 1, 1);
console.log(latNE, lonNE);  // => 35.666666666666664 139.75

// 中心点の緯度経度を求める。
const [latC, lonC] = jismesh.toMeshPoint('53393599', 0.5, 0.5);
console.log(latC, lonC);  // => 35.6625 139.74375

// 東隣接メッシュの中心点の緯度経度を求める。
const [latEastNeighborC, lonEastNeighborC] = jismesh.toMeshPoint('53393599', 0.5, 1.5);
console.log(latEastNeighborC, lonEastNeighborC);  // => 35.6625 139.75625000000002
```
