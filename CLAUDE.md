# CLAUDE.md — task-board プロジェクト設定

## プロジェクト概要

| 項目 | 内容 |
|---|---|
| プロジェクト名 | task-board |
| 使用技術 | React（Vite） |
| 目的 | Claude Codeコース学習用タスクボードアプリ |

---

## 開発ルール

### コードのコメント
- コメントは**必ず日本語**で書くこと
- 変数名・関数名は英語でよいが、説明コメントはすべて日本語

### Git / GitHub 運用
- **コードを変更するたびに GitHub にプッシュすること**
- コミットメッセージは日本語で書いてよい（例：「タスク追加機能を実装」）
- プッシュ前に `git status` で変更内容を確認すること

### コードスタイル
- コンポーネントは `src/components/` フォルダにまとめる
- ファイル名はパスカルケース（例：`TaskCard.jsx`）
- 不要なコンソールログは残さない

---

## 技術スタック

| カテゴリ | ツール |
|---|---|
| フレームワーク | React 18 |
| ビルドツール | Vite |
| 言語 | JavaScript（JSX） |
| スタイル | CSS / CSS Modules（予定） |

---

## よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# GitHub へプッシュ
git add .
git commit -m "変更内容を日本語で記述"
git push origin main
```

---

## 注意事項
- `.env` ファイルは Git 管理外（`.gitignore` に追加済みであること）
- `node_modules/` は絶対にプッシュしない
