export interface PriceItem {
  label: string;
  labelEn: string;
  price: string;
  priceEn: string;
  note?: string;
  noteEn?: string;
}

export interface ServiceData {
  id: string;
  chapterNumber: string;
  titleEn: string;
  displayTitle: string;
  titleJa: string;
  titleJaEn: string;
  description: string;
  descriptionEn: string;
  prices: PriceItem[];
  features?: string[];
  featuresEn?: string[];
  notes?: string[];
}

export const services: ServiceData[] = [
  {
    id: 'fishing',
    chapterNumber: '04',
    titleEn: 'FISHING',
    displayTitle: 'Fishing',
    titleJa: '釣り体験',
    titleJaEn: 'Fishing Experience',
    description: '平井川の清流で本格渓流釣り、お子様でも安心の釣り堀、小さなお子様も楽しめるつかみ捕り。初心者・お子様大歓迎、竿もエサもご用意しています。',
    descriptionEn: 'Enjoy authentic stream fishing in the clear Hirai River, a kid-friendly fishing pond, and hands-on fish catching for younger children. Beginners and children warmly welcome — rods and bait provided.',
    prices: [
      { label: '入園料', labelEn: 'Admission', price: '300円', priceEn: '¥300', note: '来園者1人（小学生以上）', noteEn: 'Per person (elementary school and above)' },
      { label: '渓流釣り', labelEn: 'Stream Fishing', price: '4,200円', priceEn: '¥4,200', note: 'ニジマス10尾放流', noteEn: '10 rainbow trout released' },
      { label: '貸竿', labelEn: 'Rod Rental', price: '280円', priceEn: '¥280' },
      { label: 'エサ', labelEn: 'Bait', price: '390円', priceEn: '¥390', note: 'イクラ・ブドウ虫', noteEn: 'Salmon roe / grubs' },
      { label: '釣り堀券', labelEn: 'Pond Ticket', price: '670円', priceEn: '¥670', note: '竿・エサ付き / 釣った分 1尾420円買取', noteEn: 'Rod & bait included / ¥420 per fish caught' },
      { label: 'つかみ捕り券', labelEn: 'Catching Ticket', price: '2,520円', priceEn: '¥2,520', note: '6尾 / 追加1尾420円', noteEn: '6 fish / ¥420 per extra' },
    ],
    features: [
      '初心者・お子様大歓迎',
      '竿・エサのご用意あり',
      '事故防止のため竿・仕掛けの持ち込みは禁止',
    ],
    featuresEn: [
      'Beginners and children welcome',
      'Rods and bait provided',
      'No personal rods or tackle allowed (for safety)',
    ],
  },
  {
    id: 'bbq',
    chapterNumber: '05',
    titleEn: 'BBQ',
    displayTitle: 'BBQ',
    titleJa: 'バーベキュー',
    titleJaEn: 'Barbecue',
    description: '鉄板・食器・食材の準備不要。屋根付きのバーベキューハウスで、野菜・ウィンナー・焼ソバ等が付いた本格BBQをお楽しみいただけます。年間を通して営業しています。',
    descriptionEn: 'No need to bring grills, dishes, or ingredients. Enjoy a full BBQ experience with vegetables, sausages, and yakisoba in our covered pavilion. Open year-round.',
    prices: [
      { label: '管理料', labelEn: 'Management Fee', price: '650円', priceEn: '¥650', note: '小学生以上1名（入園料300円+管理料350円）', noteEn: 'Per person (admission ¥300 + fee ¥350)' },
      { label: '釣りセット', labelEn: 'Fishing Set', price: '3,190円', priceEn: '¥3,190', note: '6尾放流・竿・エサ付き', noteEn: '6 trout released, rod & bait included' },
      { label: '豚肉バーベキュー', labelEn: 'Pork BBQ', price: '3,200円', priceEn: '¥3,200', note: '1名分', noteEn: 'Per person' },
      { label: '牛肉バーベキュー', labelEn: 'Beef BBQ', price: '3,700円', priceEn: '¥3,700', note: '1名分', noteEn: 'Per person' },
    ],
    features: [
      '鉄板・食器・食材の準備不要',
      '屋根付きバーベキューハウス',
      '食材に野菜・ウィンナー・焼ソバ・焼肉タレ・皿・箸・炭・鉄板付き',
      '道具・食材の持ち込みはできません',
      '年間通して営業',
    ],
    featuresEn: [
      'Grill, utensils, and ingredients all provided',
      'Covered BBQ pavilion',
      'Includes vegetables, sausages, yakisoba, sauce, plates, chopsticks, charcoal, and grill',
      'No outside food or equipment allowed',
      'Open year-round',
    ],
  },
  {
    id: 'food',
    chapterNumber: '06',
    titleEn: 'DINING',
    displayTitle: 'Dining',
    titleJa: 'さかな園食堂',
    titleJaEn: 'Sakana-en Restaurant',
    description: '名物「将門うどん」、冬季限定「シャモ肉鍋」など、清潔で広い店内でお食事だけのご利用もできます。釣ったニジマスを料理してお出しすることも可能です（焼代1匹150円）。',
    descriptionEn: 'Enjoy our signature "Masakado Udon" and winter-only "Shamo Chicken Hot Pot" in our spacious, clean restaurant. Dine-in without activities is welcome. We can cook your freshly caught trout (¥150 per fish).',
    prices: [
      { label: 'シャモ鍋うどん(4人前)', labelEn: 'Shamo Hot Pot Udon (4 servings)', price: '8,800円', priceEn: '¥8,800', note: '要予約 / 11月〜3月期間限定', noteEn: 'Reservation required / Nov-Mar only' },
      { label: 'シャモ肉鍋うどん', labelEn: 'Shamo Hot Pot Udon', price: '1,380円', priceEn: '¥1,380', note: '11月〜3月期間限定', noteEn: 'Nov-Mar only' },
      { label: '将門うどん', labelEn: 'Masakado Udon', price: '店内メニュー参照', priceEn: 'See in-store menu', note: '通年営業', noteEn: 'Year-round' },
      { label: '釣ったニジマスの調理', labelEn: 'Cook Your Catch (Trout)', price: '1匹150円', priceEn: '¥150 / fish', note: '焼代', noteEn: 'Grilling fee' },
    ],
    features: [
      'お食事だけのご利用も歓迎',
      '清潔で広い店内',
      '釣ったニジマスをその場で調理可能',
    ],
    featuresEn: [
      'Dine-in without activities welcome',
      'Clean and spacious interior',
      'We cook your freshly caught trout on the spot',
    ],
  },
  {
    id: 'enkai',
    chapterNumber: '07',
    titleEn: 'BANQUET',
    displayTitle: 'Banquet',
    titleJa: '宴会・宴席',
    titleJaEn: 'Banquet',
    description: '50名収容可能な大宴会場をご用意しています。5名様から相談承ります。お料理・人数によって料金が変動しますので、お気軽にお問い合わせください。',
    descriptionEn: 'Our large banquet hall accommodates up to 50 guests. Parties from 5 people welcome. Pricing varies by menu and group size — please contact us for details.',
    prices: [
      { label: '宴会コース', labelEn: 'Banquet Course', price: '5,500円〜', priceEn: 'From ¥5,500', note: '1名 / 飲み物別料金', noteEn: 'Per person / drinks not included' },
    ],
    features: [
      '50名収容可能な大宴会場',
      '5名様からご相談承ります',
      'お料理・人数によって料金が変動',
      '現在カラオケは使用できません',
    ],
    featuresEn: [
      'Large hall for up to 50 guests',
      'Parties from 5 people accepted',
      'Pricing varies by menu and group size',
      'Karaoke currently unavailable',
    ],
  },
];
