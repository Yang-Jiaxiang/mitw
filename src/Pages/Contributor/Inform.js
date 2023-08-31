import wg1 from '../../assets/wg1_1.jpg'
import wg2_1 from '../../assets/wg2_1.jpg'
import wg2_2 from '../../assets/wg2_2.jpg'
import wg3_1 from '../../assets/wg3_1.jpg'
import wg3_2 from '../../assets/wg3_2.jpg'
import wg4_1 from '../../assets/wg4_1.jpg'
import wg4_2 from '../../assets/wg4_2.jpg'
import wg6_2 from '../../assets/wg6_2.jpg'
import wg7_2 from '../../assets/wg7_2.jpg'
import wg8_2 from '../../assets/wg8_2.jpg'
import wg10_2 from '../../assets/wg10_2.jpg'
import v2wg3_1 from '../../assets/v2wg3_1.jpg'
import v2wg4_1 from '../../assets/v2wg4_1.jpg'
import v2wg9_1 from '../../assets/v2wg9_1.jpg'
import v2wg0_1 from '../../assets/v2wg0_1.jpg'
import v2wg0_2 from '../../assets/v2wg0_2.jpg'
import v2wg0_3 from '../../assets/v2wg0_3.jpg'
import v2wg0_4 from '../../assets/v2wg0_4.jpg'
import v2wg0_5 from '../../assets/v2wg0_5.jpg'
import v2wg2_1 from '../../assets/v2wg2_1.jpg'
import v2wg0_6 from '../../assets/v2wg0_6.jpg'
import v2wg0_7 from '../../assets/v2wg0_7.jpg'

const Tabs = [
  { id: 1, title: '#01', name: '病人基本資料' },
  { id: 2, title: '#02', name: '生理量測數據' },
  { id: 3, title: '#03', name: '用藥、文件打包及服務請求' },
  { id: 4, title: '#04', name: '醫學影像與病理' },
  { id: 5, title: '#05', name: '照護協調' },
  { id: 6, title: '#06', name: '基因體標記' },
  { id: 7, title: '#07', name: '緊急醫療救護' },
  { id: 8, title: '#08', name: '醫療保險理賠' },
  { id: 9, title: '#09', name: '遠距醫療' },
  { id: 10, title: '#10', name: '癌症登記' },
]

const Mem = [
  {
    Id: 1,
    Track: [1, 7, 5],
    isMember: true,
    isContributor: true,
    TraksTitle: ' 病人基本資料',
    Img: wg1,
    Position: '召集人',
    Name: '楊宇凡 | 矽塔資訊服務有限公司 執行長',
    Tollger: (
      <>
        <b>1.　現職：</b>
        <ul>
          <li>(2016 - Present) 矽塔資訊服務有限公司 執行長</li>
          <li>(2021 - Present) 台灣醫療影像資訊標準協會（MISAT） 副秘書長</li>
          <li>(2021 - Present) 中華民國軟體自由協會 理事</li>
        </ul>
        <b>2.　經歷：</b>
        <ul>
          <li>2022 衛生福利部電子病歷 FHIR 臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>2020 起 MITW Connectathon 發起工作小組成員、督察員</li>
          <li>2021 起國立臺北護理健康大學資訊管理系業界專家協同教學教師</li>
          <li>2021-2023 國立中山大學醫學科技研究所研究助理</li>
          <li>2021-2022 國立臺北護理健康大學資訊管理系業界專家協同教學教師</li>
        </ul>
        <b>3.　簡介：</b>
        <ul>
          楊宇凡為國內少數理論與實務兼備之 FHIR 醫學資訊交換標準專家，具多年醫學資訊相關系統開發與教育訓練經驗。
          他的研究領域是醫學資訊，專長協助系統整合與產業創新，協助醫療院所、企業與政府以開源解決方案進行創新，提升產業綜效競爭力。
          他長期活躍於開放原始碼社群，並致力於推廣標準化醫療資訊教育對國高中的向下扎根。
        </ul>
      </>
    ),
  },
  {
    Id: 2,
    Track: [2],
    TraksTitle: ' 生理量測數據',
    isContributor: true,
    isMember: true,
    Img: v2wg2_1,
    Position: '召集人',
    Name: '洪苑容 | 馬雅資訊股份有限公司 軟體工程師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>中原大學生物醫學工程學系 碩士</li>
          <li>中原大學生物醫學工程學系 學士</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>馬雅資訊股份有限公司 軟體工程師</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>MI-TW Connectathon WG2 負責人/督察員</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          7 年程式撰寫經驗，使用過 C++、Arduino、Python 等 <br />4 年網頁全端開發經驗，包含前後端、API 與 DB 能夠使用
          Python Flask、QtWebApp、ASP.NET MVC、ASP.NET Core MVC 等後端架構 以及 jQuery、React 等前端架構 <br />4
          年醫療資訊標準 HL7 FHIR 實作經驗，探討心電圖資料的儲存方式 目前正在開發眼科資訊系統與TPR表單建置系統"
        </ul>
      </>
    ),
  },
  {
    Id: 3,
    Track: [2],
    TraksTitle: ' 生理量測數據',
    isContributor: true,
    Img: null,
    Position: '成員',
    Name: '黃宇婷|慈濟大學醫學資訊學系',
    Tollger: (
      <>
        黃宇婷|慈濟大學醫學資訊學系
        {/* <b>1.　學歷：</b>
        <b>2.　經歷：</b>
        <b>3.　簡介：</b> */}
      </>
    ),
  },
  {
    Id: 4,
    Track: [3, 5, 9],
    isContributor: true,
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: wg3_1,
    Position: '召集人',
    Name: '李祥豪 | 社團法人台灣醫學資訊學會(TAMI) 秘書長',
    isMember: true,
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立陽明交通大學生物醫學資訊 博士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>台灣醫學資訊學會(TAMI) 秘書長</li>
          <li>MedInfo2025籌備委員會 委員</li>
          <li>國立臺北護理健康大學 資管系兼任助理教授</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>2023 國泰金控數位數據暨科技發展中心健康資訊發展顧問</li>
          <li>2021~2023 衛生福利部山地離島遠距醫療服務、公費生平臺顧問</li>
          <li>2021~2023 衛生福利部健康雲專案辦公室電子病歷顧問、評審委員</li>
          <li>2020~2023 MI-TW Connectathon 大會工作小組、督察員、WG3用藥與文件打包召集人</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          李祥豪博士，FHIR開發建置/教育訓練/IG、智慧醫療、醫療AI應用、醫療資訊標準發展、智能長照/整合照護應用，歡迎合作
          shvoidlee@gmail.com。 MedInfo2025歡迎共襄盛舉，共同向世界展示台灣智慧醫療成果。
        </ul>
      </>
    ),
  },
  {
    Id: 5,
    Track: [3],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: wg3_2,
    Position: '成員',
    Name: '吳宇婷 | 仁寶電腦工業股份有限公司 雲端工程師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立陽明交通大學生資所</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>仁寶電腦工業股份有限公司 雲端工程師 </li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>MI-TW 2020-2021 Connectathon WG3 用藥工作小組、督察員（Monitor）</li>
          <li>汎宇電商 資深工程師 電商平台系統開發</li>
          <li>新加坡商易豐資訊 資深工程師 醫療後勤系統開發</li>
          <li>鈦美科技 研發工程師 醫療影像系統開發</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          專長於雲端開發及系統整合，以及擁有醫療與資訊背景，過去曾協助台北馬偕、彰化基督教、雙和、萬芳、新光吳火獅等醫院導入醫療後勤系統。
          近年來積極參與MI-TW標準化醫療聯測活動，並協助台北榮總導入FHIR標準。
        </ul>
      </>
    ),
  },
  {
    Id: 51,
    Track: [3],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: v2wg3_1,
    Position: '成員',
    Name: '楊宗翰 | 國立陽明交通大學生物醫學資訊所 研究生',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立陽明交通大學生資所</li>
          <li>銘傳大學醫工系</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>國立陽明交通大學生物醫學資訊所 研究生</li>
        </ul>
        <b>3.　經歷：</b>
        <ul>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 實習督察員</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於銘傳大學醫學工程學系，目前就讀陽明交通大學 生物醫學資訊研究所碩士班，過去曾參與使用FHIR
          醫學資訊標準開發系統。
        </ul>
      </>
    ),
  },
  {
    Id: 6,
    Track: [4, 6, 8, 10],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 醫學影像與病理',
    Img: wg4_1,
    Position: '召集人',
    Name: '連中岳 | 國立臺北護理健康大學 資管系副教授',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立陽明大學 醫學工程博士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 副教授 </li>
          <li>社團法人台灣醫療影像資訊標準協會 秘書長</li>
          <li>國際DICOM標準委員</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>DCMTK開發者</li>
          <li>OFFIS博士後研究</li>
          <li>IHE歐洲連測 督察員</li>
          <li>奇唯科技 技術經理</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          為國內少數實務與理論兼備的DICOM專家，具有豐富的醫療資訊系統實務開發經驗。
          長期推動國家醫學資訊標準以及教育，參與許多政府委託案、產學合作、技術顧問工作，例如：DICOM國家標準制定編修、DICOM/HL7/IHE醫學資訊標準推動案、以及DICOM教育訓練。
        </ul>
      </>
    ),
  },
  {
    Id: 7,
    Track: [4],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 醫學影像與病理',
    Img: wg4_2,
    Position: '成員',
    Name: '丁子芸 | 國立臺北護理健康大學資訊管理系 研究助理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 碩士生</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 研究助理</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 督察員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺北護理健康大學資訊管理系，目前就讀國立臺北護理健康大學資訊管理系碩士班，主要研究主題為FHIR在癌症之應用。
        </ul>
      </>
    ),
  },
  {
    Id: 71,
    Track: [4],
    isContributor: true,
    TraksTitle: ' 醫學影像與病理',
    Img: v2wg4_1,
    Position: '成員',
    Name: '鄧瑞均 | 國立臺北護理健康大學資訊管理系 碩士生',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 碩士生</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 碩士生</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 工作人員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊 工作人員</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊 工作人員</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺北護理健康大學資訊管理系，目前就讀國立臺北護理健康大學資訊管理系碩士班，過去曾參與使用DICOM通訊協定標準開發系統。{' '}
        </ul>
      </>
    ),
  },
  {
    Id: 121,
    Track: [5, 7],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 緊急醫療救護',
    Img: wg7_2,
    Position: '召集人',
    Name: '李修安 | 國家衛生研究院 癌症研究所 博士後研究員',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>淡江大學資訊工程系 博士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國家衛生研究院 癌症研究所 博士後研究員</li>
          <li>Postdoctoral, National Health Research Institutes - The National Institute of Cancer Research</li>
          <li>亞太醫學資訊學會 秘書長</li>
          <li>Secretary General, Asia-Pacific Association for Medical Informatics</li>
          <li>台灣電子健康學會 執行長</li>
          <li>CEO, Taiwan e-Health Association</li>
          <li>社團法人台灣醫學資訊學會 副秘書長</li>
          <li>Deputy Secretary, Taiwan Association for Medical Informatics</li>
          <li>標準與互操作性實驗室 實驗室經理</li>
          <li>General Manager, Standard and Interoperability Lab - Center of Excellent Taiwan</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>MI-TW 2022 Connectathon / WG7 工作小組召集人、督察員 (Monitor)</li>
          <li>2022 國立臺北護理健康大學資訊管理系業界專家協同教學教師</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          熟悉臨床醫療與健康資料分析，以及將健康數據與應用軟體結合，專攻標準互操作性之整合應用。
          是國內少數數據分析實務、應用程式開發與整合與標準理論兼備的研究學者，具有豐富的醫療資訊系統橫向整合與縱向串聯經驗。
          專長於醫療科技應用與數據分析，標準導入以及FHIR基礎建設。
        </ul>
      </>
    ),
  },
  {
    Id: 10,
    Track: [6],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 基因體標記',
    Img: wg6_2,
    Position: '成員',
    Name: '李建興 | 國立陽明交通大學生物醫學資訊所  研究助理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 學士</li>
          <li>國立陽明交通大學生物醫學資訊所 碩士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國立陽明交通大學生物醫學資訊所 研究助理</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>MITW 2021 connectathon WG6 聯絡窗口</li>
          <li>MITW 2022 connectathon WG6 督察員</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          過去曾參與採用FHIR標準系統開發，並代表單位進行聯測，很榮幸今年能以督察員的角色再度參與，祈望能為醫療資訊標準領域及發展盡一份心力。
        </ul>
      </>
    ),
  },
  {
    Id: 14,
    Track: [8],
    isContributor: true,
    TraksTitle: ' 醫療保險理賠',
    Img: wg8_2,
    Position: '成員',
    Name: '彭群芳 | 國泰金控數位發展數據暨科技發展中心 商業規劃師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北科技大學工業工程與管理系</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國泰金控數位發展數據暨科技發展中心 商業規劃師</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>中國信託 法金全球中小企業處 (RM)</li>
          <li>國泰世華銀行企金企劃部(PM)</li>
          <li>國泰金控雲端策略發展部金融醫療科(BD)</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          目前任職單位致力協助金融醫療產業，以國際標準FHIR為核心，提供保險公司與醫院解決方案，並偕同外部合作夥伴共同打造產業生態鏈結，加速金融結合醫療數位轉型。
        </ul>
      </>
    ),
  },
  {
    Id: 1512312212421421421,
    Track: [9],
    isContributor: true,
    TraksTitle: ' 遠距醫療',
    Img: v2wg9_1,
    Position: '成員',
    Name: '張榮峻 | 遠傳電信智慧醫療 開發經理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>逢甲大學 應用數學系</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>遠傳電信智慧醫療 開發經理 </li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>遠傳電信智慧醫療開發經理</li>
          <li>遠傳電信數位帳務支付開發經理</li>
          <li>遠傳電信開發工程師</li>
          <li>東信電信無線與射頻技術工程師</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          熟悉通訊技術與雲端系統開發，以及資通訊系統及遠距診療系統規劃設計。具20年跨資通訊系統開發經驗，具有電信、通訊與數位金容與帳務交易系統開發豐富之經驗。以FHIR為基礎設計與建置衛福部偏鄉原鄉遠距診療醫療資訊互聯系統與架構。
        </ul>
      </>
    ),
  },
  {
    Id: 17,
    Track: [10],
    isContributor: true,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: wg10_2,
    Position: '成員',
    Name: '郭俐君 | 國立臺北護理健康大學資訊管理系 研究助理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 碩士生</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 研究助理</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 督察員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺北護理健康大學資訊管理系，目前就讀國立臺北護理健康大學資訊管理系碩士班，主要研究主題為FHIR在癌症之應用。
        </ul>
      </>
    ),
  },
  {
    Id: 1745352112,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_1,
    Position: '成員',
    Name: '李麗惠 | 國立臺北護理健康大學 健康事業管理系	助理教授',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立陽明大學公共衛生研究所(衛生資訊與決策組) 博士</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>國立臺北護理健康大學 健康事業管理系 助理教授</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>鴻海科技集團智慧醫療健康處資深工程師</li>
          <li>德國萊比錫大學電腦科學系資料庫組博士生研究員</li>
          <li>行政院衛生署資訊中心副研究員</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          李老師為國際上少數通過HL7 International FHIR Fundamental 與Intermediate課程評核並擁有HL7 FHIR
          Proficient證照者，其執行國內政府端與FHIR相關計畫，並經常參與HL7
          International舉辦之活動與國際FHIR專家學習與討論，關切與瞭解HL7 International
          之FHIR技術發展與國際推廣趨勢，2022年開始為HL7 International
          FHIR教育諮委員會的委員，共同為FHIR於全球教育訓練推廣而努力。
        </ul>
      </>
    ),
  },
  {
    Id: 17412,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_2,
    Position: '成員',
    Name: '龔筠庭 | 國泰金控數位數據發展中心 技術架構師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>慈濟大學醫學資訊 碩士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>國泰金控數位數據發展中心 技術架構師</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>奇唯高級系統分析師</li>
          <li>LINE TV Backend Team Lead</li>
          <li>HTC DeepQ 資深工程師</li>
          <li>伊雲谷科技IT Application Team Lead</li>
          <li>康統醫學科技軟體工程師</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          目前擔任國泰金控數數發技術架構師，過去在雲端產業厚實軟體工程能力，對於新事物充滿熱情，致力於運用新技術來解決實務問題，尤其關注並參與醫療數位轉型的工作，曾參與
          IHE 北京系統聯測、擔任 MI-TW
          聯測督察員，以幫助醫療領域實現更好的發展。職業生涯的一半以上時間，一直專注於資訊醫療領域，開發與導入經驗有：翻新二十年前的醫院舊報告系統，並參與了醫學影像Smart
          DICOM Viewer和智慧醫療服務的開發與醫院場域導入。靈活應用醫學資訊標準 DICOM、FHIR和IHE-IT
          Infrastructure，並將這些醫學資訊標準、醫療場域實務問題與軟體工程相結合，以在醫療生態系中實現有效運用。為國內少數擁有國際醫學資訊標準領域知識與實務開發結合的軟體技術架構師。
        </ul>
      </>
    ),
  },
  {
    Id: 41217,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_7,
    Position: '成員',
    Name: '葉倖玫 | 台達電子工業股份有限公司 資訊資深工程師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>慈濟大學醫學資訊 碩士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>
          <li>台達電子工業股份有限公司 資訊資深工程師</li>
        </ul>
        <b>3.　經歷：</b>
        <ul>
          <li>(2019/9 - Present) 台達電子工業股份有限公司 資訊資深工程師</li>
          <li>(2018/7 - 2019/9) 睿傳數據股份有限公司 軟體工程師</li>
          <li>(2015/8 - 2018/5) 承啟醫系股份有限公司 軟體工程師</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          過去曾經開發建置多個醫學影像相關系統，對於醫學影像傳輸及處理有些許的了解，同時也對於這塊領域有些興趣，期望能夠盡一份小小心力於此塊領域。
        </ul>
      </>
    ),
  },
  {
    Id: 171231,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: null,
    Position: '成員',
    Name: '曾鈺珈 | 國立臺北護理健康大學健康事業管理系 兼任助理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學健康事業管理系 碩士生</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>國立臺北護理健康大學健康事業管理系 兼任助理</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>國北護健管系-李麗惠助理教授 兼任助理</li>
          <li>MITW 2022 connectathon WG1 督察員</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>曾協助開發國內FHIR相關計畫，期望這次聯測能貢獻小小心力。</ul>
      </>
    ),
  },
  {
    Id: 171212312312331,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_3,
    Position: '成員',
    Name: '張修書 | 臺中榮民總醫院	資訊工程師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>東海大學資訊工程學系 碩士</li>
          <li>國防醫學院 生命科學所 博士班 進修中</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>臺中榮民總醫院 資訊工程師</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>
            1)十年以上醫學中心醫療影像儲傳系統(PACS)執行與管理經驗，醫療儀器、外圍科室報告系統介接醫療資訊系統經驗豐富
          </li>
          <li>2)病理影像數位化推行及各臨床單位影像人工智慧專案資料執行與落地整合，實務經驗豐富</li>
          <li>3)自行開發健保署影像共享機制程式，為全國首間自動化上傳醫院 </li>
          <li>4)MI-TW 2021 Connectathon督察員（Monitor） </li>
          <li>5)MI-TW 2022 Connectathon督察員 (Monitor)</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          非常榮幸能擔任本次聯測的督察員。現今國內醫療儀器業者與系統軟體廠商，除現有國際標準外，在國內醫療資訊與醫學工程領域尚未有一個具公信力的標準或認證可供參考。
          希望能藉由協會舉辦的聯測活動與認證，與各位業界前輩與先進，共同建立國內具公信力的標準，共創產業、醫療院所的雙贏局面，共同增進病患福祉。
        </ul>
      </>
    ),
  },
  {
    Id: 171212312331,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: null,
    Position: '成員',
    Name: '林伃瑤 | 國立臺北護理健康大學健康事業管理系-李麗惠 助理教授研究室兼任助理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學健康事業管理系 碩士生</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>國立臺北護理健康大學健康事業管理系-李麗惠 助理教授研究室兼任助理</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>國立臺北護理健康大學健康事業管理系-李麗惠 助理教授研究室兼任助理</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>目前就讀國立臺北護理健康大學健康事業管理系碩士，曾協助開發國內FHIR相關計畫。</ul>
      </>
    ),
  },
  {
    Id: 41123231,
    Track: [4],
    isContributor: true,
    isMember: false,
    TraksTitle: ' 醫學影像與病理',
    Img: null,
    Position: '成員',
    Name: '謝愛佳 | ',
    Tollger: <></>,
  },
  {
    Id: 1719041123231,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_4,
    Position: '成員',
    Name: '李偉帆 | 商之器科技股份有限公司 應用研發部經理',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺北護理健康大學 資訊管理系</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>商之器科技股份有限公司 應用研發部經理</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>商之器科技股份有限公司 應用研發部經理</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          衛福部電子病歷交換中心研發負責人 電子病歷系、數位病理、DICOM WebViewer研發負責人
          專長為醫療影像與電子病歷，近期正在為醫療(含影像)系統上雲以及FHIR發展的相關技術與架構做規劃與開發。
        </ul>
      </>
    ),
  },
  {
    Id: 14112312444431231,
    Track: [0],
    isContributor: false,
    isMember: true,
    TraksTitle: ' 癌症登記',
    Img: null,
    Position: '成員',
    Name: '江育霖 | 儷成生技股份有限公司 技術總監',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>台北醫學大學醫學資訊研究所</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>儷成生技股份有限公司 技術總監</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>台灣醫療影像資訊標準協會 第九屆理事</li>
          <li>睿傳數據股份有限公司 專案管理處 資深經理</li>
          <li>台灣健康資訊交換第七層協定協會 第九屆理事</li>
          <li>承啟醫系股份有限公司 醫療資訊整合處 處長</li>
          <li>關貿網路股份有限公司 系統分析師</li>
          <li>鉅仁科技股份有限公司 資深系統分析師</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          將近20年負責各級醫療院所科室流程數位化系統設計及開發、PACS影像儲傳系統及DICOM醫學影像相關資訊系統產品銷售規劃及建置維護。
        </ul>
      </>
    ),
  },
  {
    Id: 1411231222231231,
    Track: [0],
    isContributor: false,
    isMember: true,
    isPractice: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_5,
    Position: '成員',
    Name: '李昀陞 | 財團法人資訊工業策進會 數位轉型研究院 工程師',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>國立臺灣海洋大學資訊工程學系 碩士</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>財團法人資訊工業策進會 數位轉型研究院 工程師</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>2023起 MITW Connectathon 督察員</li>
          <li>2019~2023 COSUP 開源人年會講者</li>
          <li>2020~2022 MOPCON 行動科技年會講者</li>
          <li>MI-TW 2021 Connectathon / 參與聯測廠商</li>
          <li>2018~2021 財團法人工業技術研究院 資訊與通訊研究所 副工程師~工程師</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>
          李昀陞先前在工業技術研究院/資訊與通訊研究所擔任副工程師，主要研究智慧電網與應用資訊科技技術協助臺灣電力進行電業轉型，目前在資訊工業策進會/數位轉型研究院擔任工程師，主要研究資料庫與軟體開發技術並應用到醫學資訊與碳排放等領域中。
          在醫學資訊領域上，他專精於FHIR標準研究、程式實做與相關的教學設計；並於2021年開發以FHIR為標準的數位疫苗護照雛型服務並通過該年度聯測供日後的廠商作為參考與實做的依據。
        </ul>
      </>
    ),
  },
  {
    Id: 1719041231,
    Track: [0],
    isContributor: false,
    isMember: true,
    isPractice: true,
    TraksTitle: ' 癌症登記',
    Img: v2wg0_6,
    Position: '成員',
    Name: '張哲源 | 佛教慈濟醫療財團法人花蓮慈濟醫院',
    Tollger: (
      <>
        <b>1. 學歷：</b>
        <ul>
          <li>慈濟大學醫學資訊系學士</li>
          <li>慈濟大學醫學資訊系碩士</li>
        </ul>
        <b>2. 現職：</b>
        <ul>
          <li>佛教慈濟醫療財團法人花蓮慈濟醫院</li>
        </ul>
        <b>3. 經歷：</b>
        <ul>
          <li>碩士主要研究fhir相關應用</li>
          <li>2021年畢業於慈濟大學碩士 </li>
          <li>2022任職於 佛教慈濟醫療財團法人花蓮慈濟醫院 資訊室</li>
          <li>曾於2022年代表慈濟醫院參與fhir聯測</li>
        </ul>
        <b>4. 簡介：</b>
        <ul>熱情於各種程式相關內容，於碩士期間了解並接觸fhir相關內容，目前於醫院中協助推進fhir相關應用方式。</ul>
      </>
    ),
  },
]

export { Tabs, Mem }
