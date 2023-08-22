import logo from '../../assets/Logo.png'

import {
  Track1_details_content,
  Track1_Benefits_content,
  Track1_Summary_content,
  Track1_SystemsAffected_content,
  Track1_Specification_content,
  Track1_Author_content,
} from './contents/track1/index'

import {
  Track2_details_content,
  Track2_Benefits_content,
  Track2_Summary_content,
  Track2_SystemsAffected_content,
  Track2_Specification_content,
  Track2_Author_content,
} from './contents/track2/index'

import {
  Track3_Summary_content,
  Track3_Benefits_content,
  Track3_details_content,
  Track3_SystemsAffected_content,
  Track3_Specification_content,
  Track3_Author_content,
} from './contents/track3/index'

import {
  Track4_Summary_content,
  Track4_Benefits_content,
  Track4_details_content,
  Track4_SystemsAffected_content,
  Track4_Specification_content,
  Track4_Author_content,
} from './contents/track4/index'

import {
  Track5_Summary_content,
  Track5_Benefits_content,
  Track5_details_content,
  Track5_SystemsAffected_content,
  Track5_Specification_content,
  Track5_Author_content,
} from './contents/track5'

import {
  Track6_Summary_content,
  Track6_Benefits_content,
  Track6_details_content,
  Track6_SystemsAffected_content,
  Track6_Specification_content,
  Track6_Author_content,
} from './contents/track6'

import {
  Track7_Summary_content,
  Track7_Benefits_content,
  Track7_details_content,
  Track7_SystemsAffected_content,
  Track7_Specification_content,
  Track7_Author_content,
} from './contents/track7'

import {
  Track8_Summary_content,
  Track8_Benefits_content,
  Track8_details_content,
  Track8_SystemsAffected_content,
  Track8_Specification_content,
  Track8_Author_content,
} from './contents/track8'

import {
  Track9_Summary_content,
  Track9_Benefits_content,
  Track9_details_content,
  Track9_SystemsAffected_content,
  Track9_Specification_content,
  Track9_Author_content,
} from './contents/track9'

import {
  Track10_Summary_content,
  Track10_Benefits_content,
  Track10_details_content,
  Track10_SystemsAffected_content,
  Track10_Specification_content,
  Track10_Author_content,
} from './contents/track10'

export const TraksTabInform = [
  {
    Id: '1',
    TabTitle: '01',
    ContentTitle: '病人基本資料',
    Img: '',
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1h_pxZWnYVmIbqtN7wJoaXoR-Zq7N0q3d/preview',
        content: <Track1_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track1_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track1_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track1_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track1_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track1_Author_content />,
      },
    ],
  },
  {
    Id: '2',
    TabTitle: '02',
    ContentTitle: '生理量測數據',
    Img: '',
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1IE4n9qyKPifLtp8zDTE-jfCIQXICGUre/view',
        content: <Track2_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track2_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track2_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track2_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track2_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track2_Author_content />,
      },
    ],
  },
  {
    Id: '3',
    TabTitle: '03',
    ContentTitle: '用藥、文件打包及服務請求',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i1U1ZAqbeIqMFV87JqD8xahGNHGeO9NZ/preview',
        content: <Track3_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track3_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track3_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track3_details_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track3_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track3_Author_content />,
      },
    ],
  },
  {
    Id: '4',
    TabTitle: '04',
    ContentTitle: '醫學影像與病理',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1h_0AxAD4jwWEkW4Bh5p9YwvLIYO12Krq/preview',
        content: <Track4_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track4_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details) ',
        content: <Track4_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track4_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track4_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <>
            <ul>
              <li>
                相關標準
                <ul>
                  <li>
                    <a href="https://twcore.mohw.gov.tw/ig/">臺灣核心實作指引</a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Scheduled_Workflow">IHE Scheduled Workflow Profle</a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Web-based_Image_Access">
                      IHE Web-based Image Access Profle
                    </a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Digital_Pathology_Workflow_-_Image_Acquisition">
                      Digital Pathology Workflow - Image Acquisition
                    </a>
                  </li>
                  <li>
                    <a href="https://mitw.dicom.org.tw/IG/NSCLC/Imageprofiles.html">醫療影像及報告實作指引</a>
                  </li>
                </ul>
              </li>
              <li>常見問題</li>
              <li>
                參考文章
                <ul>
                  <li>
                    <a href="https://news.gbimonthly.com/tw/celebrity/show.php?num=37353">
                      善用健保制定資料儲存標準，建置差異化影像資料庫
                    </a>
                  </li>
                </ul>
              </li>
              <li>參考網址</li>
            </ul>
          </>
        ),
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track4_Author_content />,
      },
    ],
  },
  {
    Id: '5',
    TabTitle: '05',
    ContentTitle: '照護協調',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i6_qOodMipdgk0LyzS-_znmtvBkGBC2x/preview',
        content: <Track5_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track5_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track5_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track5_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track5_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <ul class="part in-view" data-startline="1011" data-endline="1017" data-position="50550" data-size="0">
            <li class="" data-startline="1011" data-endline="1011" data-position="50552" data-size="0">
              <a
                href="https://confluence.hl7.org/display/FHIR/2020-09+Care+Coordination+Track"
                target="_blank"
                rel="noopener"
              >
                <span data-position="50553" data-size="10">
                  FHIR國際聯測主題
                </span>
              </a>
            </li>
            <li class="" data-startline="1012" data-endline="1012" data-position="50640" data-size="0">
              <a
                href="https://confluence.hl7.org/display/FHIR/2021-01+Care+Coordination+Track"
                target="_blank"
                rel="noopener"
              >
                <span data-position="50641" data-size="10">
                  FHIR國際聯測主題
                </span>
              </a>
            </li>
            <li class="" data-startline="1013" data-endline="1013" data-position="50728" data-size="0">
              <a href="https://www.nhi.gov.tw/Content_List.aspx?n=1D03852A21A122D1" target="_blank" rel="noopener">
                <span data-position="50729" data-size="11">
                  台灣健保健康存摺SDK
                </span>
              </a>
            </li>
            <li class="" data-startline="1014" data-endline="1014" data-position="50805" data-size="0">
              <a href="https://emr.mohw.gov.tw/myemr/index.html" target="_blank" rel="noopener">
                <span data-position="50806" data-size="8">
                  台灣電子病歷專區
                </span>
              </a>
            </li>
            <li class="" data-startline="1015" data-endline="1015" data-position="50860" data-size="0">
              <a
                href="https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/eLTSS+Home"
                target="_blank"
                rel="noopener"
              >
                <span data-position="50861" data-size="11">
                  美國ONC長照資訊計畫
                </span>
              </a>
            </li>
            <li class="" data-startline="1016" data-endline="1017" data-position="50950" data-size="0">
              <a href="http://hl7.org/fhir/us/eltss/" target="_blank" rel="noopener">
                <span data-position="50951" data-size="6">
                  美國長照IG
                </span>
              </a>
            </li>
          </ul>
        ),
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track5_Author_content />,
      },
    ],
  },
  {
    Id: '6',
    TabTitle: '06',
    ContentTitle: '基因體標記',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hKZYzOQJKcZStq26u0lrUDKhhaAj5POQ/preview',
        content: <Track6_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track6_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track6_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track6_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track6_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track6_Author_content />,
      },
    ],
  },
  {
    Id: '7',
    TabTitle: '07',
    ContentTitle: '緊急醫療救護',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1ha7MrS5ZNfAQHGpsE0xf11mbV6kysh3f/preview',
        content: <Track7_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits)',
        content: <Track7_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track7_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <></>,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track7_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <>
            <ol class="part in-view" data-startline="1207" data-endline="1212" data-position="58026" data-size="0">
              <li class="" data-startline="1207" data-endline="1207" data-position="58029" data-size="0">
                <a
                  href="https://www.nfa.gov.tw/pro/index.php?code=list&amp;flag=detail&amp;ids=115&amp;article_id=6639"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58030" data-size="16">
                    內政部消防署－消防機關救護紀錄表
                  </span>
                </a>
              </li>
              <li class="" data-startline="1208" data-endline="1208" data-position="58135" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E5%88%B0%E9%99%A2%E5%89%8D%E5%BF%83%E8%B7%B3%E5%81%9C%E6%AD%A2(OHCA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58136" data-size="25">
                    EEC 到院前心跳停止病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1209" data-endline="1209" data-position="58411" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E9%87%8D%E5%A4%A7%E5%89%B5%E5%82%B7(TRAUMA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58412" data-size="22">
                    EEC 重大創傷病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1210" data-endline="1210" data-position="58659" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E6%80%A5%E8%A8%BA%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101116.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58660" data-size="20">
                    EEC 急診病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1211" data-endline="1211" data-position="58879" data-size="0">
                <a href="https://fhir.ch/ig/ch-ems/index.html" target="_blank" rel="noopener">
                  <span data-position="58880" data-size="20">
                    瑞士緊急醫療實作指引 CH.EMS.IG
                  </span>
                </a>
              </li>
              <li class="" data-startline="1212" data-endline="1212" data-position="58943" data-size="0">
                <a href="https://build.fhir.org/ig/HL7/fhir-ips/" target="_blank" rel="noopener">
                  <span data-position="58944" data-size="13">
                    FHIR IPS 實作指引
                  </span>
                </a>
              </li>
            </ol>
          </>
        ),
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track7_Author_content />,
      },
    ],
  },
  {
    Id: '8',
    TabTitle: '08',
    ContentTitle: '醫療保險理賠',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hKaNzFpLGFickoMrXprAbhf3TttIUq74/preview',
        content: <Track8_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track8_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track8_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track8_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track8_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <>
            <ul>
              <li>
                <a href="https://hitstdio.ntunhs.edu.tw/insurance-claim/" target="_blank">
                  醫療保險理賠實作指引
                </a>
              </li>
            </ul>
          </>
        ),
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track8_Author_content />,
      },
    ],
  },
  {
    Id: '9',
    TabTitle: '09',
    ContentTitle: '遠距醫療',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i7S_51kmXbWLE8ZGRL6fDVJBnnRM0tEk/preview',
        content: <Track9_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track9_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <></>,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track9_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <Track9_Specification_content />
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <></>,
      },
    ],
  },
  {
    Id: '10',
    TabTitle: '10',
    ContentTitle: '癌症登記',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hLXvniYeCK1V8H2lQHwVQKtYh8hM_wnS/preview',
        content: <Track10_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track10_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track10_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track10_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track10_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track10_Author_content />,
      },
    ],
  },
]
