# <a href="https://cacocacoon.github.io/calculate/">Calculate</a>
##目的
一直以來計算明細表示利用 Excel, Word 做，需要不斷的打字、複製、拖拉表格、在Excel, Word之間重複切換，會消耗掉許多時間，所以開發了這支程式。<br />
此應用程式是用來減輕計算發票、開明細表的繁瑣、重複的步驟，即使不懂得計算細節也可使用，彈指之間就做好明細表。
##使用技術
1. <a href="https://facebook.github.io/react/">React</a>
2. <a href="http://redux.js.org/">Redux</a>
3. <a href="https://facebook.github.io/immutable-js/">Immutable.js</a>
把state 轉成 read-only 減少錯誤發生，增加程式運行效率
4. <a href="https://firebase.google.com/">Firebase</a> 資料儲存在 Google Firebase 裡面，real-time databsse，且具有**多人同時編輯**的能力
5. ES6

##未來會加入的功能
* 明細表 delete, Undo delete
* 明細表預覽 Drag and Drop, delete 方便操作
* 列印單
