import BlueLight from '../../assets/BlueLightLogo.png'
import Raccoon from '../../assets/RaccoonLogo.png'
import Burni from '../../assets/BurniLogo.png'
import RedPanda from '../../assets/RedPandaLogo.png'
import Power from '../../assets/2.SYSPOWER.png'
import EBM from '../../assets/EBM.jpeg'
import Advance from '../../assets/wiAdvance.jpg'
import Artwork from '../../assets/ItunesArtwork.jpg'
import Hospital1 from '../../assets/TzuChiHospital.png'
import DHP from '../../assets/DHP.png'
import CGM from '../../assets/CGM.png'
import Med from '../../assets/Medical.png'
import Adv from '../../assets/AdvMeds.png'
import How from '../../assets/HowiseAI.png'
import ACME from '../../assets/ACME.jpg'
import Kenkone from '../../assets/Kenkone.png'
import Vaccine from '../../assets/Vaccine.jpg'
import Vaccine2 from '../../assets/Vaccine2.gif'
import V5 from '../../assets/V5.png'
import DAXIN from '../../assets/DAXIN.png'
import Moooore from '../../assets/Moooore.png'
import Sitatech from '../../assets/Sitatech.png'
import Doctor from '../../assets/DocterWatch.png'
import iCare from '../../assets/iCare.png'
import Minicoon from '../../assets/Minicoon.png'
import Tsti from '../../assets/Tsti.png'
import ITRI from '../../assets/ITRI.png'
import CFHC from '../../assets/CFHC.png'
import Zhongshan from '../../assets/Zhongshan.png'

import G1 from '../../assets/ALOVAS.png'
import G2 from '../../assets/CIMS.gif'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import f1 from '../../assets/f1.jpeg'
import f2 from '../../assets/f2.jpeg'

import OpenSource from '../../Components/Successcase/OpenSource/OpenSource'
import Industry from '../../Components/Successcase/Industry/Industry'
import Hospital from '../../Components/Successcase/Hospital/Hospital'
import Government from '../../Components/Successcase/Government/Government'
import Crosssystem from '../../Components/Successcase/Crosssystem/Crosssystem'
import ImgDialog from '../../Components/Dialog/Dialog'
const ListTitle = [
  { id: '1', title: '開源專案' },
  { id: '2', title: '產業產品' },
  { id: '3', title: '醫院應用' },
  { id: '4', title: '政府專案' },
  { id: '5', title: '跨系統互通情境' },
]
const List = [
  { id: '1', title: '開源專案', cases: <OpenSource /> },
  { id: '2', title: '產業產品', cases: <Industry /> },
  { id: '3', title: '醫院應用', cases: <Hospital /> },
  { id: '4', title: '政府專案', cases: <Government /> },
  { id: '5', title: '跨系統互通情境', cases: <Crosssystem /> },
]

const OpenSourceInform = [
  {
    img: BlueLight,
    linkName: '專案程式碼',
    link: 'https://github.com/cylab-tw/bluelight',
    name: '藍光(BlueLight) - Web-based DICOM Viewer',
    tracks: 'TRACK#4 - DICOMWeb查詢與調閱 TRACK#5 - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱 TRACK#7 - 影像檢查流程',
    jointracks: [
      { trackstitle: 'TRACK#4', tracksname: '  DICOMWeb查詢與調閱' },
      {
        trackstitle: 'TRACK#5',
        tracksname: '  DICOM數位全幅病理顯微鏡影像查詢與調閱',
      },
      { trackstitle: 'TRACK#7', tracksname: '  影像檢查流程' },
    ],
    introduce:
      'A browser-based medical image viewer,a pure single-page application (SPA), lightweight, and using only JavaScript and HTML5 technologies so as to deploy it on any HTTP server easily (just put it in HTTP server). It supports not only opening local data, but also connecting to medical image archives which support DICOMweb. It provides tools for medical image interpretation and 3D image reconstruction, e.g., Multiplanar Rreformation or Reconstruction (MPR) and Volume Rendering (VR).',
  },
  {
    img: Raccoon,
    linkName: '專案程式碼',
    link: 'https://github.com/cylab-tw/raccoon',
    name: '浣熊(Raccoon) - NoSQL醫學影像資料庫',
    tracks: '  TRACK#4 - DICOMWeb查詢與調閱 TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 TRACK#7 - 影像檢查流程',
    jointracks: [
      { trackstitle: 'TRACK#4', tracksname: '  DICOMWeb查詢與調閱' },
      {
        trackstitle: 'TRACK#5',
        tracksname: '  DICOM數位全幅病理顯微鏡影像查詢與調閱',
      },
      { trackstitle: 'TRACK#7', tracksname: '  影像檢查流程' },
    ],
    introduce:
      'Raccoon is a noSQL-based medical image archive for managing the DICOM images. It uses the MongoDB to manage the DICOM images and provide RESTful API, supported both FHIR ImagingStudy and DICOMWeb to store, query/retrieve, and manage DICOM images. Raccoon is bulit on the top of the Burni FHIR Server to manage the FHIR resourcs related to medical images.',
  },
  {
    img: Burni,
    linkName: '專案程式碼',
    link: 'https://github.com/Chinlinlee/Burni',
    name: '布魯尼(Burni) - NoSQL FHIR Server',
    tracks:
      '  \n  TRACK#1 - 病人基本資料互通TRACK#2 - 生理量測數據互通 TRACK#3 - 用藥及疫苗接種紀錄 TRACK#6 - 基因定序標記',
    jointracks: [
      { trackstitle: 'TRACK#1', tracksname: '  病人基本資料互通' },
      { trackstitle: 'TRACK#2', tracksname: '  生理量測數據互通' },
      { trackstitle: 'TRACK#3', tracksname: '  用藥及疫苗接種紀錄' },
      { trackstitle: 'TRACK#6', tracksname: '  基因定序標記' },
    ],
    introduce:
      'Burni is an implementation of the FHIR server with Node, Express, and MongoDB providing very simple ways to customize the HL7 FHIR® specification, Burni support both Windows and Linux environment to enable developers to rapidly deploy a FHIR service. Burni also supports to import your Implementation Guide to store FHIR Resources and create FHIR RESTful API as well.',
  },
  {
    img: RedPanda,
    linkName: '專案程式碼',
    link: 'https://github.com/cylab-tw/FHIR-Pandas',
    name: 'FHIR Pandas - an FHIR client to access an FHIR server',
    tracks: '  TRACK#1 - 病人基本資料互通',
    jointracks: [{ trackstitle: 'TRACK#1', tracksname: '  病人基本資料互通' }],
    introduce:
      'FHIR Pandas is coded by various programming languages, including Vue.js, Angular.js, and Vanilla.js, to implement the FHIR client. FHIR Pandas provide source code for FHIR developers to develop their FHIR client application. Currently, we have three pandas: \n Green Panda developed by Vue.js \n Red Panda developed by angularjs \n Vanilla Panda developed by Vanilla.js \n FHIR Pandas提供基於臺灣核心實作指引規格之FHIR Client(Consumer)範例程式',
  },
]

const trackList = {
  t1: {
    title: 'TRACK#1',
    name: '病人基本資料互通',
  },
  t2: {
    title: 'TRACK#2',
    name: '生理量測數據互通',
  },
  t3: {
    title: 'TRACK#3',
    name: '用藥及疫苗接種紀錄',
  },
  t4: {
    title: 'TRACK#4',
    name: ' DICOMWeb查詢與調閱',
  },
  t5: {
    title: 'TRACK#5',
    name: 'DICOM數位全幅病理顯微鏡影像查詢與調閱',
  },
  t7: {
    title: 'TRACK#7',
    name: '影像檢查流程',
  },
  t8: {
    title: 'TRACK#8',
    name: '醫療保險理賠',
  },
  t9: {
    title: 'TRACK#9',
    name: '遠距醫療',
  },
}

const trackList2023 = {
  t1: {
    title: 'TRACK#1',
    name: '病人基本資料',
  },
  t2: {
    title: 'TRACK#2',
    name: '生理量測數據',
  },
  t3: {
    title: 'TRACK#3',
    name: '用藥、文件打包及服務請求',
  },
  t4: {
    title: 'TRACK#4',
    name: '醫學影像與病理',
  },
  t5: {
    title: 'TRACK#5',
    name: '照護協調',
  },
  t7: {
    title: 'TRACK#7',
    name: '緊急醫療救護',
  },
  t8: {
    title: 'TRACK#8',
    name: '醫療保險理賠',
  },
  t9: {
    title: 'TRACK#9',
    name: '遠距醫療',
  },
}

const IndustryInform = [
  {
    img: CFHC,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/雲端電子病歷iFHIR平台.pdf',
      },
    ],

    name: (
      <div>
        <h3>國泰金融控股公司</h3> <h4>雲端電子病歷iFHIR平台</h4>
      </div>
    ),
    tracks: [trackList2023.t1, trackList2023.t5, trackList2023.t8],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce: `
    iFHIR以接軌國際醫療資料交換標準FHIR為基礎，並採用雲端架構推出新一代的電子病歷系統，來解決壽險與醫院間理賠資料格式不統一的痛點。

    產品特色：
    1. 不影響核心系統：獨立於核心系統之外，不須修改核心系統 ( 像是HIS )，可直接提供API對接。
    2. 彈性轉換引擎：平台提供維護人員，依據轉換資料樣式建立樣板，設定後，就可以做轉換，不需要攥寫大量程式
    3. 易於收集、交換資料：有各式接口可接收不同格式資料，且系統採用微服務架構，提供各式的服務，可以更容易進行資料交換
    4. 產品疊加功能：功能模組，能給予更多服務，讓用戶依場景，選擇適用的模組，利於協助推進不同業務市場前進為目的
    
    iFHIR可應用在多種金融場景(保險、銀行等)，不僅在2022年聯測松通過TRACK#1 病人基本資料互通、TRACK#3 處方用藥及文件打包、TRACK#4 影像、結構化影像報告、AI標記與影像檢查流程，亦在2023年聯測松中通過TRACK#8-醫療保險理賠項目。
    
`,
  },
  {
    img: Tsti,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/大世科遠距門診系統簡介.pdf',
      },
    ],

    name: (
      <div>
        <h3>大同世界科技股份有限公司 </h3> <h4>遠距門診系統</h4>
      </div>
    ),
    tracks: [trackList2023.t1, trackList2023.t9],
    trackstitle: 'TRACK#1\n   TRACK#9',
    tracksname: '  病人基本資料\n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce: `大世科遠距門診系統提供符合實體看診流程的純軟體遠距醫療解決方案，從掛號、看診到繳費領藥，可透過 API 與醫院系統整合或採用獨立系統，讓醫師就如同在實體診間看診一般，患者也無須前往醫院便能輕鬆看診/諮詢。
    遠距門診系統整合虛擬健保卡，醫師可透過「一鍵整合」即可獲得民眾授權取得QRcode以調閱雲端病歷，並整合數位同意書以利線上同意書簽署；看診過程中透過國際臨床資訊標準FHIR進行醫療資訊交換，使醫療資訊透明；繳費與領藥方面，系統整合醫院常用的線上支付方式，未來將整合衛福部制定之電子處方箋，民眾即可透過電子處方箋就近藥局領藥，無須至醫院窗口繳費領藥。
    此外，遠距門診系統提供眾多功能，如螢幕截圖、鏡頭縮放、螢幕分享、檔案上傳、文字聊天室等，看診過程全程錄影留存；資安方面，系統符合 WHO-ITU 國際遠距安全規範，包含採用DTLS 資料封包傳輸層安全協定、SRTP 安全即時傳輸協定傳輸以及使用標準加密演算法，提升視訊診療與個資安全性。
    疫情催生之下，隨著資訊技術逐步成熟、政策與法規鬆綁、醫療人員與民眾接受度提升，大世科運用遠距門診系統打破醫院實體圍牆，有效降低醫療成本、突破距離限制並提升醫療品質成效，鞏固健康平等。
    `,
  },
  {
    img: ITRI,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/醫咖go特色及介紹最終版.pdf',
      },
    ],

    name: (
      <div>
        <h3>工業技術研究院 </h3> <h4>iMAS智慧醫療資訊平台, Intelligent Medical Assistant Solution </h4>
      </div>
    ),
    tracks: [trackList2023.t1, trackList2023.t2, trackList2023.t4, trackList2023.t9],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce: `
    iMAS智慧醫療資訊平台主要應用於偏鄉醫療、巡迴醫療及機構篩檢等服務情境，整合超過10項輕量化醫材 (包含傷口機、眼底鏡、五官鏡、耳鏡、肺量計、心電圖與超音波等)，提供完善的個案管理機制，包含行政作業、醫材檢測、個案管理、協作溝通、紀錄申報與醫資介接(FHIR/DICOM)等功能，皆可於此系統一次完成，提升醫護人員操作便利性、節省檢測與紀錄時間、強化醫護雙向溝通及縮短申報流程，藉以有效改善整體照護品質。
主要特點如下：
•	提升醫事人員執行任務的便利性與機動性，讓醫事服務走出醫院、走入偏鄉社區
•	以病人為中心，確實了解個案照護進度，並客觀記錄歷程，適時調整治療計畫
•	行動各科別檢查資訊系統可協助身分識別、檢測數據讀取至病歷資料歸檔管理全自動完成
•	使用影像智能閘道器，可有效整合多種可攜式檢測裝置，並與身分識別資料融合
•	內建區域無線網路，資料上傳不卡線/不受外部環境影響
• 提供多科別檢測報告輸出，協助醫事人員執行後續申報流程與FHIR醫資對接，提升作業效率
`,
  },

  {
    img: Power,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/2.奇唯科技股份有限公司_個案導向醫療資源計畫整合平台(POMRP)+康小美.pdf',
      },
    ],

    name: (
      <div>
        <h3>奇唯科技股份有限公司</h3> <h4>個案導向醫療資源計畫整合平台(POMRP)+康小美</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '個案導向醫療資源計畫整合平台(POMRP) 經由不同的場域及應用情境，從醫院到社區到居家到機構。\n 串聯了醫療紀錄及健康照護及生理量測數據，是一個跨界且完整的連續性的健康數據的管理整合平台，我們將面臨高臨化的社會結構，透過數位科技的整合，引領所有的你我他。\n進入健康促進、預防衰老、預測疾病進程等的在宅精準照護的安居生活。\n',
  },
  {
    img: EBM,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/8.商之器科技股份有限公司_UDE 行動醫療影像伺服器 App.pdf',
      },
    ],

    name: (
      <div>
        <h3>商之器科技股份有限公司</h3> <h4>UDE / 行動醫療影像伺服器 App</h4>
      </div>
    ),
    tracks: [trackList.t4, trackList.t5, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      'UDE是EBM既有產品的轉型升級，將PACS的應用環境延伸到iPad Pro，整合為一個獨立的伺服器及顯示設備。\n 醫護人員在病患做完檢查後，將影像由儀器端傳至iPad Pro儲存與管理，可進行離線影像調閱瀏覽，也可做獨立工作站和報告系統整合等延伸應用。\n UDE更可利用在本機的CoreML影像AI及雲端AI模組，將運算結果同步顯示在屏幕上，讓影像上呈現標註，輔助醫生判讀肉眼難以辨識的微小病灶。\n 未來也將導入更多影像AI模組，持續提升輔助醫師診斷效率及流程。\n',
  },
  {
    img: Advance,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/12.緯謙科技_FHIR 資料交換平台.pdf',
      },
    ],
    name: (
      <div>
        <h3>緯謙科技</h3> <h4>FHIR 資料交換平台</h4>
      </div>
    ),
    tracks: [trackList.t1],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '緯謙科技提供FHIR Convertner資料轉換平台，並整合公有雲架構，建構彈性使用的混和雲架構，便於使用者快速將不同資料格式轉換為FHIR標準格式，對於儀器商、臨床生理數據整合商，醫院HIS、健保申報、院內院外數據交換等應用，有需要轉換成FHIR格式者提供轉換服務，並可依需求設計成公有雲、私有雲、純地端等不同技術架構，滿足使用者彈性需求。\n',
  },
  {
    img: Artwork,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/14.遠傳電信股份有限公司_遠傳Health+遠距診療.pdf',
      },
    ],

    name: (
      <div>
        <h3>遠傳電信股份有限公司</h3> <h4>遠傳 Health+遠距診療</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '遠傳電信以5G服務為基礎，再結合了IoT、雲端服務，面對人口逐漸老化的台灣社會，於2020就推出了 Health+遠距診療服務。\n 服務採用SaaS服務架構，具有佈署快且於易維護的特性，可同時支援跨服務機構之單一平台。\n 過去我們強調不需整合即可簡單使用，但本公司的整合能力亦是我們的強項，因此本次參加 MITW 主辦的 FHIR 聯測就是為了驗證我們跨醫院進行整合之能力。\n 遠傳電信 Health+遠距診療服務已經在台東縣11鄉鎮上線服務，上線幾個月內，服務超過2,000人次，民眾滿意度>90%；2020年起再與國衛院合作，透過5G連結IOT等科技，利用遠距醫療模式，打造糖尿病連續式醫療照護，改善醫療可近性問題。\n 未來遠傳將會持續努力，提供台灣更易用的服務平台。\n',
  },
  {
    img: DHP,
    linkName: [
      {
        lname: '產品介紹',
        l:
          process.env.PUBLIC_URL +
          '/pdf/15.睿傳數據股份有限公司_健康小蜜蜂數位健康平台, HealthBee Digital Health Platform(DHP).pdf',
      },
    ],

    name: (
      <div>
        <h3>睿傳數據股份有限公司</h3> <h4>健康小蜜蜂數位健康平台, HealthBee Digital Health Platform(DHP)</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t4, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '「健康小蜜蜂數位健康平台/HealthBee DHP」是補充醫療健康難及之處，提供健康管理機構及企業職場，聯合照護客戶與員工的生態環境，平台提供：\n1.健檢機構1+364天的健康管理照護：平台提供全面數位化的客戶服務，節省每年龐大的郵寄、光碟等無意義浪費，升級客戶體驗全年貼身數位分身服務；健管師任務自動派工及快速便利的記錄方式，完整不漏接的服務客戶，並直接與服務的企業數位對接，全面自動化提高服務水平；實時匯集客戶提供的多元數據，透過演算實現精準健康管理服務、推薦客戶最佳保健措施，成為客戶心中之AI健康管理師，徹底領先同業、獲致本平台提供最高性價比的服務。\n    2.充分適應各式小/中/大型企業之職醫護需求：平台持續跟進職安相關法規變動調整，平台內建自動化數位流程，汲取員工資料同時，即自動進行健康風險分級與納入個案管理機制，讓職醫護即時順利地掌握高風險員工，透過多種管道關懷員工、提升員工健康意識；並配合企業需要，提供各式健康活動所需工具，大大的滿足企業提高照護員工健康成效、降低維護成本，使促進職場健康支持企業永續經營，成就幸福企業。\n    3.HealthBee DHP提供強大的整合運算能力，經由各式標準傳輸協定(如：FHIR)彙整健檢報告、問卷、就醫紀錄/健康存摺及IoT生活量測等數據，依據經實證醫學確認的演算邏輯，提供個人器官系統之關鍵評估報告，適切提出各項建議包括飲食、生活習慣、運動等，專業健康照護者可依個人或群組將適切之健康衛教與提醒服務，透過App推播到客戶/員工手中，亦可經由個人授權，將連續性日常活動數據及健康存摺，供專業健康照護者進行參閱及服務建議。\n',
  },
  {
    img: CGM,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/16.長庚醫學科技股份有限公司_U-Dr遠距醫療產品.pdf',
      },
    ],

    name: (
      <div>
        <h3>長庚醫學科技股份有限公司</h3> <h4>U-Dr遠距醫療產品</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '長庚醫科U-Dr遠距醫療產品特色：\n1. 提供一般門診可支援多點連線遠距會診服務應用。\n2. 多元醫儀IoT設備介接服務。\n3. 即時雙通道影音傳輸進行視訊診察應用，醫病親臨互動。\n4. 整合介接各家HIS醫囑系統與遠距會診服務。\n\n醫療服務面特色優勢：\n1. 對民眾端的服務，提供不定點多科別的診療服務，改善偏鄉醫療服務專科別種類及時間的限制，提供醫院對專科醫師服務安排的彈性，醫師看診中即可進行會診，提升醫療服務可近性。\n    2. 對醫師端的服務，提供遠端完整的診療資訊，整合病人視訊影像聲音、五官檢查影像、會診觀察結果，以及歷次重大醫療紀錄等，提升醫療資訊完整性。\n    3. 病歷可彙整於同一醫療資訊系統，不須重複輸入，一次輸入雙方使用，滿足醫療法要求。\n',
  },
  {
    img: Med,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/7.醫合股份有限公司_An architecture and management platform.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/7.醫合產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>醫合股份有限公司</h3>{' '}
        <h4>An architecture and management platform for blockchain-based FHIR personal health record exchange</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '本產品藉由全面性的個人健康數據分析，設計個人化健康管理策略，提供使用者參考，達到精準醫療的目的。\n HYGEA整合多重資訊科技技術輔助健康管理與跨國資料交換，以健康管理、用藥分析、健康趨勢監測以及疾病預測，達到精準身體指標分析。\n本產品建構一個具有高度互操作性的平台，輔助使用者進行自我健康管理，提升自我健康照護的責任與義務。\n提供個人健康紀錄跨國交換與管理，以區塊鏈架構保護資料安全，資料符合FHIR標準，提升資料可用性。\n使用者遵從自我意願完成健康紀錄跨國交換。\n',
  },

  {
    img: Adv,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/4.先進醫資股份有限公司_享健康防疫大師.pdf',
      },
    ],

    name: (
      <div>
        <h3>先進醫資股份有限公司 </h3> <h4>享健康防疫大師</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '「享健康防疫大師」，量測、追縱、管理、實聯、TOCC、疫苗護照一次滿足。\n 打破一成不變體溫量測，整合各種通訊方式如Wi-Fi、4G/LTE等以符合場域通訊需求，以零接觸經濟為主的防疫物聯網架構，可裝設於企業職場、醫療機構、校園機構等場所，使用者於可觸控互動式電腦或平板開啟自動體溫量測App，並使用自動測溫儀器量測，可將量測記錄上傳雲端。\n透過健保卡、感應員工卡快速識別量測者，並可設定快速量測造冊模式、前台問卷模式等，協助機構把關每位進出者的健康狀況。\n 此外，針對醫療院所環境開發出TOCC自動查詢模組，只要插入健保卡，系統就會自動連結個人旅遊史，若有異常，系統會發出警示語音及圖像。\n 低成本快速佈建，價格只有市面傳統熱像儀的十分之一且彈性符合各種場域精準度傳感器不受週邊熱源影響，檢測具有±0.2°C的量測誤差，只要0.5秒就能立即完成測量，讓機構輕鬆防疫沒煩惱。\n 未來可配合整體推動一日通行證及結合疫苗護照等服務。\n',
  },
  {
    img: How,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/5.昊慧股份有限公司_AI Clerk Platform.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/4.昊慧產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>昊慧股份有限公司 </h3>{' '}
        <h4>
          AI Clerk PlatfoAn architecture and management platform for blockchain-based FHIR personal health record
          exchange
        </h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '協助醫療院所與保險公司從各種非結構化的各式診斷證明書、病歷、檢查報告，自動辨識與擷取重要資訊，變成容易分析和統計，並提供衍生之各式應用服務。\n協助醫療機構產生更多研究成果、減少誤診與促進營運效益。\n 協助保險公司以一條龍方式進行AI保險理賠和核保，除了可大幅減少營運成本，並獲得更多素材精算保費。\n   可支援以API、各式圖檔、PDF、JSON和TXT輸入和輸出，並獲得2021年國家新創獎-企業新創獎肯定。\n',
  },

  {
    img: ACME,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/6.慶旺科技股份有限公司_AI Clerk Platform.pdf',
      },
    ],

    name: (
      <div>
        <h3>慶旺科技股份有限公司</h3> <h4>QED2000</h4>
      </div>
    ),
    tracks: [trackList.t2, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      'QED2000 能快速準確完成12導程心電圖量測。\n 它具有先進的設計和人體工程學,使醫護人員能夠快速方便地控制設備。\n其特點如下:\n●15.6吋大尺寸全高清觸控式顯示螢幕\n●即時提供準確心電圖採集數據\n    ●提供心電圖異常診斷達200種 \n   ●簡單直觀的使用者輸入操作介面\n    ●自動將ECG數據傳輸到電子病歷\n    ●支援外部儲存設備擴充\n    ●支援USB介面印表機\n    ●支援 DICOM 上傳\n    ●設計材質通過抗菌測試',
  },

  {
    img: Kenkone,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/7.康統醫學科技_Bless健康護照.pdf',
      },
    ],

    name: (
      <div>
        <h3>康統醫學科技</h3> <h4>Bless健康護照</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '「Bless健康護照」為康統醫學科技2021年新產品，符合衛福部、歐盟、美日等各國規範的驗證機制，可輔導單位發出合格的數位證明，完成接種與篩檢記錄FHIR格式轉換，並核實疫苗護照的內容與真偽。\n',
  },
  {
    img: Kenkone,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/3.康統醫學科技股份有限公司_EVAS內視鏡智能助理系統.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/3.康統產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>康統醫學科技 </h3> <h4>EVAS內視鏡智能助理系統</h4>
      </div>
    ),
    tracks: [trackList.t1],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '醫師於內視鏡檢查過程之起始、結束及關鍵點，藉由口述方式回傳指令，讓AI系統自動判讀，並產生完整檢查報告，節省醫護人員謄打報告時間，並提升病歷書寫品質；檢查影像另累積成醫療大數據，進行疾病輔助診斷AI模型應用之「聯邦學習」開發。\n',
  },

  {
    img: Vaccine,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/9.財團法人資訊工業策進會_Vaccine QRCode Passport.pdf',
      },
    ],

    name: (
      <div>
        <h3>財團法人資訊工業策進會 </h3> <h4>Vaccine QRCode Passport</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '使用者使用此服務可以透過TWID認證方式來上傳自己的COVID-19疫苗注射紀錄（小黃卡），以及輸入身份證字號來查詢對外合作間接的FHIR Server系統找到COVID-19疫苗注射紀錄資料，透過找到的疫苗紀錄來確認使用者注射的資訊之外，還可以讓使用者產生對應的疫苗資訊QRCode，讓使用者可以到店家消費的時候可以出示，當店家讀取QRCode之後，知道使用者目前的疫苗注射紀錄，進而可以讓店家確保與管控使用者的進出，產生QRCode的疫苗護照方式，全程採用不重複與有時效性的權杖（Token）對應的方式進行，QRCode的內容中不會存有使用者敏感資訊。\n 此外，產生的QRCode也會有3分鐘使用的期限，當期限到了，則使用者需要再次產生QRCode。\n',
  },

  {
    img: Vaccine2,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/10.財團法人資訊工業策進會_生醫資料商用智慧化工具.pdf',
      },
    ],

    name: (
      <div>
        <h3> 財團法人資訊工業策進會</h3> <h4>生醫資料商用智慧化工具</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '面對各種異質場域產生的醫療健康數據，以及越來越多的智慧裝置產生巨量且多樣的IoT資料，跨域資料數據的授權取得及複合應用，以滿足精準健康的發展與帶動醫療照護產業轉型需求應運而生。\n 為達成生醫資料商化應用之未來目標，資策會研發生醫資料智慧商評及對應的智慧應用工具，同時開發生醫資料商化所需之管理系統，在符合現行法規運作、不重複蒐集資料與平台不儲存資料的前提下，透過平台媒合產業中不同特性或角色的單位(如醫院、藥局、穿戴裝置等等)，期望共同合作探索可能的資料需求與應用模式。\n 提供數據資料供需雙方使用之「生醫資料商用智慧化工具」，具有數據標準化、數據輪廓分析、匿名合規授權驗證與資料安全傳輸等功能，串聯交易媒合機制，期望達成醫療健康數據跨域串聯與價值創造。\n',
  },

  {
    img: V5,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/13.倍利科技股份有限公司_“倍利”肺部影像輔助判讀軟體.pdf',
      },
    ],

    name: (
      <div>
        <h3>倍利科技股份有限公司</h3> <h4>倍利肺部影像輔助判讀軟體</h4>
      </div>
    ),
    tracks: [trackList.t4, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '本產品可在醫師進行常規檢查時，輔助識別與標記雙肺 CT 系列影像的結節，於醫師進行常規閱讀雙肺 CT 系列影像時，顯現標記結果。\n當本產品接收到來自醫院 PACS 系統的 CT 系列影像時，先檢查影像品質符合需求，並確認所需欄位後，進行辨識並標記疑似結節。\n完成標記後，透過符合 DICOM 標準協議寫回資訊；使用者透過操作DICOM Viewer，對偵測結果影像進行閱片，並顯示疑似結節標記結果。\n',
  },
  {
    img: DAXIN,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/1.大心生物科技股份有限公司_大心高智能成人尿布.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/1.大心產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>大心生物科技股份有限公司 </h3> <h4>大心高智能成人尿布</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '大心高智能成人尿布為透過穿戴式的醫療級矽膠褲內置感應器，可偵測臥床患者大小便並全自動的清洗、烘乾，全程無須人力介入，可以即時將排泄行為做數據化紀錄，並透過系統數據建模，可以提供醫療、長照領域中進行相關疾病數據之前期警示，以智慧應用提升照護品質及透過預防醫學降低後續醫療成本支出。\n個案導向醫療資源計畫整合平台(POMRP) 經由不同的場域及應用情境，從醫院到社區到居家到機構。\n',
  },

  {
    img: Moooore,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/5.摩爾資通有限公司_安心摩爾.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/5.摩爾產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>摩爾資通有限公司</h3> <h4>安心摩爾 </h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '救護車到院前通報系統(心電圖)。\n具雙向確認功能可通過語音播報告知現場救護人員心電圖影像傳輸結果。\n通過LTE行動網路縮短影像傳輸時間，並確保影像的正確性和匿名性。\n 通知模組可將影像標記後送至指定的SMS、Email 或Line等社群軟體通訊群組。\n 後台系統提供管理介面及可視化圖表可以追蹤所有裝置和影像等紀錄，亦可將影像再次傳輸到指定資料庫或伺服器存放。\n',
  },

  {
    img: Sitatech,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/6.矽塔資訊服務有限公司_矽塔 FHIR 智慧醫療數據服務中台.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/6.矽塔產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>矽塔資訊服務有限公司 </h3> <h4>U矽塔 FHIR 智慧醫療數據服務中台</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t7],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      'FHIR 智慧醫療數據服務中台為矽塔團隊自主研發，提供無須進行程式撰寫即可將任意醫療資料標準化為 FHIR 格式的轉換引擎，協助客戶在跨系統間以標準化格式安全、無痛互通醫療資料與影像／媒體資料，解決系統異質性造成的醫療資訊傳遞品質與效率問題，與傳統 API 介接相比可提升達 20 倍效率。\n',
  },

  {
    img: Doctor,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/8.霍恩實業有限公司_DocterWatch.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/8.霍恩產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>霍恩實業有限公司</h3> <h4>DocterWatch</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '1. DocterWatch搭配專屬APP可以使用雲端分析飲食前後的血糖趨勢變化，作為運動飲食/結石/減重等健康飲食管理，目前不提供血糖監測管理，免採血無創血糖演算法已計畫申請臨床試驗準備做精準標準化，未來要申請醫療器材提供糖友免採血無痛無恐懼真正的無創血糖紀錄，雲端分析也包含了心臟健康指數/血管彈性作為日常的健康紀錄。\n    2. 所提供的心律監測為連續監測(每秒上傳伺服器)即時監測心律變化，搭配跌倒監測及求救功能，當伺服器收到異常發報，則會發送異常通知給相關人。\n        3. 搭配連續心律監測、疲勞度、壓力指數、睡眠分析(REM)可以更清楚自己的全天健康狀態，作為更完整的健康紀錄。\n',
  },
  {
    img: iCare,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/9.律泰科技有限公司_iCare 個人健康管理照護平台.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/9.律泰產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>律泰科技有限公司 </h3> <h4>iCare 個人健康管理照護平台</h4>
      </div>
    ),
    tracks: [trackList.t1],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '近年來因應居家照護的蓬勃發展，本公司開發iCare個人健康管理照護平台，讓使用者可以透過LINE APP，即時回報個人的健康狀況，並協助醫護人員追蹤居家健康，適時提供衛教資訊或相關照護內容！ 該系統導入FHIR標準，可以快速整合不同醫療數據，進而提供更全面的個人化精準照護服務！',
  },
  {
    img: Minicoon,
    linkName: [
      {
        lname: '產品介紹',
        l: process.env.PUBLIC_URL + '/pdf/產品介紹/10.玳康科技有限公司_Minicoon 數位病理影像與報告儲存與管理系統.pdf',
      },
      {
        lname: '產品海報',
        l: process.env.PUBLIC_URL + '/pdf/產品海報/10.玳康產品海報.pdf',
      },
    ],

    name: (
      <div>
        <h3>玳康科技有限公司 </h3> <h4>Minicoon 數位病理影像與報告儲存與管理系統 </h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t4, trackList.t5],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '1. DICOM技術整合服務: 提供產生各種標準DICOM物件，例如: 超音波、心電圖、五官鏡、二次截像、儀器工作清單、DICOM顯示、儲存與傳輸。\nDICOM去識別化等服務，可針對高度客製化，滿足使用者需求。\n     2. HL7 FHIR技術整合服務: 提供臨床資料轉換FHIR格式服務，包含CDA、臨床資料庫等。\n可針對客戶設計FHIR Profile, Implementation Guide,驗證等提供顧問與技術支援。\n          3. 產品: (1) minicoon: DICOM影像儲存與管理 (一般影像以及數位病理影像) (2) NHI Uploader: 診所醫療影像上傳健保署。\n     ',
  },
]

const HospitalInform = [
  {
    img: (
      <img
        src={Zhongshan}
        className="HosImg"
        style={{
          objectFit: 'cover',
          marginBottom: '1rem',
          width: '60%',
        }}
      />
    ),
    linkname: '產品介紹',
    link: process.env.PUBLIC_URL + '/pdf/中山附醫產品介紹.pdf',
    name: (
      <div>
        <h3>中山醫學大學附設醫院</h3> <h4>FHIR資料交換平台</h4>
      </div>
    ),
    tracks: [trackList2023.t1, trackList2023.t8, trackList2023.t9],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce: `
    中山醫學大學創辦人 周汝川博士本著仁心濟世的胸懷及提供醫科學生實習教學場地，1966年創辦本院成為醫學院的附屬醫院，以「醫學目的在救人，醫人醫病要醫心，愛護病人如親人，不怕勞苦好醫師」的理念勉勵校院師生及醫療同仁。創院以來，秉持創辦人『醫人、醫病、醫心』的宗旨，致力發展具有特色的全人關懷服務，最新的醫療設備，建構以病人為中心的智慧醫療大樓。在全體同仁努力下，成為醫療科別發展各具特色的醫學中心。在以病人為中心的基礎上，開發了FHIR病歷資料交換平台，提供醫院HIS系統、遠距醫療、人壽保險等需求做病歷資料FHIR格式轉換，持續安全快速的提供患者病歷FHIR格式的資料。`,
  },
  {
    img: (
      <img
        src={Hospital1}
        className="HosImg"
        style={{
          objectFit: 'cover',
          marginBottom: '1rem',
        }}
      />
    ),
    linkname: '產品介紹',
    link: process.env.PUBLIC_URL + '/pdf/11.佛教慈濟醫療財團法人花蓮慈濟醫院_健康福祉科技整合照護示範場域推動計畫.pdf',
    name: (
      <div>
        <h3>佛教慈濟醫療財團法人花蓮慈濟醫院</h3> <h4>健康福祉科技整合照護示範場域推動計畫</h4>
      </div>
    ),
    tracks: [trackList.t1, trackList.t2, trackList.t3],
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '本計畫以花蓮縣秀林鄉、吉安鄉、鳳林鎮、光復、萬榮、卓溪鄉及台東縣海端鄉、池上鄉、延平鄉為健康福祉科技整合照護之示範推動地區，透過對示範場域健康及醫療照護現況與需求進行全面調查與分析，以衛生所醫療資訊系統為基礎，整合慈濟醫院醫療資訊系統的門急診、手術住院、慢性病及藥物資訊，盤整示範場域目前之系統使用狀態，並以家庭歸戶進行跨系統介接，建置家庭健康戶口名簿，開發「健康福祉科技整合照護平台」。\n 平台包括以鄉鎮為範圍的：\n1.家戶歸戶作業\n2.預防保健(四癌篩檢、X光、預防注射)名冊匯入及查詢列印\n3.慢性病(糖尿病、高血壓、高血脂、肝病、胃病、COPD)的資料匯入及個案管理\n4.長照據點(社區關懷據點及部落文化健康站)個案管理及生理量測系統\n5.居家端個案收案及設備綁定管理\n6.健康福祉FHIR跨區域互通系統\n7.健康福祉視覺化地理資訊系統\n8.健康福祉Line Bot主動推播及整合查詢系統。\n 另透過 FHIR Gateway介接：\n1.健康福祉科技整合照護平台\n2.各家雲端生理量測平台\n 3.醫院及衛生所HIS\n4.縣政府社會處早療及獨居長者個案管理系統\n5.醫院罕病兒童個案管理系統\n6.急性後期及長照轉介。\n計畫應用遠距資通訊科技發展適合偏鄉的遠距照護及醫療服務模式。\n',
  },
]

const GovernmentInform = [
  {
    img: G1,
    linkname: '產品介紹',
    link: process.env.PUBLIC_URL + '/pdf/1.國立成功大學 - 智慧型媒體與生活實驗室_ALOVAS 數位病理切片影像分析系統.pdf',
    name: (
      <div>
        <h3>國立成功大學 - 智慧型媒體與生活實驗室</h3> <h4>ALOVAS 數位病理切片影像分析系統</h4>
      </div>
    ),
    tracks:
      '   \n  TRACK#1 - 病人基本資料互通TRACK#4 - DICOMWeb查詢與調閱 TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱',
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '以前病理醫師在做病理診斷的時候，常常需要找一些很小的病灶，以及對疾病嚴重度做分級。\n 此程序常常需要耗費許多的眼力、腦力、以及時間。\n ALOVAS 數位病理切片影像分析系統利用影像處理的方式與AI人工智慧深度學習與分析，可以幫助病理醫師尋找一些小的病灶，避免遺漏和節省時間。\n 另外對於疾病的嚴重度，也可以幫助病理醫師做一些客觀且準確的分級，以期達到精準醫療。\n \n 本系統為跨平台的系統，醫師可以利用平板或是電腦，將病理影像資料傳送到本系統，目標如下： \n 1. 病理影像分析 \n 2. 腫瘤病理分級 \n 3. 提供細胞相關參數 (核質比、細胞大小、密度分布…等) \n 4. 提供影像分析結果瀏覽 \n 5. 提供醫師影像標註功能 ',
  },
  {
    img: G2,
    linkname: '產品介紹',
    link: process.env.PUBLIC_URL + '/pdf/17.CIMS團隊_臨床研究資訊系統(CSIS)與CSIS-APP.pdf',
    name: (
      <div>
        <h3>CIMS服務團隊</h3> <h4>臨床研究資訊系統(CSIS)與CSIS-APP</h4>
      </div>
    ),
    tracks: '  \n  TRACK#1 - 病人基本資料互通TRACK#3 - 用藥及疫苗接種紀錄 TRACK#6 - 基因定序標記',
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '臨床研究資訊系統(Clinical Study Information System, CSIS)是一個協助收集臨床研究，或臨床試驗數據與的電子系統。\n 系統具備強大的設計功能，可以設計一般的國際標準問卷，或客製化的電子化個案報告表(eCRF)。\n 若由開放電子化個案報告表(eCRF)資料庫所收集的上萬張表單中，挑選eCRF並存為符合ODM之格式，即可直接上傳到使用，免去自行設計的時間。\n 此外，CSIS亦可設計符合CDISC標準的eCRF，並自動產生註解的個案報告表 (aCRF)以節省人工。\n 試驗計畫(study plan)中可列出受試者每次來訪所需的表單，並以儀表版呈現表單填寫的狀態，方便了解收案進度。\n',
  },
  {
    img: G2,
    linkname: '產品介紹',
    link:
      process.env.PUBLIC_URL + '/pdf/18.CIMS服務團隊_臨床研究資訊系統 (Clinical Study Information System, CSIS).pdf',
    name: (
      <div>
        <h3>CIMS服務團隊</h3> <h4>臨床研究資訊系統 (Clinical Study Information System, CSIS)</h4>
      </div>
    ),
    tracks: '  \n  TRACK#1 - 病人基本資料互通TRACK#3 - 用藥及疫苗接種紀錄 TRACK#6 - 基因定序標記',
    trackstitle: 'TRACK#4\n   TRACK#5\n   TRACK#7',
    tracksname: '  DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程',
    introduce:
      '在基因體醫學、生技醫藥等國家型計畫的支援下，國立陽明大學由美國國家衛生院導入臨床試驗與管理系統，給計畫及醫院的人體試驗委員會、臨床試驗中心、人體生物資料庫等單位使用。\n 該系統可載入符合CDISC的傳輸標準(ODM)之電子表單，因此可使用上萬種開放(open source)的表單。\n此外也提供問題庫，方便製作符合CDISC標準的電子表單。\n 系統可用網頁或APP方式在行動裝置上填寫問卷，收集患者回饋結果(ePRO)等實境數據(RWD)。\n 系統可使用API界接血壓計等物聯網(IoT)設備、或與核心實驗室、醫院系統等交換數據，適合廠商管理臨床試驗使用。\n',
  },
]

const CrosssystemInform = [
  {
    title: 'DICOM互通情境',
    img: [<img src={c1} Width={'100%'} />, <img src={c2} Width={'100%'} />],
  },
  {
    title: 'FHIR互通情境',
    img: [<img src={f1} Width={'100%'} />, <img src={f2} Width={'100%'} />],
  },
]
export { ListTitle, List, OpenSourceInform, IndustryInform, HospitalInform, GovernmentInform, CrosssystemInform }
