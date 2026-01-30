import React, { useState } from 'react';

// Типы
type TaskSize = 'large' | 'medium' | 'small';
type TaskStatus = 'todo' | 'inProgress' | 'done';

interface Task {
  id: string;
  text: string;
  size: TaskSize;
  status: TaskStatus;
}

const Home: React.FC = () => {
  // Инициализация задач
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Завершить проект', size: 'large', status: 'todo' },
    { id: '2', text: 'Сделать уборку', size: 'medium', status: 'inProgress' },
    { id: '3', text: 'Купить продукты', size: 'medium', status: 'todo' },
    { id: '4', text: 'Позвонить маме', size: 'small', status: 'done' },
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [selectedSize, setSelectedSize] = useState<TaskSize>('medium');

  // Статистика
  const completedTasks = tasks.filter(task => task.status === 'done').length;
  const inProgressTasks = tasks.filter(task => task.status === 'inProgress').length;
  const todoTasks = tasks.filter(task => task.status === 'todo').length;

  // Добавление задачи
  const addTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      size: selectedSize,
      status: 'todo'
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  // Изменение статуса
  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newStatus: TaskStatus = 
          task.status === 'todo' ? 'inProgress' :
          task.status === 'inProgress' ? 'done' : 'todo';
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  // Удаление задачи
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Статистика */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
            <div className="text-gray-600">Выполнено</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{inProgressTasks}</div>
            <div className="text-gray-600">В процессе</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{todoTasks}</div>
            <div className="text-gray-600">Осталось</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Задачи</h1>
          
          {/* Список задач */}
          <div className="space-y-4 mb-8">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`w-6 h-6 rounded border-2 ${
                      task.status === 'done' 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300'
                    }`}
                  >
                    {task.status === 'done' && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </button>
                  <div>
                    <p className={task.status === 'done' ? 'line-through text-gray-500' : ''}>
                      {task.text}
                    </p>
                    <div className="flex space-x-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        task.size === 'large' ? 'bg-red-100 text-red-800' :
                        task.size === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.size === 'large' ? 'Большая' : 
                         task.size === 'medium' ? 'Средняя' : 'Маленькая'}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        task.status === 'done' ? 'bg-green-100 text-green-800' :
                        task.status === 'inProgress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.status === 'done' ? 'Выполнено' :
                         task.status === 'inProgress' ? 'В процессе' : 'К выполнению'}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          {/* Добавление новой задачи */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Добавить задачу</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Введите задачу..."
                className="flex-grow p-3 border rounded-lg"
              />
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as TaskSize)}
                className="p-3 border rounded-lg"
              >
                <option value="small">Маленькая</option>
                <option value="medium">Средняя</option>
                <option value="large">Большая</option>
              </select>
              <button
                onClick={addTask}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;