# exmath
[![npm version](https://badge.fury.io/js/exmath.svg)](https://badge.fury.io/js/exmath)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)

Mathの拡張ライブラリ

## Description
```exmath```はJavascript標準Mathを拡張したライブラリです。

# Installation
```
npm install exmath
```

# Usage
```
import ExMath from 'exmath'

const sum = ExMath.sum(1, 2, 3, 4) // 10
const average = ExMath.average(1, 2, 3, 4) // 2.5
const factorial = ExMath.factorial(3) // 6
const permutation = ExMath.permutation(4, 2) // 12
const combination = ExMath.combination(4, 2) // 6
const rotate2d = ExMath.rotate2d(Math.PI / 2, 100, 0) // [0, 100]
const rotate3d = ExMath.rotate3d('x', Math.PI / 2, 0, 100, 0) // [0, 0, 100]
```

## Functions

|Function|Parameters|Overview|
|-|-|-|
|sum|```...values: number[]``` Numeric expressions to be evaluated.|Returns the sum of the specified formulas.|
|average|```...values: number[]``` Numeric expressions to be evaluated.|Returns the average of the specified formulas.|
|factorial|```x: number``` A numeric expression.|Returns the factorial of the specified number.|
|permutation|```n: number``` A numeric expression.<br>```r: number``` A repetition value.|Returns the permutation of the specified number.(nPr)|
|combination|```n: number``` A numeric expression.<br>```r: number``` A repetition value.|Returns the combination of the specified number.(nCr)|
|rotate2d|```r: number``` A numeric expression that contains an angle measured in radians.<br>```x: number``` X coordinate.<br>```y: number``` Y coordinate.<br>```cx?: number``` Rotation center coordinates (X).<br>```cy?: number``` Rotation center coordinates (Y).|Returns the rotated coordinates of the specified 2D coordinates.|
|rotate3d|```axis: 'x' or 'y' or 'z'``` Axis of rotation.<br>```r: number``` A numeric expression that contains an angle measured in radians.<br>```x: number``` X coordinate.<br>```y: number``` Y coordinate.<br>```z: number``` Z coordinate.<br>```cx?: number``` Rotation center coordinates (X).<br>```cy?: number``` Rotation center coordinates (Y).<br>```cz?: number``` Rotation center coordinates (Z).|Returns the rotated coordinates of the specified 3D coordinates.|