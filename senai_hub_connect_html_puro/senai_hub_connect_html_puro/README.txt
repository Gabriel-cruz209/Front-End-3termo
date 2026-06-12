SENAI HUB + SENAI Connect - HTML/CSS/JS puro

Como executar:
1. Extraia o ZIP.
2. Abra o arquivo index.html no navegador.
3. Na tela de login, clique em Entrar. Pode usar qualquer e-mail e senha.

Persistência:
- Os dados de cadastro, edição e exclusão ficam salvos no LocalStorage do navegador.
- Para limpar os dados e voltar ao padrão, abra o console do navegador e execute:
  localStorage.removeItem('senaiHubConnectDataV1');
  localStorage.removeItem('senaiHubSessionV1');
  location.reload();

Páginas implementadas:
- Login SENAI HUB
- Hub de Aplicações
- Visão geral
- Alunos
- Professores
- Turmas e Cursos
- Frequência / Gerenciar frequência
- Localização
- Contratos / Contrato alunos
- Salário
- Relatório

Observação:
- Projeto feito sem bibliotecas externas, usando apenas HTML, CSS e JavaScript puro.
