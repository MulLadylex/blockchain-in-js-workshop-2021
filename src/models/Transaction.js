import sha256 from 'crypto-js/sha256.js'


class Transaction {
  constructor(from, to, amount) {
    this.from = from
    this.to = to
    this.amount = amount
    this.timestamp = Date.now()
    this.hash = this._calculateHash()
  }

  // 更新交易 hash
  _setHash() {
    this.hash = sha256(this.from + this.to + this.amount + Date.now())
  }

  // 计算交易 hash 的摘要函数
  //签名过程
  _calculateHash() {
    return sha256(this.from + this.to + this.amount + this.timestamp).toString()
  }
}

export default Transaction