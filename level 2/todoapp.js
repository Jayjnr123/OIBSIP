function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const pendingTasks = document.getElementById('pendingTasks');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput;
    newTask.onclick = function() {
      completeTask(this);
    };
    pendingTasks.appendChild(newTask);
    document.getElementById('taskInput').value = '';
  }
  
  function completeTask(task) {
    const completedTasks = document.getElementById('completedTasks');
    task.onclick = null; // Remove the onclick event to prevent further completion
    completedTasks.appendChild(task);
  }
  