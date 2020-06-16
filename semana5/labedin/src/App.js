import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './pp.jpg'
import tag from './tag.png'
import email from './email.png'
import info from './info.png'
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Airton Lopes" 
          descricao="Oi, eu sou o Airton Lopes. Sou aluno da Labenu. Adoro responder e-mails na sexta-feira e esperar que o chefe Astrodev responda sem bronca, e adore as respostas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
      icone={email}
      tipo="E-mail: "
      informacao="lopsan@labenu.com"
      />

      <CardPequeno
      icone={tag}
      tipo="Endereco: "
      informacao="Rua das Flores, 29 - B Saudade"
      />

      <CardGrande 
        imagem={info}
        nome=<strong>Informacoes importantes:</strong>
        descricao="Ja trabalhou como consultor vendas"
        descricao2="Ensino superior em agronegocio"
        descricao3="Ja trabalhou como gerente"
        descricao4="Mente aberta, empatia, alruismo"       
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        <CardPequeno
        icone={email}
        tipo="E-mail: "
        informacao="labenu@labenu.com"
        />

        <CardPequeno
        icone={tag}
        tipo="Endereco: "
        informacao="Rua Labenu, 33 - B TechTalk"
        />
        <h2>Mais algumas informacoes importantes</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
