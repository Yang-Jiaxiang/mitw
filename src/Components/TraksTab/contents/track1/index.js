import track1_1 from '../../../../assets/WG1_1.png'
import track1_2 from '../../../../assets/Ts1.png'
import track1_3 from '../../../../assets/WG1_2.png'
import track1_4 from '../../../../assets/WG1_4.png'
import ReactPlayer from 'react-player/youtube'
import Lightbox from 'react-image-lightbox'
import { useState } from 'react'

const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}

const Track1_details_content = () => {
  return (
    <div>
      <p>本賽道的情境描述如下:</p>
      <img src={track1_3} Width="100%" />
      <p style={h3_style}>情境1 核心資料交換</p>
      <ul>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>目的:</p>
          <ul>
            <li>
              (1)
              首次建檔時建立的病人身分資訊。核心資料建立不要求已知的病患身分資訊，若病患未知身分的病人（例如路倒送急診）、或是專用於院外情境建立的病患資料，僅需輸入
              identifier、gender 即可。
            </li>
            <li>
              (2) 提供台灣核心-病人規範的格式驗證，以下為核心資料交換的邏輯模型(資料來源:
              <a href="https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition-TWPatient.html">TW Core Patient</a>)。
            </li>
          </ul>
        </li>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>情境說明:</p>
          <ul>
            <li>院內情境: 建立病人基本資料</li>
            <li>院外情境: 與PHR App溝通用</li>
          </ul>
        </li>
      </ul>

      <p style={h3_style}>情境2 身分識別資料交換</p>
      <ul>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>目的:</p>
          <ul>
            <li>
              執行各項護理技術、檢查、治療、手術等醫療處置前對病人做身分確認，例如：在診療前，醫護人員請病人提供基本資訊如姓名、生日用以核對病人身分是否正確
            </li>
          </ul>
        </li>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>情境說明:</p>
          <ul>
            <li>院內情境－建立病人身分識別資料(Identification)，例如: 姓名、生日、性別等資訊</li>
          </ul>
        </li>
      </ul>

      <p style={h3_style}>情境3 病患聯絡資訊交換</p>
      <ul>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>目的:</p>
          <ul>
            <li>聯絡方式如手機、email…用以聯絡病人，通訊地址如住家地址、工作地址</li>
            <li>院內情境－建立病人聯絡資料(Contact)，例如: 電話、地址、聯絡人等資訊</li>
          </ul>
        </li>
        <li>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>情境說明:</p>
          <ul>
            <li>以手機、email等方式用以聯絡病人</li>
          </ul>
        </li>
      </ul>
      <img src={track1_2} Width="100%" />
    </div>
  )
}

const Track1_Benefits_content = () => {
  return (
    <div>
      <ul>
        <li>
          本工作小組制定醫院內部流程以及跨院交換流程的使用情境，確立病人基本資料通用於機構內健康醫療作業流程、跨機構之資訊互通、以及個人健康紀錄(PHR)之整合。針對特定之應用情境，可選用部分欄位，組合成標準病人基本資料，達到互通整合應用。
        </li>
        <li>
          透過提供互通應用情境範例，讓開發者可以模擬實際流程提供發展「機構內系統整合」、「跨機構互通應用」、以及「個人健康紀錄(PHR)之應用」，作為發展標準化醫療資訊系統的核心基礎架構。
        </li>
      </ul>
    </div>
  )
}

const Track1_Summary_content = () => {
  return (
    <div width="100%">
      <ul>
        <li>
          病患基本資料為醫療資訊系統中最基本元素，涵蓋所有電子病歷的範疇。本工作小組主要分析台灣病人基本資料之規格，根據國內現況制定出適合台灣病患基本資要用跨系統交換，以達到基本的互通性，並相容台灣核心規範。{' '}
        </li>
        <li>
          本工作小組有兩大目標:
          <ol>
            <li>分析病患基本資料用實際醫療場域提出基本規格。</li>
            <li>訂立病患基本資料的使用情境用於各種作業流程。</li>
          </ol>
        </li>
      </ul>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/XA-8ddfFvA8" width="100%" />
      </div>
    </div>
  )
}

const Track1_SystemsAffected_content = () => {
  return (
    <div>
      本規範涉及涉及的系统有：
      <ul>
        <li>
          <font style={{ fontWeight: 'bold' }}>病人基本資料使用單位系統：</font>
          醫療照護機構、藥局、消防局、第三方健康照護應用、個人等
        </li>
      </ul>
    </div>
  )
}

const Track1_Specification_content = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div>
      <p style={h3_style}>Patient Source</p>
      <div>
        <ul>
          <li>病人基本資料建檔單位系統，可包含：醫療照護機構、藥局、消防局、第三方健康照護應用等</li>
          <li>發起處理請求，必須使用FHIR RESTful API執行Patient Resource的新增修改、刪除等操作</li>
          <li>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>檢核基準</p>
            <ul>
              <li>成功新增資料後，測試系統要能正確回傳id及病人資料</li>
              <li>
                調閱資料後，測試系統要能將回傳的病人資料以自行定義的使用者介面(UI)或以JSON/XML等原始文件格式正確呈現
              </li>
              <li>
                編輯資料後，測試系統要能將回傳的病人資料及 History ID
                以自行定義的使用者介面(UI)或以JSON/XML等原始文件格式正確呈現
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p style={h3_style}>Patient Consumer</p>
      <div>
        <ul>
          <li>發起處理請求，必須使用FHIR RESTful API執行Patient Resource的查詢操作</li>
          <li>需支援 history 參數進行歷史記錄調閱</li>
          <li>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>檢核基準</p>{' '}
            <ul>
              <li>成功新增資料後，測試系統要能正確回傳id及病人資料</li>
              <li>
                調閱資料後，測試系統要能將回傳的病人資料以自行定義的使用者介面(UI)或以 JSON/XML等原始文件格式正確呈現{' '}
              </li>
              <li>
                編輯資料後，測試系統要能將回傳的病人資料及 History
                ID自行定義的使用者介面(UI)或以JSON/XML等原始文件格式正確呈現
              </li>
              <li>
                查詢功能須能支援
                <a
                  target="_blank"
                  href="https://twcore.mohw.gov.tw/ig/twcore/CapabilityStatement-CapabilityStatementTWCoreClient.html"
                >
                  臺灣核心-用戶端(TW Core Client)能力聲明
                </a>
                中定義的臺灣核心-病人(TW Core Patient)必要查詢參數，包含如下表 - 必須(SHALL)符合查詢參數摘要:
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th width="15%">
              <strong>名稱</strong>
            </th>
            <th width="15%">
              <strong>參數</strong>
            </th>
            <th width="15%">
              <strong>類型</strong>
            </th>
            <th>
              <strong>範例</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>邏輯ID</td>
            <td>_id</td>
            <td>token</td>
            <td>GET [base]/Patient?_id=[id],&lt;br&gt;GET [base]/Patient/[id]</td>
          </tr>
          <tr>
            <td>出生年月日</td>
            <td>birthdate</td>
            <td>date</td>
            <td>GET [base]/Patient?birthdate=[birthdate]</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>gender</td>
            <td>token</td>
            <td>GET [base]/Patient?gender=[code]</td>
          </tr>
          <tr>
            <td>身份識別碼</td>
            <td>identifier</td>
            <td>token</td>
            <td>GET [base]/Patient?identifier={'{' + `system` + ' | ' + '}'} [code]</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td>name</td>
            <td>string</td>
            <td>GET [base]/Patient?name=[name]</td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>Patient Repository (參加Level II, III)</p>
      <div>
        <ul>
          <li>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>規格要求</p>
            <ul>
              <li>實作或提供一個儲存機制 (Repository)，並正確處理所接收的處理請求</li>
              <li>接收處理請求，能執行Patient Resource的新增、查詢、修改、刪除操作 (CRUD Operations)</li>
              <li>必須能夠支援FHIR Client (Source, Consumer)使用FHIR RESTful API進行上述操作，並回傳正確資料</li>
            </ul>
            <li>(必要)支援FHIR Client使用台灣核心-病人(TW Core Patient)定義的查詢參數進行搜尋</li>
            <li>(選項)支援FHIR Client使用history參數進行歷史記錄調閱</li>
            <li>
              <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>檢核基準</p>
            </li>
            <ul>
              <li>
                <b>互通性要求: 必須至少與 3 個 Client 完成介接，並滿足以上規格要求</b>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p style={h3_style}>檢查項目與賽道通過標準</p>
      <div>
        <ul>
          <li>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>參測系統是否符合聯測規格要求</p>
          </li>
          <ul>
            <li>參測系統的Request/Response是否完全按照FHIR RESTful API 定義，包含</li>
            <ul>
              <li>Search Parameter（Query String）</li>
              <li>Request Header</li>
              <li>Request Body</li>
              <li>HTTP Status Code</li>
              <li>User Agent</li>
              <li>其他 FHIR 規範項目</li>
            </ul>
          </ul>
          <li>
            <p style={{ fontWeight: 'bold' }}>參測系統是否符合聯測規格要求</p>
          </li>
          <ul>
            <li>符合以下要求（擇一），才能在證書上被註記「通過」</li>
            <ul>
              <li>參測系統必須通過所有情境: 1、2、3</li>
              <li>參測系統必須通過情境1與情境2，再加上任一其他基礎賽道(#2, #3, #4,#5, #6, #7, #9)定義的Patient操作</li>
            </ul>
          </ul>
        </ul>
      </div>
      <p style={h3_style}>驗證細節</p>
      本賽道驗證規格比照國際 FHIR 聯測，將測試項目劃分為若干Level，並新增Bonus Point，依序說明如下:
      <div>
        <ul class="part in-view" data-startline="384" data-endline="421" data-position="19503" data-size="0">
          <li class="" data-startline="384" data-endline="389" data-position="19505" data-size="0">
            <p data-position="19503" data-size="0">
              <strong data-position="19505" data-size="0">
                <span data-position="19507" data-size="7">
                  <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}> Level 1</p>
                </span>
              </strong>
            </p>
            <ul data-position="19519" data-size="0">
              <li class="" data-startline="385" data-endline="385" data-position="19521" data-size="0">
                <span data-position="19521" data-size="40">
                  能正確設定Gazelle，並以Gazelle Test Script作為檢核依據
                </span>
              </li>
              <li class="" data-startline="386" data-endline="389" data-position="19566" data-size="0">
                <span data-position="19566" data-size="14">
                  測試系統完成各情境要求之項目
                </span>
                <ul data-position="19585" data-size="0">
                  <li class="" data-startline="387" data-endline="387" data-position="19587" data-size="0">
                    <strong data-position="19587" data-size="0">
                      <span data-position="19589" data-size="7">
                        Source:
                      </span>
                    </strong>
                    <span data-position="19598" data-size="36">
                      {' '}
                      能順利完成Create/Read/Update/Delete 等動作
                    </span>
                  </li>
                  <li class="" data-startline="388" data-endline="389" data-position="19641" data-size="0">
                    <strong data-position="19641" data-size="0">
                      <span data-position="19643" data-size="9">
                        Consumer:
                      </span>
                    </strong>
                    <span data-position="19654" data-size="43">
                      {' '}
                      能順利以Search Parameters搜尋指定的Record以及完成Read動作
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="" data-startline="390" data-endline="395" data-position="19701" data-size="0">
            <p data-position="19699" data-size="0">
              <strong data-position="19701" data-size="0">
                <span data-position="19703" data-size="8">
                  <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}> Level 1+</p>
                </span>
              </strong>
            </p>
            <ul data-position="19716" data-size="0">
              <li class="" data-startline="391" data-endline="391" data-position="19718" data-size="0">
                <span data-position="19718" data-size="16">
                  完成 Level 1 之檢核項目
                </span>
              </li>
              <li class="" data-startline="392" data-endline="392" data-position="19739" data-size="0">
                <span data-position="19739" data-size="34">
                  測試系統能以history參數調閱單筆 Record 的指定歷史記錄
                </span>
              </li>
              <li class="" data-startline="393" data-endline="393" data-position="19778" data-size="0">
                <strong data-position="19778" data-size="0">
                  <span data-position="19780" data-size="12">
                    Bonus Point:
                  </span>
                </strong>
                <span data-position="19794" data-size="36">
                  {' '}
                  測試系統能正確顯示單筆Record的歷史記錄清單，並能自由調閱歷史記錄
                </span>
              </li>
              <li class="" data-startline="394" data-endline="395" data-position="19835" data-size="0">
                <strong data-position="19835" data-size="0">
                  <span data-position="19837" data-size="12">
                    Bonus Point:
                  </span>
                </strong>
                <span data-position="19851" data-size="34">
                  {' '}
                  測試系統搜尋指定Record時，能同時以多項查詢參數進行多條件搜索
                </span>
              </li>
            </ul>
          </li>
          <li class="" data-startline="396" data-endline="421" data-position="19889" data-size="0">
            <p data-position="19887" data-size="0">
              <strong data-position="19889" data-size="0">
                <span data-position="19891" data-size="7">
                  <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}> Level 2</p>
                </span>
              </strong>
            </p>
            <ul data-position="19903" data-size="0">
              <li class="" data-startline="397" data-endline="400" data-position="19905" data-size="0">
                <font color="red">
                  <code data-position="19924" data-size="2">
                    新增
                  </code>
                </font>
                <span data-position="19934" data-size="17">
                  Patient時，符合以下所有條件
                </span>
                <ul data-position="19956" data-size="0">
                  <li class="" data-startline="398" data-endline="398" data-position="19958" data-size="0">
                    <span data-position="19958" data-size="14">
                      HTTP Method必須為
                    </span>
                    <code data-position="19973" data-size="3">
                      PUT
                    </code>
                  </li>
                  <li class="" data-startline="399" data-endline="399" data-position="19984" data-size="0">
                    <span data-position="19984" data-size="22">
                      HTTP Header Accept 必須為
                    </span>
                    <code data-position="20007" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="400" data-endline="400" data-position="20036" data-size="0">
                    <span data-position="20036" data-size="27">
                      HTTP Header Content-Type必須為
                    </span>
                    <code data-position="20064" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="401" data-endline="404" data-position="20091" data-size="0">
                <font color="red">
                  <code data-position="20110" data-size="2">
                    修改
                  </code>
                </font>
                <span data-position="20120" data-size="17">
                  Patient時，符合以下所有條件
                </span>
                <ul data-position="20142" data-size="0">
                  <li class="" data-startline="402" data-endline="402" data-position="20144" data-size="0">
                    <span data-position="20144" data-size="15">
                      HTTP Method 必須為
                    </span>
                    <code data-position="20160" data-size="3">
                      PUT
                    </code>
                  </li>
                  <li class="" data-startline="403" data-endline="403" data-position="20171" data-size="0">
                    <span data-position="20171" data-size="22">
                      HTTP Header Accept 必須為
                    </span>
                    <code data-position="20194" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="404" data-endline="404" data-position="20223" data-size="0">
                    <span data-position="20223" data-size="28">
                      HTTP Header Content-Type 必須為
                    </span>
                    <code data-position="20252" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="405" data-endline="408" data-position="20279" data-size="0">
                <font color="red">
                  <code data-position="20298" data-size="2">
                    調閱
                  </code>
                </font>
                <span data-position="20308" data-size="17">
                  Patient時，符合以下所有條件
                </span>
                <ul data-position="20330" data-size="0">
                  <li class="" data-startline="406" data-endline="406" data-position="20332" data-size="0">
                    <span data-position="20332" data-size="15">
                      HTTP Method 必須為
                    </span>
                    <code data-position="20348" data-size="3">
                      GET
                    </code>
                  </li>
                  <li class="" data-startline="407" data-endline="407" data-position="20359" data-size="0">
                    <span data-position="20359" data-size="21">
                      HTTP Header Accept必須為
                    </span>
                    <code data-position="20381" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="408" data-endline="408" data-position="20410" data-size="0">
                    <span data-position="20410" data-size="27">
                      HTTP Header Content-Type必須為
                    </span>
                    <code data-position="20438" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="409" data-endline="412" data-position="20465" data-size="0">
                <font color="red">
                  <code data-position="20484" data-size="13">
                    調閱Patient歷史資料
                  </code>
                </font>
                <span data-position="20505" data-size="10">
                  時，符合以下所有條件
                </span>
                <ul data-position="20520" data-size="0">
                  <li class="" data-startline="410" data-endline="410" data-position="20522" data-size="0">
                    <span data-position="20522" data-size="14">
                      HTTP Method必須為
                    </span>
                    <code data-position="20537" data-size="3">
                      GET
                    </code>
                  </li>
                  <li class="" data-startline="411" data-endline="411" data-position="20548" data-size="0">
                    <span data-position="20548" data-size="21">
                      HTTP Header Accept必須為
                    </span>
                    <code data-position="20570" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="412" data-endline="412" data-position="20599" data-size="0">
                    <span data-position="20599" data-size="24">
                      HTTP Header Content-Type
                    </span>
                    <code data-position="20624" data-size="3">
                      不存在
                    </code>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="413" data-endline="416" data-position="20633" data-size="0">
                <font color="red">
                  <code data-position="20652" data-size="20">
                    Search Parameters 調閱
                  </code>
                </font>
                <span data-position="20680" data-size="10">
                  時，符合以下所有條件
                </span>
                <ul data-position="20695" data-size="0">
                  <li class="" data-startline="414" data-endline="414" data-position="20697" data-size="0">
                    <span data-position="20697" data-size="14">
                      HTTP Method必須為
                    </span>
                    <code data-position="20712" data-size="3">
                      GET
                    </code>
                  </li>
                  <li class="" data-startline="415" data-endline="415" data-position="20723" data-size="0">
                    <span data-position="20723" data-size="21">
                      HTTP Header Accept必須為
                    </span>
                    <code data-position="20745" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="416" data-endline="416" data-position="20774" data-size="0">
                    <span data-position="20774" data-size="27">
                      HTTP Header Content-Type不存在
                    </span>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="417" data-endline="421" data-position="20806" data-size="0">
                <font color="red">
                  <code data-position="20825" data-size="2">
                    刪除
                  </code>
                </font>
                <span data-position="20835" data-size="14">
                  時，符合以下所有條件測試系統
                </span>
                <ul data-position="20854" data-size="0">
                  <li class="" data-startline="418" data-endline="418" data-position="20856" data-size="0">
                    <span data-position="20856" data-size="14">
                      HTTP Method必須為
                    </span>
                    <code data-position="20871" data-size="6">
                      DELETE
                    </code>
                  </li>
                  <li class="" data-startline="419" data-endline="419" data-position="20885" data-size="0">
                    <span data-position="20885" data-size="14">
                      HTTP Header必須為
                    </span>
                    <code data-position="20900" data-size="21">
                      application/fhir+json
                    </code>
                  </li>
                  <li class="" data-startline="420" data-endline="421" data-position="20929" data-size="0">
                    <span data-position="20929" data-size="27">
                      HTTP Header Content-Type不存在
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p style={h3_style}>角色(Actors)</p>
      <div>
        <ol class="part in-view" data-startline="423" data-endline="424" data-position="20973" data-size="0">
          <li class="" data-startline="423" data-endline="424" data-position="20976" data-size="0">
            <strong data-position="20976" data-size="0">
              <span data-position="20978" data-size="15">
                <b>病人基本資料(PAT)角色整理</b>
              </span>
            </strong>
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
              <td>PAT_CREATOR</td>
              <td>Patient Creator</td>
              <td>產生病患基本資料角色</td>
            </tr>
            <tr>
              <td>PAT_CREATOR_SC3</td>
              <td>Patient Creator SC3</td>
              <td>情境3產生病患基本資料角色</td>
            </tr>
            <tr>
              <td>PAT_CONSUMER</td>
              <td>Patient Consumer</td>
              <td>查詢/調閱病患基本資料角色</td>
            </tr>
            <tr>
              <td>PAT_CONSUMER_SC3</td>
              <td>Patient Consumer SC3</td>
              <td>情境3查詢/調閱病患基本資料角色</td>
            </tr>
            <tr>
              <td>PAT_REPOSITORY</td>
              <td>Patient Repository</td>
              <td>病患基本資料儲存庫</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={h3_style}>交易(Transactions)</p>
      <div>
        <ol class="part in-view" data-startline="423" data-endline="424" data-position="20973" data-size="0">
          <li class="" data-startline="423" data-endline="424" data-position="20976" data-size="0">
            <strong data-position="20976" data-size="0">
              <span data-position="20978" data-size="15">
                <b>病人基本資料(PAT)交易整理</b>
              </span>
            </strong>
          </li>
        </ol>
        <table class="table table-striped table-bordered" border="1">
          <thead>
            <tr>
              <th>
                <strong>編號</strong>
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
              <td>MITW-1</td>
              <td>Patient Create</td>
              <td>情境1/2 - 新增病患基本資料</td>
            </tr>
            <tr>
              <td>MITW-2</td>
              <td>Patient Q/R</td>
              <td>情境1/2 - 查詢與調閱新增病患基本資料</td>
            </tr>
            <tr>
              <td>MITW-21</td>
              <td>Patient Create SC3</td>
              <td>情境3 - 新增病患基本資料</td>
            </tr>
            <tr>
              <td>MITW-22</td>
              <td>Patient Q/R/U SC3</td>
              <td>情境3 - 查詢與調閱患基本資料</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={h3_style}>角色與交易關係圖</p>
      <div>
        <ol class="part in-view" data-startline="423" data-endline="424" data-position="20973" data-size="0">
          <li class="" data-startline="423" data-endline="424" data-position="20976" data-size="0">
            <strong data-position="20976" data-size="0">
              <span data-position="20978" data-size="15">
                <b>病人基本資料(PAT)之角色與交易關係圖</b>
              </span>
            </strong>
          </li>
        </ol>
        <img src={track1_4} width="50%" onClick={() => setLightboxOpen(true)} />
        {lightboxOpen && (
          <Lightbox
            imageLoadErrorMessage="無法載入圖片"
            imagePadding={window.innerWidth / 10}
            mainSrc={track1_4}
            onCloseRequest={() => setLightboxOpen(false)}
          />
        )}
        {/* <img src={track1_4} width="70%" /> */}
      </div>
    </div>
  )
}

const Track1_Author_content = () => {
  return (
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
          <td>召集人</td>
          <td>楊宇凡</td>
          <td>矽塔資訊服務有限公司</td>
          <td>專案管理、Profiling、聯測測試情境設計</td>
        </tr>
        <tr>
          <td>作者</td>
          <td>蕭嘉宏</td>
          <td>慈濟大學 - 醫學資訊學系</td>
          <td>Profiling、 系統分析與設計、聯測測試情境設計</td>
        </tr>
        <tr>
          <td>貢獻者</td>
          <td>施岳勳</td>
          <td>國立陽明交通大學 - 生物醫學工程學系</td>
          <td>聯測測試情境設計</td>
        </tr>
        <tr>
          <td>貢獻者</td>
          <td>湯士滄</td>
          <td>銘傳大學 - 生物醫學工程學系</td>
          <td>聯測測試情境設計</td>
        </tr>
      </tbody>
    </table>
  )
}

export {
  Track1_details_content,
  Track1_Benefits_content,
  Track1_Summary_content,
  Track1_SystemsAffected_content,
  Track1_Specification_content,
  Track1_Author_content,
}
