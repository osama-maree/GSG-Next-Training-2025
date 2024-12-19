export const calculate = (s: string): number => {
  if (s.length === 0) {
    return 0;
  }

  let stack: number[] = []; 
  let sign = "+"; 
  let num = 0;
  let i = 0;

  while (i < s.length) {
    let c = s[i];

    if (!isNaN(Number(c)) && c !== " ") {
      num = num * 10 + parseInt(c, 10);
    }

    if (c === "(") {
      let pCnt = 0;
      let end = 0;
      let clone = s.slice(i);
      while (end < clone.length) {
        if (clone[end] === "(") {
          pCnt++;
        } else if (clone[end] === ")") {
          pCnt--;
          if (pCnt === 0) {
            break;
          }
        }
        end++;
      }
      num = calculate(s.slice(i + 1, i + end));
      i += end;
    }

    if (
      i + 1 === s.length ||
      c === "+" ||
      c === "-" ||
      c === "*" ||
      c === "/"
    ) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack[stack.length - 1] *= num;
      } else if (sign === "/") {
        stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / num);
      }
      sign = c;
      num = 0;
    }
    i++;
  }

  return stack.reduce((acc, val) => acc + val, 0);
};
