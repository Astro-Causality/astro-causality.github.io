export class EgoGift {
  id = "000"; //異次元体ID
  nm = ""; //ギフトの名前
  tp = ""; //ギフトの部位
  bf = [0, 0]; //ギフトのステ補正[ステ分類,補正値]

  constructor(nm, tp, bft, bfv) {
    this.nm = nm;
    this.tp = tp;
    this.bf = [bft, bfv];
  }

}