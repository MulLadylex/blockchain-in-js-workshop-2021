import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  // 处理交易函数
  /**
   * trx：交易
   * 判断trx对象中的from在当前UTXO池中
   * 更新UTXO池
   */
  handleTransaction(trx) {
    if (this.isValidTransaction(trx.from, trx.amount)) {
      if (!(trx.from in this.utxos)) {
        throw new Error("Invalid transaction: Input UTXO not found")
      } else {
        this.utxos[trx.from].amount -= trx.amount
        this.addUTXO(trx.to, trx.amount)
      }
    }
  }

  // 验证交易合法性
  
  // 添加交易函数
  /**
   * 验证余额
   * 返回 bool 
   */
  addUTXO(utxoId, amount) {
    const utxo = new UTXO(amount)
    if (this.utxos[utxoId] !== undefined) {
      this.utxos[utxoId].amount += utxo.amount
    } else {
      this.utxos[utxoId] = utxo
    }
  }

  // 将当前 UXTO 的副本克隆
  clone() {
    return this.utxos
  }

  //  验证交易发起者的UTXO能够支付交易
  isValidTransaction(utxoId, amount) {
    if (this.utxos[utxoId] != undefined && this.utxos[utxoId].amount >= amount) {
      return true
    } else {
      return false
    }
  }
}

export default UTXOPool
