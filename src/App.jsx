import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

// アプリ全体のルートコンポーネント
// タスクの状態管理と操作関数をここで一括管理する
function App() {
  // タスクの配列を状態として管理する
  // 各タスクは { id, text, completed } の形
  const [tasks, setTasks] = useState([])

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
