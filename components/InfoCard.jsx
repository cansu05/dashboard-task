import { Paper, Typography } from "@mui/material";

const InfoCard = ({ text, KwhInfo, boxShadowRGB }) => {
  return (
    <Paper sx={{ boxShadow: boxShadowRGB, p: 4, minWidth: "250px" }}>
      <Typography variant="h6">{text} </Typography>
      <Typography variant="h4">{KwhInfo} kWh</Typography>
    </Paper>
  );
};
export default InfoCard;
