import ReactPlayer from 'react-player/youtube'

import track9_1 from '../../../../assets/WG9_1.png'
import track9_2 from '../../../../assets/WG9_2.png'
import track9_2_1 from '../../../../assets/WG9_2_1.png'
import track9_2_2 from '../../../../assets/WG9_2_2.png'
const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track9_Summary_content = () => {
  return (
    <div>
      <p>
        遠距醫療照護的需求隨著COVID-19疫情與產業發展快速演進，衛生福利部也研議逐步放寬【通訊診察治療辦法】的適用範圍，但截至目前遠距醫療照護資料流程與標準尚未有一致性的規範，各級政府、醫療體系、醫療照護院所之間對於遠距醫療照護涉及的資料範圍、欄位等均無統一的標準支持。故本工作小組在今年2023聯測預計新增遠距醫療相關的情境主題，預計先以衛福部的遠距醫療相關計畫為基礎，發展遠距醫療常用情境的FHIR互通標準。預計相關應用情境包括:
      </p>
      <p>Scenario 0: OAuth2 Access Token 存取認證 (與大會OAuth動態Token驗證整合)</p>
      <p>Scenario 1: 遠距醫療病患基本資料維護</p>
      <p>Scenario 2: 遠距端掛號作業</p>
      <p>Scenario 3: 在地端檢驗檢查上傳與遠距端診斷結果回傳</p>
      <p>Scenario 4: 在地端診療診斷結果上傳</p>{' '}
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/HzZla7PIvjA" width="100%" />
      </div>
    </div>
  )
}

const Track9_Benefits_content = () => {
  return (
    <div>
      <p>
        以衛福部建置之偏鄉離島遠距醫療服務及全民健康保險遠距醫療給付計畫為基礎，將遠距醫療門診服務的資訊處理流程初步規劃設計，以FHIR標準呈現遠距醫療門診作業流程中的資訊欄位、資訊交易，提供台灣產業在發展遠距醫療服務時的標準化參考依據。FHIR標準化的情境流程可供醫院相關資訊系統、廠商相關遠距醫療服務系統及政府單位遠距醫療相關平台，在開發或規劃階段可依據標準進行廠商中立的資訊流程設計與實做，促進遠距醫療跨單位系統互通性整合。
      </p>
    </div>
  )
}

const Track9_details_content = () => {
  return <div></div>
}

const Track9_SystemsAffected_content = () => {
  return (
    <div>
      <p>本規範涉及涉及的系统有：</p>
      <ul class="part in-view" data-startline="1351" data-endline="1354" data-position="64265" data-size="0">
        <li class="" data-startline="1351" data-endline="1351" data-position="64267" data-size="0">
          <strong data-position="64267" data-size="0">
            <span data-position="64269" data-size="7">
              遠距醫療系統:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1352" data-endline="1352" data-position="64282" data-size="0">
          <strong data-position="64282" data-size="0">
            <span data-position="64284" data-size="7">
              電子病歷系統:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1353" data-endline="1354" data-position="64297" data-size="0">
          <strong data-position="64297" data-size="0">
            <span data-position="64299" data-size="9">
              遠距醫療交換中心:
            </span>
          </strong>
        </li>
      </ul>
      <p>
        <strong>本工作小組制定的使用情境依序說明如下:</strong>
      </p>
      <p style={h3_style}>情境1:遠距醫療病患基本資料維護</p>
      <center>
        <img src={track9_1} Width="100%" />
      </center>
      <p style={h3_style}>情境2:遠距端掛號作業</p>
      <center>
        <img src={track9_1} Width="100%" />
      </center>
      <p style={h3_style}>情境3:在地端檢驗檢查上傳與遠距端診斷結果回傳</p>
      <center>
        <img src={track9_1} Width="100%" />
      </center>
      <p style={h3_style}>情境4:在地端診療診斷結果上傳</p>
      <center>
        <img src={track9_2_2} Width="100%" />
      </center>
      <ul>
        <li>角色與交易圖</li>
      </ul>
      <img src={track9_2_1} Width="100%" />
    </div>
  )
}

const Track9_Specification_content = () => {
  return (
    <div>
      <p style={h3_style}>角色(Actors)</p>
      <p>1.遠距醫療(TELMED)角色整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong data-position="64735" data-size="0">
                <span data-position="64737" data-size="7">
                  Keyword
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="64755" data-size="0">
                <span data-position="64757" data-size="2">
                  名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="64783" data-size="0">
                <span data-position="64785" data-size="2">
                  描述
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="64863" data-size="11">
                TELMED_LOCAL
              </span>
            </td>
            <td>
              <span data-position="64884" data-size="25">
                Telemedicine local Client
              </span>
            </td>
            <td>
              <span data-position="64913" data-size="7">
                遠距診療在地端
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="64921" data-size="12">
                TELMED_REMOTE
              </span>
            </td>
            <td>
              <span data-position="64942" data-size="26">
                Telemedicine remote client
              </span>
            </td>
            <td>
              <span data-position="64971" data-size="7">
                遠距診療遠距端
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="64980" data-size="16">
                TELMED_REPOSITORY
              </span>
            </td>
            <td>
              <span data-position="65001" data-size="22">
                Telmedicine repository
              </span>
            </td>
            <td>
              <span data-position="65030" data-size="7">
                遠距診療儲存庫
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>交易(Transactions)</p> <p>1.台遠距醫療(TELMED)交易整理</p>{' '}
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <span data-position="65086" data-size="7">
                Keyword
              </span>
            </th>
            <th>
              <span data-position="65096" data-size="4">
                Name
              </span>
            </th>
            <th>
              <span data-position="65152" data-size="11">
                Description
              </span>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="69108" data-size="6">
                MITW-1
              </span>
            </td>
            <td>
              <span data-position="69118" data-size="18">
                Patient Management
              </span>
            </td>
            <td>
              <span data-position="69174" data-size="24">
                病患基本資料維護 (Scenario1 &amp; 2)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69203" data-size="6">
                MITW-2
              </span>
            </td>
            <td>
              <span data-position="69213" data-size="22">
                Query/Retrieve Patient
              </span>
            </td>
            <td>
              <span data-position="69269" data-size="29">
                查詢與調閱病患基本資料 ( Scenario 1 &amp; 2)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69303" data-size="7">
                MITW-49
              </span>
            </td>
            <td>
              <span data-position="69313" data-size="37">
                Manage the Encounter for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69369" data-size="8">
                遠距診療掛號作業
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69390" data-size="7">
                MITW-50
              </span>
            </td>
            <td>
              <span data-position="69400" data-size="45">
                Query/Retrieve the Encounter for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69456" data-size="8">
                遠距診療掛號查詢
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69477" data-size="7">
                MITW-51
              </span>
            </td>
            <td>
              <span data-position="69487" data-size="52">
                Create the Laboratory Result bundle for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69543" data-size="16">
                檢驗檢查文件打包上傳用於遠距醫療
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69564" data-size="7">
                MITW-52
              </span>
            </td>
            <td>
              <span data-position="69574" data-size="53">
                Query/Retrieve the Laboratory Result for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69630" data-size="12">
                檢驗檢查查詢用於遠距醫療
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69651" data-size="7">
                MITW-53
              </span>
            </td>
            <td>
              <span data-position="69661" data-size="51">
                Create the Diagnosis Result Bundle for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69717" data-size="10">
                診斷結果文件打包上傳
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69738" data-size="7">
                MITW-54
              </span>
            </td>
            <td>
              <span data-position="69748" data-size="52">
                Query/Retrieve the Diagnosis Result for Telemedicine
              </span>
            </td>
            <td>
              <span data-position="69804" data-size="6">
                診斷結果查詢
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>角色與交易關係圖</p>
      <center>
        <img src={track9_2} Width="30%" />
      </center>
    </div>
  )
}

const Track9_Author_content = () => {
  return <div></div>
}

export {
  Track9_Summary_content,
  Track9_Benefits_content,
  Track9_details_content,
  Track9_SystemsAffected_content,
  Track9_Specification_content,
  Track9_Author_content,
}
