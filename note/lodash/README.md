# 實作loadash函數，用傳統作法、BDD、TDD的方式進行實作(原創)
### 傳統做法:[divide](https://github.com/victor0520/sa110a/blob/master/note/lodash/divide/divide.js)
* divide.js
```
export function divide(a,b) {
    var d = a/b
    return d
}
```

* ex1.js
```
import * as _ from './divide.js'
console.log(_.divide(6,4));

console.log(_.divide(4,7));

console.log(_.divide(8,4));
```
* 執行結果

![PICTURE](https://github.com/victor0520/sa110a/blob/master/note/lodash/divide/1.png)

### TDD:[last](https://github.com/victor0520/sa110a/blob/master/note/lodash/last/last.js)
* lasttest.js
```
import * as _ from "./last.js"
var a = _.last([1, 2, 3]);
var b = _.last([1, 2, 3, 4, 5, 6]);
console.log(a)
console.log(b)
```

* last.js
```
export function last(list) {
    var n = list.length
    var l = list[n-1]
    return l
  }
```
* 執行結果

![PICTURE](https://github.com/victor0520/sa110a/blob/master/note/lodash/last/1.png)


### BDD:[lt]((https://github.com/victor0520/sa110a/blob/master/note/lodash/lt/lt.js)
* lttest.js
```
import { expect } from "https://deno.land/x/tdd/mod.ts"
import * as _ from "./lt.js"

Deno.test("lt",() => {
    expect(_.lt(1, 3))
    expect(_.lt(3, 3))
    expect(_.lt(3, 1))
})
```
* lt.js
```
export function lt(value, other){
    if(value > other)    return true
    else return false
}
```
* 執行結果

![PICTURE](https://github.com/victor0520/sa110a/blob/master/note/lodash/lt/1.png)