type typeElement = number | string | object | boolean;

function AddNumberorString2(a: typeElement, b: typeElement) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be number or strings");
}
console.log(">>>check: ", AddNumberorString2("huy", " Tran"));
