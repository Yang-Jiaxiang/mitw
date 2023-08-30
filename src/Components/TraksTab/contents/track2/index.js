import trackImg from '../../../../assets/wg2_3.png'
import ReactPlayer from 'react-player/youtube'

const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}

const Track2_Summary_content = () => {
  return (
    <div>
      <p>
        生理量測數據是為了患者監測和識別健康變化或問題而記錄的重要信息。生理量測數據包括身高、體重、體溫、進食後血糖、進食前血糖、體脂率、握力、血壓
        (收縮壓、舒張壓)、心率等數據。生理量測數據通常在各種醫療保健場所定期和常規進行，包括入院檢查、住院監護、術後醫療程序、治療和療法程序以及密切監護。
      </p>
      <p>
        由於這些信息在多個醫療保健場所和部門中使用，有必要對數據進行標準化，以確保一致性、準確的結果、便於比較和分析，並增強生理量測數據的互操作性。
      </p>
      <p style={h3_style}>生理量測數據互通</p>
      <p>
        測試生理量測數據存儲規範（創建者 - Creator）和生理量測數據展示（調閲著 -
        Consumer）。測試是通過按照定義的標準規範存儲生理量測數據，並確保在其他系統上準確顯示。生理量測數據包括身高、體重、體溫、進食後血糖、進食前血糖、體脂率、握力、血壓（收縮壓和舒張壓）以及心率等參數。
      </p>
      <p>
        本工作小組制定台灣的生理量測數據交換標準規範，並鼓勵參與者在開發涉及生理量測數據記錄功能的系統時遵循本規範。
      </p>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/REAL2DsjLrA" width="100%" />
      </div>
    </div>
  )
}

const Track2_Benefits_content = () => {
  return (
    <div>
      本賽道製定了各種生理監測及骨質密度資料的規範。參考本規範開發系統以便更輕鬆地實現跨系統的整合以及生理監測資料分享。
    </div>
  )
}

const Track2_details_content = () => {
  return (
    <div width="100%">
      本賽道的情境描述如下:
      <p style={h3_style}>情境1 - 生命徵象 (Vital signs)</p>
      <table class="table table-striped table-bordered" border="1">
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ width: '15%' }}>
              <strong>項目</strong>
            </th>
            <th style={{ width: '15%' }}>
              <strong>類型</strong>
            </th>
            <th>
              <strong>Code system</strong>
            </th>
            <th>
              <strong>Code</strong>
            </th>
            <th style={{ width: '10%' }}>
              <strong>Unit</strong>
            </th>
            <th>
              <strong>Unit Code (UCUM Code)</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>身高</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>3137-7</td>
            <td>cm</td>
            <td>cm</td>
          </tr>
          <tr>
            <td>體重</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>29463-7</td>
            <td>kg</td>
            <td>kg</td>
          </tr>
          <tr>
            <td>體溫</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>8310-5</td>
            <td>Cel</td>
            <td>Cel</td>
          </tr>
          <tr>
            <td>進食後血糖</td>
            <td>Laboratory Data</td>
            <td>LoincCode</td>
            <td>87422-2</td>
            <td>mg/dL</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>進食前血糖</td>
            <td>Laboratory Data</td>
            <td>LoincCode</td>
            <td>88365-2</td>
            <td>mg/dL</td>
            <td>mg/dL</td>
          </tr>
          <tr>
            <td>體脂率</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>41982-0</td>
            <td>%</td>
            <td>%</td>
          </tr>
          <tr>
            <td>握力</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>83174-3</td>
            <td>kg</td>
            <td>kg</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>參考範例</p>
      <ul class="part in-view" data-startline="493" data-endline="499" data-position="23876" data-size="0">
        <li class="" data-startline="493" data-endline="493" data-position="23878" data-size="0">
          <span data-position="23878" data-size="3">
            身高：
          </span>
        </li>
        <li class="" data-startline="494" data-endline="494" data-position="23884" data-size="0">
          <span data-position="23884" data-size="3">
            體重：
          </span>
        </li>
        <li class="" data-startline="495" data-endline="495" data-position="23890" data-size="0">
          <span data-position="23890" data-size="6">
            進食後血糖：
          </span>
        </li>
        <li class="" data-startline="496" data-endline="496" data-position="23899" data-size="0">
          <span data-position="23899" data-size="6">
            進食前血糖：
          </span>
        </li>
        <li class="" data-startline="497" data-endline="497" data-position="23908" data-size="0">
          <span data-position="23908" data-size="4">
            體脂率：
          </span>
        </li>
        <li class="" data-startline="498" data-endline="499" data-position="23915" data-size="0">
          <span data-position="23915" data-size="3">
            握力：
          </span>
        </li>
      </ul>
      <p style={h3_style}>情境2 -用藥結合血壓與心率量測</p>
      <p>
        本賽道會進行驗證用藥結合血壓與心率量測資料交換規範的格式。 FHIR Observation 的 “code”
        欄位可以根據下面顯示的生命徵象項目代碼進行更改。
      </p>
      <table class="table table-striped table-bordered" border="1">
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ width: '15%' }}>
              <strong>項目</strong>
            </th>
            <th style={{ width: '15%' }}>
              <strong>類型</strong>
            </th>
            <th>
              <strong>Code system</strong>
            </th>
            <th>
              <strong>Code</strong>
            </th>
            <th style={{ width: '10%' }}>
              <strong>Unit</strong>
            </th>
            <th>
              <strong>Unit Code (UCUM Code)</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>收縮壓</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>8480-6</td>
            <td>mmHg</td>
            <td>mmHg</td>
          </tr>
          <tr>
            <td>舒張壓</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>8462-4</td>
            <td>mmHg</td>
            <td>mmHg</td>
          </tr>
          <tr>
            <td>心率</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>8867-4</td>
            <td>{`beats`}/min</td>
            <td>{`beats`}/min</td>
          </tr>
          <tr>
            <td>血壓</td>
            <td>Vital Signs</td>
            <td>LoincCode</td>
            <td>35094-2</td>
            <td>mmHg</td>
            <td>mmHg</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>參考範例</p>
      <ul class="part in-view" data-startline="511" data-endline="515" data-position="24545" data-size="0">
        <li class="" data-startline="511" data-endline="511" data-position="24547" data-size="0">
          <span data-position="24547" data-size="3">
            血壓：
          </span>
        </li>
        <li class="" data-startline="512" data-endline="512" data-position="24553" data-size="0">
          <span data-position="24553" data-size="4">
            收縮壓：
          </span>
        </li>
        <li class="" data-startline="513" data-endline="513" data-position="24560" data-size="0">
          <span data-position="24560" data-size="4">
            舒張壓：
          </span>
        </li>
        <li class="" data-startline="514" data-endline="515" data-position="24567" data-size="0">
          <span data-position="24567" data-size="3">
            心率：
          </span>
        </li>
      </ul>
      <p style={h3_style}>情境3 -骨骼密度</p>
      <p>
        本賽道會進行驗證骨骼密度資料交換規範的格式。 FHIR Observation 的 “code”
        欄位可以根據下面顯示的生命徵象項目代碼進行更改。
      </p>
      <table class="table table-striped table-bordered" border="1">
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ width: '15%' }}>
              <strong>項目</strong>
            </th>
            <th style={{ width: '15%' }}>
              <strong>類型</strong>
            </th>
            <th>
              <strong>Code system</strong>
            </th>
            <th>
              <strong>Code</strong>
            </th>
            <th style={{ width: '10%' }}>
              <strong>Unit</strong>
            </th>
            <th>
              <strong>Unit Code (UCUM Code)</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>左股骨骨密度</td>
            <td>Image</td>
            <td>LoincCode</td>
            <td>80948-3</td>
            <td>{`{T - score}`}</td>
            <td>{`{T - score}`}</td>
          </tr>
          <tr>
            <td>右股骨骨密度</td>
            <td>Image</td>
            <td>LoincCode</td>
            <td>80947-5</td>
            <td>{`{T - score}`}</td>
            <td>{`{T - score}`}</td>
          </tr>
          <tr>
            <td>腰椎骨密度</td>
            <td>Image</td>
            <td>LoincCode</td>
            <td>38267-1</td>
            <td>{`{T - score}`}</td>
            <td>{`{T - score}`}</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>參考範例</p>
      <ul class="part in-view" data-startline="526" data-endline="529" data-position="25120" data-size="0">
        <li class="" data-startline="526" data-endline="526" data-position="25122" data-size="0">
          <span data-position="25122" data-size="7">
            左股骨骨密度：
          </span>
        </li>
        <li class="" data-startline="527" data-endline="527" data-position="25132" data-size="0">
          <span data-position="25132" data-size="7">
            右股骨骨密度：
          </span>
        </li>
        <li class="" data-startline="528" data-endline="529" data-position="25142" data-size="0">
          <span data-position="25142" data-size="6">
            腰椎骨密度：
          </span>
        </li>
      </ul>
    </div>
  )
}

const Track2_SystemsAffected_content = () => {
  return (
    <div>
      <ul class="part in-view" data-startline="531" data-endline="533" data-position="25178" data-size="0">
        <li class="" data-startline="531" data-endline="531" data-position="25180" data-size="0">
          <span data-position="25180" data-size="6">
            生理信號設備
          </span>
        </li>
        <li class="" data-startline="532" data-endline="533" data-position="25189" data-size="0">
          <span data-position="25189" data-size="8">
            個人健康管理系統
          </span>
        </li>
      </ul>
    </div>
  )
}

const Track2_Specification_content = () => {
  return (
    <div>
      <p>以下是用於記錄生命徵象的FHIR Observation規格 –Add the specs of fhir observation image</p>
      <p style={h3_style}>角色(Actors)</p>
      <ol class="part in-view" data-startline="539" data-endline="540" data-position="25311" data-size="0">
        <li class="" data-startline="539" data-endline="540" data-position="25314" data-size="0">
          生理量測數據(VTSIGN)角色整理
        </li>
      </ol>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong>Keyword</strong>
            </th>
            <th>
              <strong>名稱</strong>
            </th>
            <th>
              <strong>描述</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>VT_SC1_CREATOR</td>
            <td>SC1 Vital Sign Creator</td>
            <td>新增生理量測數據(常用生理信號)</td>
          </tr>
          <tr>
            <td>VT_SC2_CREATOR</td>
            <td>SC2 Vital Sign Creator</td>
            <td>新增生理量測數據(結合用藥)</td>
          </tr>
          <tr>
            <td>VT_SC3_CREATOR</td>
            <td>SC3_Vital Sign Creator</td>
            <td>新增生理量測數據(骨骼密度量測)</td>
          </tr>
          <tr>
            <td>VT_SC4_CREATOR</td>
            <td>SC4 Vital Sign Creator</td>
            <td>新增生理量測數據(12導層心電圖)</td>
          </tr>
          <tr>
            <td>VT_SC1_CONSUMER</td>
            <td>SC1 Vital Sign Consumer</td>
            <td>查詢與調閱生理量測數據(常用生理信號)</td>
          </tr>
          <tr>
            <td>VT_SC2_CONSUMER</td>
            <td>SC2 Vital Sign Consumer</td>
            <td>查詢與調閱生理量測數據(結合用藥)</td>
          </tr>
          <tr>
            <td>VT_SC3_CONSUMER</td>
            <td>SC3 Vital Sign Consumer</td>
            <td>查詢與調閱生理量測數據(骨骼密度量測)</td>
          </tr>
          <tr>
            <td>VT_SC4_CONSUMER</td>
            <td>SC4 Vital Sign Consumer</td>
            <td>查詢與調閱生理量測數據(12導層心電圖)</td>
          </tr>
          <tr>
            <td>VT_REPOSITORY</td>
            <td>Vital Sign Repository</td>
            <td>生理量測數據儲存庫</td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>交易(Transactions)</p>
      <ol class="part in-view" data-startline="539" data-endline="540" data-position="25311" data-size="0">
        <li class="" data-startline="539" data-endline="540" data-position="25314" data-size="0">
          生理量測數據(VTSIGN)之角色與交易關係圖
        </li>
      </ol>
      <img src={trackImg} alt="trackImg" width="100%" />
    </div>
  )
}

const Track2_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>角色</th>
            <th style={{ width: '15%' }}>姓名</th>
            <th>所屬單位</th>
            <th>貢獻</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>作者</td>
            <td>蕭嘉宏</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td>Profiling, 聯測測試情境設計</td>
          </tr>
          <tr>
            <td>作者</td>
            <td>洪苑容</td>
            <td>馬雅資訊股份有限公司軟體工程師</td>
            <td>profiling, 測試工具開發, 聯測測試情境設計</td>
          </tr>
          <tr>
            <td>作者</td>
            <td>湯士滄</td>
            <td>銘傳大學 - 生物醫學工程學系</td>
            <td>聯測測試情境設計</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>林欣怡</td>
            <td></td>
            <td>Profiling</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>莊舒雅</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td>測試支援</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>洪彬彬</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td>測試支援</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track2_details_content,
  Track2_Benefits_content,
  Track2_Summary_content,
  Track2_SystemsAffected_content,
  Track2_Specification_content,
  Track2_Author_content,
}
