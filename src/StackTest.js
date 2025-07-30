import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function StackTest() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack   divider={<Divider orientation="vertical" flexItem />}
 direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <AddShoppingCartRoundedIcon/>
      </Stack>
    </Box>
  );
}
