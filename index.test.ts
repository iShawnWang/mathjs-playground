import math from './index'
import {Decimal} from 'decimal.js'

describe('math js 配置', () => {
  test('1. math 默认配置', () => {
    // https://github.com/josdejong/mathjs/blob/develop/src/core/config.js
    console.log({
      // minimum relative difference between two compared values,
      // used by all comparison functions
      epsilon: 1e-12,
      // type of default matrix output. Choose 'matrix' (default) or 'array'
      matrix: 'Matrix',
      // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
      number: 'number',
      // number of significant digits in BigNumbers
      precision: 64,
      // predictable output type of functions. When true, output type depends only
      // on the input types. When false (default), output type can vary depending
      // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
      // predictable is false, and returns `NaN` when true.
      predictable: false,
      // random seed for seeded pseudo random number generation
      // null = randomly seed
      randomSeed: null
    })
  })
  test('2. BigNumber Math 默认配置', () => {
    console.log(math.config({}))
  })
})

describe("基本计算", () => {
  test('1. evaluate', () => {
    // 推荐使用 math.evaluate + es6 template string
    expect(math.evaluate(`0.1 + 0.2`).toNumber()).toEqual(0.3)
  })
  test('2. 包装函数 evalAsNumber', () => {
    expect(math.evalAsNumber(`0.1 + 0.2`)).toEqual(0.3)
  })
  test('3. 包装函数 evalAsBigNumber', () => {
    expect(math.evalAsBigNumber(`0.1 + 0.2`)).toBeInstanceOf(Decimal)
  })
})

describe('常见用法', () => {
  test('1. 保留小数', () => {
    // 推荐使用 math.evaluate + es6 template string
    expect(math.evalAsBigNumber(`0.1 + 0.2112361`).toFixed(1)).toEqual('0.3')
  })
  test('2. 取整 round', () => {
    // 推荐使用 math.evaluate + es6 template string
    expect(math.evalAsBigNumber(`0.1 + 0.21234123`).round().toNumber()).toEqual(0)
  })
  test('3. 取整 ceil', () => {
    // 推荐使用 math.evaluate + es6 template string
    expect(math.evalAsBigNumber(`0.1 + 0.2932481`).ceil().toNumber()).toEqual(1)
  })
  test('4. 取整 floor', () => {
    // 推荐使用 math.evaluate + es6 template string
    expect(math.evalAsBigNumber(`0.1 + 0.26343`).floor().toNumber()).toEqual(0)
  })
})

describe('错误示范', () => {
  test('1. 不要使用 math.add multiple 等方法', () => {
    // 不要使用 math.add
    expect(math.add(0.1, 0.2)).not.toEqual(0.3)
    expect(math.add(0.1, 0.2)).toEqual(0.30000000000000004)
  })
})