import {Container, Typography} from "@material-ui/core";
import Orderform from "./components/Order/Orderform";
function App() {
  return (
<Container maxWidth="md">
     <Typography
     gutterBottom
      variant="h2"
      align="center"
     >
     Resturant App
     <Orderform/>
     </Typography>
</Container>
  );
}

export default App;
