import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Rating,
} from "@mui/material";
import PropTypes from "prop-types";

const ReviewCard = ({ rating, title, author, avatar }) => (
  <Card>
    <CardContent>
      <Rating value={rating} readOnly sx={{ mb: 1 }} />
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} sx={{ mr: 1 }} />
        <Typography color="text.secondary">{author}</Typography>
      </Box>
    </CardContent>
  </Card>
);

ReviewCard.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default React.memo(ReviewCard);
