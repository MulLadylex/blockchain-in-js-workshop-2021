import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

class Block {
  // 1. 完成构造函数及其参数
  constructor(mainChain,previousHash,height,hash,mineraddr) {
    this.mainChain=mainChain
    this.previousHash=previousHash
    this.height=height
    this.hash=hash
    this.coinbaseBeneficiary=mineraddr
    this.utxoPool = mainChain.utxoPool
  }

  /**
   * 验证数据结构有效
   * 区块头的哈希值小于目标难度
   * 第一个交易是coinbase交易
   * @returns 该区块合法
   */
  isValid() {
    const preHash = this.hash.slice(0,DIFFICULTY)
    let str = "0"
    if (preHash <= str.repeat(DIFFICULTY)) {
      return true
    } else {
      return false
    }
  }

  setNonce(nonce) {
    this.hash = sha256(nonce + sha256(new Date().getTime().toString()).toString()).toString()
  }
  
  

  // 根据交易变化更新区块 hash
  _setHash() {}

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {

  }

  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction() {}

}
export default Block
