# Reminder-Generator
<a href="https://cacocacoon.github.io/calculate/">Live Demo</a>

##目的
一直以來計算明細表是使用 Excel、Word，會消耗掉許多時間。<br />

此應用程式是用來減輕計算發票、開明細表的繁瑣的步驟，即使不懂得計算細節也可使用，彈指之間就做好明細表。

* 提供一個簡單介面操作，新增明細表。

<img src="http://g.recordit.co/rHs7c4j76v.gif" width="350">

* 搜尋明細表(自動完成)。

<img src="http://g.recordit.co/rHs7c4j76v.gif" width="350">

* 省下金額、營業稅計算的時間及失誤的可能，輸出表格、列印再也不需要手動調整。

<img src="http://g.recordit.co/3IxUFYQFv3.gif" width="350">

* 現在，要在同一份明細表上作業，再也不成問題，即便使用不同的裝置也能合作無間。

<img src="http://g.recordit.co/psjNs05oVJ.gif" width="500">

##使用技術
1. <a href="https://facebook.github.io/react/">React</a>
2. <a href="http://redux.js.org/">Redux</a>
3. <a href="https://facebook.github.io/immutable-js/">Immutable.js</a>
把 state 轉成 read-only 減少錯誤發生，增加程式運行效率。
4. <a href="https://firebase.google.com/">Firebase</a> 資料儲存在 Google Firebase 裡面，real-time database，且具有**多人同時編輯**的能力。
5. ECMA Script 6
6. <a href="http://www.material-ui.com/">Material UI</a> 以此做 App 的 UI，表格及其他需要 layout 的部分使用 Flex Box。

##未來會加入的功能
* 明細表 delete，Undo delete。
* 明細表預覽 Drag and Drop、delete 方便操作。
* 列印單。
