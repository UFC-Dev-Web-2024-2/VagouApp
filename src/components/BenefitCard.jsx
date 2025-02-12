import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const BenefitCard = ({ icon, title, description, theme }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent sx={{ textAlign: "center" }}>
      <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{icon}</Box>
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </CardContent>
  </Card>
);

BenefitCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default React.memo(BenefitCard);
