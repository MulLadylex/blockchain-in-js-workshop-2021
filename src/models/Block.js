import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数


  isValid() {}

  setNonce(nonce) {}
  
  

  constructor(symbol,previousHash,index,hash) {
    this.symbol=symbol
    this.previousHash=previousHash
    this.index=index
    this.hash=hash
  }
}

export default Block

