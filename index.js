import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Youken:[

        {
          category1: "専門科目", category2: "-", category3: "必修科目", group: "卒業論文",
          number: ["BC14908"], name: ["-"], group_min: 6, group_max: 6, group_sum: 0,
          category1_min: 6, category1_max: 6, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門科目", category2: "-", category3: "選択科目", group: "BC12群",
          number: ["BC12"], name: ["-"], group_min: 14, group_max: 24, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門科目", category2: "-", category3: "選択科目", group: "BC11,BC16,BE22群",
          number: ["BC11", "BC16", "BE22"], name: ["-"], group_min: 0, group_max: 10, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門科目", category2: "-", category3: "選択科目", group: "BC13群",
          number: ["BC13"], name: ["-"], group_min: 6, group_max: 6, group_sum: 0,
          category1_min: 30, category1_max: 30, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門科目", category2: "-", category3: "自由科目", group: "インターンシップ",
          number: ["BC14"], name: ["-"], group_min: 0, group_max: 4, group_sum: 0,
          category1_min: 17, category1_max: 44, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門科目", category2: "-", category3: "自由科目",
          group: "BC11,BC12,BC13,BC16,BE22",
          number: ["BC11", "BC12", "BC13", "BC16", "BE22"], name: ["-"], group_min: 17, group_max: 40, group_sum: 0,
          category1_min: 17, category1_max: 44, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },


        {
          category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論I",
          number: ["BC50011"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論II",
          number: ["BC50021"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論III",
          number: ["BC50031"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論IV",
          number: ["BC50041"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "必修科目",
          group: "国際学概論V",
          number: ["BC50051"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 5, category1_max: 5, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "選択科目",
          group: "BC51(EDS,EDを除く)",
          number: ["BC51"], name: ["–"], group_min: 14, group_max: 14, group_sum: 0,
          category1_min: 18, category1_max: 18, category1_sum: 0, remove: ["English Discussion Seminar", "English Debate"], restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "選択科目",
          group: "EDS,ED",
          number: ["-"], name: ["English Discussion Seminar", "English Debate"], group_min: 4, group_max: 4, group_sum: 0,
          category1_min: 18, category1_max: 18, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "専門基礎科目", category2: "-", category3: "自由科目",
          group: "BC51,BE21",
          number: ["BC51", "BE21"], name: ["–"], group_min: 4, group_max: 10, group_sum: 0,
          category1_min: 4, category1_max: 10, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目I",
          number: ["11", "12"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIA",
          number: ["1A"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIB",
          number: ["1B"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目IIA,IIB,IIC",
          number: ["1A", "1B", "1C"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "総合科目III",
          number: ["1D", "1E", "1F", "1G"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "基礎体育",
          number: ["21", "25"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "応用体育",
          number: ["22"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "発展体育",
          number: ["23", "26"], name: ["–"], group_min: 1, group_max: 1, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "第一外国語",
          number: ["31A", "31B", "31C", "31E", "31F", "31G"],
          name: ["–"], group_min: 4.5, group_max: 4.5, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "第二外国語",
          number: ["32A", "32B", "32C", "32E", "3231", "3234", "33A", "33B", "33C", "33E", "3331", "3334", "34A", "34B", "34C", "34E", "3431", "3434", "35A", "35B", "35C", "35E", "3531", "3534", "36A", "36B", "36C", "36E", "3631", "3634", "37A", "37B", "37C", "37E", "3731", "3734", "38A", "38B", "38C", "38E", "3831", "3834"],
          name: ["–"], group_min: 4.5, group_max: 4.5, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "必修科目",
          group: "情報",
          number: ["61", "62"], name: ["–"], group_min: 2, group_max: 2, group_sum: 0,
          category1_min: 22, category1_max: 22, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "総合科目I,II",
          number: ["1"], name: ["–"], group_min: 0, group_max: 6, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "体育",
          number: ["28"], name: ["–"], group_min: 0, group_max: 1, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "外国語",
          number: ["3"], name: ["–"], group_min: 0, group_max: 6, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "情報(上級)",
          number: ["63"], name: ["–"], group_min: 0, group_max: 4, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "国語",
          number: ["5"], name: ["–"], group_min: 0, group_max: 2, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "共通科目", category3: "自由科目",
          group: "芸術",
          number: ["4"], name: ["–"], group_min: 0, group_max: 2, group_sum: 0,
          category1_min: 0, category1_max: 21, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "関連科目", category3: "自由科目",
          group: "社会・国際学郡共通科目(BA),他学群,他学類,特設自由科目,博物館に関する科目",
          number: ["BA", "A", "BB", "C", "E", "F", "G", "H", "W", "Y", "8", "99"], name: ["–"], group_min: 0, group_max: 23,
          group_sum: 0, category1_min: 0, category1_max: 23, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        {
          category1: "基礎科目", category2: "関連科目", category3: "自由科目",
          group: "教職に関する科目",
          number: ["90", "91", "92", "93", "94", "95", "96", "97", "98"], name: ["–"], group_min: 0, group_max: 12, group_sum: 0,
          category1_min: 0, category1_max: 23, category1_sum: 0, remove: "-", restriction: [["-"], ["-"]],
        },

        { '必修科目': 0, '選択科目': 0, '自由科目': 0, '合計': 0 },

        { '必修科目': 33, '選択科目': 48, '自由科目': 45, '合計': 126 }],
    };

    
  }

  render() {
    return (
      <div>
        <Hello score={this.state.Youken}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
