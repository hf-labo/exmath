/**
 * Extended Math class
 */
 class ExMath {
  /**
   * Euler's constant and the base of natural logarithms; approximately 2.718.
   */
  static get E() {
    return Math.E
  }

  /**
   * Natural logarithm of 2; approximately 0.693.
   */
  static get LN2() {
    return Math.LN2
  }

  /**
   * Natural logarithm of 10; approximately 2.303.
   */
  static get LN10() {
    return Math.LN10
  }

  /**
   * Base-2 logarithm of E; approximately 1.443.
   */
  static get LOG2E() {
    return Math.LOG2E
  }

  /**
   * Base-10 logarithm of E; approximately 0.434.
   */
  static get LOG10E() {
    return Math.LOG10E
  }

  /**
   * Ratio of a circle's circumference to its diameter; approximately 3.14159.
   */
  static get PI() {
    return Math.PI
  }

  /**
   * Square root of ½; approximately 0.707.
   */
  static get SQRT1_2() {
    return Math.SQRT1_2
  }

  /**
   * Square root of 2; approximately 1.414.
   */
  static get SQRT2() {
    return Math.SQRT2
  }

  /**
   * Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
   * @param x A numeric expression for which the absolute value is needed.
   */
  static abs = (x: number): number => {
    return Math.abs(x)
  }

  /**
   * Returns the arc cosine (or inverse cosine) of a number.
   * @param x A numeric expression.
   */
  static acos = (x: number): number => {
    return Math.acos(x)
  }

  /**
   * Returns the inverse hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static acosh = (x: number): number => {
    return Math.acosh(x)
  }

  /**
   * Returns the arcsine of a number.
   * @param x A numeric expression.
   */
  static asin = (x: number): number => {
    return Math.asin(x)
  }

  /**
   * Returns the inverse hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static asinh = (x: number): number => {
    return Math.asinh(x)
  }

  /**
   * Returns the arctangent of a number.
   * @param x A numeric expression for which the arctangent is needed.
   */
  static atan = (x: number): number => {
    return Math.atan(x)
  }

  /**
   * Returns the inverse hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static atanh = (x: number): number => {
    return Math.atanh(x)
  }

  /**
   * Returns the angle (in radians) from the X axis to a point.
   * @param y A numeric expression representing the cartesian y-coordinate.
   * @param x A numeric expression representing the cartesian x-coordinate.
   */
  static atan2 = (y: number, x: number): number => {
    return Math.atan2(y, x)
  }

  /**
   * Returns an implementation-dependent approximation to the cube root of number.
   * @param x A numeric expression.
   */
  static cbrt = (x: number): number => {
    return Math.cbrt(x)
  }

  /**
   * Returns the smallest integer greater than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  static ceil = (x: number): number => {
    return Math.ceil(x)
  }

  /**
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  static clz32 = (x: number): number => {
    return Math.clz32(x)
  }

  /**
   * Returns the cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static cos = (x: number): number => {
    return Math.cos(x)
  }

  /**
   * Returns the hyperbolic cosine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static cosh = (x: number): number => {
    return Math.cosh(x)
  }

  /**
   * Returns e (the base of natural logarithms) raised to a power.
   * @param x A numeric expression representing the power of e.
   */
  static exp = (x: number): number => {
    return Math.exp(x)
  }

  /**
   * Returns the result of (e^x - 1), which is an implementation-dependent approximation to subtracting 1 from the exponential function of x (e raised to the power of x, where e is the base of the natural logarithms).
   * @param x A numeric expression.
   */
  static expm1 = (x: number): number => {
    return Math.expm1(x)
  }

  /**
   * Returns the greatest integer less than or equal to its numeric argument.
   * @param x A numeric expression.
   */
  static floor = (x: number): number => {
    return Math.floor(x)
  }

  /**
   * Returns the nearest single precision float representation of a number.
   * @param x A numeric expression.
   */
  static fround = (x: number): number => {
    return Math.fround(x)
  }

  /**
   * Returns the square root of the sum of squares of its arguments.
   * @param values Values to compute the square root for. If no arguments are passed, the result is +0. If there is only one argument, the result is the absolute value. If any argument is +Infinity or -Infinity, the result is +Infinity. If any argument is NaN, the result is NaN. If all arguments are either +0 or −0, the result is +0.
   */
  static hypot = (...values: number[]): number => {
    return Math.hypot(...values)
  }

  /**
   * Returns the result of 32-bit multiplication of two numbers.
   * @param x First number
   * @param y Second number
   */
  static imul = (x: number, y: number): number => {
    return Math.imul(x, y)
  }

  /**
   * Returns the natural logarithm (base e) of a number.
   * @param x A numeric expression.
   */
  static log = (x: number): number => {
    return Math.log(x)
  }

  /**
   * Returns the natural logarithm of 1 + x.
   * @param x A numeric expression.
   */
  static log1p = (x: number): number => {
    return Math.log1p(x)
  }

  /**
   * Returns the base 10 logarithm of a number.
   * @param x A numeric expression.
   */
  static log10 = (x: number): number => {
    return Math.log10(x)
  }

  /**
   * Returns the base 2 logarithm of a number.
   * @param x A numeric expression.
   */
  static log2 = (x: number): number => {
    return Math.log2(x)
  }

  /**
   * Returns the larger of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  static max = (...values: number[]): number => {
    return Math.max(...values)
  }

  /**
   * Returns the smaller of a set of supplied numeric expressions.
   * @param values Numeric expressions to be evaluated.
   */
  static min = (...values: number[]): number => {
    return Math.min(...values)
  }

  /**
   * Returns the value of a base expression taken to a specified power.
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   */
  static pow = (x: number, y: number): number => {
    return Math.pow(x, y)
  }

  /**
   * Returns a pseudorandom number between 0 and 1.
   */
  static random = (): number => {
    return Math.random()
  }

  /**
   * Returns a supplied numeric expression rounded to the nearest integer.
   * @param x The value to be rounded to the nearest integer.
   */
  static round = (x: number): number => {
    return Math.round(x)
  }

  /**
   * Returns the sign of the x, indicating whether x is positive, negative or zero.
   * @param x The numeric expression to test
   */
  static sign = (x: number): number => {
    return Math.sign(x)
  }

  /**
   * Returns the sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static sin = (x: number): number => {
    return Math.sin(x)
  }

  /**
   * Returns the hyperbolic sine of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static sinh = (x: number): number => {
    return Math.sinh(x)
  }

  /**
   * Returns the square root of a number.
   * @param x A numeric expression.
   */
  static sqrt = (x: number): number => {
    return Math.sqrt(x)
  }

  /**
   * Returns the tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static tan = (x: number): number => {
    return Math.tan(x)
  }

  /**
   * Returns the hyperbolic tangent of a number.
   * @param x A numeric expression that contains an angle measured in radians.
   */
  static tanh = (x: number): number => {
    return Math.tanh(x)
  }

  /**
   * Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
   * @param x A numeric expression.
   */
  static trunc = (x: number): number => {
    return Math.trunc(x)
  }

  /**
   * Returns the sum of the specified formulas.
   * @param values Numeric expressions to be evaluated.
   */
  static sum = (...values: number[]): number => {
    return values.reduce((acc, val, _) => acc + val)
  }

  /**
   * Returns the average of the specified formulas.
   * @param values Numeric expressions to be evaluated.
   */
  static average = (...values: number[]): number => {
    return ExMath.sum(...values) / values.length
  }

  /**
   * Returns the factorial of the specified number.
   * @param x A numeric expression.
   */
  static factorial = (x: number): number => {
    return x > 1 ? x * ExMath.factorial(x - 1) : x
  }

  /**
   * Returns the permutation of the specified number.(nPr)
   * @param n A numeric expression.
   * @param r A repetition value.
   */
  static permutation = (n: number, r: number): number => {
    let v = 1
    for (let i = 0; i < r; i++) {
      v *= n - i
    }
    return v
  }

  /**
   * Returns the combination of the specified number.(nCr)
   * @param n A numeric expression.
   * @param r A repetition value.
   */
  static combination = (n: number, r: number): number => {
    return ExMath.permutation(n, r) / ExMath.factorial(r)
  }

  /**
   * Returns the rotated coordinates of the specified 2D coordinates.
   * @param r A numeric expression that contains an angle measured in radians.
   * @param x X coordinate.
   * @param y Y coordinate.
   * @param cx Rotation center coordinates (X).
   * @param cy Rotation center coordinates (Y).
   */
  static rotate2d = (r: number, x: number, y: number, cx: number = 0, cy: number = 0): number[] => {
    return [
      Math.cos(r) * (x - cx) - Math.sin(r) * (y - cy) + cx, 
      Math.sin(r) * (x - cx) + Math.cos(r) * (y - cy) + cy
    ]
  }

  /**
   * Returns the rotated coordinates of the specified 3D coordinates.
   * @param axis Axis of rotation.
   * @param r A numeric expression that contains an angle measured in radians.
   * @param x X coordinate.
   * @param y Y coordinate.
   * @param z Z coordinate.
   * @param cx Rotation center coordinates (X).
   * @param cy Rotation center coordinates (Y).
   * @param cz Rotation center coordinates (Z).
   */
  static rotate3d = (axis: 'x' | 'y' | 'z', r: number, x: number, y: number, z: number, cx: number = 0, cy: number = 0, cz: number = 0): number[] => {
    if (axis === 'x') {
      return [
        x,
        Math.cos(r) * (y - cy) - Math.sin(r) * (z - cz) + cy,
        Math.sin(r) * (y - cy) + Math.cos(r) * (z - cz) + cz
      ]
    } else if (axis === 'y') {
      return [
        Math.cos(r) * (x - cx) + Math.sin(r) * (z - cz) + cx,
        y,
        -Math.sin(r) * (x - cx) + Math.cos(r) * (z - cz) + cz
      ]
    } else if (axis === 'z') {
      return [
        Math.cos(r) * (x - cx) - Math.sin(r) * (y - cy) + cx,
        Math.sin(r) * (x - cx) + Math.cos(r) * (y - cy) + cy,
        z
      ]
    } else {
      /* istanbul ignore next */ 
      return [x, y, z]
    }
  }

  /**
   * Returns the distance between two points.
   * @param ax The X coordinate of point A.
   * @param ay The Y coordinate of point A.
   * @param bx The X coordinate of point B.
   * @param by The Y coordinate of point B.
   */
  static distance = (ax: number, ay: number, bx: number, by: number): number => {
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2))
  }

  /**
   * Returns the dot product of the vector.
   * @param ax The X coordinate of the vector A.
   * @param ay The Y coordinate of the vector A.
   * @param bx The X coordinate of the vector B.
   * @param by The Y coordinate of the vector B.
   */
  static dotProduct = (ax: number, ay: number, bx: number, by: number): number => {
    return ax * bx + ay * by
  }

  /**
   * Returns the cross product of the vector.
   * @param ax The X coordinate of the vector A.
   * @param ay The Y coordinate of the vector A.
   * @param bx The X coordinate of the vector B.
   * @param by The Y coordinate of the vector B.
   */
  static crossProduct = (ax: number, ay: number, bx: number, by: number): number => {
    return Math.abs(ax * by - ay * bx)
  }
}

export default ExMath
