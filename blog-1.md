Title: Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.

Introduction:
In TypeScript, type safety is one of the most important features. It helps developers avoid bugs by checking types before runtime. However, types like `any` and `unknown` behave very differently in terms of safety.

Why `any` is called a "type safety hole":
The `any` type is called a “type safety hole” because it completely disables TypeScript’s type checking system. When a variable is declared as `any`, TypeScript allows any operation on it without giving errors.

Example:

let data: any = "Hello";
data = 123;

console.log(data.toUpperCase());

In this example, TypeScript does not show any error even though `toUpperCase()` cannot be used on a number. The error only appears at runtime. This makes `any` risky because it removes compile-time safety and can easily lead to bugs.

Why `unknown` is safer:
The `unknown` type is safer because it does not allow direct operations on a value without checking its type first. It forces the developer to verify the type before using it.

Example:

let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

Here, TypeScript only allows the operation after confirming that the value is a string. This prevents runtime errors and keeps the code safe.

What is Type Narrowing:
Type narrowing is the process of converting a broad type into a more specific type using conditions like `typeof`, `instanceof`, or custom checks. It helps TypeScript understand the exact type of a variable inside a specific block of code.

Example:

const printValue = (value: string | number) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};

In this example:
- Inside the `if` block, TypeScript treats `value` as a string.
- Inside the `else` block, TypeScript treats `value` as a number.

Conclusion:
The `any` type removes TypeScript’s safety system and can lead to runtime errors, which is why it is called a type safety hole. On the other hand, `unknown` keeps type safety intact by forcing type checking before usage. Type narrowing helps safely handle different types by refining them into more specific types within code blocks.