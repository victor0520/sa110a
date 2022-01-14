import { expect } from "https://deno.land/x/tdd/mod.ts"
import * as _ from "./lt.js"

Deno.test("lt",() => {
    expect(_.lt(1, 3))
    expect(_.lt(3, 3))
    expect(_.lt(3, 1))
})