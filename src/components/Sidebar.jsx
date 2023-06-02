import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants.js";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
    direction='row' sx={{
      flexDirection:{md:'column'},
      overflowY:'scroll',
      height:{sx:'auto',md:'95%'},
      minWidth:{md:'10vw'},
      maxWidth:{md:'10vw'}
     }}
    >
      {categories.map((item) => (
        <Box
          key={item.name}
          className={
            selectedCategory === item.name
              ? "category--btn category--selected-btn"
              : "category--btn"
          }
          onClick={() => setSelectedCategory(item.name)}
        >
          <span className="category--btn-icon">{item.icon}</span>
          <span className="category--btn-name">{item.name}</span>
        </Box>
      ))}
      <Typography
        sx={{
          color: "#fff",
          fontSize: {xs:'0.5rem',md:"1rem"},
          fontWeight: "BOLD",
          paddingX: "5px",
          textAlign: "center",
          marginTop:{xs:'8px'}
        }}
      >
        Copyright @2023 kAUSHIK Chhetri
      </Typography>
    </Stack>
  );
};

export default Sidebar;
