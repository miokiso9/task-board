import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Viteの設定ファイル
// base: GitHub Pagesではリポジトリ名がサブパスになるため指定が必要
export default defineConfig({
  plugins: [react()],
  base: '/task-board/',
})
