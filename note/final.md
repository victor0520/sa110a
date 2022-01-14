# 軟體工程心得(複製自網路上與老師教材)
## 簡介
* 軟體工程包括兩方面內容：軟體開發技術和軟體專案管理。
    * 軟體開發技術包括軟體開發方法學、軟體工具和軟體工程環境。
    * 軟體專案管理包括軟體度量、項目估算、進度控制、人員組織、配置管理、項目計畫等。
* 開發流程由強調瀑布式流程(waterfall)轉為強調反覆式流程(iterative)。 反覆式流程的主要精神是分析一些，設計一些，實作一些，執行一些，也就是將整個開發流程切割成數個週期(iteration)，每個週期都是一個叫小型的直線式流程，並且強調週期結束時都有可以執行的結果，而每個週期都是以前一週期的結果為基礎，在新增需求的方式進行，直到所有的軟體需求都滿足為止。因此反覆式流程也是一種漸增式流程(降低風險)。以結果來看，瀑布式流程只會交付一次產品，反覆式流程會交付多次產品。

## 系統開發模式(SoftWare Process Model)
### 瀑布模式(Waterfall)
* 瀑布模式示意圖:

![瀑布模式圖](https://github.com/victor0520/sa110a/blob/master/note/bitmap/waterfall.png)

* 特徵
    * 適用於需求明確，領域知識(Domain KnowHow)容易取得的專案
    * 強調開發過程需有完整的規劃，分析，設計，測試及文件等管理控制
    * 前一階段完成後才能進入下一階段，各階段僅循環一次
    * 沒有明確規定要劃分成多少個階段，每一階段皆有文件產出
* 至少劃分3階段
    * 分析
    * 設計
    * 實施
* 通常劃分5~7階段不等
    * 初步調查 (Preliminary Investigation)
    * 系統分析 (System Analysis)
    * 系統設計 (System Design)
    * 系統開發 (System Development)
    * 系統實施與評估 (System Implementation and Evaluation)


* 螺旋模式示意圖:

![螺旋模式圖](https://github.com/victor0520/sa110a/blob/master/note/bitmap/spiral.png)

* 螺旋模型由美國軟體工程師巴里·勃姆於1988年5月在他的文章《一種螺旋式的軟體開發與強化模型》提出。
* 螺旋模型並不是第一個討論疊代過程的模型。而它卻是第一個解釋疊代的重要作用的模型。
* 一個典型的螺旋模型應該由以下的步驟構成：
    1. 明確本疊代階段的目標、備選方案以及應用備選方案的限制
    2. 對備選方案進行評估，明確並解決存在的風險，建立原型
    3. 當風險得到很好的分析與解決後，應用瀑布模型進行本階段的開發與測試
    4. 對下一階段進行計劃與部署
    5. 與客戶一起對本階段進行評審

### 反覆式(Iterative)
* 漸增模式(Incremental Model)：Mills(1971)
    強調需求可分成幾個部分
    開發週期可反覆進行
* 雛形模式(Prototyping Model)：Bally(1977)
    * 適用於需求不明確，專案小，應用領域不熟悉或高風險之專案
    * 強調雛形之快速開發，以雛形作為使用者與資訊人員溝通之工具，使用者高度參與等
    * 雛形策略
        * 演進式雛形(Evolutionary Prototyping)
        * 用後丟棄式雛形(Rapid Throwaway Prototyping)：因成本較高，故適用於風險最高的情形
* 螺旋模式(Spiral Model)：Boehm(1988)
![螺旋模式圖](https://github.com/victor0520/sa110a/blob/master/note/bitmap/spiral.png)

* 強調「風險分析」結合了SDLC與雛形模式
* 一個典型的螺旋模型應該由以下的步驟構成：
    1. 明確本疊代階段的目標、備選方案以及應用備選方案的限制
    2. 對備選方案進行評估，明確並解決存在的風險，建立原型
    3. 當風險得到很好的分析與解決後，應用瀑布模型進行本階段的開發與測試
    4. 對下一階段進行計劃與部署
    5. 與客戶一起對本階段進行評審
* 同步模式(Concurrent Model)：Aoyama(1993)
* ![PICTURE](https://github.com/victor0520/sa110a/blob/master/note/bitmap/cm.png)
    * 構想源於製造業的同步工程(Concurrent Engineering)目的在於縮短產品開發時間，適用於套裝軟體的專案
    * 同步模式的構想
        * 活動同步(Activity Concurrency)：不同團隊平行開發
        * 資訊同步(Information Concurrency)：不同團隊資訊共享
        * 整合性的管理系統：協調各種資源的互動關係


# 參考資料
* [軟體工程(Software Engineering;SE)](https://irw.ncut.edu.tw/peterju/se.html)
* [資訊系統開發模式](https://hackmd.io/@k139/r1y-9LmK4/%2Fs%2FByC7o87FE?type=book)
* [第 6 章 -- 軟體專案](https://gitlab.com/ccc110/sa/-/blob/master/se/_doc/06-project.md)