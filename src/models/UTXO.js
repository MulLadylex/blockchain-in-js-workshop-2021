export default class UTXO {
  /**
   *  transaction hash:交易hash
   *  Output index:输出索引
   *  Amount:余额
   *  Locking script:锁定脚本
   */
  constructor(amount) {
    this.amount = amount

  }
}
