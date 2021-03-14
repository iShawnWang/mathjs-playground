import { BigNumber, all, create, MathJsStatic, MathExpression } from "mathjs";

const math = create(all, { number: "BigNumber" }) as MathJsStatic & {
  evalAsNumber: (expr: MathExpression) => number;
  evalAsBigNumber: (expr: MathExpression) => BigNumber;
};

math.import(
  {
    evalAsNumber: (expr: MathExpression) => {
      return (math.evaluate(expr) as BigNumber).toNumber();
    },
    evalAsBigNumber: (expr: MathExpression) => {
      return math.evaluate(expr) as BigNumber;
    },
  },
  {}
);

export default math;
