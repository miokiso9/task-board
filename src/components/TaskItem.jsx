import './TaskItem.css'

// 1件のタスクを表示するコンポーネント
// task: { id, text, completed } のタスクオブジェクト
// onToggle: 完了状態を切り替える関数
// onDelete: タスクを削除する関数
function TaskItem({ task, onToggle, onDelete }) {
  return (
    // 完了済みの場合はcompleted クラスを追加してグレー表示にする
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {/* 完了チェックボックス */}
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {/* タスクのテキスト（完了済みは取り消し線＋グレー） */}
      <span className="task-text">{task.text}</span>
      {/* 削除ボタン */}
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem
