# 🚀 My Portfolio

個人ポートフォリオサイト

## 📝 概要

Next.js + TypeScript + Tailwind CSSで作成したポートフォリオサイト。
未経験からのWebエンジニア転職活動用。

## 🛠️ 使用技術

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS v4
- Biome（リンティング・フォーマット）
- React Icons

## 📁 ファイル構成

```
src/app/_components/
├── AboutSection.tsx      # 自己紹介
├── HeroSection.tsx       # メインビジュアル
├── SkillsSection.tsx     # スキル一覧
├── ProjectsSection.tsx   # 制作物
├── ContactSection.tsx    # 連絡先
├── Nav.tsx              # ナビゲーション
├── Footer.tsx           # フッター
└── constants/           # 定数管理
```

## 🚀 開発環境

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev
# → http://localhost:3000
```

## � コマンド

```bash
pnpm dev      # 開発サーバー
pnpm build    # ビルド
pnpm start    # 本番サーバー
pnpm lint     # Biome チェック
pnpm format   # Biome フォーマット
```

## 📝 メモ

### コンテンツ更新時の編集箇所
- プロジェクト追加: `ProjectsSection.tsx`
- スキル追加: `SkillsSection.tsx`, `constants/techs.ts`
- 自己紹介修正: `AboutSection.tsx`, `HeroSection.tsx`
- 連絡先更新: `ContactSection.tsx`, `HeroSection.tsx`

### 開発時の注意点
- Biomeの設定: `biome.json`
- Tailwind v4使用（設定ファイル不要）
- 各セクションIDは静的（ページ内リンク用）

