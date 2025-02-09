document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskTextElement.style.textDecoration = 'line-through';
            } else {
                taskTextElement.style.textDecoration = 'none';
            }
        });

        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text';
        taskTextElement.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskTextElement);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
