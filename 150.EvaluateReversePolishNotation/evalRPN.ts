function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            let result: number;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); // Use Math.trunc to handle integer division
                    break;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(token, 10));
        }
    }

    return stack[0];
}