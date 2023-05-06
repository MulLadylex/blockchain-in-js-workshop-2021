class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */

  constructor(symbol,previousHash,index,hash) {
    this.symbol=symbol
    this.previousHash=previousHash
    this.index=index
    this.hash=hash
  }
}

export default Block
