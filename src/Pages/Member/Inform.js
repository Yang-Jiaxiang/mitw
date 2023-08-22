import wg1 from '../../assets/wg1_1.jpg'
import wg2_1 from '../../assets/wg2_1.jpg'
import wg2_2 from '../../assets/wg2_2.jpg'
import wg3_1 from '../../assets/wg3_1.jpg'
import wg3_2 from '../../assets/wg3_2.jpg'
import wg4_1 from '../../assets/wg4_1.jpg'
import wg4_2 from '../../assets/wg4_2.jpg'
import wg6_2 from '../../assets/wg6_2.jpg'
import wg7_2 from '../../assets/wg7_2.jpeg'
import wg8_2 from '../../assets/wg8_2.jpg'
import wg10_2 from '../../assets/wg10_2.jpg'

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
          <li>2021 起國立台北護理健康大學資訊管理系業界專家協同教學教師</li>
          <li>2021-2023 國立中山大學醫學科技研究所研究助理</li>
          <li>2021-2022 國立台北護理健康大學資訊管理系業界專家協同教學教師</li>
        </ul>
        <b>3.　簡介：</b>
        楊宇凡為國內少數理論與實務兼備之 FHIR 醫學資訊交換標準專家，具多年醫學資訊相關系統開發與教育訓練經驗。
        他的研究領域是醫學資訊，專長協助系統整合與產業創新，協助醫療院所、企業與政府以開源解決方案進行創新，提升產業綜效競爭力。
        他長期活躍於開放原始碼社群，並致力於推廣標準化醫療資訊教育對國高中的向下扎根。
      </>
    ),
  },
  {
    Id: 2,
    Track: [2],
    TraksTitle: ' 生理量測數據',
    Img: null,
    Position: '召集人',
    Name: '洪苑容 | 馬雅資訊 軟體工程師',
    Tollger: (
      <>
        <b>1. 現職：</b>
        <ul>馬雅資訊 軟體工程師</ul>
        {/* <b>2. 經歷：</b>
          <ul>
            <li>2021 MI-TW Connectathon 參與者</li>
            <li>2021 臺北慈濟醫院 資訊室 實習生</li>
          </ul>
          <b>3. 簡介：</b>
          畢業於慈濟大學醫學資訊學系，目前就讀慈濟大學醫學資訊學系碩士班。主要研究主題為FHIR在雲端儲存應用。積極參與FHIR標準應用的討論和推廣。 */}
      </>
    ),
  },
  {
    Id: 3,
    Track: [2],
    TraksTitle: ' 生理量測數據',
    Img: null,
    Position: '成員',
    Name: '黃宇婷|慈濟大學醫學資訊學系',
    Tollger: (
      <>
        <b>1.　現職：</b>
        <ul>
          {/* <li>Medical Informatics Standard Application Consortium (MISAC) 執行首席</li> */}
          <li>慈濟大學醫學資訊學系</li>
        </ul>
        {/* <b>2.　經歷：</b>
          <ul>
            <li>2021 睿揚資訊公司 實習生</li>
            <li>2021 MITW 聯測參與者</li>
            <li>2018-2022 慈濟大學 電算中心 工讀生</li>
          </ul>
          <b>3.　簡介：</b>
          來自印尼的留學生，已經留台灣將近5年。
          畢業於慈濟大學醫學資訊學系，目前就讀慈濟大學醫學資訊學系碩士班。主要研究主題為FHIR在皮膚照片管理系統的應用。
          熱心參與台灣和印尼FHIR及其應用的討論和教育推廣。對開發Web方案有興趣。 */}
      </>
    ),
  },
  {
    Id: 4,
    Track: [3, 5, 9],
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: wg3_1,
    Position: '召集人',
    Name: '李祥豪 | 社團法人台灣醫學資訊學會(TAMI) 秘書長',
    Tollger: (
      <>
        <b>1.學歷</b>
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
      </>
    ),
  },
  {
    Id: 5,
    Track: [3],
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: wg3_2,
    Position: '聯繫窗口',
    Name: '吳宇婷 | 仁寶電腦工業股份有限公司 雲端工程師',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>國立陽明交通大學生資所</ul>
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
    TraksTitle: ' 用藥、文件打包及服務請求',
    Img: null,
    Position: '聯繫窗口',
    Name: '楊宗翰 | 國立陽明交通大學生物醫學資訊所 研究生',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>
          <li>國立陽明交通大學生資所</li>
          <li>銘傳大學醫工系</li>
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
    TraksTitle: ' 醫學影像與病理',
    Img: wg4_1,
    Position: '召集人',
    Name: '連中岳 | 國立臺北護理健康大學 資管系助理教授',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>國立陽明大學 博士</ul>
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
    TraksTitle: ' 醫學影像與病理',
    Img: wg4_2,
    Position: '聯絡窗口',
    Name: '丁子芸 | 國立臺北護理健康大學資訊管理系 研究助理',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>國立臺北護理健康大學資訊管理系 碩士生</ul>
        <b>2.　現職：</b>
        <ul>國立臺北護理健康大學資訊管理系 研究助理</ul>

        <b>3.　經歷：</b>
        <ul>
          <li>臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 督察員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺護理健康大學資訊管理系，目前就讀國立臺護理健康大學資訊管理系碩士班，主要研究主題為FHIR在癌症之應用。
        </ul>
      </>
    ),
  },
  {
    Id: 71,
    Track: [4],
    TraksTitle: ' 醫學影像與病理',
    Img: null,
    Position: '聯絡窗口',
    Name: '鄧瑞均 | 國立臺北護理健康大學資訊管理系 碩士生',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>國立臺北護理健康大學資訊管理系 碩士生</ul>
        <b>2.　現職：</b>
        <ul>國立臺北護理健康大學資訊管理系 碩士生</ul>

        <b>3.　經歷：</b>
        <ul>
          <li>2022 MI-TW 台灣醫學資訊互通聯測松 工作人員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊 工作人員</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊 工作人員</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺護理健康大學資訊管理系，目前就讀國立臺護理健康大學資訊管理系碩士班，過去曾參與使用DICOM通訊協定標準開發系統。{' '}
        </ul>
      </>
    ),
  },
  {
    Id: 121,
    Track: [5, 7],
    TraksTitle: ' 緊急醫療救護',
    Img: wg7_2,
    Position: '召集人',
    Name: '李修安 | 國家衛生研究院 - 癌症研究所 博士後研究員',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>淡江大學資訊工程系 博士</ul>
        <b>2.　現職：</b>
        <ul>
          <li>國家衛生研究院 癌症研究所 博士後研究員 </li>
          <li>Postdoctoral, National Health Research Institutes - The National Institute of Cancer Research</li>
          <li>台灣電子健康學會 執行長 </li>
          <li>CEO, Taiwan e-Health Association</li>
          <li>社團法人台灣醫學資訊學會 副秘書長 </li>
          <li>Deputy Secretary, Taiwan Association for Medical Informatics</li>
          <li>標準與互操作性實驗室 實驗室經理</li>
          <li>General Manager, Standard and Interoperability Lab - Center of Excellent Taiwan</li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li>MI-TW 2022 Connectathon / WG7 工作小組召集人、督察員 (Monitor)</li>
          <li>2022 國立台北護理健康大學資訊管理系業界專家協同教學教師</li>
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
    TraksTitle: ' 基因體標記',
    Img: wg6_2,
    Position: '成員',
    Name: '李建興 | 國立陽明交通大學生物醫學資訊所 碩士生',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>
          <li>國立臺北護理健康大學資訊管理系 學士</li>
          <li>國立陽明交通大學生物醫學資訊所 碩士</li>
        </ul>
        <b>2.　現職：</b>
        <ul>國立陽明交通大學生物醫學資訊所 碩士生</ul>

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
    TraksTitle: ' 醫療保險理賠',
    Img: wg8_2,
    Position: '聯繫窗口',
    Name: '彭群芳 | 國泰金控數位發展數據暨科技發展中心 商業規劃師',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul></ul>
        <b>2.　現職：</b>
        <ul>
          <li></li>
        </ul>

        <b>3.　經歷：</b>
        <ul>
          <li></li>
          <li></li>
          <li> </li>
          <li> </li>
        </ul>
        <b>4.　簡介：</b>
        <ul></ul>
      </>
    ),
  },
  {
    Id: 1512312212421421421,
    Track: [9],
    TraksTitle: ' 遠距醫療',
    Img: null,
    Position: '成員',
    Name: '張榮峻 | 遠傳電信智慧醫療 開發經理',
    Tollger: (
      <>
        <b>1.學歷</b>
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
        <li>
          熟悉通訊技術與雲端系統開發，以及資通訊系統及遠距診療系統規劃設計。具20年跨資通訊系統開發經驗，具有電信、通訊與數位金容與帳務交易系統開發豐富之經驗。以FHIR為基礎設計與建置衛福部偏鄉原鄉遠距診療醫療資訊互聯系統與架構。
        </li>
      </>
    ),
  },
  {
    Id: 17,
    Track: [10],
    TraksTitle: ' 癌症登記',
    Img: wg10_2,
    Position: '聯絡窗口',
    Name: '郭俐君 | 國立臺北護理健康大學資訊管理系 研究助理',
    Tollger: (
      <>
        <b>1.學歷</b>
        <ul>國立臺北護理健康大學資訊管理系 碩士生</ul>
        <b>2.　現職：</b>
        <ul>國立臺北護理健康大學資訊管理系 研究助理</ul>

        <b>3.　經歷：</b>
        <ul>
          <li>臺灣核心實作指引（TW Core IG）貢獻者</li>
          <li>MI-TW 台灣醫學資訊互通聯測松 督察員</li>
          <li>2021 MI-TW 標準化醫療與健康資訊互通聯測松工作坊</li>
          <li>2020 MI-TW 標準化醫療與健康資訊教育暨互通聯測工作坊</li>
        </ul>
        <b>4.　簡介：</b>
        <ul>
          畢業於國立臺護理健康大學資訊管理系，目前就讀國立臺護理健康大學資訊管理系碩士班，主要研究主題為FHIR在癌症之應用。
        </ul>
      </>
    ),
  },
]

export { Tabs, Mem }
