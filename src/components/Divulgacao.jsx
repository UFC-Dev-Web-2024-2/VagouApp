import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function Divulgacao() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Divulgação
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Complemento financeiro" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fundação digital" />
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Fins
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fins com atribuição" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Depletivos" />
        </ListItem>
      </List>
    </div>
  );
}

export default Divulgacao;
