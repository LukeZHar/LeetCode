function calculate(s: string): number {
  const stack: number[] = [];
  let res = 0;
  let num = 0;
  let sign = 1;
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    if (char >= "0" && char <= "9") {
      num = num * 10 + Number(char);
    } else if (char === "+") {
      res += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      res += sign * num;
      num = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (char === ")") {
      res += sign * num;
      num = 0;
      res *= stack.pop()!;
      res += stack.pop()!;
    }
    i++;
  }
  res += sign * num;
  return res;
}
