import TaskItem from './TaskItem'
import './TaskList.css'

// タスク一覧を表示するコンポーネント
// tasks: タスクオブジェクトの配列
// onToggle: 完了切り替え関数
// onDelete: 削除関数
function TaskList({ tasks, onToggle, onDelete }) {
  // タスクが1件もない場合はメッセージを表示
  if (tasks.length === 0) {
    return <p className="empty-message">タスクがありません。上の入力欄から追加してください。</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
