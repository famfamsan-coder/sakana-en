export interface FacilityService {
  id: string;
  label: string;
  labelEn: string;
  href: string;
}

export interface Facility {
  name: string;
  nameEn: string;
  subtitleJa: string;
  subtitleEn: string;
  tagline: { line1: string; line2: string; line1En: string; line2En: string };
  heroTagline: string;
  eyebrow: { location: string; river: string; source: string };
  heroTitle: { line1: string; accent: string; line1suffix: string; line2: string };
  address: { postal: string; line1: string; line2: string; mapUrl: string };
  contact: { tel: string; telDisplay: string; fax: string };
  hours: { open: string; close: string; activity: string; closed: string; closedNote: string; closedEn: string; closedNoteEn: string };
  parking: string;
  parkingEn: string;
  payment: string;
  paymentEn: string;
  sns: { x: { url: string; handle: string } };
  services: FacilityService[];
  navServices: FacilityService[];
  footerServices: Array<{ label: string; labelEn: string; href: string }>;
}

export const facility: Facility = {
  name: "さかな園",
  nameEn: "SAKANA-EN",
  subtitleJa: "日の出町自然休養村",
  subtitleEn: "Hinode Natural Resort",
  tagline: {
    line1: "太陽と、みどりの園。",
    line2: "大自然にあえる場所。",
    line1En: "Sun & Green Haven.",
    line2En: "Where nature awaits.",
  },
  heroTagline: "Sun & Green Haven",
  eyebrow: {
    location: "Tokyo — Hinode",
    river: "Hirai River",
    source: "平井川源流",
  },
  heroTitle: {
    line1: "自然と",
    accent: "ふれあう",
    line1suffix: "、",
    line2: "学び遊ぶ日。",
  },
  address: {
    postal: "〒190-0181",
    line1: "東京都西多摩郡日の出町",
    line2: "大字大久野3882",
    mapUrl: "https://www.google.com/maps/place/%E3%80%92190-0181+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E6%97%A5%E3%81%AE%E5%87%BA%E7%94%BA%E5%A4%A7%E4%B9%85%E9%87%8E3882/@35.7646106,139.205975,17z/",
  },
  contact: {
    tel: "042-597-4911",
    telDisplay: "042 — 597 — 4911",
    fax: "042-597-4912",
  },
  hours: {
    open: "9:00",
    close: "16:30",
    activity: "9:00-16:00",
    closed: "毎週火曜日",
    closedNote: "祝日の場合は翌日",
    closedEn: "Tuesdays",
    closedNoteEn: "Following day if Tuesday is a holiday",
  },
  parking: "無料・100台完備",
  parkingEn: "Free parking, 100 spaces",
  payment: "現金のみ",
  paymentEn: "Cash only",
  sns: {
    x: { url: "https://x.com/hinode_sakanaen", handle: "@hinode_sakanaen" },
  },
  services: [
    { id: "fishing", label: "渓流釣り・釣り堀", labelEn: "Fishing", href: "#fishing" },
    { id: "bbq", label: "バーベキュー", labelEn: "BBQ", href: "#bbq" },
    { id: "food", label: "さかな園食堂", labelEn: "Dining", href: "#food" },
    { id: "enkai", label: "宴会・宴席", labelEn: "Banquet", href: "#enkai" },
    { id: "access", label: "アクセス", labelEn: "Access", href: "#access" },
    { id: "contact", label: "お問い合わせ", labelEn: "Contact", href: "tel:042-597-4911" },
  ],
  navServices: [
    { id: "fishing", label: "渓流釣り・釣り堀", labelEn: "Fishing", href: "#fishing" },
    { id: "bbq", label: "バーベキュー", labelEn: "BBQ", href: "#bbq" },
    { id: "food", label: "さかな園食堂", labelEn: "Dining", href: "#food" },
    { id: "enkai", label: "宴会・宴席", labelEn: "Banquet", href: "#enkai" },
    { id: "access", label: "アクセス", labelEn: "Access", href: "#access" },
    { id: "contact", label: "お問い合わせ", labelEn: "Contact", href: "tel:042-597-4911" },
  ],
  footerServices: [
    { label: "渓流釣り", labelEn: "Stream Fishing", href: "#fishing" },
    { label: "釣り堀", labelEn: "Fishing Pond", href: "#fishing" },
    { label: "つかみ捕り", labelEn: "Fish Catching", href: "#fishing" },
    { label: "バーベキュー", labelEn: "Barbecue", href: "#bbq" },
    { label: "さかな園食堂", labelEn: "Restaurant", href: "#food" },
    { label: "宴会・宴席", labelEn: "Banquet", href: "#enkai" },
  ],
};
