export class ipfsFaissJs {
  constructor() {
    console.log('ipfs_faiss_js');
  }
  async init() {
    console.log('ipfs_faiss_js.init()');
    return this.test();
  }
  async test() {
    console.error('ipfs_faiss_js.test() not implemented');
    throw new Error('ipfs_faiss_js.test() not implemented');
  } 
}