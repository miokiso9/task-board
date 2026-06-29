import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

// ローカルストレージのキー名
const STORAGE_KEY = 'task-board-tasks'

// アプリ全体のルートコンポーネント
// タスクの状態管理と操作関数をここで一括管理する
function App() {
  // 初期値にローカルストレージの保存データを使う（なければ空配列）
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  // tasksが変わるたびにローカルストレージへ保存する
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // 新しいタスクを追加する
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // 作成時刻をIDとして使う
      text,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  // タスクの完了・未完了を切り替える
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // タスクを削除する
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="app">
      <h1 className="app-title">タスクボード</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
