import sha256 from 'crypto-js/sha256.js'

class Transaction {
  constructor(from, to, amount, fee) {
    this.from = from
    this.to = to
    this.amount = amount
    this.timestamp = Date.now()
    this.fee = fee  
    this.hash = this._calculateHash()
  }

  // 更新交易 hash
  _setHash() {
    this.hash = sha256(this.from + this.to + this.amount + Date.now())
  }

  // 计算交易 hash 的摘要函数
  //签名过程
  _calculateHash() {
    return sha256(this.from + this.to + this.amount + this.fee + this.timestamp).toString()
  }

  // 校验交易签名 返回 bool 类型的值
  hasValidSignature() {

  }

}

export default Transaction
