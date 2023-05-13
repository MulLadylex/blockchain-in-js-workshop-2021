import UTXOPool from './UTXOPool.js'

Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name=name  //区块链名称
    this.blocks = []  //以数组形式，存储所有区块
  }

  // 2. 定义 longestChain 函数
  /*
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    const validChain = [] //返回的最长区块列表
    let max = 0 //区块高度最大值
    var lastestBlock = []  //最新区块（可能出现分叉
    var lastestBlockHash  //最新区块哈希

    //对当前链进行区块遍历，寻找最新区块
    for (let blockhash2 in this.blocks) {
      if (this.blocks[blockhash2].height > max) {
        max = this.blocks[blockhash2].height
        lastestBlockHash = blockhash2
      } 
    }
    lastestBlock.push(this.blocks[lastestBlockHash])
    for (let blockhash1 in this.blocks) {
      if (this.blocks[blockhash1].height == max && blockhash1 != lastestBlockHash) {
        lastestBlock.push(this.blocks[blockhash1])
      }
    }
    //从最新区块中获取父区块hash，并进行分叉判断
    for (let index = 0; index < lastestBlock.length; index++) {
      let block = lastestBlock[index]
      let fatherBlockHash = lastestBlock[index].previousHash
      while (fatherBlockHash !== 'root') {
        if (validChain.includes(this.blocks[fatherBlockHash])) {
          validChain.reverse()
          return validChain
        }
        validChain.push(this.blocks[block.hash])
        block =  this.blocks[fatherBlockHash]
        fatherBlockHash = block.previousHash
      }
      if (this.blocks[block.hash] != undefined) {
        validChain.push(this.blocks[block.hash])
      }
    }
    validChain.reverse()
    return validChain
  }

  // 判断当前区块链是否包含
  containsBlock(block) {
    // 添加判断方法
    return false
  }

  // 获得区块高度最高的区块
  maxHeightBlock() {
    // return Block
  }

  // 添加区块
  /*

  */
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return

    // 添加 UTXO 快照与更新的相关逻辑
  }
}

export default Blockchain
