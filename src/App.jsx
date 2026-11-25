import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Mobile Application Development</p>
        <h1>Student Task Manager</h1>
        <p className="sub">Installable. Offline-ready. Built with React + Vite.</p>
      </header>

      <section className="card">
        <h2>My Tasks</h2>
        <TaskList />
      </section>
    </main>
  );
}