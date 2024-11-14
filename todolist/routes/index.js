const express = require('express');
const Task = require('../model/Tasks');
const Joi = require('joi');
const router = express.Router();

// Definição do esquema de validação usando Joi
const tarefaSchema = Joi.object({
  id: Joi.number().integer().positive().optional(),
  nome: Joi.string().min(1).required(),
  prioridade: Joi.string().valid('Baixa', 'Média', 'Alta').required(),
});

/* GET página inicial */
router.get('/', function (req, res) {
  // Cria duas tarefas de exemplo se a lista estiver vazia
  if (Task.list().length === 0) {
    Task.new('Tarefa Padrão 1', 'Baixa');
    Task.new('Tarefa Padrão 2', 'Média');
  }

  // Obtém tarefa específica com base no parâmetro de consulta
  const tarefaSelecionada = Task.getElementById(req.query.tid);
  res.render('index', { tasks: Task.list(), task: tarefaSelecionada });
});

/* POST criar ou atualizar tarefa */
router.post('/tarefas', function (req, res) {
  console.log(req.body); // Exibe os dados recebidos

  // Remove o campo id se estiver vazio para evitar problemas de validação
  if (req.body.id === '') {
    delete req.body.id;
  }

  // Valida os dados da requisição de acordo com o esquema
  const { error, value } = tarefaSchema.validate(req.body);
  if (error) {
    console.log('Erro de validação:', error.details);
    res.render('index', { tasks: Task.list(), erro: 'Dados inválidos' });
    return;
  }

  const { id, nome, prioridade } = value;
  if (id === undefined) {
    // Cria uma nova tarefa se o id não estiver presente
    Task.new(nome, prioridade);
  } else {
    // Atualiza uma tarefa existente
    Task.update(id, nome, prioridade);
  }

  res.redirect('/');
});

/* GET deletar tarefa */
router.get('/tarefas/deletar/:id', function (req, res) {
  const { id } = req.params;

  // Valida o ID da tarefa
  const { error, value } = Joi.number().integer().positive().validate(id);

  if (error || !Task.delete(value)) {
    res.send('Erro ao tentar excluir a tarefa.');
    return;
  }

  res.redirect('/');
});

/* GET listar tarefas em ordem alfabética */
router.get('/tarefas/ordenar', function (req, res) {
  // Ordena as tarefas pelo nome em ordem alfabética
  const tarefasOrdenadas = Task.list().sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );

  // Renderiza a página de tarefas ordenadas
  res.render('tarefas', { tasks: tarefasOrdenadas });
});

/* POST marcar tarefa como finalizada */
router.post('/tarefas/finalizar', function (req, res) {
  const { id } = req.body;

  // Valida o ID da tarefa
  const { error, value } = Joi.number().integer().positive().validate(id);

  if (error) {
    res.render('index', { tasks: Task.list(), erro: 'ID de tarefa inválido' });
    return;
  }

  // Marca a tarefa como finalizada
  const tarefa = Task.getElementById(value);
  if (tarefa) {
    tarefa.finalizada = true;
  }

  res.redirect('/tarefas/ordenar');
});

/* GET contar total de tarefas */
router.get('/tarefas/total', function (req, res) {
  // Obtém o total de tarefas
  const totalTarefas = Task.list().length;
  res.render('contagem', { totalTarefas });
});

module.exports = router;
