const DepData = [
  [
    { abs: ["001", "", "", ""], ems: ["", "", "", "", ""] }, //1:本部-制御課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, //5a:本部-管制1課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, //5b:本部-管制2課
    { abs: ["", "", "", "", "", "", "", ""], ems: ["", "", "", "", ""] }, //13:本部-設計課
  ],
  [
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 2:情報部-検閲課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, //12:情報部-記録課
  ],
  [
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 3:人事部-教育課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 6:人事部-懲戒課
  ],
  [
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 4:厚生部-安全課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 7:厚生部-福祉課
  ],
  [
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 8:警備部-防衛課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, // 9:警備部-視察課
  ],
  [
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, //10:抽出部-精製課
    { abs: ["", "", "", ""], ems: ["", "", "", "", ""] }, //11:抽出部-抽出課
  ],
];

export default class Department {
  depId = "";
  employees = [""];
  abnorms = [""];

  static cateNames = ["本", "情報", "人事", "厚生", "警備", "抽出"];
  static depNames = [
    ["制御", "管制1", "管制2", "設計"],
    ["検閲", "記録"],
    ["教育", "懲戒"],
    ["安全", "福祉"],
    ["防衛", "視察"],
    ["精製", "抽出"],
  ];

  constructor(depId, emp, abn) {
    this.depId = depId;
    this.employees = emp;
    this.abnorms = abn;
  }

  get departName() {
    const Sp = this.depId.split("");
    const CateNId = parseInt(Sp[0]);
    const DepNId = parseInt(Sp[1]);
    return `${this.cateNames[CateNId]}部 - ${this.depNames[DepNId]}課`;
  }

  set departData(id) {
    const Sp = id.split("");
    const cateLId = parseInt(Sp[0]);
    const cateSId = parseInt(Sp[1]);
    this.employees = DepData[cateLId][cateSId].ems;
    this.abnorms = DepData[cateLId][cateSId].abs;
  }
}
