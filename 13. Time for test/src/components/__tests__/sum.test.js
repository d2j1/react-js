
import { expect, test } from "@jest/globals";
import Sum from "../Sum";


test("Sum function should calculate the sum of two numbers", () => {
    
    expect(Sum({ a: 3, b: 5 })).toBe(8);
    expect(Sum({ a: -3, b: 3 })).toBe(0);
    expect(Sum({ a: -3, b: -6 })).toBe(-9);
});