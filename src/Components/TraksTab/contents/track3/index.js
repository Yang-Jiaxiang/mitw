import trackImg from '../../../../assets/wg2_3.png'
import ReactPlayer from 'react-player/youtube'
import track3_1 from '../../../../assets/WG3_1.png'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

const Track3_Summary_content = () => {
  return (
    <div>
      <p>
        藥物處方(MedicationRequest)、用藥紀錄(MedicationAdministration)、服務請求(ServiceRequest，在院內情境中常為醫令/醫囑)與電子病歷文件打包(Document
        Bundle)為門、急、住診醫療照護資料流程的核心元素，幾乎在所有的醫療照護領域都是最常用的資源種類 (Resource
        Type)，本工作小組依據台灣國內醫院資訊系統(HIS)、全民健康保險(NHI)申報格式及衛生福利部電子病歷互通交換格式為基礎，設計符合台灣醫療照護應用情境資訊需求之用藥、醫令、電子病歷文件
        FHIR Resource
        應用規範與範例，提供產業應用交流與參考，以達到基本的跨系統互通性，並相容衛生福利部台灣核心實作指引(TW FHIR Core
        IG)規。本工作小組任務目標與範圍著重在 FHIR Resource 中請求類 Request Resource 為主。
      </p>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/Hdw43e1_lFQ" width="100%" />
      </div>
    </div>
  )
}

const Track3_Benefits_content = () => {
  return (
    <div>
      <p>
        本工作小組制定醫療照護流程中常用的用藥、醫令與電子病歷應用規範，提供給醫院資訊系統(HIS)、電子病歷系統(EMR)、醫院內外其他醫療照護系統、衛生行政系統、個人健康檔案(PHR)、病患入口(Patient
        Portal)、行動健康系統(Mobile
        Health)等系統實作參考與參與聯測驗證。讓開發者/開發單位無論是醫院、廠商、政府單位、非政府組織，均可將其實作之系統與不同單位之系統進行互通交流與驗證，以確保醫療資訊標準規範的落實。
      </p>
    </div>
  )
}

const Track3_details_content = () => {
  return (
    <div>
      <h3></h3>
      <p></p>
    </div>
  )
}

const Track3_SystemsAffected_content = () => {
  return (
    <div>
      <h3></h3>
      <p></p>
    </div>
  )
}

const Track3_Specification_content = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div>
      {' '}
      <h3>角色(Actors)</h3>
      <p>1.處方用藥與文件打包(MED&DOC)角色整理</p>
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
            <td>MEDRQ_CREATOR</td>
            <td>MedicationRequest Creator</td>
            <td>產生MedicationRequest角色</td>
          </tr>
          <tr>
            <td>MEDAM_CREATOR</td>
            <td>MedicationAdministration Creator</td>
            <td>產生MedicationAdministration角色</td>
          </tr>
          <tr>
            <td>DOCLAB_CREATOR</td>
            <td>Laboratory Report Document Bundle Creator</td>
            <td>產生Laboratory Report Document Bundle角色</td>
          </tr>
          <tr>
            <td>DOC_CREATOR</td>
            <td>DocumentBundle Creator</td>
            <td>產生 General Document Bundle角色</td>
          </tr>
          <tr>
            <td>MEDRQ_CONSUMER</td>
            <td>MedicationRequest Consumer</td>
            <td>查詢與調閱MedicationRequest角色</td>
          </tr>
          <tr>
            <td>MEDAM_CONSUMER</td>
            <td>MedicationAdministration Consumer</td>
            <td>查詢與調閱MedicationAdministration角色</td>
          </tr>
          <tr>
            <td>DOCLAB_CONSUMER</td>
            <td>Laboratory Report Document Bundle Consumer</td>
            <td>查詢與調閱 Laboratory Report Document Bundle角色</td>
          </tr>
          <tr>
            <td>DOC_CONSUMER</td>
            <td>DocumentBundle Consumer</td>
            <td>查詢與調閱 General Document Bundle角色</td>
          </tr>
          <tr>
            <td>MEDRQ_REPOSITORY</td>
            <td>MedicationRequest Repository</td>
            <td>MedicationRequest儲存庫</td>
          </tr>
          <tr>
            <td>MEDAM_REPOSITORY</td>
            <td>MedicationAdministration Repository</td>
            <td>MedicationAdministration儲存庫</td>
          </tr>
          <tr>
            <td>DOCLAB_REPOSITORY</td>
            <td>Test Result Document Bundle Repository</td>
            <td>Laboratory Report Document Bundle 儲存庫</td>
          </tr>
          <tr>
            <td>DOC_REPOSITORY</td>
            <td>DocumentBundle Repository</td>
            <td>General Document Bundle儲存庫</td>
          </tr>
        </tbody>
      </table>
      <h3>交易(Transactions)</h3>
      <p>1.處方用藥與文件打包(MED&DOC)交易整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
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
            <td>MITW-5</td>
            <td>Create MedicationRequest</td>
            <td>新增MedicationRequest</td>
          </tr>
          <tr>
            <td>MITW-7</td>
            <td>Create MedicationAdministration</td>
            <td>新增MedicationAdministration</td>
          </tr>
          <tr>
            <td>MITW-25</td>
            <td>Create Laboratory Report Document Bundle</td>
            <td>新增Laboratory Report Document Bundle</td>
          </tr>
          <tr>
            <td>MITW-23</td>
            <td>Create General Document Bundle</td>
            <td>新增Document Bundle</td>
          </tr>
          <tr>
            <td>MITW-6</td>
            <td>Qurey/Retrieve MedicationRequest</td>
            <td>查詢與調閱MedicationRequest</td>
          </tr>
          <tr>
            <td>MITW-8</td>
            <td>Qurey/Retrieve MedicationAdministration</td>
            <td>查詢與調閱MedicationAdministration</td>
          </tr>
          <tr>
            <td>MITW-26</td>
            <td>Query/Retrieve Laboratory Report Document Bundle</td>
            <td>查詢與調閱 Laboratory Report Document Bundle</td>
          </tr>
          <tr>
            <td>MITW-24</td>
            <td>Query/Retrieve General Document Bundle</td>
            <td>查詢與調閱General Document Bundle</td>
          </tr>
          <tr>
            <td>MITW-71</td>
            <td>Create Service Request</td>
            <td>服務請求新增</td>
          </tr>
          <tr>
            <td>MITW-72</td>
            <td>Query/Retrieve Service Request</td>
            <td>服務請求調閱</td>
          </tr>
        </tbody>
      </table>
      <h3>角色與交易關係圖</h3>
      <p>1.處方用藥與文件打包(MED&DOC)之角色與交易關係圖</p>
      <img src={track3_1} alt="trackImg" width="100%" onClick={() => setLightboxOpen(true)} />
      {lightboxOpen && <Lightbox mainSrc={track3_1} onCloseRequest={() => setLightboxOpen(false)} />}
    </div>
  )
}

const Track3_Author_content = () => {
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
            <td>召集人</td>
            <td>李祥豪</td>
            <td>台灣醫學資訊學會</td>
            <td>Profiling, 聯測測試情境設計</td>
          </tr>
          <tr>
            <td>作者</td>
            <td>吳宇婷</td>
            <td>仁寶電腦</td>
            <td>聯測測試情境設計</td>
          </tr>
          <tr>
            <td>作者</td>
            <td>楊宗翰</td>
            <td>國立陽明交通大學生物醫學資訊所</td>
            <td></td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>蕭嘉宏</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track3_Summary_content,
  Track3_Benefits_content,
  Track3_details_content,
  Track3_SystemsAffected_content,
  Track3_Specification_content,
  Track3_Author_content,
}
