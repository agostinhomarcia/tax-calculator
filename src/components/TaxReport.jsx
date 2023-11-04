import { Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TaxReport = ({ taxData }) => {
  return (
    <Container>
      <Typography style={{ color: "#363636", marginTop: "20px" }} variant="h5">
        Relatório de Impostos
      </Typography>
      <Typography style={{ color: "#363636" }} variant="body1">
        Nome: {taxData.name}
      </Typography>
      <Typography style={{ color: "#363636" }} variant="body1">
        Idade: {taxData.age} anos
      </Typography>
      <Typography style={{ color: "#363636" }} variant="body1">
        Renda:
        {parseFloat(taxData.income).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography style={{ color: "#363636" }} variant="body1">
        Imposto a Pagar:
        {parseFloat(taxData.tax).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
    </Container>
  );
};

TaxReport.propTypes = {
  taxData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
  }).isRequired,
};

export default TaxReport;
