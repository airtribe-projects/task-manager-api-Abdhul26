let tasks = [
  {
    id: 1,
    title: 'Set up environment',
    description: 'Install Node.js, npm, and git',
    completed: true,
  },
  {
    id: 2,
    title: 'Create a new project',
    description: 'Create a new project using the Express application generator',
    completed: true,
  },
  {
    id: 3,
    title: 'Install nodemon',
    description: 'Install nodemon as a development dependency',
    completed: true,
  },
  {
    id: 4,
    title: 'Install Express',
    description: 'Install Express',
    completed: false,
  },
  {
    id: 5,
    title: 'Install Mongoose',
    description: 'Install Mongoose',
    completed: false,
  },
  {
    id: 6,
    title: 'Install Morgan',
    description: 'Install Morgan',
    completed: false,
  },
  {
    id: 7,
    title: 'Install body-parser',
    description: 'Install body-parser',
    completed: false,
  },
  {
    id: 8,
    title: 'Install cors',
    description: 'Install cors',
    completed: false,
  },
  {
    id: 9,
    title: 'Install passport',
    description: 'Install passport',
    completed: false,
  },
  {
    id: 10,
    title: 'Install passport-local',
    description: 'Install passport-local',
    completed: false,
  },
  {
    id: 11,
    title: 'Install passport-local-mongoose',
    description: 'Install passport-local-mongoose',
    completed: false,
  },
  {
    id: 12,
    title: 'Install express-session',
    description: 'Install express-session',
    completed: false,
  },
  {
    id: 13,
    title: 'Install connect-mongo',
    description: 'Install connect-mongo',
    completed: false,
  },
  {
    id: 14,
    title: 'Install dotenv',
    description: 'Install dotenv',
    completed: false,
  },
  {
    id: 15,
    title: 'Install jsonwebtoken',
    description: 'Install jsonwebtoken',
    completed: false,
  },
]

// Get all tasks
exports.getTasks = (req, res) => {
  res.status(200).json(tasks)
}

// Get single task by ID
exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find((t) => t.id === id)
  if (!task) {
    return res.status(404).json({ error: 'Task not found' })
  }
  res.status(200).json(task)
}

// Create new task
exports.createTask = (req, res) => {
  const { title, description, completed } = req.body
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Invalid task data' })
  }
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed,
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
}

// Update task
exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id)
  const taskIndex = tasks.findIndex((t) => t.id === id)
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' })
  }

  const { title, description, completed } = req.body
  if (!title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Invalid task data' })
  }

  tasks[taskIndex] = { id, title, description, completed }
  res.status(200).json(tasks[taskIndex])
}

// Delete task
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id)
  const taskIndex = tasks.findIndex((t) => t.id === id)
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' })
  }
  tasks.splice(taskIndex, 1)
  res.status(200).json({ message: 'Task deleted' })
}
