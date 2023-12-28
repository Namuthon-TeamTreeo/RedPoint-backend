const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const app = express();
app.use(cors()); //모든 접근 허용
const loadtube = express();

// 새로운 영화 리뷰 추가
loadtube.post("/roadmap-list", async (req, res) => {
  try {
    res.status(200).json(roadmapList[req.body.category]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

loadtube.post("/roadmap-detail", async (req, res) => {
  try {
    res.status(200).json(roadmapDetail[req.body.category]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

loadtube.get("/html-lecture", async (req, res) => {
  try {
    res.status(200).json(HTMLLectureData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

loadtube.post("/lecture-youtube-link", async (req, res) => {
  try {
    res.status(200).json(HTMLYoutubeLinkData[req.body.lectureId]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.use(express.json());
app.use("/api", loadtube);

exports.movieAPI = functions.region("asia-northeast3").https.onRequest(app);

/**
 * API Mock 데이터..
 * 혼자서 풀스택으로 개발하다보니,, 시간상 문제로 Mock 데이터를 사용하였습니다.
 */
const roadmapList = {
  toprank: [
    {
      imageUrl:
        "https://i.ytimg.com/vi/ONcmkf07EuI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyzhlUVi-Y07zrF43eLDRRleRFVw",
      category: "개발",
      title: "초보 프론트엔드 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/3RS_A87IAPA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDB1ODgQtpJTU6r6j_CMqobRBiFwg",
      category: "개발",
      title: "초보 백엔드 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/Tm74nPLv10I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQHrHBvz60aUQlpr8h281Vk-bG2A",
      category: "수학",
      title: "수능 수학 문제 풀이",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/69zizdda11s/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBSI2VPz3_LNjWPCJ79GaeQAUp4cQ",
      category: "언어",
      title: "오픽 공부법",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
  ],
  develop: [
    {
      imageUrl:
        "https://i.ytimg.com/vi/ONcmkf07EuI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyzhlUVi-Y07zrF43eLDRRleRFVw",
      category: "개발",
      title: "초보 프론트엔드 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/3RS_A87IAPA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDB1ODgQtpJTU6r6j_CMqobRBiFwg",
      category: "개발",
      title: "초보 백엔드 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/Ps8HDIAyPD0/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYciBDKEowDw==&rs=AOn4CLDdfRQT5h-J65dCmgVJ8li1YBM3iw",
      category: "개발",
      title: "DevOps 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/usE9IKaogDU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZidsdF8eMn0W0KIVbJ3BUAaqE1Q",
      category: "개발",
      title: "Flutter 개발자 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
  ],
  ai: [
    {
      imageUrl:
        "https://i.ytimg.com/vi/Ih4Gc9roa0A/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyh0vTFkVpOQEe9yoEEWNNLyUYlg",
      category: "인공지능",
      title: "머신러닝 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/PySo_6S4ZAg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBhBlcVTAD7kD4y8D-S8OlxTFRzXw",
      category: "인공지능",
      title: "딥러닝 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/vT1JzLTH4G4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAI2UL9gqw5INyRgbZmub_txP1fdg",
      category: "인공지능",
      title: "컴퓨터 비전 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/dZ4vw6v3LcA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxPaF4JDSLFfW_NYGw1dxXU3VvEg",
      category: "인공지능",
      title: "강화학습 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
  ],
  math: [
    {
      imageUrl:
        "https://i.ytimg.com/vi/Tm74nPLv10I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQHrHBvz60aUQlpr8h281Vk-bG2A",
      category: "수학",
      title: "수능 수학 문제 풀이",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/eGkxq0uxlVA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCOiJ1auRMlR-gykBVDnlNRRuSGZg",
      category: "수학",
      title: "고2 수학 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/x9iU90LmoWc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBJ82Dm1XQPtWyUdL_ql6cxlIBuMg",
      category: "수학",
      title: "고1 수학 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
    {
      imageUrl:
        "https://i.ytimg.com/vi/Xwm5Adw6Ieg/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLBAAoHwxxJdMApxIURchLp8ucc2uw",
      category: "수학",
      title: "중3 수학 로드맵",
      sectionCount: 3,
      veiwsCount: 109,
      likeCount: 1.2,
    },
  ],
};

const roadmapDetail = {
  frontend: {
    information: {
      title: "초보 프론트엔드 개발자 로드맵",
      category: "개발",
      description:
        "아무것도 모르는 당신을 위한 웹개발자가 되기 위한 기초 단계 테크트리 알려 드립니다. 이 로드맵을 완료하면 사이드 프로젝트를 시작할 수 있을거예요.",
      sectionCount: 3,
    },
    basic: [
      {
        imageUrl:
          "https://i.ytimg.com/vi/OGFgdro160I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBcbcyJ2J0NZPQIJf7enHuEBrZQEA",
        title: "HTML",
        subtitle: "HTML 기초",
        author: "생활코딩",
        time: 361,
        videoCount: 44,
      },
      {
        imageUrl:
          "https://i.ytimg.com/vi/ONcmkf07EuI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAyzhlUVi-Y07zrF43eLDRRleRFVw",
        title: "CSS",
        subtitle: "CSS 기초",
        author: "생활코딩",
        time: 544,
        videoCount: 61,
      },
    ],
    middle: [
      {
        imageUrl:
          "https://i.ytimg.com/vi/2yGhb-z8VTQ/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLA2WZzpRBJnklfEO01dwe27zGnlDA",
        title: "JavaScript",
        subtitle: "ES2021 JavaScript 강좌",
        author: "Zero Cho",
        time: 825,
        videoCount: 74,
      },
      {
        imageUrl:
          "https://i.ytimg.com/vi/aYwSrzeyUOk/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYTyBcKGUwDw==&rs=AOn4CLAMDyAawC9uX6i8B7mYBcl_qUYXpg",
        title: "React.JS",
        subtitle: "웹게임으로 배우는 React.JS",
        author: "Zero Cho",
        time: 544,
        videoCount: 61,
      },
    ],
    advenced: [
      {
        imageUrl:
          "https://i.ytimg.com/vi/9KOaR6QMb9A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCborAr7_V25ZllPRWwW3ZXJV8BJA",
        title: "Next.JS",
        subtitle: "Next.JS",
        author: "생활코딩",
        time: 82,
        videoCount: 18,
      },
    ],
  },
};

const HTMLLectureData = [
  {
    title: "HTML - 수업소개",
    imageUrl:
      "https://i.ytimg.com/vi/OGFgdro160I/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQpGoEwHMwUpTtXUCiCwpD_XOefQ",
    time: "2:04",
  },
  {
    title: "HTML - 기술소개",
    imageUrl:
      "https://i.ytimg.com/vi/33DjsANwlJk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDLLK0s7s7iCLGhln8pTIGEQh14yg",
    time: "6:11",
  },
  {
    title: "HTML - 기본문법 1",
    imageUrl:
      "https://i.ytimg.com/vi/jSJM9iOiQ1g/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAkBCE9E2qMMnEoi4YPnv_AGYh-aQ",
    time: "10:08",
  },
  {
    title: "HTML - 기본문법 2",
    imageUrl:
      "https://i.ytimg.com/vi/zQTgBEWYbug/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvpVE_ZVX9jQkstK1Wj05qJ0xX1w",
    time: "9:37",
  },
  {
    title: "HTML - 하이퍼텍스트와 속성",
    imageUrl:
      "https://i.ytimg.com/vi/AE7foaifXMU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD4UR8cVc8v7-9zxI4Ka-3lY-enSA",
    time: "13:33",
  },
  {
    title: "HTML - 맥에서 텍스트 에디트 주의사항",
    imageUrl:
      "https://i.ytimg.com/vi/Oje3e4Ry5wE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJyA-xOq3EsHGn6hpmx1sZ0VL2dw",
    time: "1:21",
  },
  {
    title: "HTML - 태그의 중첩과 목록",
    imageUrl:
      "https://i.ytimg.com/vi/JiuYfoSEac4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDgdz2LSBk6b9-vopgby4snPcN9Eg",
    time: "9:15",
  },
  {
    title: "HTML - 문서의 구조",
    imageUrl:
      "https://i.ytimg.com/vi/gqg-toXZ_rE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCTBHgm_aZn3csCUqD9fjAHRKZMrA",
    time: "10:50",
  },
  {
    title: "HTML - DOCTYPE",
    imageUrl:
      "https://i.ytimg.com/vi/EgT5520Ztek/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAOmJc9XN1la8IRGTogdo4RV2MSmA",
    time: "3:59",
  },
  {
    title: "HTML - 웹사이트 만들기",
    imageUrl:
      "https://i.ytimg.com/vi/Tt3kr7whkb4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB9fnAVxgz2pxgm78NSNSEWyuudAw",
    time: "10:46",
  },
  {
    title: "HTML - 개발도구",
    imageUrl:
      "https://i.ytimg.com/vi/uim3Vr6crXI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA1NpKFQh8dk0WZQJLyqk-sP5TFaw",
    time: "15:51",
  },
  {
    title: "HTML - 변천사와 통계",
    imageUrl:
      "https://i.ytimg.com/vi/9VM7du__sUY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA6n1bc9-knZMe6w-1br1lQzktFZg",
    time: "8:49",
  },
  {
    title: "HTML - 단락 : p 태그",
    imageUrl:
      "https://i.ytimg.com/vi/z7DiQe4wnLc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCldJ7onVvHi5n1M_hSXrnSifp7xQ",
    time: "4:20",
  },
  {
    title: "HTML - 줄바꿈 : br",
    imageUrl:
      "https://i.ytimg.com/vi/HkX_3Kk5haE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYX9Zzo2B8LaEKLle6oT26pw0hjg",
    time: "4:08",
  },
  {
    title: "HTML - 이미지 : img",
    imageUrl:
      "https://i.ytimg.com/vi/V_ogge8xfDs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCbVapzQ52BdMAw8oWivxzaZ3f0tQ",
    time: "6:54",
  },
  {
    title: "HTML - 표1 : 기본",
    imageUrl:
      "https://i.ytimg.com/vi/XUTFXu0f4qo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBabDzfFyozYbmpDP5gwqUFP7Yfww",
    time: "10:00",
  },
  {
    title: "HTML - 표2 : 구조",
    imageUrl:
      "https://i.ytimg.com/vi/H84fuDj1Jxs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDjIj4Uhh9nuDfYJg0a2v0W2PYnFg",
    time: "5:58",
  },
  {
    title: "HTML - 표3 : 병합",
    imageUrl:
      "https://i.ytimg.com/vi/i7oKd-eKvdw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjfPuinctrNhgFppFwUP0g2JKgdQ",
    time: "5:10",
  },
  {
    title: "HTML - form 기본",
    imageUrl:
      "https://i.ytimg.com/vi/sFtZdlmgCVY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLATVVBozpaxPyijpRz6sf70Tx-ABQ",
    time: "12:20",
  },
  {
    title: "HTML - form : 문자입력",
    imageUrl:
      "https://i.ytimg.com/vi/-wMLXTISFFY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpdYIItQPrt-U7w5yf2E5L5f0V8A",
    time: "6:18",
  },
  {
    title: "HTML - form : dropdown list",
    imageUrl:
      "https://i.ytimg.com/vi/dNmubsrqDSA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvl1zymaOuQMlS2aGM0w-bd--y-w",
    time: "8:16",
  },
  {
    title: "HTML - form : radio.checkbox",
    imageUrl:
      "https://i.ytimg.com/vi/LYFOUIDBIp4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDZ5tl_J0rlwbUbr609a5SWDLt_Cw",
    time: "8:58",
  },
  {
    title: "HTML - form : button",
    imageUrl:
      "https://i.ytimg.com/vi/LnlIrDXwEr0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCcqTDrUsY0upHE2tV3xsdp0Vf6uA",
    time: "5:17",
  },
  {
    title: "HTML - form : hidden",
    imageUrl:
      "https://i.ytimg.com/vi/viGaQ2i8t44/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBgDZowBTi-rtKe1Ol7A1OKOU2asA",
    time: "4:48",
  },
  {
    title: "HTML - form : label",
    imageUrl:
      "https://i.ytimg.com/vi/_4upG-03td8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8b0JwSfaAg5-kPkEUxUIiwuIC5A",
    time: "9:09",
  },
  {
    title: "HTML - form : method",
    imageUrl:
      "https://i.ytimg.com/vi/OnX9TCSGvws/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAiQUpb1mX88HZG85HUvU75iqv2xg",
    time: "8:48",
  },
  {
    title: "HTML - form : 파일 업로드",
    imageUrl:
      "https://i.ytimg.com/vi/XY5G4RN_LKg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSRC1nPXHKBipzekqAjn2FAYOjTQ",
    time: "10:20",
  },
  {
    title: "HTML - 정보로서 HTML",
    imageUrl:
      "https://i.ytimg.com/vi/SfgcrR9952M/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBw_uZEyNdRtKW-4W3K8CtoNRCnKw",
    time: "1:30",
  },
  {
    title: "HTML - font",
    imageUrl:
      "https://i.ytimg.com/vi/pcOkHx1x3Y4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBBsd_gbQcbvFq1TWgAC2cGkn1fZQ",
    time: "6:35",
  },
  {
    title: "HTML - meta 태그",
    imageUrl:
      "https://i.ytimg.com/vi/zO5zHxX2lNI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqlSSj7WjYQzbYxcGcpbw3Ay_Nbg",
    time: "8:46",
  },
  {
    title: "HTML - 의미론적인 태그",
    imageUrl:
      "https://i.ytimg.com/vi/uDmNhHYecL4/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD06ivTbCMwTatZOpPRk7jqYar7sg",
    time: "12:59",
  },
  {
    title: "HTML - 검색엔진최적화 1",
    imageUrl:
      "https://i.ytimg.com/vi/owK8xxL7pps/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBU5D7aL1F4Zt2jM02EZ5hBxB43Bw",
    time: "7:26",
  },
  {
    title: "HTML - 검색엔진최적화 2",
    imageUrl:
      "https://i.ytimg.com/vi/-G2aDXiF8zE/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvBVDecbu7bLNvNK5nqWHLznTM0w",
    time: "11:40",
  },
  {
    title: "HTML - 검색엔진최적화 3",
    imageUrl:
      "https://i.ytimg.com/vi/TDSmp-QxVRU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBe4vujO4bbPTB8jzGGuFSX9LpSOQ",
    time: "6:08",
  },
  {
    title: "HTML - 검색엔진최적화 4 : 링크",
    imageUrl:
      "https://i.ytimg.com/vi/J_ZQhHpV6PQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDRQAQxpmBZGnmbxRBX8GwA2Jozfw",
    time: "4:41",
  },
  {
    title: "HTML - 검색엔진최적화 5 : 이미지와 제목",
    imageUrl:
      "https://i.ytimg.com/vi/jtjyNe1yfOM/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAsOBulWUwqm3NtcF7qFJ-9a8Hj0A",
    time: "9:41",
  },
  {
    title: "HTML - 검색엔진최적화 6 : robotstxt & sitemap",
    imageUrl:
      "https://i.ytimg.com/vi/hRmfZxXa3KA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_NdM_MT5bR54KEUQ54HfFG30TLg",
    time: "12:22",
  },
  {
    title: "HTML - 검색엔진최적화 7 : 페이지랭크",
    imageUrl:
      "https://i.ytimg.com/vi/hRmfZxXa3KA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_NdM_MT5bR54KEUQ54HfFG30TLg",
    time: "8:02",
  },
  {
    title: "HTML - 웹 개발자 도구",
    imageUrl:
      "https://i.ytimg.com/vi/q_8rVZmMt6M/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAIiACu96XsuO6KECwgAwvrb_qrog",
    time: "10:23",
  },
  {
    title: "HTML - 모바일 지원",
    imageUrl:
      "https://i.ytimg.com/vi/rF2nkJCH55c/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDcV_eMYCY19k-MouSGkFWOvrCIuQ",
    time: "6:00",
  },
  {
    title: "HTML - HTML5의 새로운 제출양식 1",
    imageUrl:
      "https://i.ytimg.com/vi/VNXx4Q2WFgU/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCWxCVFl4D4GhoDxsOVsD9W-hnfEA",
    time: "9:50",
  },
  {
    title: "HTML - HTML5의 새로운 제출양식 2",
    imageUrl:
      "https://i.ytimg.com/vi/_VTxM1JUfwI/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBUp14djygBI-xtBXI8SYqkODFgSw",
    time: "5:47",
  },
  {
    title: "HTML - HTML5 form 3 : 새로운 속성들",
    imageUrl:
      "https://i.ytimg.com/vi/36Z-N1wa9lA/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBAgGPEYso6wLvuKhQMH7eyr6RFzA",
    time: "6:45",
  },
  {
    title: "HTML - HTML5 form 4 : 입력 값 체크 ",
    imageUrl:
      "https://i.ytimg.com/vi/dJOhEj9_6gM/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBY0aJ1oF52h-jdMcbRSEFJQ9l-VA",
    time: "16:18",
  },
];

const HTMLYoutubeLinkData = [
  "https://www.youtube.com/embed/OGFgdro160I?si=R0d_huxSHeJfB42u",
  "https://www.youtube.com/embed/33DjsANwlJk?si=fq_zVI70g8u5XRu8",
  "https://www.youtube.com/embed/jSJM9iOiQ1g?si=S993El6UT-yeKInI",
  "https://www.youtube.com/embed/zQTgBEWYbug?si=T4O6Gju73t00Le2s",
  "https://www.youtube.com/embed/AE7foaifXMU?si=-inUreH_gH5yw6TQ",
  "https://www.youtube.com/embed/Oje3e4Ry5wE?si=gTkDYEG7MAK-PPhO",
  "https://www.youtube.com/embed/JiuYfoSEac4?si=ZZwbfcLRehKjxZJj",
  "https://www.youtube.com/embed/gqg-toXZ_rE?si=mqtPUuJ1nnWj6xkE",
  "https://www.youtube.com/embed/EgT5520Ztek?si=I6KWl0fnfkn-o8_U",
  "https://www.youtube.com/embed/Tt3kr7whkb4?si=lw1bbTe8pEbCvfWQ",
  "https://www.youtube.com/embed/uim3Vr6crXI?si=0abkFwf3liSriHkd",
  "https://www.youtube.com/embed/9VM7du__sUY?si=uAssoGGUS3OFojoT",
  "https://www.youtube.com/embed/z7DiQe4wnLc?si=5mnsY1PIGSYXbj8O",
  "https://www.youtube.com/embed/HkX_3Kk5haE?si=Xk20VVjkD2Y--N_J",
  "https://www.youtube.com/embed/V_ogge8xfDs?si=jDK6g4v-s-HnizAU",
  "https://www.youtube.com/embed/XUTFXu0f4qo?si=Zr9XUPHkz0Cz2-Fb",
  "https://www.youtube.com/embed/H84fuDj1Jxs?si=8U-9Z4JKDL0FqVWY",
  "https://www.youtube.com/embed/i7oKd-eKvdw?si=F9AS3IzM7lh_6xxO",
  "https://www.youtube.com/embed/sFtZdlmgCVY?si=70c6nJrxp_kbZ5Pe",
  "https://www.youtube.com/embed/-wMLXTISFFY?si=cBE0B-NbS-HdXZrn",
  "https://www.youtube.com/embed/dNmubsrqDSA?si=mdSfRUyKErbiZF46",
  "https://www.youtube.com/embed/LYFOUIDBIp4?si=aZqJ6YRmsgLm87GO",
  "https://www.youtube.com/embed/LnlIrDXwEr0?si=-aU6jHA4oPVVQ2i0",
  "https://www.youtube.com/embed/viGaQ2i8t44?si=n_ebRhg6aO480VKe",
  "https://www.youtube.com/embed/_4upG-03td8?si=l2Pwx4I1QFPZ1XTg",
  "https://www.youtube.com/embed/OnX9TCSGvws?si=5DXkrhNKQ2Zqys8B",
  "https://www.youtube.com/embed/XY5G4RN_LKg?si=twp43ErMvGGnIdZV",
  "https://www.youtube.com/embed/SfgcrR9952M?si=sBvbC_p4tSTkjXSa",
  "https://www.youtube.com/embed/pcOkHx1x3Y4?si=39-yD08h9-z8H-yi",
  "https://www.youtube.com/embed/zO5zHxX2lNI?si=L3pBJQbuA6iYBCkP",
  "https://www.youtube.com/embed/uDmNhHYecL4?si=iBU9vY3vg_I4dRJQ",
  "https://www.youtube.com/embed/owK8xxL7pps?si=Xtshgx9f8VSXt9nO",
  "https://www.youtube.com/embed/-G2aDXiF8zE?si=w_pIjrcquuJJQ0oh",
  "https://www.youtube.com/embed/TDSmp-QxVRU?si=kSbUoi8G2pwWX7hw",
  "https://www.youtube.com/embed/J_ZQhHpV6PQ?si=76BK2ydvUTT7r6rY",
  "https://www.youtube.com/embed/jtjyNe1yfOM?si=FfK12KfDBYcsLeeI",
  "https://www.youtube.com/embed/hRmfZxXa3KA?si=0z6CIF0oBM1efiEM",
  "https://www.youtube.com/embed/tagJ0lm6CK8?si=jxAV5XqLaZdw4NTQ",
  "https://www.youtube.com/embed/q_8rVZmMt6M?si=gqlCQ3F_dzP0SGs9",
  "https://www.youtube.com/embed/rF2nkJCH55c?si=ZGMzo754_oDdvfpD",
  "https://www.youtube.com/embed/VNXx4Q2WFgU?si=LYL47C3Qy8tHWJ5B",
  "https://www.youtube.com/embed/_VTxM1JUfwI?si=Ta0AaXWsp65aBNKV",
  "https://www.youtube.com/embed/36Z-N1wa9lA?si=OvU6B1lAbG6y8R-H",
  "https://www.youtube.com/embed/dJOhEj9_6gM?si=IM33mEkQUZ767hZS",
];
