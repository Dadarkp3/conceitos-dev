const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const {title, name} = request.query;
  console.log(title, name);
	return response.json([
		'Project 1',
		'Project 2'
	]);
});

app.post('/teste', (req, res) => {
  console.log(req.body)
  return res.json([
  'Project 1',
  'Project 2',
  'Project 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const {id} = request.params;
  console.log(id);
  return response.json([
  'Project 4',
  'Project 2',
  'Project 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
  'Project 2',
  'Project 3',
  ]);
});

app.listen(3333, () => {
  console.log('🏃️ back-end started running');
});