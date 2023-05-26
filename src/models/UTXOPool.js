import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
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
}

export default UTXOPool
