# さかな園 コーポレートサイト

## プロジェクト概要
さかな園（Sakana-en）の公式ウェブサイト。
釣り体験を中心とした施設の魅力を伝えるサイト。

## 技術スタック
- Astro 5.x
- Tailwind CSS v4
- TypeScript strict mode
- ホスティング: Cloudflare Pages（予定）

## ディレクトリ規約
- src/components/hero/     ヒーロー関連
- src/components/sections/ 各コンテンツセクション
- src/components/layout/   ヘッダー/フッター/共通
- src/data/                TypeScriptデータファイル
- mockup/                  デザインモック（参考資料、実装には直接使わない）
- public/images/{section}/ セクション別画像
- public/videos/           動画

## コーディング規約
- コンポーネント名: PascalCase（例: VideoHero.astro）
- データファイル名: camelCase（例: sections.ts）
- 画像は WebP + 必要に応じ AVIF
- インラインCSSは最小限、Tailwindクラスを優先
- ただし @keyframes と mask-image は <style> に残してOK
- アニメーションは CSS 優先、JSは最小限
- すべてのコンポーネントに TypeScript 型定義

## モックの扱い
mockup/ 配下のHTMLファイルは完成モック（参考資料）。
Claude Codeはこのファイルを構造リファレンスとして参照するが、
直接コピーはせず、Astro + Tailwindに変換して実装すること。

## アクセシビリティ要件
- prefers-reduced-motion: reduce 対応
- キーボード操作でメニュー開閉可能
- 画像には意味のあるalt
- コントラスト比 WCAG AA以上

## パフォーマンス目標
- Lighthouse Performance 90+
- CLS 0.1以下
- LCP 2.5秒以下
