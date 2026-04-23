export interface MarqueeImage {
  src: string;
  alt: string;
  caption: string;
}

export type MobileLayout = "hero-with-two" | "asymmetric-pair" | "single-hero";

export interface MarqueeData {
  id: string;
  chapterLabel: string;
  chapterNum: string;
  titleEn: string;
  titleJa: string;
  description: string;
  readMoreLabel: string;
  readMoreHref: string;
  direction: "left" | "right";
  duration: string;
  images: MarqueeImage[];
  mobileLayout: MobileLayout;
}

export const marquees: MarqueeData[] = [
  {
    id: "fishing",
    chapterLabel: "Chapter 01 / Fishing",
    chapterNum: "— 01",
    titleEn: "Fishing",
    titleJa: "釣りを愉しむ",
    description:
      "平井川の清流で渓流釣り、お子様でも安心の釣り堀、\n小さなお子様でも楽しめるつかみ捕り。竿もエサもご用意、手ぶらでどうぞ。",
    readMoreLabel: "料金詳細",
    readMoreHref: "#fishing",
    direction: "left",
    duration: "70s",
    mobileLayout: "hero-with-two",
    images: [
      { src: "/images/sample-02.webp", alt: "釣り道具一式", caption: "01_道具一式" },
      { src: "/images/sample-03.webp", alt: "親子で釣り体験", caption: "02_親子で体験" },
      { src: "/images/sample-09.webp", alt: "ニジマス", caption: "03_ニジマス" },
      { src: "/images/sample-01.webp", alt: "平井川の清流", caption: "04_平井川" },
      { src: "/images/sample-04.webp", alt: "渓流の風景", caption: "05_渓流" },
    ],
  },
  {
    id: "eat",
    chapterLabel: "Chapter 02 / Dining",
    chapterNum: "— 02",
    titleEn: "Eat",
    titleJa: "食す愉しみ",
    description:
      "屋根付きBBQハウスで本格バーベキュー、\n名物将門うどんとシャモ鍋の食堂、50名収容の大宴会場。釣ったニジマスも調理承ります。",
    readMoreLabel: "メニュー",
    readMoreHref: "#bbq",
    direction: "right",
    duration: "75s",
    mobileLayout: "asymmetric-pair",
    images: [
      { src: "/images/sample-05.webp", alt: "燃える炭火", caption: "01_炭火" },
      { src: "/images/sample-06.webp", alt: "ニジマスの塩焼き", caption: "02_ニジマス塩焼き" },
      { src: "/images/sample-07.webp", alt: "BBQハウス", caption: "03_BBQハウス" },
      { src: "/images/sample-08.webp", alt: "食堂料理", caption: "04_食堂料理" },
      { src: "/images/sample-05.webp", alt: "炭火", caption: "05_炭火" },
    ],
  },
  {
    id: "nature",
    chapterLabel: "Chapter 03 / Nature",
    chapterNum: "— 03",
    titleEn: "Nature",
    titleJa: "自然と過ごす",
    description:
      "東京都西多摩郡日の出町、自然休養村として認定された地。\n平井川の大自然、四季折々の表情を、ご家族・ご友人と心ゆくまで。",
    readMoreLabel: "アクセス",
    readMoreHref: "#access",
    direction: "left",
    duration: "70s",
    mobileLayout: "single-hero",
    images: [
      { src: "/images/sample-01.webp", alt: "平井川の清流", caption: "01_平井川" },
      { src: "/images/sample-04.webp", alt: "渓谷の風景", caption: "02_渓谷" },
      { src: "/images/sample-03.webp", alt: "親子で自然体験", caption: "03_親子体験" },
      { src: "/images/sample-09.webp", alt: "ニジマス", caption: "04_ニジマス" },
    ],
  },
];
