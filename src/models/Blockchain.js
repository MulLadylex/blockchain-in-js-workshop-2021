import UTXOPool from './UTXOPool.js'
import UTXO from './UTXO.js'

class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(symbol) {
    this.symbol=symbol  //区块链名称
    this.blocks = []  //以数组形式，存储所有区块
    this.utxoPool = new UTXOPool({})  //UTXO池
  }

  // 2. 定义 longestChain 函数
  /*
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    const validChain = [] //返回的最长区块列表
    let block
    for (let index = this.blocks.length-1; index >= 0; index--) {
      block = this.blocks[index];
      if (block.previousHash !== 'root' && block.previousHash !== undefined) {
        validChain.push(block)
      }
    }
    validChain.push(block)
    validChain.reverse()
    return validChain
  }

  // 判断当前区块链是否包含
  containsBlock(block) {
    // 添加判断方法
    if (this.blocks.includes(block)) {
      return true
    }
    return false
  }

  // 获得区块高度最高的区块
  maxHeightBlock() {
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
    return lastestBlock
  }

  // 添加区块
  /*
  1、要求区块合法、且为新块
  2、执行区块的coinbase交易
  */
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return
    this.coinbaseTransaction(block.coinbaseBeneficiary)
    this.blocks.push(block)
    // 添加 UTXO 快照与更新的相关逻辑
  }

  /**
   * coinbase交易 （特定的交易类型）
   * 创建区块后，获得区块奖励
   * 没有输入
   * 输出：区块奖励发送的地址
   */
  coinbaseTransaction(coinbaseBeneficiary) {
    const rewardAmount = 12.5
    const beneficiary = coinbaseBeneficiary
    const coinbaseUTXO = new UTXO(rewardAmount)
    this.utxoPool.addUTXO(beneficiary, coinbaseUTXO)
  }
}

export default Blockchain
