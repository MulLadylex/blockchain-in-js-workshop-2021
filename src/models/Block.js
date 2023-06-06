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
    this.trans = []
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
  _setHash() {
    this.hash = sha256
  }

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {
    let level = this.trans.map(transhash => sha256(transhash))
    while (level.length > 1) {
      let nextLevel = []
      for (let i = 0; i < level.length; i += 2) {
        const left = level[i];
        const right = i + 1 < level.length ? level[i+1] : ''
        const combinedHash = sha256(left + right)
        nextLevel.push(combinedHash) 
      }
      level = nextLevel
    }

    return level[0]
  }

  // 添加交易到区块
  /**
   *
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(trx) {
    this.trans.push(trx)
    this.utxoPool.handleTransaction(trx)
  }

}
export default Block
