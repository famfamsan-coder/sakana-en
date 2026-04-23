export interface PriceItem {
  label: string;
  price: string;
  note?: string;
}

export interface ServiceData {
  id: string;
  chapterNumber: string;
  titleEn: string;
  titleJa: string;
  description: string;
  prices: PriceItem[];
  features?: string[];
  notes?: string[];
}

export const services: ServiceData[] = [
  {
    id: 'fishing',
    chapterNumber: '04',
    titleEn: 'FISHING',
    titleJa: '釣り体験',
    description: '平井川の清流で本格渓流釣り、お子様でも安心の釣り堀、小さなお子様も楽しめるつかみ捕り。初心者・お子様大歓迎、竿もエサもご用意しています。',
    prices: [
      { label: '入園料', price: '300円', note: '来園者1人（小学生以上）' },
      { label: '渓流釣り', price: '4,200円', note: 'ニジマス10尾放流' },
      { label: '貸竿', price: '280円' },
      { label: 'エサ', price: '390円', note: 'イクラ・ブドウ虫' },
      { label: '釣り堀券', price: '670円', note: '竿・エサ付き / 釣った分 1尾420円買取' },
      { label: 'つかみ捕り券', price: '2,520円', note: '6尾 / 追加1尾420円' },
    ],
    features: [
      '初心者・お子様大歓迎',
      '竿・エサのご用意あり',
      '事故防止のため竿・仕掛けの持ち込みは禁止',
    ],
  },
  {
    id: 'bbq',
    chapterNumber: '05',
    titleEn: 'BBQ',
    titleJa: 'バーベキュー',
    description: '鉄板・食器・食材の準備不要。屋根付きのバーベキューハウスで、野菜・ウィンナー・焼ソバ等が付いた本格BBQをお楽しみいただけます。年間を通して営業しています。',
    prices: [
      { label: '管理料', price: '650円', note: '小学生以上1名（入園料300円+管理料350円）' },
      { label: '釣りセット', price: '3,190円', note: '6尾放流・竿・エサ付き' },
      { label: '豚肉バーベキュー', price: '3,200円', note: '1名分' },
      { label: '牛肉バーベキュー', price: '3,700円', note: '1名分' },
    ],
    features: [
      '鉄板・食器・食材の準備不要',
      '屋根付きバーベキューハウス',
      '食材に野菜・ウィンナー・焼ソバ・焼肉タレ・皿・箸・炭・鉄板付き',
      '道具・食材の持ち込みはできません',
      '年間通して営業',
    ],
  },
  {
    id: 'food',
    chapterNumber: '06',
    titleEn: 'DINING',
    titleJa: 'さかな園食堂',
    description: '名物「将門うどん」、冬季限定「シャモ肉鍋」など、清潔で広い店内でお食事だけのご利用もできます。釣ったニジマスを料理してお出しすることも可能です（焼代1匹150円）。',
    prices: [
      { label: 'シャモ鍋うどん(4人前)', price: '8,800円', note: '要予約 / 11月〜3月期間限定' },
      { label: 'シャモ肉鍋うどん', price: '1,380円', note: '11月〜3月期間限定' },
      { label: '将門うどん', price: '店内メニュー参照', note: '通年営業' },
      { label: '釣ったニジマスの調理', price: '1匹150円', note: '焼代' },
    ],
    features: [
      'お食事だけのご利用も歓迎',
      '清潔で広い店内',
      '釣ったニジマスをその場で調理可能',
    ],
  },
  {
    id: 'enkai',
    chapterNumber: '07',
    titleEn: 'BANQUET',
    titleJa: '宴会・宴席',
    description: '50名収容可能な大宴会場をご用意しています。5名様から相談承ります。お料理・人数によって料金が変動しますので、お気軽にお問い合わせください。',
    prices: [
      { label: '宴会コース', price: '5,500円〜', note: '1名 / 飲み物別料金' },
    ],
    features: [
      '50名収容可能な大宴会場',
      '5名様からご相談承ります',
      'お料理・人数によって料金が変動',
      '現在カラオケは使用できません',
    ],
  },
];
