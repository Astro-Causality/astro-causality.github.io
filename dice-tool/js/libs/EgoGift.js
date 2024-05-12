export class EgoGift {
  id = "0000"; //異次元体ID
  nm = ""; //ギフトの名前

  tp = ""; //ギフトの部位
  bf = [0, 0]; //ギフトのステ補正[ステ分類,補正値]

  spab = false; //特殊効果の有無

  specialAbility(agent){}

}

export class EgoWeapon {
  id = "0000";
  nm = "";

  tp = 0; //攻撃属性 0:RED  1:WHITE  2:BLACK 3:PALE
  rg = 0; //射程距離 0:近接 1:遠距離 2:特殊

  spab = false;

  specialAbility(agent){}
}

export class EgoSuit {
  id = "0000";
  nm = "";

  //属性耐性 「0.5」「0.75」「1.0」「1.25」「1.5」のどれかを属性別で書く
  resi = [1.0, 1.0, 1.25, 1.5];

  spab = false;

  specialAbility(agent) {}
}