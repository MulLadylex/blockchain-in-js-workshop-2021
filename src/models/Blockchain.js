// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name=name  //区块链名称
    this.blocks = []  //以数组形式，存储所有区块
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    const validChain = [] //返回的最长区块列表
    let max = 0 //区块高度最大值
    var lastestBlock = []  //最新区块（可能出现分叉
    var lastestBlockHash  //最新区块哈希

    //对当前链进行区块遍历，寻找最新区块
    for (let blockhash2 in this.blocks) {
      if (this.blocks[blockhash2].index > max) {
        max = this.blocks[blockhash2].index
        lastestBlockHash = blockhash2
      } 
    }
    lastestBlock.push(this.blocks[lastestBlockHash])
    for (let blockhash1 in this.blocks) {
      if (this.blocks[blockhash1].index == max && blockhash1 != lastestBlockHash) {
        lastestBlock.push(this.blocks[blockhash1])
      }
    }
    //从最新区块中获取父区块hash，并进行分叉判断
    for (let index = 0; index < lastestBlock.length; index++) {
      let block = lastestBlock[index]
      let fatherBlockHash = lastestBlock[index].previousHash
      while (fatherBlockHash !== 'root') {
        if (validChain.includes(this.blocks[fatherBlockHash])) {
          validChain.reverse()
          return validChain
        }
        validChain.push(this.blocks[block.hash])
        block =  this.blocks[fatherBlockHash]
        fatherBlockHash = block.previousHash
      }
      if (this.blocks[block.hash] != undefined) {
        validChain.push(this.blocks[block.hash])
      }
    }
    validChain.reverse()
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
