import { qnaData as KimDoUnQna } from "./InterviewQnA/KimDoUn";
import { qnaData as SongTaeGiQna } from "./InterviewQnA/SongTaeGi";
import { qnaData as ParkJiHunQna } from "./InterviewQnA/ParkJiHun";
import { qnaData as LeeJaeRangQna } from "./InterviewQnA/LeeJaeRang";
import { qnaData as YunJungHoQna } from "./InterviewQnA/YunJungHo";
import { qnaData as KimWhaRimQna } from "./InterviewQnA/KimWhaRim";

export const data = {
  headerData: {
    title: "선배와의 인터뷰",
    titleDescription: "배재대학교 정보보안학과를 졸업하신 선배님들을 만나봅시다."
  },
  pageData: [
    {
      cardData: {
        label: "모의 해킹 전문가 김도언 선배님 (14학번)", src: "/interview/Interview1.JPG"
      },
      qnaData: KimDoUnQna
    },
    {
      cardData: {
        label: "정보보안 담당자 송태기 선배님 (14학번)", src: "/interview/Interview2.JPG"
      },
      qnaData: SongTaeGiQna
    },
    {
      cardData: {
        label: "보안 전문가 윤정호 선배님 (14학번)", src: "/interview/Interview3.JPG"
      },
      qnaData: YunJungHoQna
    },
    {
      cardData: {
        label: "보안 컨설팅 전문가 이재랑 선배님 (15학번)", src: "/interview/Interview4.jpg"
      },
      qnaData: LeeJaeRangQna
    },
    {
      cardData: {
        label: "리버싱 엔지니어 박지훈 선배님 (15학번)", src: "/interview/Interview5.jpg"
      },
      qnaData: ParkJiHunQna
    },
    {
      cardData: {
        label: "리버싱 엔지니어 김화림 선배님 (16학번)", src: "/interview/Interview6.jpg"
      },
      qnaData: KimWhaRimQna
    }
  ]
};

export const storyData = {
  headerData: {
    title: "선배와의 인터뷰",
    titleDescription: "배재대학교 정보보안학과를 졸업하신 선배님들을 만나봅시다."
  },
  pageData: {
    cardData: {
      label: "보안 컨설팅 전문 이재랑", src: "/interview/Interview6.JPG"
    },
    qnaData: {
      list: [
        {
          id: 1,
          label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "정보보안 전문가가 되기 위해서는 다양한 보안 분야의 시야를 넓히는 것이 중요합니다." },
              { id: 2, content: "공격자의 공격 패턴을 파악하고 적절한 대책을 제시할 수 있어야 하기 때문에, 공격자보다 더 다양한 지식과 해당 분야에 대한 이해가 필요합니다." },
              { id: 3, content: "이처럼 정보보안 전문가는 보안 사고 예방 및 대응을 위해서 개발 언어별 프로그래밍 지식과 네트워크, 시스템, DB에 관한 다양한 지식이 필요합니다." },
              { id: 4, content: " 해킹과 같은 고급 기술이 아니라 개발과 같은 원천 기술이라 의아할 수 있지만 정보보안은 수학과 같이 원리를 알고 이를 응용해 분석할 수 있는 능력이 필요합니다." },
              { id: 5, content: "예를 들어 웹 모의해킹을 잘 하려면 공격 패턴을 익히는 것보다, 웹 서버를 개발해보고 시큐어 코딩을 적용해보며 각 로직 별로 공격을 수행해 보는 것이 더 중요합니다. 개발이 어떻게 되어 있는지 알아야 공격이 가능하고, " },
              { id: 6, content: "이런 Insight가 생겨야 시스템을 보고 분석할 수 있는 능력이 생기기 때문에, 패턴이나 공격 기법만 외워서는 절대 보안 전문가로 거듭날 수 없습니다." },
            ],
          }
        },
        {
          id: 2,
          label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "정보보안 전문가가 되기 위해서는 다양한 보안 분야의 시야를 넓히는 것이 중요합니다." },
              { id: 2, content: "공격자의 공격 패턴을 파악하고 적절한 대책을 제시할 수 있어야 하기 때문에, 공격자보다 더 다양한 지식과 해당 분야에 대한 이해가 필요합니다." },
              { id: 3, content: "이처럼 정보보안 전문가는 보안 사고 예방 및 대응을 위해서 개발 언어별 프로그래밍 지식과 네트워크, 시스템, DB에 관한 다양한 지식이 필요합니다." },
              { id: 4, content: " 해킹과 같은 고급 기술이 아니라 개발과 같은 원천 기술이라 의아할 수 있지만 정보보안은 수학과 같이 원리를 알고 이를 응용해 분석할 수 있는 능력이 필요합니다." },
              { id: 5, content: "예를 들어 웹 모의해킹을 잘 하려면 공격 패턴을 익히는 것보다, 웹 서버를 개발해보고 시큐어 코딩을 적용해보며 각 로직 별로 공격을 수행해 보는 것이 더 중요합니다. 개발이 어떻게 되어 있는지 알아야 공격이 가능하고, " },
              { id: 6, content: "이런 Insight가 생겨야 시스템을 보고 분석할 수 있는 능력이 생기기 때문에, 패턴이나 공격 기법만 외워서는 절대 보안 전문가로 거듭날 수 없습니다." },
            ],
          }
        },
        {
          id: 3,
          label: '"주로 사용하는 툴이나 도구가 무엇인가요?"',
          largeDescriptionData: {
            descs: [
              { id: 1, content: "정보보안 전문가가 되기 위해서는 다양한 보안 분야의 시야를 넓히는 것이 중요합니다." },
              { id: 2, content: "공격자의 공격 패턴을 파악하고 적절한 대책을 제시할 수 있어야 하기 때문에, 공격자보다 더 다양한 지식과 해당 분야에 대한 이해가 필요합니다." },
              { id: 3, content: "이처럼 정보보안 전문가는 보안 사고 예방 및 대응을 위해서 개발 언어별 프로그래밍 지식과 네트워크, 시스템, DB에 관한 다양한 지식이 필요합니다." },
              { id: 4, content: " 해킹과 같은 고급 기술이 아니라 개발과 같은 원천 기술이라 의아할 수 있지만 정보보안은 수학과 같이 원리를 알고 이를 응용해 분석할 수 있는 능력이 필요합니다." },
              { id: 5, content: "예를 들어 웹 모의해킹을 잘 하려면 공격 패턴을 익히는 것보다, 웹 서버를 개발해보고 시큐어 코딩을 적용해보며 각 로직 별로 공격을 수행해 보는 것이 더 중요합니다. 개발이 어떻게 되어 있는지 알아야 공격이 가능하고, " },
              { id: 6, content: "이런 Insight가 생겨야 시스템을 보고 분석할 수 있는 능력이 생기기 때문에, 패턴이나 공격 기법만 외워서는 절대 보안 전문가로 거듭날 수 없습니다." },
            ],
          }
        }
      ]
    }
  }
};