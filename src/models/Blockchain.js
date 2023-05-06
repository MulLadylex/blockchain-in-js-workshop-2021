// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name=name
    this.blocks = []
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    const validChain = [];
    let max = 0
    for (let blockhash in this.blocks) {
      if (this.blocks[blockhash].index > max) {
        max = this.blocks[blockhash].index
        validChain.push(this.blocks[blockhash])
      }
    }
    return validChain
  }

  
  /**
   * 对分叉区块的合并实现：
   * 1.查找分叉点，即两个分支最后共同的祖先块。
   * 2.比较两个分支，选择其中一个分支作为主链，即具有最长链的那个分支。
   * 3.将从分叉点开始到主链末端的所有块添加到主链上。
   * 4.检查主链是否仍然有效，即使用isChainValid()方法进行检查。
   */
  // mergeBlocks(newChain) {
  //   const lastBlock = this.getLatestBlock();
  //   const newBlocks = newChain.slice(lastBlock.index + 1);
  //   const validChain = [];

  //   for (const newBlock of newBlocks) {
  //     if (newBlock.previousHash === lastBlock.hash) {
  //       this.addBlock(newBlock);
  //       lastBlock = newBlock;
  //       validChain.push(newBlock);
  //     }
  //   }

  //   if (validChain.length < newBlocks.length) {
  //     console.log('Warning: The merged chain is shorter than the original chain.');
  //   }

  //   if (!this.isChainValid()) {
  //     console.log('Error: The merged chain is invalid.');
  //   }
  // }
}

export default Blockchain
