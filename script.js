document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const descriptionText = descriptionInput.value.trim();
    if (taskText !== '') {
      addTask(taskText, descriptionText);
      taskInput.value = '';
      descriptionInput.value = '';
    }
  });

  function addTask(taskText, descriptionText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="task-details">
        <span class="task-name">${taskText}</span>
        <span class="task-description">${descriptionText}</span>
      </div>
      <div class="task-buttons">
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
      </div>
    `;
    taskList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
      const newTaskText = prompt('Enter new task:');
      const newDescriptionText = prompt('Enter new description:');
      if (newTaskText !== null && newTaskText.trim() !== '') {
        li.querySelector('.task-name').textContent = newTaskText;
        li.querySelector('.task-description').textContent = newDescriptionText;
      }
    });
  }
});
