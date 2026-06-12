const STORAGE_KEY = 'senaiHubConnectDataV1';
const SESSION_KEY = 'senaiHubSessionV1';

const state = {
  screen: localStorage.getItem(SESSION_KEY) ? 'hub' : 'login',
  page: 'dashboard',
  tab: 'turmas',
  freqTab: 'frequencia',
  dashboardTab: 'cadastros',
  contratosTab: 'empresa',
  drawer: null,
  modal: null,
  profileOpen: false,
  selectedTurmaId: 'turma-1',
  selectedAlunoId: 'aluno-1',
  selectedCursoLocId: 'curso-3',
  salaryAlunoId: 'aluno-1',
  search: '',
  supportModal: false,
};

const navItems = [
  ['dashboard', 'nav-dashboard', 'Visão geral'],
  ['alunos', 'nav-alunos', 'Alunos'],
  ['professores', 'nav-professores', 'Professores'],
  ['turmas', 'nav-turmas', 'Turmas'],
  ['cursos', 'nav-cursos', 'Cursos'],
  ['frequencia', 'nav-frequencia', 'Frequência'],
  ['gerenciar-frequencia', 'nav-gerenciar', 'Gerenciar frequência'],
  ['relatorio', 'nav-relatorio', 'Relatório'],
  ['localizacao', 'nav-localizacao', 'Localização'],
  ['contratos', 'nav-contratos', 'Contratos'],
  ['contrato-alunos', 'nav-contrato-alunos', 'Contrato alunos'],
  ['salario', 'nav-salario', 'Salário'],
];

function seedData() {
  return {
    user: {
      nome: 'Ana Souza',
      cargo: 'Secretária',
      email: 'ana.souza@senai.br',
      foto: '',
    },
    cursos: [
      { id: 'curso-1', nome: 'Técnico em Logística', inicio: '2025-05-12', termino: '2025-11-12', status: 'Ativo', alunos: 58, periodo: 'Manhã', carga: '120h', descricao: 'Capacita para planejamento, execução e controle da cadeia de suprimentos, estoques e transportes.' },
      { id: 'curso-2', nome: 'Técnico em Eletrotécnica', inicio: '2025-05-19', termino: '2025-11-19', status: 'Ativo', alunos: 24, periodo: 'Noite', carga: '120h', descricao: 'Formação técnica em instalações elétricas, comandos, segurança e manutenção de sistemas elétricos.' },
      { id: 'curso-3', nome: 'Automação Industrial', inicio: '2025-05-30', termino: '2025-11-30', status: 'Ativo', alunos: 64, periodo: 'Noite', carga: '120h', descricao: 'Formação técnica voltada para sistemas automatizados, controladores lógicos e integração de processos industriais.' },
      { id: 'curso-4', nome: 'Técnico em Informática', inicio: '2025-05-05', termino: '2025-11-05', status: 'Ativo', alunos: 41, periodo: 'Tarde', carga: '80h', descricao: 'Desenvolve habilidades em informática, sistemas operacionais, Microsoft Office e internet.' },
      { id: 'curso-5', nome: 'Mecânica Industrial', inicio: '2025-05-26', termino: '2025-11-26', status: 'Em andamento', alunos: 34, periodo: 'Manhã', carga: '120h', descricao: 'Curso para montagem, manutenção e interpretação de desenhos mecânicos industriais.' },
    ],
    turmas: [
      { id: 'turma-1', nome: 'TURMA AUT25-02', cursoId: 'curso-3', periodo: 'Noite', inicio: '2025-05-30', termino: '2025-11-30', status: 'Ativa', sala: 'BLOCO A - Sala 203', professorId: 'prof-1', alunosIds: ['aluno-1','aluno-4','aluno-7','aluno-8'], dias: 'Segunda, Quarta e Sexta' },
      { id: 'turma-2', nome: 'TURMA LOG25-01', cursoId: 'curso-1', periodo: 'Manhã', inicio: '2025-05-12', termino: '2025-11-12', status: 'Ativa', sala: 'BLOCO D - Sala 201', professorId: 'prof-3', alunosIds: ['aluno-2','aluno-6'], dias: 'Terça e Quinta' },
      { id: 'turma-3', nome: 'TURMA INF25-03', cursoId: 'curso-4', periodo: 'Tarde', inicio: '2025-05-05', termino: '2025-11-05', status: 'Ativa', sala: 'BLOCO B - Sala 105', professorId: 'prof-4', alunosIds: ['aluno-3','aluno-5'], dias: 'Segunda a Sexta' },
      { id: 'turma-4', nome: 'TURMA ELET25-01', cursoId: 'curso-2', periodo: 'Noite', inicio: '2025-05-19', termino: '2025-11-19', status: 'Ativa', sala: 'BLOCO C - Oficina', professorId: 'prof-2', alunosIds: [], dias: 'Terça e Quinta' },
      { id: 'turma-5', nome: 'TURMA MEC25-02', cursoId: 'curso-5', periodo: 'Manhã', inicio: '2025-05-26', termino: '2025-11-26', status: 'Em andamento', sala: 'BLOCO E - Laboratório', professorId: 'prof-5', alunosIds: [], dias: 'Segunda e Quarta' },
    ],
    professores: [
      { id: 'prof-1', nome: 'Marcos Almeida', cpf: '000.000.000-00', emailPessoal: 'marcos.almeida@email.com', emailInst: 'marcos.almeida@senai.br', senha: '12345678', nascimento: '1988-04-10', celular: '(19) 99999-0001', mae: 'Maria Almeida', pai: 'José Almeida', etnia: 'Não informado', especialidade: 'Automação Industrial', turmasIds: ['turma-1'], contrato: 'CLT', status: 'Ativo', contratacao: '2021-02-15', endereco: 'Rua das Indústrias, 100' },
      { id: 'prof-2', nome: 'Juliana Martins', cpf: '000.000.000-01', emailPessoal: 'juliana.martins@email.com', emailInst: 'juliana.martins@senai.br', senha: '12345678', nascimento: '1990-08-03', celular: '(19) 99999-0002', mae: 'Sônia Martins', pai: 'Carlos Martins', etnia: 'Não informado', especialidade: 'Eletrotécnica', turmasIds: ['turma-4'], contrato: 'CLT', status: 'Ativo', contratacao: '2021-03-10', endereco: 'Av. Brasil, 200' },
      { id: 'prof-3', nome: 'Carlos Henrique', cpf: '000.000.000-02', emailPessoal: 'carlos.henrique@email.com', emailInst: 'carlos.henrique@senai.br', senha: '12345678', nascimento: '1985-12-20', celular: '(19) 99999-0003', mae: 'Ana Henrique', pai: 'João Henrique', etnia: 'Não informado', especialidade: 'Logística', turmasIds: ['turma-2'], contrato: 'CLT', status: 'Ativo', contratacao: '2021-07-05', endereco: 'Rua Central, 30' },
      { id: 'prof-4', nome: 'Fernanda Souza', cpf: '000.000.000-03', emailPessoal: 'fernanda.souza@email.com', emailInst: 'fernanda.souza@senai.br', senha: '12345678', nascimento: '1992-03-14', celular: '(19) 99999-0004', mae: 'Luzia Souza', pai: 'Pedro Souza', etnia: 'Não informado', especialidade: 'Informática', turmasIds: ['turma-3'], contrato: 'CLT', status: 'Ativo', contratacao: '2021-09-20', endereco: 'Rua Sistemas, 45' },
      { id: 'prof-5', nome: 'Rafael Costa', cpf: '000.000.000-04', emailPessoal: 'rafael.costa@email.com', emailInst: 'rafael.costa@senai.br', senha: '12345678', nascimento: '1987-10-30', celular: '(19) 99999-0005', mae: 'Regina Costa', pai: 'Sérgio Costa', etnia: 'Não informado', especialidade: 'Mecânica', turmasIds: ['turma-5'], contrato: 'CLT', status: 'Ativo', contratacao: '2022-01-12', endereco: 'Rua Mecânica, 55' },
      { id: 'prof-6', nome: 'Ricardo Pereira', cpf: '000.000.000-05', emailPessoal: 'ricardo.pereira@email.com', emailInst: 'ricardo.pereira@senai.br', senha: '12345678', nascimento: '1991-06-01', celular: '(19) 99999-0006', mae: 'Paula Pereira', pai: 'Luís Pereira', etnia: 'Não informado', especialidade: 'Soldagem', turmasIds: [], contrato: 'Temporário', status: 'Férias', contratacao: '2022-04-01', endereco: 'Rua Solda, 88' },
      { id: 'prof-7', nome: 'Larissa Rocha', cpf: '000.000.000-06', emailPessoal: 'larissa.rocha@email.com', emailInst: 'larissa.rocha@senai.br', senha: '12345678', nascimento: '1993-11-07', celular: '(19) 99999-0007', mae: 'Marta Rocha', pai: 'Antônio Rocha', etnia: 'Não informado', especialidade: 'Desenho Técnico', turmasIds: [], contrato: 'CLT', status: 'Ativo', contratacao: '2022-05-18', endereco: 'Rua Projetos, 15' },
      { id: 'prof-8', nome: 'André Moraes', cpf: '000.000.000-07', emailPessoal: 'andre.moraes@email.com', emailInst: 'andre.moraes@senai.br', senha: '12345678', nascimento: '1989-05-23', celular: '(19) 99999-0008', mae: 'Celina Moraes', pai: 'Vitor Moraes', etnia: 'Não informado', especialidade: 'Programação', turmasIds: [], contrato: 'CLT', status: 'Inativo', contratacao: '2023-03-10', endereco: 'Rua Código, 404' },
    ],
    alunos: [
      { id: 'aluno-1', nome: 'João Pedro Lima', rm: 'RM20250123', cpf: '000.000.000-10', nascimento: '2006-04-15', email: 'joaopedro.lima@email.com', emailInst: 'joao.lima@empresa.com', senha: '12345678', turmaId: 'turma-2', cursoId: 'curso-1', empresa: 'TechLog Soluções Ltda.', status: 'Ativo', celular: '(19) 90000-0001', etnia: 'Não informado', endereco: 'Rua A, 100', responsavel: 'Márcia Lima', obs: 'Aprendiz com bom desempenho.', foto: '' },
      { id: 'aluno-2', nome: 'Maria Eduarda Silva', rm: 'RM20250124', cpf: '000.000.000-11', nascimento: '2006-06-22', email: 'maria.silva@email.com', emailInst: 'maria.silva@empresa.com', senha: '12345678', turmaId: 'turma-2', cursoId: 'curso-1', empresa: 'TechLog Soluções Ltda.', status: 'Ativo', celular: '(19) 90000-0002', etnia: 'Não informado', endereco: 'Rua B, 220', responsavel: 'Carlos Silva', obs: '' },
      { id: 'aluno-3', nome: 'Carlos Henrique Souza', rm: 'RM20250125', cpf: '000.000.000-12', nascimento: '2005-10-20', email: 'carlos.souza@email.com', emailInst: 'carlos.almeida@empresa.com', senha: '12345678', turmaId: 'turma-3', cursoId: 'curso-4', empresa: 'InfoTech Consultoria', status: 'Ativo', celular: '(19) 90000-0003', etnia: 'Não informado', endereco: 'Rua C, 300', responsavel: 'Patrícia Souza', obs: '' },
      { id: 'aluno-4', nome: 'Ana Beatriz Oliveira', rm: 'RM20250126', cpf: '000.000.000-13', nascimento: '2005-11-28', email: 'ana.oliveira@email.com', emailInst: 'ana.oliveira@empresa.com', senha: '12345678', turmaId: 'turma-1', cursoId: 'curso-3', empresa: 'Transportes União S/A', status: 'Ativo', celular: '(19) 90000-0004', etnia: 'Não informado', endereco: 'Rua D, 400', responsavel: 'Renata Oliveira', obs: '' },
      { id: 'aluno-5', nome: 'Lucas Gabriel Santos', rm: 'RM20250127', cpf: '000.000.000-14', nascimento: '2005-08-03', email: 'lucas.santos@email.com', emailInst: 'lucas.silva@aluno.senai.br', senha: '12345678', turmaId: 'turma-3', cursoId: 'curso-4', empresa: 'InfoTech Consultoria', status: 'Inativo', celular: '(19) 90000-0005', etnia: 'Não informado', endereco: 'Rua E, 500', responsavel: 'Roberto Santos', obs: '' },
      { id: 'aluno-6', nome: 'Juliana Mendes Costa', rm: 'RM20250128', cpf: '000.000.000-15', nascimento: '2006-07-17', email: 'juliana.costa@email.com', emailInst: 'fernanda.costa@empresa.com', senha: '12345678', turmaId: 'turma-2', cursoId: 'curso-1', empresa: 'Comercial Santa Clara', status: 'Ativo', celular: '(19) 90000-0006', etnia: 'Não informado', endereco: 'Rua F, 600', responsavel: 'Sandra Costa', obs: '' },
      { id: 'aluno-7', nome: 'Rafael Martins Rocha', rm: 'RM20250129', cpf: '000.000.000-16', nascimento: '2006-01-09', email: 'rafael.rocha@email.com', emailInst: 'rafael.souza@empresa.com', senha: '12345678', turmaId: 'turma-1', cursoId: 'curso-3', empresa: 'TechLog Soluções Ltda.', status: 'Ativo', celular: '(19) 90000-0007', etnia: 'Não informado', endereco: 'Rua G, 700', responsavel: 'Simone Rocha', obs: '' },
      { id: 'aluno-8', nome: 'Beatriz Alves Ferreira', rm: 'RM20250130', cpf: '000.000.000-17', nascimento: '2005-03-26', email: 'beatriz.ferreira@email.com', emailInst: 'beatriz.ferreira@empresa.com', senha: '12345678', turmaId: 'turma-1', cursoId: 'curso-3', empresa: 'InfoTech Consultoria', status: 'Ativo', celular: '(19) 90000-0008', etnia: 'Não informado', endereco: 'Rua H, 800', responsavel: 'Denise Ferreira', obs: '' },
    ],
    contratos: [
      { id: 'contrato-1', alunoId: 'aluno-1', empresa: 'TechLog Soluções Ltda.', carga: '8 horas', localizacao: 'SP', carteira: '1234567 - 0030 SP', emailPessoal: 'joaopedro.lima@email.com', emailInst: 'joao.lima@empresa.com', emailEmpresa: 'contato@empresa.com', banco: 'Banco do Brasil Ag. 1234-5 C/C 56789-0', documento: 'Contrato_joao.pdf', status: 'Ativo', inicio: '2025-05-30' },
      { id: 'contrato-2', alunoId: 'aluno-2', empresa: 'TechLog Soluções Ltda.', carga: '8 horas', localizacao: 'SP', carteira: '2345678 - 0040 SP', emailPessoal: 'maria.silva@email.com', emailInst: 'maria.silva@empresa.com', emailEmpresa: 'contato@empresa.com', banco: 'Itaú Ag. 045 C/C 98765-4', documento: 'Contrato_maria.pdf', status: 'Ativo', inicio: '2025-05-30' },
      { id: 'contrato-3', alunoId: 'aluno-3', empresa: 'InfoTech Consultoria', carga: '8 horas', localizacao: 'SP', carteira: '3456789 - 0050 SP', emailPessoal: 'carlos.souza@email.com', emailInst: 'carlos.almeida@empresa.com', emailEmpresa: 'rh@infotech.com', banco: 'Bradesco Ag. 789 C/C 11223-7', documento: 'Contrato_carlos.pdf', status: 'Ativo', inicio: '2025-05-30' },
      { id: 'contrato-4', alunoId: 'aluno-6', empresa: 'Comercial Santa Clara', carga: '4 horas', localizacao: 'SP', carteira: '4567890 - 0060 SP', emailPessoal: 'juliana.costa@email.com', emailInst: 'fernanda.costa@empresa.com', emailEmpresa: 'rh@santaclara.com', banco: 'Caixa Econômica Ag. 10 C/C 22110-5', documento: 'Contrato_fernanda.pdf', status: 'Pendente', inicio: '2025-05-30' },
      { id: 'contrato-5', alunoId: 'aluno-7', empresa: 'TechLog Soluções Ltda.', carga: '8 horas', localizacao: 'SP', carteira: '5678901 - 0070 SP', emailPessoal: 'rafael.rocha@email.com', emailInst: 'rafael.souza@empresa.com', emailEmpresa: 'contato@empresa.com', banco: 'Santander Ag. 3322 C/C 44321-9', documento: 'Contrato_rafael.pdf', status: 'Ativo', inicio: '2025-05-30' },
    ],
    frequencias: {
      'aluno-1': { trabalhados: 22, uteis: 24, fj: 1, fi: 1, chamadas: { 'Aula 1': 'P', 'Aula 2': 'P' } },
      'aluno-2': { trabalhados: 22, uteis: 25, fj: 2, fi: 1, chamadas: { 'Aula 1': 'P', 'Aula 2': 'FJ' } },
      'aluno-3': { trabalhados: 20, uteis: 20, fj: 0, fi: 0, chamadas: { 'Aula 1': 'FJ', 'Aula 2': 'FI' } },
      'aluno-4': { trabalhados: 18, uteis: 25, fj: 3, fi: 4, chamadas: { 'Aula 1': 'P', 'Aula 2': 'P' } },
      'aluno-5': { trabalhados: 15, uteis: 22, fj: 0, fi: 2, chamadas: { 'Aula 1': 'P', 'Aula 2': 'P' } },
      'aluno-6': { trabalhados: 20, uteis: 24, fj: 1, fi: 1, chamadas: { 'Aula 1': 'P', 'Aula 2': 'FJ' } },
      'aluno-7': { trabalhados: 22, uteis: 25, fj: 2, fi: 1, chamadas: { 'Aula 1': 'P', 'Aula 2': 'FI' } },
      'aluno-8': { trabalhados: 21, uteis: 25, fj: 1, fi: 2, chamadas: { 'Aula 1': 'FJ', 'Aula 2': 'P' } },
    },
    activities: [
      { tipo: 'Turma', titulo: 'Turma TIN24-01 teve frequência lançada', usuario: 'Ana Souza', data: 'Hoje, 09:15' },
      { tipo: 'Aluno', titulo: 'Novo aluno cadastrado João Pedro Lima', usuario: 'Ana Souza', data: 'Hoje, 08:47' },
      { tipo: 'Contrato', titulo: 'Contrato CT-2025-312 renovado', usuario: 'Ana Souza', data: 'Ontem, 16:32' },
      { tipo: 'Sistema', titulo: 'Frequência mensal consolidada Maio/2025', usuario: 'Sistema', data: 'Ontem, 14:10' },
    ],
  };
}

let data = loadData();

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.warn('Erro ao ler LocalStorage:', e);
  }
  const seeded = seedData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function $(selector, root = document) { return root.querySelector(selector); }
function $all(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }
function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`; }
function money(v) { return Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
function brDate(iso) {
  if (!iso) return '-';
  const parts = String(iso).split('-');
  if (parts.length !== 3) return iso;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
function age(iso) {
  if (!iso) return '';
  const birth = new Date(`${iso}T00:00:00`);
  const today = new Date('2025-05-30T00:00:00');
  let a = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) a--;
  return a;
}
function initials(name = '') {
  return name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'SN';
}
function esc(value = '') {
  return String(value).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
}
function getCurso(id) { return data.cursos.find(c => c.id === id) || {}; }
function getTurma(id) { return data.turmas.find(t => t.id === id) || {}; }
function getProfessor(id) { return data.professores.find(p => p.id === id) || {}; }
function getAluno(id) { return data.alunos.find(a => a.id === id) || {}; }
function getContratoByAluno(id) { return data.contratos.find(c => c.alunoId === id) || {}; }
function badge(status) {
  const s = String(status || '').toLowerCase();
  const cls = s.includes('ativo') || s.includes('ativa') || s.includes('calculado') || s.includes('presente') || s.includes('sim') ? 'green'
    : s.includes('pendente') || s.includes('andamento') || s.includes('férias') ? 'orange'
    : s.includes('inativo') || s.includes('não') || s.includes('fora') ? 'gray' : 'blue';
  return `<span class="badge ${cls}">${esc(status || '-')}</span>`;
}
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
function setScreen(screen) {
  state.screen = screen;
  state.profileOpen = false;
  render();
}
function setPage(page) {
  state.page = page;
  if (page === 'cursos') state.tab = 'cursos';
  if (page === 'turmas') state.tab = 'turmas';
  if (page === 'gerenciar-frequencia') state.freqTab = 'gerenciar';
  if (page === 'frequencia') state.freqTab = 'frequencia';
  document.body.classList.remove('menu-open');
  render();
}

function render() {
  const app = $('#app');
  if (state.screen === 'login') app.innerHTML = renderLogin();
  if (state.screen === 'hub') app.innerHTML = renderHub();
  if (state.screen === 'connect') app.innerHTML = renderConnectShell();
}

function renderSenaiLogo() { return `<div class="logo-senai"><span>SENAI</span></div>`; }
function renderHubLogo(compact = false) {
  return `<div class="logo-hub ${compact ? 'compact' : ''}">
    ${renderSenaiLogo()}<div class="logo-line"></div>
    <div><div class="logo-hub-word">HUB</div><div class="logo-hub-small">Hub Unificado de<br>Infraestrutura e Serviços</div></div>
  </div>`;
}

const NAV_ICONS = {
  'nav-dashboard': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  'nav-alunos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'nav-professores': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  'nav-turmas': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'nav-cursos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  'nav-frequencia': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  'nav-gerenciar': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  'nav-relatorio': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  'nav-localizacao': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'nav-contratos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  'nav-contrato-alunos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><polyline points="16 3 16 7 20 7"/></svg>`,
  'nav-salario': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  'nav-configuracoes': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  'nav-perfil': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  'nav-suporte': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  'nav-sair': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
};
function navSvg(key) {
  return `<span class="nav-icon nav-svg">${NAV_ICONS[key] || ''}</span>`;
}

function renderLogin() {
  return `<main class="login-page">
    <section class="login-left">
      <div class="login-dot"></div>
      <div class="login-left-content">
        <div class="login-brand">${renderHubLogo()}</div>
        <h1>SENAI HUB</h1>
        <p>Hub Unificado de Infraestrutura e Serviços</p>
        <div class="red-rule"></div>
        <h1>Bem-vindo(a) ao<br>SENAI HUB</h1>
        <p>Acesse o hub para continuar.</p>
      </div>
    </section>
    <section class="login-right">
      <div class="login-illustration"></div>
      <form class="login-card" id="loginForm">
        <h2>Acesse sua conta</h2>
        <p>Informe seu e-mail e senha para continuar.</p>
        <div class="login-field">
          <label class="label">E-mail</label>
          <div class="icon-input"><span class="field-icon">✉</span><input class="input" name="email" type="email" placeholder="seu@email.com" value="${esc(data.user.email)}" required></div>
        </div>
        <div class="login-field">
          <label class="label">Senha</label>
          <div class="icon-input"><span class="field-icon">▣</span><input class="input" name="senha" type="password" placeholder="••••••••" value="12345678" required><span class="right-icon">◉</span></div>
        </div>
        <button type="button" class="link-btn" data-action="fake-recover">Recuperar senha</button>
        <button class="btn primary" type="submit">Entrar</button>
      </form>
    </section>
  </main>`;
}

function renderProfileMenu() {
  return state.profileOpen ? `<div class="profile-menu">
    <button type="button" data-action="go-configuracoes"><span class="pmenu-icon">${NAV_ICONS['nav-configuracoes']}</span> Configurações</button>
    <button type="button" data-action="go-perfil"><span class="pmenu-icon">${NAV_ICONS['nav-perfil']}</span> Perfil</button>
    <div class="separator"></div>
    <button type="button" data-action="logout"><span class="pmenu-icon red">${NAV_ICONS['nav-sair']}</span> Sair</button>
  </div>` : '';
}

function renderHub() {
  return `<main class="hub-shell">
    <header class="hub-top">
      ${renderHubLogo(true)}
      <div class="hub-user">
        <div class="user-bell">♢</div>
        <button class="profile-chip" type="button" data-action="toggle-profile">
          <span class="avatar-img">${initials(data.user.nome)}</span>
          <span class="user-text"><span class="user-name">${esc(data.user.nome)}</span><span class="user-role">${esc(data.user.cargo)}</span></span>
          <span>⌄</span>
        </button>
        ${renderProfileMenu()}
      </div>
    </header>
    <section class="hub-main">
      <h1 class="hub-title">Hub de Aplicações</h1>
      <p class="hub-subtitle">Acesse os sistemas disponíveis para o seu perfil.</p>
      <div class="info-banner"><span class="info-icon">i</span><div><strong>Os aplicativos exibidos abaixo dependem do seu perfil e permissões de acesso.</strong><span>Utilize o card do sistema desejado para acessar o aplicativo.</span></div></div>
      <div class="app-grid">
        <article class="app-card">
          <div class="app-illustration">${svgConnect()}</div>
          <h2 class="app-card-title">SENAI Connect</h2>
          <p>Gestão completa de alunos, turmas, frequência, contratos e informações acadêmicas.</p>
          <button class="btn navy" type="button" data-action="access-connect">Acessar aplicativo <span>→</span></button>
        </article>
        <article class="app-card">
          <div class="app-illustration">${svgGrid()}</div>
          <h2 class="app-card-title">SENAI Grid</h2>
          <p>Gestão de manutenção predial e infraestrutura, ordens de serviço, ativos e operações.</p>
          <button class="btn navy" type="button" data-action="access-grid">Acessar aplicativo <span>→</span></button>
        </article>
      </div>
      <p class="hub-footnote">ⓘ Caso você tenha acesso a apenas um aplicativo, o card será exibido centralizado na tela.</p>
    </section>
  </main>`;
}

function svgConnect() {
  return `<svg class="illus-svg" viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="25" y="153" width="98" height="62" rx="8" fill="#CFE3FF" stroke="#90BDF5"/><circle cx="57" cy="184" r="17" fill="#164D8F"/><circle cx="91" cy="184" r="17" fill="#164D8F"/><path d="M40 213c6-23 53-23 67 0" fill="#164D8F" opacity=".9"/>
    <rect x="68" y="62" width="98" height="62" rx="8" fill="#CFE3FF" stroke="#90BDF5"/><path d="M88 85l32-14 32 14-32 15-32-15z" fill="#07335F"/><path d="M100 96v28c17 11 40 9 55 0V96" stroke="#07335F" stroke-width="5"/>
    <circle cx="250" cy="142" r="88" fill="#E8F2FF"/><path d="M210 112c22-22 67-19 88 6 18 22 14 58-8 82H201c-16-27-12-67 9-88z" fill="#002B57"/><circle cx="252" cy="103" r="50" fill="#FFB17E"/><path d="M199 119c12-62 88-81 115-22 6 13 2 30-5 41-12-22-30-36-59-37-18 0-33 7-51 18z" fill="#001F3F"/><rect x="159" y="188" width="158" height="36" rx="18" fill="#EE4B44"/>
    <rect x="306" y="175" width="135" height="72" rx="8" fill="#002B57"/><circle cx="373" cy="211" r="7" fill="#88A7C9"/>
    <rect x="365" y="73" width="165" height="77" rx="8" fill="#EAF4FF" stroke="#9FC5F8"/><rect x="389" y="126" width="12" height="24" fill="#4E9CEE"/><rect x="413" y="108" width="12" height="42" fill="#4E9CEE"/><rect x="437" y="92" width="12" height="58" fill="#164D8F"/><rect x="461" y="80" width="12" height="70" fill="#164D8F"/><path d="M494 92a32 32 0 1032 32h-32V92z" fill="#7AADEB"/>
    <rect x="386" y="158" width="132" height="71" rx="8" fill="#EAF4FF" stroke="#9FC5F8"/><path d="M405 180l9 9 17-22" stroke="#2367D1" stroke-width="5"/><path d="M405 201l9 9 17-22" stroke="#2367D1" stroke-width="5"/><line x1="444" y1="182" x2="493" y2="182" stroke="#9FC5F8" stroke-width="5"/><line x1="444" y1="204" x2="493" y2="204" stroke="#9FC5F8" stroke-width="5"/><rect x="26" y="224" width="504" height="5" rx="2" fill="#0A2F58"/>
  </svg>`;
}
function svgGrid() {
  return `<svg class="illus-svg" viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="38" y="95" width="196" height="112" fill="#9FB5CA"/><rect x="61" y="69" width="155" height="138" fill="#D5E3F1"/><rect x="91" y="45" width="139" height="162" fill="#EEF5FC" stroke="#BFD0E4"/><rect x="108" y="66" width="36" height="25" fill="#123C65"/><rect x="159" y="66" width="36" height="25" fill="#123C65"/><rect x="108" y="111" width="88" height="20" fill="#E30613"/><rect x="108" y="145" width="33" height="62" fill="#133B61"/><rect x="155" y="145" width="48" height="62" fill="#BBD0E5"/><rect x="282" y="67" width="128" height="158" rx="10" fill="#0B2B4C"/><rect x="307" y="42" width="78" height="46" rx="22" fill="#0B2B4C"/><rect x="316" y="82" width="112" height="141" rx="8" fill="#EEF4FB"/><path d="M331 112l13 13 27-32" stroke="#E30613" stroke-width="5"/><line x1="383" y1="112" x2="418" y2="112" stroke="#C5D3E5" stroke-width="5"/><path d="M331 152l13 13 27-32" stroke="#E30613" stroke-width="5"/><line x1="383" y1="152" x2="418" y2="152" stroke="#C5D3E5" stroke-width="5"/><path d="M331 192l13 13 27-32" stroke="#133B61" stroke-width="5"/><line x1="383" y1="192" x2="418" y2="192" stroke="#C5D3E5" stroke-width="5"/>
    <circle cx="413" cy="193" r="42" fill="#E30613"/><circle cx="413" cy="193" r="19" fill="#fff"/><path d="M466 93l22 22-96 96-22-22 96-96z" fill="#0B2B4C"/><circle cx="465" cy="94" r="21" fill="#0B2B4C"/><rect x="31" y="226" width="496" height="5" rx="2" fill="#0A2F58"/>
  </svg>`;
}

function renderConnectShell() {
  return `<main class="connect-shell">
    ${renderSidebar()}
    <section class="app-main">
      ${renderTopbar()}
      <div class="content">${renderCurrentPage()}</div>
    </section>
    ${renderDrawer()}
    ${renderModal()}
    ${renderSupportModal()}
  </main>`;
}
function renderSidebar() {
  return `<aside class="sidebar">
    <div class="sidebar-head"><div><div>${renderSenaiLogo()}</div><div class="logo-connect">connect</div></div><button class="collapse-btn" type="button" data-action="close-sidebar">«</button></div>
    <nav class="nav-list">${navItems.map(([id, icon, label]) => `<button type="button" class="nav-item ${navActive(id)}" data-route="${id}">${navSvg(icon)}<span>${label}</span></button>`).join('')}</nav>
    <div class="sidebar-note"><span class="nav-svg" style="width:18px;display:inline-block;opacity:.7">${NAV_ICONS['nav-suporte']}</span><span>Menus exibidos conforme<br>perfil de acesso.</span></div>
    <div class="sidebar-bottom"><button class="nav-item" type="button" data-action="open-support">${navSvg('nav-suporte')}<span>Suporte</span><span style="margin-left:auto">›</span></button></div>
  </aside>`;
}
function navActive(id) {
  if (state.page === id) return 'active';
  if (id === 'turmas' && state.page === 'cursos') return 'active';
  if (id === 'frequencia' && state.page === 'gerenciar-frequencia') return 'active';
  return '';
}
function renderTopbar() {
  const svgSearch = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  const svgBell = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
  const svgMenu = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  return `<header class="topbar">
    <button class="btn icon-only mobile-menu" data-action="open-sidebar">${svgMenu}</button>
    <label class="search-box">${svgSearch}<input id="globalSearch" value="${esc(state.search)}" placeholder="Pesquisar alunos, cursos, turmas, professores..."><span class="kbd">⌘ K</span></label>
    <div class="topbar-right">
      <div class="bell">${svgBell}<span class="bell-badge">3</span></div>
      <div class="divider"></div>
      <button class="profile-chip user-menu" type="button" data-action="toggle-profile">
        <span class="avatar-img">${initials(data.user.nome)}</span>
        <span class="user-text"><strong>${esc(data.user.nome)}</strong><small>${esc(data.user.cargo)}</small></span><span>⌄</span>
      </button>
      ${renderProfileMenu()}
    </div>
  </header>`;
}

function renderCurrentPage() {
  const page = state.page;
  if (page === 'dashboard') return renderDashboard();
  if (page === 'alunos') return renderAlunos();
  if (page === 'professores') return renderProfessores();
  if (page === 'turmas' || page === 'cursos') return renderTurmasCursos();
  if (page === 'frequencia' || page === 'gerenciar-frequencia') return renderFrequencia();
  if (page === 'localizacao') return renderLocalizacao();
  if (page === 'contratos' || page === 'contrato-alunos') return renderContratos();
  if (page === 'salario') return renderSalario();
  if (page === 'relatorio') return renderRelatorio();
  if (page === 'configuracoes') return renderConfiguracoes();
  if (page === 'perfil') return renderPerfil();
  return renderDashboard();
}
function pageHead(title, subtitle, actions = '') {
  return `<div class="page-head"><div><h1 class="page-title">${title}</h1><p class="page-subtitle">${subtitle}</p></div><div class="actions">${actions}</div></div>`;
}

function renderDashboard() {
  const totalAlunos = data.alunos.length.toLocaleString('pt-BR');
  const totalProf = data.professores.length;
  const totalTurmas = data.turmas.length;
  const totalCursos = data.cursos.length;
  const totalContratos = data.contratos.length;
  return `${pageHead('Visão geral', 'Acompanhe os indicadores principais do SENAI Connect', '<div class="date-pill">▣ 01/05/2025 - 31/05/2025⌄</div>')}
    <section class="stat-grid">
      ${stat('👥', 'Total de alunos<br>cadastrados', totalAlunos, '↑ 8,2%')}
      ${stat('♙', 'Professores<br>cadastrados', totalProf, '↑ 4,1%')}
      ${stat('👥', 'Turmas<br>ativas', totalTurmas, '↑ 6,7%')}
      ${stat('▥', 'Cursos<br>ativos', totalCursos, '↑ 3,0%')}
      ${stat('▥', 'Frequência média<br>do mês', '92,4%', '↑ 2,6 p.p.')}
      ${stat('▤', 'Contratos<br>ativos', totalContratos, '↑ 5,3%')}
    </section>
    <section class="dashboard-grid">
      <div class="card reports-card">
        <div class="reports-head"><h2 class="card-title mb-0">Relatórios rápidos</h2><button class="link-btn" data-route="relatorio">Ver todos os relatórios ›</button></div>
        <div class="chart-grid">
          <article class="card quick-card"><h3 class="card-title">Frequência geral ⓘ</h3><div class="donut"><div class="donut-content"><strong>92,4%</strong><br><span>Média do mês</span></div></div><div class="legend"><div class="legend-row"><span class="dot green"></span>Presentes <span style="margin-left:auto">92,4%</span></div><div class="legend-row"><span class="dot orange"></span>Faltas justificadas <span style="margin-left:auto">5,1%</span></div><div class="legend-row"><span class="dot red"></span>Faltas injustificadas <span style="margin-left:auto">2,5%</span></div></div><p class="muted mt-16">Total de registros: 24.822</p></article>
          <article class="card quick-card"><h3 class="card-title">Aulas dadas na semana por professor ⓘ</h3><div class="bar-chart">${bar('Marcos\nSilva',42,84)}${bar('Juliana\nAlmeida',38,76)}${bar('Carlos\nMenezes',35,70)}${bar('Fernanda\nSouza',30,60)}${bar('Rafael\nCosta',28,56)}</div><p class="muted mt-22">Total de aulas: 173</p></article>
          <article class="card quick-card"><h3 class="card-title">Alunos por curso ⓘ</h3><div class="pie-layout"><div class="pie"></div><div class="legend"><div class="legend-row"><span class="dot red"></span>Automação Industrial 642</div><div class="legend-row"><span class="dot blue"></span>Eletrotécnica 538</div><div class="legend-row"><span class="dot gray"></span>Logística 487</div><div class="legend-row"><span class="dot green"></span>Informática 412</div><div class="legend-row"><span class="dot gray"></span>Outros 410</div></div></div><p class="muted mt-16">Total de alunos: ${totalAlunos}</p></article>
        </div>
      </div>
      <aside class="card pad"><h2 class="card-title">Atividade recente</h2><div class="activity-list">${data.activities.map(a => `<div class="activity-item"><span class="activity-icon">${a.tipo === 'Aluno' ? '👥' : a.tipo === 'Contrato' ? '▤' : '▥'}</span><div><strong>${esc(a.titulo)}</strong><br><small>por ${esc(a.usuario)}</small></div><small>${esc(a.data)}</small></div>`).join('')}</div><button class="link-btn mt-16">Ver todas as atividades ›</button></aside>
    </section>
    <section class="card pad mt-16"><h2 class="card-title">Cadastros recentes / Alertas <span class="badge red">7</span></h2><div class="tabs"><button class="tab active">Cadastros recentes</button><button class="tab">Alertas</button></div><div class="table-wrap"><table><thead><tr><th>Tipo</th><th>Nome</th><th>Detalhes</th><th>Data</th><th>Usuário</th><th></th></tr></thead><tbody>${data.activities.slice(0,3).map(a => `<tr><td>${esc(a.tipo)}</td><td>${esc(a.titulo.split(' ').slice(-3).join(' '))}</td><td>${esc(a.titulo)}</td><td>30/05/2025 08:47</td><td>${esc(a.usuario)}</td><td>⋮</td></tr>`).join('')}</tbody></table></div></section>`;
}
function stat(icon, label, number, change) {
  return `<article class="stat-card"><div class="stat-icon">${icon}</div><div class="stat-label">${label}</div><div class="stat-number">${number}</div><div class="stat-change"><span class="up">${change}</span> vs. mês anterior</div></article>`;
}
function bar(label, value, h) {
  return `<div class="bar" style="height:${h}%"><span>${value}</span><small>${label.replace('\n', '<br>')}</small></div>`;
}

function filteredAlunos() {
  const q = state.search.trim().toLowerCase();
  if (!q) return data.alunos;
  return data.alunos.filter(a => [a.nome, a.rm, a.email, a.emailInst, a.empresa, getCurso(a.cursoId).nome, getTurma(a.turmaId).nome].join(' ').toLowerCase().includes(q));
}
function renderAlunos() {
  const rows = filteredAlunos();
  return `${pageHead('Gerenciamento de alunos', 'Consulte, filtre e gerencie os alunos cadastrados.', '<button class="btn" data-action="export">⇩ Exportar</button><button class="btn" data-action="open-filters">▽ Filtros</button><button class="btn primary" data-action="new-aluno">＋ Novo aluno</button>')}
  <section class="card filters-card">
    <div class="filter-grid">
      <label><span class="label">Turma</span><select class="select" data-filter="turma"><option>Selecione</option>${data.turmas.map(t=>`<option>${esc(t.nome)}</option>`).join('')}</select></label>
      <label><span class="label">Nome</span><input class="input" data-local-search placeholder="Buscar por nome"></label>
      <label><span class="label">Idade</span><input class="input" placeholder="De"></label>
      <label><span class="label">&nbsp;</span><input class="input" placeholder="Até"></label>
      <label><span class="label">Empresa</span><select class="select"><option>Selecione</option><option>TechLog Soluções Ltda.</option><option>InfoTech Consultoria</option></select></label>
      <label><span class="label">Data de nascimento</span><input class="input" placeholder="De"></label>
      <label><span class="label">&nbsp;</span><input class="input" placeholder="Até"></label>
      <label><span class="label">Status</span><select class="select"><option>Todos</option><option>Ativo</option><option>Inativo</option></select></label>
      <div></div>
      <div class="btn-row"><button class="btn" data-action="clear-search">Limpar filtros</button><button class="btn primary" data-action="apply-search">⌕ Pesquisar</button></div>
    </div>
  </section>
  <section class="card pad"><h2 class="card-title">${rows.length.toLocaleString('pt-BR')} alunos encontrados</h2><div class="table-wrap"><table><thead><tr><th><input type="checkbox"></th><th>Nome</th><th>RM</th><th>Turma</th><th>Curso</th><th>Empresa</th><th>Data de nascimento</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows.map(renderAlunoRow).join('')}</tbody></table></div>${pagination('Mostrando 1 a '+Math.min(rows.length,10)+' de '+rows.length+' alunos')}</section>`;
}
function renderAlunoRow(a) {
  return `<tr><td><input type="checkbox"></td><td><div class="person-cell"><span class="avatar">${initials(a.nome)}</span><span><strong>${esc(a.nome)}</strong><small>${esc(a.email)}</small></span></div></td><td>${esc(a.rm)}</td><td>${esc(getTurma(a.turmaId).nome)}<br><small>${esc(getTurma(a.turmaId).periodo || '')}</small></td><td>${esc(getCurso(a.cursoId).nome)}</td><td>${esc(a.empresa)}</td><td>${brDate(a.nascimento)}<br><small>(${age(a.nascimento)} anos)</small></td><td>${badge(a.status)}</td><td><div class="row-actions"><button class="btn sm" data-action="edit-aluno" data-id="${a.id}">Editar</button><button class="btn sm danger" data-action="delete-aluno" data-id="${a.id}">Excluir</button></div></td></tr>`;
}

function renderProfessores() {
  const q = state.search.trim().toLowerCase();
  const rows = !q ? data.professores : data.professores.filter(p => [p.nome, p.emailInst, p.especialidade, p.status].join(' ').toLowerCase().includes(q));
  return `${pageHead('Gerenciamento de professores', 'Cadastre, edite e acompanhe as informações dos professores.', '<button class="btn" data-action="export">⇩ Exportar</button><button class="btn primary" data-action="new-professor">＋ Novo professor</button>')}
    <section class="toolbar"><label class="search-box"><span>⌕</span><input data-local-search placeholder="Buscar por nome, e-mail ou CPF..."></label><select class="select" style="max-width:150px"><option>Ativos</option><option>Todos</option></select><select class="select" style="max-width:160px"><option>Todos</option><option>Automação</option></select><select class="select" style="max-width:160px"><option>Todas</option></select><button class="btn">☷ Filtros</button></section>
    <section class="card pad"><div class="table-wrap"><table><thead><tr><th>Nome</th><th>E-mail institucional</th><th>Especialidade</th><th>Turmas</th><th>Status</th><th>Data de contratação ↓</th><th>Ações</th></tr></thead><tbody>${rows.map(p => `<tr><td><div class="person-cell"><span class="avatar">${initials(p.nome)}</span><strong>${esc(p.nome)}</strong></div></td><td>${esc(p.emailInst)}</td><td>${esc(p.especialidade)}</td><td>${p.turmasIds?.length || 0}</td><td>${badge(p.status)}</td><td>${brDate(p.contratacao)}</td><td><div class="row-actions"><button class="btn sm" data-action="edit-professor" data-id="${p.id}">Editar</button><button class="btn sm danger" data-action="delete-professor" data-id="${p.id}">Excluir</button></div></td></tr>`).join('')}</tbody></table></div>${pagination('Mostrando 1 a '+rows.length+' de '+rows.length+' professores')}</section>`;
}

function renderTurmasCursos() {
  const selected = getTurma(state.selectedTurmaId) || data.turmas[0];
  const selectedAlunos = data.alunos.filter(a => (selected.alunosIds || []).includes(a.id));
  const activeTab = state.tab;
  return `${pageHead('Turmas e Cursos', 'Gerencie turmas e cursos de forma integrada.', '<div class="date-pill">▣ 01/05/2025 - 31/05/2025⌄</div>')}
  <div class="tabs"><button class="tab ${activeTab === 'turmas' ? 'active' : ''}" data-action="tab-turmas">Turmas</button><button class="tab ${activeTab === 'cursos' ? 'active' : ''}" data-action="tab-cursos">Cursos</button></div>
  ${activeTab === 'turmas' ? renderTurmasArea(selected, selectedAlunos) : renderCursosArea()}`;
}
function renderTurmasArea(selected, selectedAlunos) {
  return `<section class="split-layout">
    <div class="card pad"><div class="reports-head"><div><h2 class="card-title mb-0">Turmas</h2><p class="card-subtitle mb-0">Lista de todas as turmas cadastradas.</p></div><button class="btn primary sm" data-action="new-turma">＋ Criar turma</button></div>
      <div class="toolbar"><label class="search-box"><span>⌕</span><input placeholder="Buscar turma..."></label><button class="btn sm">▽</button><select class="select" style="max-width:190px"><option>Todos os status</option></select></div>
      <div class="table-wrap"><table><thead><tr><th>Nome da turma</th><th>Curso</th><th>Período</th><th>Início</th><th>Término</th><th>Status</th><th>Ações</th></tr></thead><tbody>${data.turmas.map(t => `<tr class="${t.id === selected.id ? 'selected-row' : ''}"><td><button class="link-btn" data-action="select-turma" data-id="${t.id}">${esc(t.nome)}</button></td><td>${esc(getCurso(t.cursoId).nome)}</td><td>${esc(t.periodo)}</td><td>${brDate(t.inicio)}</td><td>${brDate(t.termino)}</td><td>${badge(t.status)}</td><td><div class="row-actions"><button class="btn sm" data-action="edit-turma" data-id="${t.id}">✎</button><button class="btn sm danger" data-action="delete-turma" data-id="${t.id}">🗑</button></div></td></tr>`).join('')}</tbody></table></div>${pagination('Exibindo 1 a '+data.turmas.length+' de '+data.turmas.length+' turmas')}</div>
    <aside class="card selected-panel"><div class="entity-card-head"><div><small>Turma selecionada</small><h2 class="card-title mb-0">${esc(selected.nome)} ${badge(selected.status)}</h2></div><button class="close-btn" data-action="clear-turma">×</button></div><div class="meta-grid"><div><strong>Curso:</strong>${esc(getCurso(selected.cursoId).nome)}</div><div><strong>Período:</strong>${esc(selected.periodo)}</div><div><strong>Início:</strong>${brDate(selected.inicio)}</div><div><strong>Término:</strong>${brDate(selected.termino)}</div><div><strong>Professor:</strong>${esc(getProfessor(selected.professorId).nome)}</div><div><strong>Sala:</strong>${esc(selected.sala)}</div></div><h3 class="card-title">Alunos da turma (${selectedAlunos.length})</h3><label class="search-box" style="min-width:0;width:100%"><span>⌕</span><input placeholder="Buscar aluno..."></label><div class="table-wrap"><table style="min-width:370px"><thead><tr><th>Nome do aluno</th><th>Status</th></tr></thead><tbody>${selectedAlunos.map(a => `<tr><td><div class="person-cell"><span class="initials">${initials(a.nome)}</span>${esc(a.nome)}</div></td><td>${badge(a.status)}</td></tr>`).join('') || '<tr><td colspan="2">Nenhum aluno vinculado.</td></tr>'}</tbody></table></div><button class="link-btn mt-16" data-action="go-alunos">Ver todos os alunos</button></aside>
    <aside class="card pad"><div class="reports-head"><div><h2 class="card-title mb-0">Cursos</h2><p class="card-subtitle mb-0">Resumo dos cursos cadastrados.</p></div><button class="btn primary sm" data-action="new-curso">＋ Criar curso</button></div><div class="course-list">${data.cursos.slice(0,3).map(renderCourseCard).join('')}</div><button class="link-btn mt-12" data-action="tab-cursos">Ver todos os cursos</button></aside>
  </section>`;
}
function renderCursosArea() {
  return `<section class="card pad"><div class="reports-head"><div><h2 class="card-title mb-0">Cursos</h2><p class="card-subtitle">Resumo dos cursos cadastrados.</p></div><button class="btn primary" data-action="new-curso">＋ Criar curso</button></div><div class="toolbar"><label class="search-box"><span>⌕</span><input placeholder="Buscar curso..."></label><select class="select" style="max-width:220px"><option>Todos os status</option></select></div><div class="grid cols-3">${data.cursos.map(renderCourseCard).join('')}</div></section>`;
}
function renderCourseCard(c) {
  return `<article class="entity-card"><div class="entity-card-head"><h3 class="card-title mb-0">${esc(c.nome)}</h3><div class="row-actions"><button class="btn sm" data-action="edit-curso" data-id="${c.id}">✎</button><button class="btn sm danger" data-action="delete-curso" data-id="${c.id}">🗑</button></div></div><div class="meta-grid"><div><strong>Início:</strong>${brDate(c.inicio)}</div><div><strong>Término:</strong>${brDate(c.termino)}</div><div><strong>Status:</strong>${badge(c.status)}</div><div><strong>Período:</strong>${esc(c.periodo)}</div><div><strong>Carga horária:</strong>${esc(c.carga)}</div><div><strong>Alunos:</strong>${c.alunos}</div></div><p>${esc(c.descricao)}</p></article>`;
}

function renderFrequencia() {
  const turma = getTurma(state.selectedTurmaId) || data.turmas[0];
  const alunos = data.alunos.filter(a => (turma.alunosIds || []).includes(a.id));
  return `${pageHead('Frequência', '', '<div class="card pad" style="padding:10px 18px;max-width:620px;text-align:left"><strong>Quem pode ver o quê?</strong><br><span class="muted">Coordenação e Secretaria visualizam todas as turmas e todos os alunos. Professores visualizam e registram apenas suas turmas.</span></div>')}
  <div class="tabs"><button class="tab ${state.freqTab === 'frequencia' ? 'active' : ''}" data-action="tab-frequencia">Frequência</button><button class="tab ${state.freqTab === 'gerenciar' ? 'active' : ''}" data-action="tab-gerenciar">Gerenciar frequência</button></div>
  <section class="card pad"><div class="form-grid four"><label><span class="label">Turma</span><select class="select" id="freqTurma">${data.turmas.map(t=>`<option value="${t.id}" ${t.id===turma.id?'selected':''}>${esc(t.nome)} - ${esc(getCurso(t.cursoId).nome)}</option>`).join('')}</select></label><label><span class="label">Data</span><input class="input" type="date" value="2025-05-01"></label><label><span class="label">Quantidade de aulas hoje</span><div class="freq-classes">${[1,2,3,4,5].map(n=>`<button type="button" class="${n===2?'active':''}">${n}</button>`).join('')}</div></label><div class="legend-status"><span><i class="round-letter p">P</i>Presente</span><span><i class="round-letter fj">FJ</i>Falta justificada</span><span><i class="round-letter fi">FI</i>Falta injustificada</span></div></div>
    <div class="table-wrap mt-16"><table class="call-table"><thead><tr><th>Nº</th><th>Aluno</th><th colspan="2" class="text-center">Aulas do dia (01/05/2025)</th></tr></thead><tbody>${alunos.map((a,i)=>renderFreqRow(a,i)).join('') || '<tr><td colspan="4">Selecione uma turma com alunos cadastrados.</td></tr>'}</tbody></table></div><div class="btn-row mt-8"><button class="btn primary" data-action="save-frequencia">Salvar chamada</button></div></section>
  <section class="card pad mt-16"><h2 class="card-title">Gerenciar frequência</h2><div class="toolbar"><select class="select" style="max-width:210px"><option>Todos</option></select><input class="input" style="max-width:290px" value="01/04/2025       -       30/05/2025"><select class="select" style="max-width:240px"><option>Todas</option></select><label class="search-box"><span>⌕</span><input placeholder="Buscar aluno..."></label><button class="btn">⇩ Exportar</button><button class="btn">▽ Filtros</button></div><div class="table-wrap"><table><thead><tr><th>Data</th><th>Turma</th><th>Disciplina</th><th>Professor</th><th>Aulas</th><th>Presentes</th><th>Faltas Justificadas</th><th>Faltas Injustificadas</th><th>% Presença</th><th>Ações</th></tr></thead><tbody><tr><td>30/04/2025</td><td>TIN24-01</td><td>Automação Industrial</td><td>Ana Souza</td><td>2</td><td class="green">38 (95%)</td><td class="orange">1 (2,5%)</td><td class="danger">1 (2,5%)</td><td class="green">95,0%</td><td><button class="btn sm">◉</button></td></tr><tr><td>29/04/2025</td><td>TIN24-01</td><td>Informática</td><td>Ana Souza</td><td>2</td><td class="green">37 (92,5%)</td><td class="orange">2 (5%)</td><td class="danger">1 (2,5%)</td><td class="green">92,5%</td><td><button class="btn sm">◉</button></td></tr><tr><td>28/04/2025</td><td>LOG24-02</td><td>Técnicas em Logística</td><td>Carlos Ferreira</td><td>1</td><td class="green">32 (88,9%)</td><td class="orange">2 (5,5%)</td><td class="danger">2 (5,5%)</td><td class="green">88,9%</td><td><button class="btn sm">◉</button></td></tr></tbody></table></div>${pagination('Mostrando 1 a 3 de 24 registros')}</section>`;
}
function renderFreqRow(a, i) {
  const freq = data.frequencias[a.id] || { chamadas: {} };
  return `<tr><td>${i+1}</td><td>${esc(a.nome)}</td><td><div class="call-buttons"><strong>Aula 1 (08:00 - 09:40)</strong>${['P','FJ','FI'].map(v => `<button class="call-btn ${freq.chamadas?.['Aula 1']===v?'active '+v.toLowerCase():''}" data-action="mark-freq" data-aluno="${a.id}" data-aula="Aula 1" data-value="${v}">${v}</button>`).join('')}</div></td><td><div class="call-buttons"><strong>Aula 2 (10:00 - 11:40)</strong>${['P','FJ','FI'].map(v => `<button class="call-btn ${freq.chamadas?.['Aula 2']===v?'active '+v.toLowerCase():''}" data-action="mark-freq" data-aluno="${a.id}" data-aula="Aula 2" data-value="${v}">${v}</button>`).join('')}</div></td></tr>`;
}

function renderLocalizacao() {
  const cursos = data.cursos;
  const curso = getCurso(state.selectedCursoLocId) || data.cursos[0];
  const alunos = data.alunos.filter(a => a.cursoId === curso.id);
  const selected = getAluno(state.selectedAlunoId) || alunos[0] || data.alunos[0];
  return `${pageHead('Localização', 'Acompanhe a localização dos alunos dentro do perímetro do SENAI.')}
  <section class="location-grid">
    <div>
      <div class="tabs"><button class="tab active">Cursos</button><button class="tab">Alunos</button></div>
      <label class="search-box" style="min-width:0;width:320px"><span>⌕</span><input placeholder="Pesquisar cursos..."></label>
      <div class="card pad mt-12"><div class="table-wrap"><table style="min-width:620px"><thead><tr><th>Curso</th><th>Turma</th><th>Alunos</th></tr></thead><tbody>${cursos.map(c => `<tr class="${c.id===curso.id?'selected-row':''}"><td><button class="link-btn" data-action="select-curso-local" data-id="${c.id}">${esc(c.nome)}</button></td><td>${esc((data.turmas.find(t=>t.cursoId===c.id)||{}).nome || '-')}</td><td>${c.alunos}</td></tr>`).join('')}</tbody></table></div><p class="muted">Exibindo 1 a ${cursos.length} de ${cursos.length} cursos</p></div>
      <div class="card pad mt-16"><h2 class="card-title">Alunos do curso: ${esc(curso.nome)} <span class="badge blue">${alunos.length} alunos</span></h2><div class="toolbar"><label class="search-box"><span>⌕</span><input placeholder="Pesquisar aluno..."></label><button class="btn">▽ Filtros</button></div><div class="table-wrap"><table style="min-width:650px"><thead><tr><th>Nome</th><th>E-mail institucional</th><th>Status</th><th>Em aula</th><th>Dentro do perímetro</th><th>Ações</th></tr></thead><tbody>${alunos.map((a,i)=>`<tr><td>${esc(a.nome)}</td><td>${esc(a.emailInst)}</td><td><span class="dot ${i===2?'orange':'green'}"></span> ${i===2?'Atrasado':i===4?'Ausente':'Presente'}</td><td>${i===4?'✓ Não':'✓ Sim'}</td><td>${i>2?'✖ Não':'✓ Sim'}</td><td>${i>2?'—<br><small>Fora de perímetro</small>':`<button class="btn sm" data-action="select-aluno-local" data-id="${a.id}">Ver localização</button>`}</td></tr>`).join('')}</tbody></table></div>${pagination('Exibindo 1 a '+alunos.length+' de '+Math.max(alunos.length,22)+' alunos')}</div>
    </div>
    <div class="card pad"><h2 class="card-title">Localização do aluno</h2><div class="location-top-card"><div><div class="person-cell"><span class="avatar">${initials(selected.nome)}</span><span><strong>${esc(selected.nome)}</strong><small>${esc(selected.emailInst)}</small><small>Turma: ${esc(getTurma(selected.turmaId).nome)} - ${esc(getTurma(selected.turmaId).periodo)}</small></span></div></div><div><small>Status</small><br><span class="dot green"></span> Presente</div><div><small>Em aula</small><br>Sim</div><div><small>Dentro do perímetro</small><br><span class="dot green"></span> Sim</div><div><small>Atualizado em</small><br>01/05/2025 08:47</div></div><div class="tabs"><button class="tab active">Mapa do campus</button><button class="tab">Informações</button></div><p class="muted">A localização é atualizada em tempo real enquanto o aluno estiver dentro do perímetro do SENAI.</p>${renderCampusMap(selected)}<div class="location-bottom"><div><small>Sala atual</small><br><strong>Sala 201 - Bloco D</strong><br>${esc(curso.nome)}</div><div><small>Tempo na sala</small><br><strong>00:32:15</strong></div><div><small>Última atualização</small><br><strong>01/05/2025 08:47:32</strong></div></div><div class="notice">ⓘ O botão “Ver localização” funciona apenas quando o aluno estiver dentro do perímetro do SENAI.</div></div>
  </section>`;
}
function renderCampusMap(aluno) {
  return `<div class="campus-map"><div class="road r1"></div><div class="road r2"></div><div class="block a"></div><div class="block b"></div><div class="block c"></div><div class="block d"></div><div class="block e"></div><div class="map-label label-a">BLOCO A<small>Recepção</small></div><div class="map-label label-b">BLOCO B<small>Administrativo</small></div><div class="map-label label-c">BLOCO C<small>Oficinas</small></div><div class="map-label label-d">BLOCO D<small>Salas de Aula</small></div><div class="map-label label-e">BLOCO E<small>Laboratórios</small></div><div class="route"></div><div class="pin"></div><div class="student-callout"><strong>${esc(aluno.nome)}</strong><br><small>Localização atual</small></div><div class="map-legend"><strong>Legenda</strong><span><span class="dot red"></span> Aluno</span><span><span class="dot blue"></span> Rota até a sala</span><span><span class="dot green"></span> Cafeteria</span><span><span class="dot orange"></span> Auditório</span></div></div>`;
}

function renderContratos() {
  const rows = data.contratos;
  return `${pageHead('Contratos', 'Gerencie os contratos de alunos e parceiros de forma integrada.', '<button class="btn" data-action="export">⇩ Exportar</button><button class="btn primary" data-action="new-contrato">＋ Novo contrato</button>')}
  <div class="tabs"><button class="tab active">Contratos (Empresa)</button><button class="tab">Contrato alunos (SENAI)</button></div>
  <section class="metric-row"><div class="metric"><span>Total de contratos ativos</span><strong>${rows.filter(c=>c.status==='Ativo').length}</strong><span class="green">↑ 5,3%</span> <span class="muted">vs. mês anterior</span></div><div class="metric"><span>Empresas parceiras</span><strong>${new Set(rows.map(c=>c.empresa)).size}</strong><span class="green">↑ 4,2%</span> <span class="muted">vs. mês anterior</span></div></section>
  <section class="toolbar"><label class="search-box"><span>⌕</span><input data-local-search placeholder="Pesquisar por aluno, curso ou empresa..."></label><button class="btn">▽ Filtros</button></section>
  <section class="card pad"><div class="table-wrap"><table><thead><tr><th>Carga horária</th><th>Curso</th><th>Nome do aluno</th><th>E-mail pessoal</th><th>E-mail institucional</th><th>Conta bancária</th><th>Carteira de trabalho</th><th>Contrato digitalizado</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows.map(c => { const a=getAluno(c.alunoId); return `<tr><td>${esc(c.carga)}</td><td>${esc(getCurso(a.cursoId).nome)}</td><td>${esc(a.nome)}</td><td>${esc(c.emailPessoal)}</td><td>${esc(c.emailInst)}</td><td>${esc(c.banco)}</td><td>CTPS Digital<br>${esc(c.carteira)}</td><td><span class="pdf-badge">▣</span>${esc(c.documento)}</td><td>${badge(c.status)}</td><td><div class="row-actions"><button class="btn sm" data-action="edit-contrato" data-id="${c.id}">Editar</button><button class="btn sm danger" data-action="delete-contrato" data-id="${c.id}">Excluir</button></div></td></tr>`;}).join('')}</tbody></table></div>${pagination('Total de registros: '+rows.length)}</section>`;
}

function renderSalario() {
  const aluno = getAluno(state.salaryAlunoId) || data.alunos[0];
  const freq = data.frequencias[aluno.id] || { trabalhados: 22, uteis: 24, fj: 1, fi: 1 };
  const contrato = getContratoByAluno(aluno.id);
  const base = contrato.carga === '4 horas' ? 759 : 1518;
  const valorDia = base / 20;
  const desconto = valorDia * (freq.fi || 0);
  const final = base - desconto;
  const perc = Math.round((freq.trabalhados / freq.uteis) * 1000) / 10;
  return `${pageHead('Salário', 'Calcule e acompanhe o salário dos alunos aprendizes com base na frequência e faltas.', '<div class="date-pill">▣ Maio/2025⌄</div>')}
  <section class="salary-top"><div class="card pad"><h2 class="card-title">Selecionar aluno</h2><select class="select" id="salaryAluno">${data.alunos.map(a=>`<option value="${a.id}" ${a.id===aluno.id?'selected':''}>${esc(a.nome)} - ${esc(getCurso(a.cursoId).nome)}</option>`).join('')}</select><div class="selected-student mt-12"><div class="person-cell"><span class="avatar">${initials(aluno.nome)}</span><span><strong>${esc(aluno.nome)}</strong><small>Aprendiz - ${esc(getCurso(aluno.cursoId).nome)}</small></span></div><span>⌄</span></div></div><div class="card pad"><div class="freq-summary"><div class="freq-part"><div class="ring" style="background:conic-gradient(#18a34a 0 ${perc}%, #e5e7eb ${perc}% 100%)"><strong>${perc}%</strong></div><div><strong>Frequência do mês</strong><br><span class="muted">Baseado em ${freq.trabalhados} de ${freq.uteis} dias úteis</span></div></div><div class="freq-part"><div><strong style="font-size:29px">${freq.fj}</strong><br><span class="muted">Faltas justificadas</span></div></div><div class="freq-part"><div><strong style="font-size:29px">${freq.fi}</strong><br><span class="muted">Faltas injustificadas</span></div></div><div class="freq-part"><div>${badge('Calculado')}<br><span class="muted">30/05/2025 08:47</span></div></div></div></div></section>
  <section class="calculation-grid"><div class="card pad"><h2 class="card-title">Cálculo do salário</h2><div class="form-grid three"><label><span class="label required">Salário base (R$)</span><input class="input" id="salaryBase" value="${base.toLocaleString('pt-BR',{minimumFractionDigits:2})}"><div class="form-hint">Valor informado pela empresa</div></label><label><span class="label required">Tipo de pagamento</span><select class="select"><option>Mensal</option></select></label><label><span class="label required">Carga horária</span><select class="select"><option>${esc(contrato.carga || '8 horas')}</option><option>4 horas</option></select><div class="form-hint">Por dia</div></label><label><span class="label">Faltas justificadas</span><input class="input" value="${freq.fj}"><div class="form-hint">Informado pela empresa</div></label><label><span class="label">Faltas injustificadas</span><input class="input" value="${freq.fi}"><div class="form-hint">Informado pela empresa</div></label><label><span class="label">Frequência (automática)</span><div style="font-size:28px;font-weight:900">${perc}%</div><span class="muted">${freq.trabalhados} de ${freq.uteis} dias úteis</span></label></div><div class="salary-result"><div class="salary-cell"><strong>${money(valorDia)}</strong><span>Valor por dia</span></div><div class="salary-cell"><strong>${money(desconto)}</strong><span>Desconto por faltas</span></div><div class="salary-cell"><strong>${money(0)}</strong><span>Outros descontos</span></div><div class="salary-cell final"><strong>${money(final)}</strong><span>Valor a pagar ao aprendiz</span></div></div></div><div class="card pad"><div class="reports-head"><h2 class="card-title mb-0">Fórmula do cálculo</h2><button class="link-btn">Ver detalhes</button></div><div class="card"><div class="formula-row"><strong>Salário final</strong> = Salário base − (Valor por dia × Faltas injustificadas) − Outros descontos</div><div class="formula-row"><strong>Valor por dia</strong> = Salário base ÷ 20</div><div class="formula-row"><strong>Frequência</strong> = (Dias trabalhados ÷ Dias úteis do mês) × 100</div></div><div class="alert-box mt-16"><strong>ⓘ Importante</strong><br>A frequência é calculada automaticamente com base nos registros de presença. Apenas faltas e outros descontos devem ser informados pela empresa.</div></div></section>
  <section class="card pad mt-16"><h2 class="card-title">Alunos contratados</h2><div class="toolbar"><label class="search-box"><span>⌕</span><input placeholder="Buscar aluno..."></label><select class="select" style="max-width:210px"><option>Todos os status</option></select><button class="btn">⇩ Exportar</button></div><div class="table-wrap"><table><thead><tr><th>Aluno</th><th>Curso</th><th>Carga horária</th><th>Salário base</th><th>Frequência</th><th>Salário final</th><th>Status do cálculo</th><th>Ações</th></tr></thead><tbody>${data.contratos.map(c=> { const a=getAluno(c.alunoId); const f=data.frequencias[a.id] || freq; const p=Math.round((f.trabalhados/f.uteis)*1000)/10; const b=c.carga==='4 horas'?759:1518; const fin=b-(b/20)*(f.fi||0); return `<tr><td><div class="person-cell"><span class="initials">${initials(a.nome)}</span>${esc(a.nome)}</div></td><td>${esc(getCurso(a.cursoId).nome)}</td><td>${esc(c.carga)}</td><td>${money(b)}</td><td>${p}% <span class="green">(${f.trabalhados}/${f.uteis})</span></td><td class="green bold">${money(fin)}</td><td>${badge(c.status==='Pendente'?'Pendente':'Calculado')}</td><td><button class="action-dots">⋮</button></td></tr>` }).join('')}</tbody></table></div>${pagination('Mostrando 1 a '+data.contratos.length+' de '+data.contratos.length+' alunos')}</section>`;
}

function renderRelatorio() {
  return `${pageHead('Relatório', 'Visualize indicadores consolidados, exporte dados e acompanhe alertas do sistema.', '<button class="btn">⇩ Exportar PDF</button><button class="btn primary">Gerar relatório</button>')}
    <section class="stat-grid">${stat('👥','Alunos ativos',data.alunos.filter(a=>a.status==='Ativo').length,'↑ 8,2%')}${stat('▤','Contratos ativos',data.contratos.filter(c=>c.status==='Ativo').length,'↑ 5,3%')}${stat('◷','Frequência média','92,4%','↑ 2,6 p.p.')}${stat('♙','Professores',data.professores.length,'↑ 4,1%')}${stat('▥','Cursos',data.cursos.length,'↑ 3,0%')}${stat('▦','Turmas',data.turmas.length,'↑ 6,7%')}</section>
    <section class="grid cols-2"><div class="card pad"><h2 class="card-title">Resumo acadêmico</h2><div class="table-wrap"><table><thead><tr><th>Curso</th><th>Turmas</th><th>Alunos</th><th>Status</th></tr></thead><tbody>${data.cursos.map(c=>`<tr><td>${esc(c.nome)}</td><td>${data.turmas.filter(t=>t.cursoId===c.id).length}</td><td>${c.alunos}</td><td>${badge(c.status)}</td></tr>`).join('')}</tbody></table></div></div><div class="card pad"><h2 class="card-title">Alertas importantes</h2><div class="activity-list"><div class="activity-item"><span class="activity-icon">!</span><div><strong>Alunos fora do perímetro</strong><br><small>3 registros precisam de verificação.</small></div><small>Hoje</small></div><div class="activity-item"><span class="activity-icon">!</span><div><strong>Contratos pendentes</strong><br><small>Existe contrato aguardando digitalização.</small></div><small>Ontem</small></div><div class="activity-item"><span class="activity-icon">!</span><div><strong>Frequências incompletas</strong><br><small>2 turmas com chamada em aberto.</small></div><small>Semana</small></div></div></div></section>`;
}

function renderConfiguracoes() {
  const configTab = state.configTab || 'conta';
  return `${pageHead('Configurações', 'Gerencie as preferências e configurações do sistema.')}
  <div class="tabs"><button class="tab ${configTab==='conta'?'active':''}" data-action="config-tab-conta">Conta</button><button class="tab ${configTab==='notificacoes'?'active':''}" data-action="config-tab-notificacoes">Notificações</button><button class="tab ${configTab==='seguranca'?'active':''}" data-action="config-tab-seguranca">Segurança</button></div>
  ${configTab==='conta' ? `<section class="grid cols-2" style="gap:22px">
    <div class="card pad"><h2 class="card-title">Dados da conta</h2>
      <form id="configContaForm" class="form-grid">
        ${input('nome','Nome completo',data.user.nome,'text',true)}
        ${input('cargo','Cargo',data.user.cargo,'text',true)}
        ${input('email','E-mail',data.user.email,'email',true,'full')}
      </form>
      <div class="btn-row mt-16"><button class="btn primary" type="submit" form="configContaForm">Salvar alterações</button></div>
    </div>
    <div class="card pad"><h2 class="card-title">Aparência</h2>
      <label class="form-field"><span class="label">Tema</span>
        <select class="select"><option selected>Claro (padrão)</option><option>Escuro</option><option>Sistema</option></select>
      </label>
      <label class="form-field mt-16"><span class="label">Idioma</span>
        <select class="select"><option selected>Português (Brasil)</option><option>English</option></select>
      </label>
      <div class="btn-row mt-16"><button class="btn primary" data-action="save-aparencia">Salvar</button></div>
    </div>
  </section>` : ''}
  ${configTab==='notificacoes' ? `<section class="card pad"><h2 class="card-title">Notificações por e-mail</h2>
    <div class="activity-list">
      ${['Novo aluno cadastrado','Frequência lançada','Contrato pendente','Relatório mensal gerado','Aluno fora do perímetro'].map((n,i) => `
      <div class="activity-item" style="grid-template-columns:1fr auto">
        <div><strong>${n}</strong><br><small>Notificação via e-mail</small></div>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" ${i<3?'checked':''} data-action="toggle-notif" style="width:18px;height:18px;accent-color:var(--red)"> Ativo
        </label>
      </div>`).join('')}
    </div>
    <div class="btn-row mt-16"><button class="btn primary" data-action="save-notif">Salvar preferências</button></div>
  </section>` : ''}
  ${configTab==='seguranca' ? `<section class="card pad" style="max-width:560px"><h2 class="card-title">Alterar senha</h2>
    <form id="senhaForm" class="form-grid">
      ${input('senhaAtual','Senha atual','','password',true,'full')}
      ${input('novaSenha','Nova senha','','password',true,'full')}
      ${input('confirmarSenha','Confirmar nova senha','','password',true,'full')}
    </form>
    <div class="alert-box mt-16">ⓘ A senha deve ter no mínimo 8 caracteres.</div>
    <div class="btn-row mt-16"><button class="btn primary" type="submit" form="senhaForm">Alterar senha</button></div>
  </section>` : ''}`;
}

function renderPerfil() {
  const u = data.user;
  return `${pageHead('Meu Perfil', 'Visualize e edite as informações do seu perfil.')}
  <section class="grid cols-2" style="gap:22px">
    <div class="card pad">
      <div style="display:flex;align-items:center;gap:22px;margin-bottom:22px">
        <span class="avatar-img" style="width:80px;height:80px;font-size:30px">${initials(u.nome)}</span>
        <div><h2 style="margin:0 0 4px">${esc(u.nome)}</h2><p style="margin:0;color:var(--muted)">${esc(u.cargo)}</p><p style="margin:4px 0 0;color:var(--muted);font-size:13px">${esc(u.email)}</p></div>
      </div>
      <form id="perfilForm" class="form-grid">
        ${input('nome','Nome completo',u.nome,'text',true)}
        ${input('cargo','Cargo',u.cargo,'text',true)}
        ${input('email','E-mail institucional',u.email,'email',true,'full')}
      </form>
      <div class="btn-row mt-16"><button class="btn primary" type="submit" form="perfilForm">Salvar perfil</button></div>
    </div>
    <div class="card pad"><h2 class="card-title">Informações do sistema</h2>
      <div class="meta-grid" style="grid-template-columns:1fr;gap:14px">
        <div><strong style="font-size:12px;color:var(--muted)">Perfil de acesso</strong><br>Secretária — acesso total ao SENAI Connect</div>
        <div><strong style="font-size:12px;color:var(--muted)">Último acesso</strong><br>Hoje, 08:30</div>
        <div><strong style="font-size:12px;color:var(--muted)">Sistema</strong><br>SENAI HUB Connect v1.0</div>
      </div>
    </div>
  </section>`;
}

function renderSupportModal() {
  if (!state.supportModal) return '';
  return `<div class="modal-backdrop" data-action="close-support">
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-header"><h2 style="margin:0;font-size:19px">Abrir chamado de suporte</h2><button class="close-btn" data-action="close-support">×</button></div>
      <form id="supportForm" class="modal-body">
        <div class="form-grid">
          ${select('categoria','Categoria',['Dúvida','Erro no sistema','Solicitação de acesso','Outro'],'',true)}
          ${select('prioridade','Prioridade',['Baixa','Média','Alta'],'Média',true)}
          ${input('assunto','Assunto','','text',true,'full')}
          ${textarea('descricao','Descrição detalhada','','full')}
        </div>
      </form>
      <div class="modal-footer">
        <button class="btn" data-action="close-support">Cancelar</button>
        <button class="btn primary" type="submit" form="supportForm">Enviar chamado</button>
      </div>
    </div>
  </div>`;
}

function pagination(label) {
  return `<div class="table-footer"><span>${label}</span><div class="pagination"><button class="page-btn">‹</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><span>...</span><button class="page-btn">›</button></div></div>`;
}

function renderDrawer() {
  if (!state.drawer) return '';
  const { type, id } = state.drawer;
  if (type === 'aluno') return drawerShell(id ? 'Editar aluno' : 'Novo aluno', renderAlunoForm(id), 'alunoForm', id ? 'Salvar alterações' : 'Salvar');
  if (type === 'professor') return drawerShell(id ? 'Editar professor' : 'Novo professor', renderProfessorForm(id), 'professorForm', id ? 'Salvar alterações' : 'Salvar professor');
  if (type === 'contrato') return drawerShell(id ? 'Editar contrato de aluno' : 'Novo contrato de aluno', renderContratoForm(id), 'contratoForm', id ? 'Salvar alterações' : 'Salvar contrato');
  if (type === 'turma') return drawerShell(id ? 'Editar turma' : 'Criar nova turma', renderTurmaForm(id), 'turmaForm', id ? 'Salvar alterações' : 'Salvar turma');
  if (type === 'curso') return drawerShell(id ? 'Editar curso' : 'Criar curso', renderCursoForm(id), 'cursoForm', id ? 'Salvar alterações' : 'Salvar curso');
  return '';
}
function drawerShell(title, body, formId, saveText) {
  return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer wide" onclick="event.stopPropagation()"><header class="drawer-header"><h2 class="drawer-title">${title}</h2><button class="close-btn" data-action="close-drawer">×</button></header><form id="${formId}" class="drawer-body">${body}</form><footer class="drawer-footer"><button class="btn" type="button" data-action="close-drawer">Cancelar</button><button class="btn primary" type="submit" form="${formId}">${saveText}</button></footer></aside></div>`;
}
function renderModal() { return ''; }

function input(name, label, value='', type='text', req=false, cls='') {
  return `<label class="form-field ${cls}"><span class="label ${req?'required':''}">${label}</span><input class="input" name="${name}" type="${type}" value="${esc(value || '')}" ${req?'required':''}></label>`;
}
function select(name, label, options, value='', req=false, cls='') {
  return `<label class="form-field ${cls}"><span class="label ${req?'required':''}">${label}</span><select class="select" name="${name}" ${req?'required':''}>${options.map(o => Array.isArray(o) ? `<option value="${esc(o[0])}" ${String(o[0])===String(value)?'selected':''}>${esc(o[1])}</option>` : `<option value="${esc(o)}" ${String(o)===String(value)?'selected':''}>${esc(o)}</option>`).join('')}</select></label>`;
}
function textarea(name, label, value='', cls='') { return `<label class="form-field ${cls}"><span class="label">${label}</span><textarea class="textarea" name="${name}">${esc(value || '')}</textarea></label>`; }

function renderAlunoForm(id) {
  const a = id ? getAluno(id) : {};
  return `<h3 class="card-title">Dados pessoais</h3><div class="form-grid">
    ${input('nome','Nome completo',a.nome,'text',true)}${input('rm','RM',a.rm || 'RM2025...','text',true)}${input('cpf','CPF',a.cpf,'text',true)}${input('nascimento','Data de nascimento',a.nascimento,'date',true)}${input('email','E-mail pessoal',a.email,'email',true)}${input('emailInst','E-mail institucional',a.emailInst,'email',false)}${input('senha','Senha',a.senha || '12345678','password',true)}${input('confirmaSenha','Confirme senha',a.senha || '12345678','password',true)}
    <div class="form-field full"><span class="label">Foto</span><div class="upload-box">⇧<br>Clique ou arraste para fazer upload<br><small>JPG, PNG até 2MB</small></div></div>
  </div><h3 class="card-title mt-22">Informações acadêmicas</h3><div class="form-grid">
    ${select('turmaId','Turma',data.turmas.map(t=>[t.id,t.nome]),a.turmaId,true)}${select('cursoId','Curso',data.cursos.map(c=>[c.id,c.nome]),a.cursoId,true)}${select('empresa','Empresa',['TechLog Soluções Ltda.','InfoTech Consultoria','Transportes União S/A','Comercial Santa Clara','Sem empresa'],a.empresa,true)}${select('status','Status',['Ativo','Inativo','Pendente'],a.status || 'Ativo',true)}
  </div><h3 class="card-title mt-22">Informações adicionais</h3><div class="form-grid">${input('celular','Celular',a.celular,'text')} ${select('etnia','Etnia',['Não informado','Branca','Preta','Parda','Amarela','Indígena'],a.etnia || 'Não informado')} ${input('endereco','Endereço',a.endereco,'text',false,'full')} ${input('responsavel','Nome do responsável',a.responsavel,'text',false,'full')} ${textarea('obs','Observações',a.obs,'full')}</div>`;
}

function renderProfessorForm(id) {
  const p = id ? getProfessor(id) : {};
  return `<h3 class="card-title">Dados pessoais</h3><div class="form-grid">
    ${input('nome','Nome completo',p.nome,'text',true)}${input('cpf','CPF',p.cpf,'text',true)}${input('emailPessoal','E-mail pessoal',p.emailPessoal,'email',true)}${input('emailInst','E-mail institucional',p.emailInst,'email',true)}${input('senha','Senha',p.senha || '12345678','password',true)}${input('contratacao','Data de contratação',p.contratacao,'date',true)}${input('nascimento','Data de nascimento',p.nascimento,'date',true)}${input('celular','Celular',p.celular,'text',true)}${input('mae','Nome da mãe',p.mae)}${input('pai','Nome do pai',p.pai)}${select('etnia','Etnia',['Não informado','Branca','Preta','Parda','Amarela','Indígena'],p.etnia || 'Não informado')}
  </div><h3 class="card-title mt-22">Informações profissionais</h3><div class="form-grid">${select('especialidade','Especialidade / Disciplina',['Automação Industrial','Eletrotécnica','Logística','Informática','Mecânica','Soldagem','Desenho Técnico','Programação'],p.especialidade,true)}${select('turmaId','Turmas que dá aula',data.turmas.map(t=>[t.id,t.nome]),(p.turmasIds||[])[0])}${select('contrato','Tempo de contrato',['CLT','Temporário','PJ','Estágio'],p.contrato || 'CLT',true)}${select('status','Status',['Ativo','Férias','Inativo'],p.status || 'Ativo',true)}${input('endereco','Endereço',p.endereco,'text',false,'full')}</div>`;
}

function renderTurmaForm(id) {
  const t = id ? getTurma(id) : {};
  return `<div class="form-grid three">${input('nome','Nome da turma',t.nome || 'TURMA AUT25-03','text',true)}${input('inicio','Data de início',t.inicio,'date',true)}${input('termino','Data de término',t.termino,'date',true)}${select('status','Status',['Ativa','Pendente','Em andamento','Concluída'],t.status || 'Ativa',true)}${input('qtd','Quantidade de alunos',(t.alunosIds||[]).length || '40','number',true)}${select('periodo','Período',['Manhã','Tarde','Noite'],t.periodo || 'Noite',true)}${input('horario','Complemento do período (horário)',t.horario || '07:00 às 11:00','text',true)}${select('sala','Sala',['BLOCO A - Sala 203','BLOCO D - Sala 201','BLOCO C - Oficina','BLOCO E - Laboratório'],t.sala,true)}${select('professorId','Professor responsável',data.professores.map(p=>[p.id,p.nome]),t.professorId,true)}${select('cursoId','Curso',data.cursos.map(c=>[c.id,c.nome]),t.cursoId,true)}${input('dias','Dia da semana',t.dias || 'Segunda, Quarta e Sexta','text',true,'full')}</div>`;
}
function renderCursoForm(id) {
  const c = id ? getCurso(id) : {};
  return `<div class="form-grid">${input('nome','Nome do curso',c.nome,'text',true)}${select('status','Status',['Ativo','Pendente','Em andamento','Concluído'],c.status || 'Ativo',true)}${input('inicio','Data de início',c.inicio,'date',true)}${input('termino','Data de término',c.termino,'date',true)}${select('periodo','Período',['Manhã','Tarde','Noite'],c.periodo || 'Noite',true)}${input('carga','Carga horária',c.carga || '120h','text',true)}${input('alunos','Quantidade de alunos',c.alunos || 0,'number',true)}${textarea('descricao','Descrição',c.descricao,'full')}</div>`;
}
function renderContratoForm(id) {
  const c = id ? data.contratos.find(x => x.id === id) : {};
  const aluno = getAluno(c.alunoId);
  return `<h3 class="card-title">Dados do contrato</h3><div class="form-grid">${select('alunoId','Nome do aluno',data.alunos.map(a=>[a.id,a.nome]),c.alunoId,true)}${input('empresa','Nome da empresa',c.empresa || aluno.empresa,'text',true)}${input('carteira','Carteira do aluno',c.carteira || '1234567 - 0030 - SP','text',true)}${select('localizacao','Localização da empresa',['SP','RJ','MG','PR'],c.localizacao || 'SP',true)}${select('carga','Carga horária',['8 horas','4 horas'],c.carga || '8 horas',true)}${input('inicio','Data de início do contrato',c.inicio,'date',true)}${input('emailPessoal','E-mail pessoal do aluno',c.emailPessoal || aluno.email,'email',true)}${input('emailInst','E-mail institucional do aluno',c.emailInst || aluno.emailInst,'email',true)}${input('emailEmpresa','E-mail da empresa',c.emailEmpresa || 'contato@empresa.com','email',true)}${select('status','Status do contrato',['Ativo','Pendente','Inativo'],c.status || 'Ativo',true)}${input('banco','Conta bancária',c.banco || 'Banco / Agência / Conta','text',false,'full')}<div class="form-field full"><span class="label required">Documento digitalizado do contrato</span><div class="upload-box">⇧<br>Arraste e solte o arquivo aqui<br>ou<br><button class="btn sm" type="button">Selecionar arquivo</button><small>Formatos aceitos: PDF (máx. 10MB)</small></div></div>${input('documento','Nome do arquivo',c.documento || 'Contrato_aluno.pdf','text',true,'full')}</div>`;
}

function formData(form) { return Object.fromEntries(new FormData(form).entries()); }
function upsert(collection, item) {
  const arr = data[collection];
  const idx = arr.findIndex(x => x.id === item.id);
  if (idx >= 0) arr[idx] = { ...arr[idx], ...item };
  else arr.unshift(item);
  saveData();
}
function removeById(collection, id) {
  data[collection] = data[collection].filter(x => x.id !== id);
  saveData();
}

function handleSubmit(e) {
  if (e.target.id === 'loginForm') {
    e.preventDefault();
    localStorage.setItem(SESSION_KEY, '1');
    setScreen('hub');
    toast('Login realizado com sucesso.');
    return;
  }
  if (e.target.id === 'alunoForm') {
    e.preventDefault();
    const fd = formData(e.target);
    const id = state.drawer.id || uid('aluno');
    const aluno = { id, ...fd };
    delete aluno.confirmaSenha;
    upsert('alunos', aluno);
    const turma = getTurma(fd.turmaId);
    if (turma && !turma.alunosIds.includes(id)) turma.alunosIds.push(id);
    saveData(); closeDrawer(); toast('Aluno salvo com sucesso.'); render(); return;
  }
  if (e.target.id === 'professorForm') {
    e.preventDefault();
    const fd = formData(e.target);
    const id = state.drawer.id || uid('prof');
    const prof = { id, ...fd, turmasIds: fd.turmaId ? [fd.turmaId] : [] };
    delete prof.turmaId;
    upsert('professores', prof);
    closeDrawer(); toast('Professor salvo com sucesso.'); render(); return;
  }
  if (e.target.id === 'turmaForm') {
    e.preventDefault();
    const fd = formData(e.target);
    const id = state.drawer.id || uid('turma');
    const existing = getTurma(id);
    const turma = { id, ...fd, alunosIds: existing.alunosIds || [] };
    upsert('turmas', turma);
    state.selectedTurmaId = id;
    closeDrawer(); toast('Turma salva com sucesso.'); render(); return;
  }
  if (e.target.id === 'cursoForm') {
    e.preventDefault();
    const fd = formData(e.target);
    const id = state.drawer.id || uid('curso');
    upsert('cursos', { id, ...fd, alunos: Number(fd.alunos || 0) });
    closeDrawer(); toast('Curso salvo com sucesso.'); render(); return;
  }
  if (e.target.id === 'contratoForm') {
    e.preventDefault();
    const fd = formData(e.target);
    const id = state.drawer.id || uid('contrato');
    upsert('contratos', { id, ...fd });
    closeDrawer(); toast('Contrato salvo com sucesso.'); render(); return;
  }
  if (e.target.id === 'perfilForm' || e.target.id === 'configContaForm') {
    e.preventDefault();
    const fd = formData(e.target);
    data.user.nome = fd.nome || data.user.nome;
    data.user.cargo = fd.cargo || data.user.cargo;
    data.user.email = fd.email || data.user.email;
    saveData(); toast('Perfil atualizado com sucesso.'); render(); return;
  }
  if (e.target.id === 'senhaForm') {
    e.preventDefault();
    const fd = formData(e.target);
    if (!fd.senhaAtual) { toast('Informe a senha atual.'); return; }
    if (fd.novaSenha !== fd.confirmarSenha) { toast('As senhas não conferem.'); return; }
    if ((fd.novaSenha || '').length < 8) { toast('A senha deve ter pelo menos 8 caracteres.'); return; }
    toast('Senha alterada com sucesso.'); render(); return;
  }
  if (e.target.id === 'supportForm') {
    e.preventDefault();
    const fd = formData(e.target);
    if (!fd.assunto) { toast('Informe o assunto do chamado.'); return; }
    state.supportModal = false;
    toast('Chamado enviado com sucesso! Nossa equipe entrará em contato.'); render(); return;
  }
}

function closeDrawer() { state.drawer = null; }
function openDrawer(type, id = null) { state.drawer = { type, id }; render(); }
function askDelete(label, fn) {
  if (confirm(`Deseja excluir ${label}? Essa ação será salva no navegador.`)) {
    fn();
    saveData();
    toast('Registro excluído com sucesso.');
    render();
  }
}

function handleClick(e) {
  const route = e.target.closest('[data-route]');
  if (route) { setPage(route.dataset.route); return; }
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  const id = el.dataset.id;
  if (action === 'toggle-profile') { state.profileOpen = !state.profileOpen; render(); return; }
  if (action === 'logout') { localStorage.removeItem(SESSION_KEY); state.screen='login'; render(); return; }
  if (action === 'access-connect') { state.screen = 'connect'; state.page = 'dashboard'; render(); return; }
  if (action === 'access-grid') { toast('SENAI Grid está preparado no Hub. Esta entrega foca o Connect mostrado nas imagens.'); return; }
  if (action === 'fake-recover') { toast('Link de recuperação simulado para o protótipo.'); return; }
  if (action === 'open-sidebar') { document.body.classList.add('menu-open'); return; }
  if (action === 'close-sidebar') { document.body.classList.remove('menu-open'); return; }
  if (action === 'close-drawer') { closeDrawer(); render(); return; }
  if (action === 'export') { toast('Exportação simulada no protótipo.'); return; }
  if (action === 'new-aluno') return openDrawer('aluno');
  if (action === 'edit-aluno') return openDrawer('aluno', id);
  if (action === 'delete-aluno') return askDelete('este aluno', () => { removeById('alunos', id); data.turmas.forEach(t => t.alunosIds = (t.alunosIds || []).filter(aid => aid !== id)); data.contratos = data.contratos.filter(c => c.alunoId !== id); delete data.frequencias[id]; });
  if (action === 'new-professor') return openDrawer('professor');
  if (action === 'edit-professor') return openDrawer('professor', id);
  if (action === 'delete-professor') return askDelete('este professor', () => removeById('professores', id));
  if (action === 'new-turma') return openDrawer('turma');
  if (action === 'edit-turma') return openDrawer('turma', id);
  if (action === 'delete-turma') return askDelete('esta turma', () => { removeById('turmas', id); data.alunos.forEach(a => { if (a.turmaId === id) a.turmaId = ''; }); });
  if (action === 'new-curso') return openDrawer('curso');
  if (action === 'edit-curso') return openDrawer('curso', id);
  if (action === 'delete-curso') return askDelete('este curso', () => { removeById('cursos', id); data.alunos.forEach(a => { if (a.cursoId === id) a.cursoId = ''; }); data.turmas.forEach(t => { if (t.cursoId === id) t.cursoId = ''; }); });
  if (action === 'new-contrato') return openDrawer('contrato');
  if (action === 'edit-contrato') return openDrawer('contrato', id);
  if (action === 'delete-contrato') return askDelete('este contrato', () => removeById('contratos', id));
  if (action === 'tab-turmas') { state.tab = 'turmas'; state.page = 'turmas'; render(); return; }
  if (action === 'tab-cursos') { state.tab = 'cursos'; state.page = 'cursos'; render(); return; }
  if (action === 'tab-frequencia') { state.freqTab = 'frequencia'; state.page = 'frequencia'; render(); return; }
  if (action === 'tab-gerenciar') { state.freqTab = 'gerenciar'; state.page = 'gerenciar-frequencia'; render(); return; }
  if (action === 'select-turma') { state.selectedTurmaId = id; render(); return; }
  if (action === 'clear-turma') { state.selectedTurmaId = data.turmas[0]?.id; render(); return; }
  if (action === 'go-alunos') { setPage('alunos'); return; }
  if (action === 'select-curso-local') { state.selectedCursoLocId = id; const first = data.alunos.find(a => a.cursoId === id); if (first) state.selectedAlunoId = first.id; render(); return; }
  if (action === 'select-aluno-local') { state.selectedAlunoId = id; render(); return; }
  if (action === 'mark-freq') {
    const aluno = el.dataset.aluno;
    const aula = el.dataset.aula;
    const value = el.dataset.value;
    data.frequencias[aluno] = data.frequencias[aluno] || { trabalhados: 0, uteis: 24, fj: 0, fi: 0, chamadas: {} };
    data.frequencias[aluno].chamadas = data.frequencias[aluno].chamadas || {};
    data.frequencias[aluno].chamadas[aula] = value;
    saveData(); render(); return;
  }
  if (action === 'save-frequencia') { toast('Chamada salva com sucesso.'); return; }
  if (action === 'clear-search') { state.search=''; render(); return; }
  if (action === 'apply-search') { toast('Filtros aplicados.'); return; }
  if (action === 'go-configuracoes') { state.profileOpen = false; state.page = 'configuracoes'; state.configTab = 'conta'; render(); return; }
  if (action === 'go-perfil') { state.profileOpen = false; state.page = 'perfil'; render(); return; }
  if (action === 'config-tab-conta') { state.configTab = 'conta'; render(); return; }
  if (action === 'config-tab-notificacoes') { state.configTab = 'notificacoes'; render(); return; }
  if (action === 'config-tab-seguranca') { state.configTab = 'seguranca'; render(); return; }
  if (action === 'open-support') { state.supportModal = true; render(); return; }
  if (action === 'close-support') { state.supportModal = false; render(); return; }
  if (action === 'save-aparencia') { toast('Preferências de aparência salvas.'); return; }
  if (action === 'save-notif') { toast('Preferências de notificações salvas.'); return; }
}

function handleChange(e) {
  if (e.target.id === 'freqTurma') { state.selectedTurmaId = e.target.value; render(); }
  if (e.target.id === 'salaryAluno') { state.salaryAlunoId = e.target.value; render(); }
}
function handleInput(e) {
  if (e.target.id === 'globalSearch' || e.target.matches('[data-local-search]')) {
    state.search = e.target.value;
    clearTimeout(window.__renderSearch);
    window.__renderSearch = setTimeout(render, 250);
  }
}

document.addEventListener('submit', handleSubmit);
document.addEventListener('click', handleClick);
document.addEventListener('change', handleChange);
document.addEventListener('input', handleInput);

render();
