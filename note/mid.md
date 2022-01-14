# 期中報告:遺傳演算法
## 介紹(部分複製自維基百科與老師AI教材)
* 基因演算法（英語：Genetic Algorithm, GA）是計算數學中用於解決最佳化的搜尋演算法，是進化演算法的一種。進化演算法最初是借鑑了進化生物學中的一些現象而發展起來的，這些現象包括遺傳、突變、自然選擇以及雜交等等。
* 遺傳演算法是模仿兩性生殖的演化機制，使用交配、突變等機制，不斷改進群體適應的一種演算法。此方法廣泛被用在各個人工智慧領域，尤其是在最佳化問題上，遺傳演算法是經常使用的方法之一。
* 分數最高跟最低選到的機率相差兩倍
* 問題的表達式的特性應該:好的基因跟好的基因組合起來得到更好的機會應該要比較大
* 遺傳演算法跑的速度很慢

## 原理(複製自老師AI教材)

傳演算法具有保存良好基因的特性，並且藉由下列公式不斷改進。這個公式就是交配 (Crossover) 機制所造成的效果。

良好基因 (父) + 良好基因 (母) = 更好的個體

然後，藉由『物競天擇、適者生存』的選擇與淘汰機制，良好的個體會被保留下來，繼續繁衍，而不好的個體則會被淘汰，因而絕種。因此，遺傳演算法乃是透過優勝劣敗的生存法則所設計出來的一個競爭性演算法。

當然，在某些問題上，上述的公式不成立時，遺傳演算法也就失效了，因此將無法具有良好的表現。

## 實作(複製自鍾誠老師的code，再自己跑一次結果)
* 問題：尋找金鑰： key = "1010101010101010"
* 設定：population 大小為 100, mutationRate=0.1
### 程式：geneticAlgorithm.py
```
import random
import math

class GeneticAlgorithm:
    def __init__(self): 
        self.population = []    # 族群
        self.mutationRate = 0.1 # 突變率

    def run(self, size, maxGen) :  # 遺傳演算法主程式
        self.population = self.newPopulation(size) # 產生初始族群
        for t in range(maxGen):  # 最多產生 maxGen 代
            print("============ generation", t, "===============")
            self.population = self.reproduction() # 產生下一代
            self.dump() # 印出目前族群
  
    def newPopulation(self, size): 
        newPop=[]
        for _ in range(size): 
            chromosome = self.randomChromosome() # 隨機產生新染色體
            newPop.append({'chromosome':chromosome, 
                           'fitness':self.calcFitness(chromosome)})
        newPop.sort(key = lambda c: c['fitness']) # 對整個族群進行排序
        return newPop
  
    # 輪盤選擇法: 隨機選擇一個個體 -- 落點在 i*i ~ (i+1)*(i+1) 之間都算是 i
    def selection(self): 
        n = len(self.population)
        shoot  = random.randint(0, (n*n/2)-1)
        select = math.floor(math.sqrt(shoot*2))
        return self.population[select]
  
    # 產生下一代
    def reproduction(self):
        newPop = []
        for i in range(len(self.population)): 
            parent1 = self.selection()['chromosome'] # 選取父親
            parent2 = self.selection()['chromosome'] # 選取母親
            chromosome = self.crossover(parent1, parent2) # 父母交配，產生小孩
            prob = random.random()
            if prob < self.mutationRate: # 有很小的機率
                chromosome = self.mutate(chromosome) # 小孩會突變
            newPop.append({ 'chromosome':chromosome, 'fitness':self.calcFitness(chromosome) })  # 將小孩放進下一代族群裡
        newPop.sort(key = lambda c: c['fitness']) # 對新一代根據適應性（分數）進行排序
        return newPop
  
    def dump(self):  # 印出一整代成員
        for i in range(len(self.population)):
            print(i, self.population[i])

```

### 執行:keyGa.py
* 序列跟key一個字母一樣就加一分
```
from geneticAlgorithm import GeneticAlgorithm
import random

class KeyGA(GeneticAlgorithm):
    def __init__(self, key):
        super().__init__()
        self.key = key

    def randomChromosome(self): # 隨機產生一個染色體 (一個 16 位元的 01 字串)
        bits=[]
        for _ in range(len(self.key)):
            bit = str(random.randint(0,1))
            bits.append(bit)
        return ''.join(bits)
  
    def calcFitness(self, c): # 分數是和 key 一致的位元個數
        fitness=0
        for i in range(len(self.key)):
            fitness += 1 if c[i]==self.key[i] else 0
        return fitness
  
    def crossover(self, c1, c2):
        cutIdx = random.randint(0, len(c1)-1)
        head   = c1[0:cutIdx]
        tail   = c2[cutIdx:]
        return head + tail
    
    def mutate(self, chromosome): # 突變運算
        i=random.randint(0, len(chromosome)-1) # 選擇突變點
        cMutate = chromosome[0:i]+random.choice(['0','1'])+chromosome[i+1:] # 在突變點上隨機選取 0 或 1
        return cMutate # 傳回突變後的染色體

# 執行遺傳演算法，企圖找到 key，最多執行一百代，每代族群都是一百人
kga = KeyGA("1010101010101010")
kga.run(100, 20)
```
* [執行結果:ga.out]()


# 參考資料
* [實作：遺傳演算法](https://programmermedia.org/root/%E9%99%B3%E9%8D%BE%E8%AA%A0/%E8%AA%B2%E7%A8%8B/%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7/02-optimize/03-genetic/%E5%AF%A6%E4%BD%9C%EF%BC%9A%E9%81%BA%E5%82%B3%E6%BC%94%E7%AE%97%E6%B3%95.md)
* [基因演算法(維基百科)](https://zh.wikipedia.org/wiki/%E9%81%97%E4%BC%A0%E7%AE%97%E6%B3%95)