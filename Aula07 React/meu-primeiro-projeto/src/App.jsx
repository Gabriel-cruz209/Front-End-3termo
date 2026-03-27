// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from "react";
import "./App.css";
import "./profile-panel.css";

function App() {
  return (
    <div id="main-container">
      <h1>Olá, React!</h1>
      <p>Estou alterando meu primeiro componente.</p>
      
      <div className="components-grid">
        <Perfil nome="Gabriel" cargo="Adm" email="gc@gmail.com"/>
        <Panel />
      </div>
      <Mercado produto='Monster Branco' preco='R$12,00' quantidade='10' estoque='bebidas'/>
      <Paine2/>

      <h4>Aqui está um teste de State e Hooks:</h4>
      <PlacarFutebol nomeTimeA='Corinthias' nomeTimeB='Palmeras'/>
      <Saudacao />
    </div>
  );
}

function Saudacao() {
  return (
    <div className="saudacao-box">
      <h2>Olá, Alunos</h2>
      <p>Este Componente foi criado separadamente.</p>
    </div>
  );
}

// Crie 2 componetes chamados de perfil e painel respectivamente e adicione alguma frase e estilização a sua escolha.Obs: nao esqueça de chamalo no Componente principal(App)
function Perfil({nome, cargo, email}) {
  const initial = nome ? nome.charAt(0).toUpperCase() : "?";
  
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">{initial}</div>
        <div className="profile-title">
          <h2>Perfil</h2>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-item">
          <label>Usuário</label>
          <p>{nome}</p>
        </div>
        <div className="info-item">
          <label>Cargo</label>
          <p>{cargo}</p>
        </div>
        <div className="info-item">
          <label>Email</label>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

function Panel(){
  return(
    <div className="panel-form">
      <h2>Configurações do Painel</h2>
      <div className="form-group">
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" id="nome" placeholder="Digite seu nome..." />
      </div>
      <div className="form-group">
        <label htmlFor="email">Endereço de E-mail</label>
        <input type="email" id="email" placeholder="email@exemplo.com" />
      </div>
      <div className="form-actions">
        <button className="btn-primary">Salvar Alterações</button>
      </div>
    </div>
  );
}

function Mercado({produto, preco, quantidade, estoque}) {
  
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-title">
          <h2>Mercado</h2>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-item">
          <label>Nome Produto</label>
          <p>{produto}</p>
        </div>
        <div className="info-item">
          <label>Preço Produto</label>
          <p>{preco}</p>
        </div>
        <div className="info-item">
          <label>Quantidades item</label>
          <p>{quantidade}</p>
        </div>
        <div className="info-item">
          <label>estoque adicionado</label>
          <p>{estoque}</p>
        </div>
        <button className='btn-primary'>Adicionar</button>
      </div>
    </div>
  );
}

function Paine2(){
  const [texto, setTexto] = useState('');

  return(
    <div style={{background: '#f9f9f9',padding: '15px', border: '1px dashed #666',marginTop: '20px'}}>
      <h4>Escreva uma mensagem</h4>
      <input type="text" placeholder="Digite algo..." onChange={(e) => setTexto(e.target.value)} style={{padding: '8px', width: '80%'}} />
      <p>O que voce digitou: <span style={{color: 'blue'}}>{texto}</span></p>
    </div>
  )
}

function PlacarFutebol({nomeTimeA, nomeTimeB}){
  const [golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  return(
    <div style={{border: '3px solid green', borderRadius: '15px', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto'}}>
      <h2 style={{color: 'green'}}>Placar do Jogo</h2>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {/* Lado do time A  */}
        <div>
          <h3>{nomeTimeA}</h3>
          <h1 style={{
            fontSize: '40px',
            margin: '10px 0'
          }}>{golsA}</h1>
          <button onClick={() => setGolsA(golsA + 1)} >GOLL!!</button>
        </div>

        <h1 style={{margin: '0 25px'}}>X</h1>

        <div>
          <h3>{nomeTimeB}</h3>
          <h1 style={{
            fontSize: '40px',
            margin: '10px 0'
          }}>{golsB}</h1>
          <button onClick={() => setGolsB(golsB + 1)} >GOLL!!</button>
        </div>
        {/* <button onclick={() => setGolsB(golsB == 0)}>Zerrar B</button> */}
        <button onClick={() => setGolsA(golsA == 0) }>Zerrar A</button>
      </div>
    </div>
  )
}

export default App;

