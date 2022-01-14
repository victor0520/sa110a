import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "./last.js"
Deno.test("last", () => {
var a = _.last([1, 2, 3]);
var b = _.last([1, 2, 3, 4, 5, 6]);
console.log(a)
console.log(b)
})
