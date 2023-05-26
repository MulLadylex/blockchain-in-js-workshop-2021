import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  // 处理交易函数
  handleTransaction() {}

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
  isValidTransaction() {}
}

export default UTXOPool
