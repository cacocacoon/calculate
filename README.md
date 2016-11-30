# <a href="https://cacocacoon.github.io/calculate/">Reminder-Generator</a>

##目的
一直以來計算明細表是使用 Excel, Word，會消耗掉許多時間。<br />

此應用程式是用來減輕計算發票、開明細表的繁瑣、重複的步驟，即使不懂得計算細節也可使用，彈指之間就做好明細表。

* 提供一個簡單介面操作，搜尋明細表(自動完成)，或新增明細表

<img src="http://g.recordit.co/rHs7c4j76v.gif" width="350">

* 不需要知道，該如何計算就能打表格出來

<img src="http://g.recordit.co/3IxUFYQFv3.gif" width="350">

* 利用 Firebase real-time database 可以多人同時編輯明細表，立即同步到其他人的畫面

<img src="http://g.recordit.co/psjNs05oVJ.gif" width="500">

##使用技術
1. <a href="https://facebook.github.io/react/">React</a>
2. <a href="http://redux.js.org/">Redux</a>
3. <a href="https://facebook.github.io/immutable-js/">Immutable.js</a>
把state 轉成 read-only 減少錯誤發生，增加程式運行效率
4. <a href="https://firebase.google.com/">Firebase</a> 資料儲存在 Google Firebase 裡面，real-time database，且具有**多人同時編輯**的能力
5. ES6
6. <a href="http://www.material-ui.com/">Material UI</a> 以此做 App 的 UI, 表格及其他需要layout的部分使用Flex Box

##未來會加入的功能
* 明細表 delete, Undo delete
* 明細表預覽 Drag and Drop, delete 方便操作
* 列印單
