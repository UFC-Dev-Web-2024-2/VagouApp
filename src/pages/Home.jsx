import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  List,
  useTheme,
} from "@mui/material";
import { PhoneAndroid as PhoneIcon } from "@mui/icons-material";
import BenefitCard from "../components/BenefitCard";
import ReviewCard from "../components/ReviewCard";
import StudentBenefitItem from "../components/StudentBenefitItem";
import { benefits, reviews, studentBenefits } from "../constants/data.jsx";

function Home() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "600px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
          alt="Student Housing"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            mixBlendMode: "overlay",
          }}
        />
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box maxWidth="md">
            <Typography
              variant="h2"
              component="h1"
              color="white"
              gutterBottom
              fontWeight="bold"
            >
              Encontre sua nova moradia com a Vagou.app
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Pague seu aluguel diretamente pelo app, converse com proprietários
              e futuros colegas em tempo real, e tenha acesso a contratos
              digitais sem burocracia.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="success"
              startIcon={<PhoneIcon />}
              sx={{ mt: 2 }}
            >
              Baixar App
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: theme.palette.primary.main, py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" color="white" gutterBottom>
            Benefícios
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="white"
            paragraph
            sx={{ mb: 6 }}
          >
            Conheça e localize os melhores locais, economize tempo, faça tudo de
            forma fácil, rápida e fácil sem sair do lugar para morar.
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  theme={theme}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "grey.900", py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" color="white" gutterBottom>
            Conecte-se
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="white"
            paragraph
            sx={{ mb: 6, maxWidth: "md", mx: "auto" }}
          >
            Na Vagou.app, jovens universitários têm a oportunidade de se
            conectar facilmente, fazer novos amigos e até mesmo dividir despesas
            de maneira rápida e descomplicada.
          </Typography>
          <Grid container spacing={3}>
            {reviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ReviewCard
                  rating={review.rating}
                  title={review.title}
                  author={review.author}
                  avatar={review.avatar}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: theme.palette.primary.main, py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="white" gutterBottom>
                Benefícios para Estudantes:
              </Typography>
              <List>
                {studentBenefits.map((benefit, index) => (
                  <StudentBenefitItem
                    key={index}
                    icon={benefit.icon}
                    text={benefit.text}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Students"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Comece Agora
          </Typography>
          <Typography
            variant="h6"
            paragraph
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Encontre sua nova moradia na Vagou.app e transforme sua experiência
            em algo simples, seguro e descomplicado!
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="success"
            startIcon={<PhoneIcon />}
          >
            Baixar App
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
