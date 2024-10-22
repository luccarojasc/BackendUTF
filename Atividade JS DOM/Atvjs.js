var tarefaList = [];
var count = 1;

function addTarefa(name) {
  var newTarefa = { id: count++, name: name};
  tarefaList.push(newTarefa); 
  localStorage.setItem('tarefaList', JSON.stringify(tarefaList)); 
  renderTarefaList();
}


function deleteTarefa(tarefaId) {
  var updatedTarefaList = tarefaList.filter(function (tarefa) {
    return tarefa.id !== tarefaId; 
  });

  if (updatedTarefaList.length < tarefaList.length) { 
    tarefaList = updatedTarefaList;
    localStorage.setItem('tarefaList', JSON.stringify(tarefaList)); 
    renderTarefaList();
  } else {
    alert('Tarefa não encontrada.');
  }
}


function getTarefaList() {
  var storedList = JSON.parse(localStorage.getItem('tarefaList'));
  tarefaList = storedList || [];
}

function renderTarefaList() {
  var tarefaListElement = document.getElementById('tarefaList');
  tarefaListElement.innerHTML = '';

  tarefaList.forEach(function (tarefa) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span class="tarefa-name">' + tarefa.name + '<button class="delete-button" onclick="deleteTarefa(' + tarefa.id + ')">Excluir</button>';
    tarefaListElement.appendChild(listItem);
  });
}

getTarefaList();

function renderTarefaList() {
    var tarefaListElement = document.getElementById('tarefaList');
    tarefaListElement.innerHTML = '';
  
    tarefaList.forEach(function (tarefa) {
      var listItem = document.createElement('li');
      var tarefaName = document.createElement('span');
      tarefaName.className = 'tarefa-name';
      tarefaName.textContent = tarefa.name;
      var tarefaStatus = document.createElement('span');
      tarefaStatus.className = 'tarefa-status';
      var statusText = document.createElement('span');
      statusText.textContent = 'Concluída:';
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          listItem.style.backgroundColor = 'slateblue';
          listItem.style.color = 'white';
        } else {
          listItem.style.backgroundColor = '#e0e0e0';
          listItem.style.color = 'black'; 
        }
      });
      tarefaStatus.appendChild(statusText);
      tarefaStatus.appendChild(checkbox);
      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Excluir';
      deleteButton.onclick = function() {
        deleteTarefa(tarefa.id);
      };
      listItem.appendChild(tarefaName);
      listItem.appendChild(tarefaStatus);
      listItem.appendChild(deleteButton);
      tarefaListElement.appendChild(listItem);
    });
  }
  
  
  

document.getElementById('tarefaForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('nameInput');
  addTarefa(nameInput.value);
  nameInput.value = '';
});
