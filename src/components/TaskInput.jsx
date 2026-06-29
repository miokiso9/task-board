import { useState } from 'react'
import './TaskInput.css'

// タスクを入力して追加するフォームコンポーネント
// onAdd: タスク追加時に呼ぶ関数（App.jsxから受け取る）
function TaskInput({ onAdd }) {
  // 入力中のテキストをローカルで管理する
  const [text, setText] = useState('')

  // フォーム送信（Enterキーまたは追加ボタン押下）時の処理
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return // 空白だけの入力は追加しない
    onAdd(text.trim())
    setText('') // 追加後は入力欄をリセット
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力してください..."
      />
      <button className="add-button" type="submit">
        追加
      </button>
    </form>
  )
}

export default TaskInput
