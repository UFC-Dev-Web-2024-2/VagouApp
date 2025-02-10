import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material';
import Header from '../componentes/Header';
'rgb(0, 30, 79)'
const SobreNos = () => {
  return (
    
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ my: 4 }}>
        <Box position="static" sx={{ bgcolor: 'rgb(0, 30, 79)'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white',fontWeight: 'bold',fontSize: '30px' }}>
              Sobre nós
            </Typography>
        </Box>
        <Box sx={{ width: '50%' ,my: 4,ml: '40px' }}>
          <Typography variant="body1">
            A Vagou.app é uma plataforma criada especialmente para ajudar universitários a encontrar a moradia ideal de forma prática, segura e descomplicada.
          </Typography>
        </Box>
        <Box sx={{ width: '50%', my: 4,ml: '40px' }}>
          <Typography variant="body1">
            Voltada tanto para estudantes quanto para proprietários, o Vagou oferece uma experiência completa: desde a busca por apartamentos ou quartos até o fechamento do contrato digital.
          </Typography>
        </Box>
        <Box sx={{ width: '50%', my: 4,ml: '40px' }}>
          <Typography variant="body1">
            Com funcionalidades como pagamentos pelo app, chat integrado, avaliações de imóveis e prevenção contra golpes, o Vagou facilita o dia a dia de quem está em busca de um novo lar. Além disso, proporciona informações úteis e ferramentas que ajudam a tomar a melhor decisão na hora de alugar um imóvel.
          </Typography>
        </Box>

        <Box sx={{ width: '50%', my: 4,ml: '40px' }}>
          <Typography variant="h4" component="h1">
            História
          </Typography>
          
          <Box sx={{ width: '200%', my: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap : '80px' }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1">
                A Vagou surgiu entre julho e agosto de 2023. Formada inicialmente por alunos da universidade
                federal do Ceará (UFC), campus Quixadá, a ideia nasceu de forma natural quando David Natanael, CEO
                e UX Designer, enfrentou problemas com seu apartemento e conversou com outros estudantes em situações
                semelhantes. Durante a aula de Projeto Integrado 4, a proposta foi apresentada, mas a equipe ainda estava
                incompleta. Isso mudou ao descobrir que outra equipe com ideias complementares também precisava de mais membros. 
              </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1">
                Assim, David se uniu a Jerley dos Santos (Gerente de Marketing), Diego Moreira (Desenvolvedor Web) e
                Nathan dos Santos (Desenvolvedor Fullstack). Com o time formado, o projeto começou a ganhar forma, porém
                a equipe vendo a dimensão que o projeto tomaria era preciso de mais ajuda e conhecimentos diversos, na semana
                seguinte, Lucas Gadelha (Gerente de Negócios) e Maria Rita (Scrum Master) se juntaram ao projeto, agregando
                suas habilidades e conhecimentos. A Vagou cresceu desde então, sendo reconhecida como uma das principais startups
                emergentes do Ceará.
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Box position="static" sx={{ bgcolor: 'rgb(0, 30, 79)', height: '400px' }}>
            <Box sx={{ height: '30px' }}></Box>
            <Box sx={{ width: '50%', my: 4,ml: '40px',color: 'white',height: '50px' }}>
              <Typography variant="h4" component="h1" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
                Prêmios
              </Typography>
            </Box>
            <Box sx={{ width: '50%', my: 4,ml: '40px',color: 'white' }}>
              <Typography variant="body1">
                Em 2023 fomos selecionados na trilha de inovação Bora Criar, dos Corredores Digitais, onde ficamos entre as 10 melhores startups emergentes do Ceará, ganhando nosso primeiro reconhecimento real.
              </Typography>
            </Box>
            <Box sx={{ width: '50%', my: 4,ml: '40px',color: 'white' }}>
              <Typography variant="body1">
                Esse ano, em 2024, concorremos com mais de 140 startups de todo o Brasil e ficamos entre as 4 melhores startups e inovações pela trilha Bora Construir, também dos Corredores Digitais.
              </Typography>
            </Box>
        </Box>
        <Box position="static" sx={{ bgcolor: 'white', height: '400px' }}>
            <Box sx={{ height: '30px' }}></Box>
            <Box sx={{ width: '50%', my: 4,ml: '40px',color: 'rgb(0, 30, 79)',height: '50px' }}>
              <Typography variant="h4" component="h1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Função Social
              </Typography>
            </Box>
            <Box sx={{ my: 4,ml: '40px',color: 'rgb(0, 30, 79)' }}>
              <Typography variant="body1">
              A função social da Vagou é facilitar o acesso a moradias para estudantes universitários, promovendo inclusão, segurança e praticidade no processo de encontrar e alugar imóveis. A plataforma ajuda a conectar jovens de diferentes origens, permitindo que eles compartilhem despesas, encontrem colegas compatíveis para dividir moradia e façam contratos de forma descomplicada. Além disso, a Vagou contribui para a prevenção de fraudes, oferece informações úteis sobre serviços essenciais e cria uma rede de confiança com avaliações e feedbacks, promovendo uma experiência de moradia mais acessível e colaborativa para os estudantes.  
              </Typography>
            </Box>
            
        </Box>
      </Box>
    </Container>
  );
};

export default SobreNos;
