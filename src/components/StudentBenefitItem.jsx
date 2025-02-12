import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

const StudentBenefitItem = ({ icon, text }) => (
  <ListItem>
    <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
    <ListItemText primary={text} sx={{ color: "white" }} />
  </ListItem>
);

StudentBenefitItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default React.memo(StudentBenefitItem);
