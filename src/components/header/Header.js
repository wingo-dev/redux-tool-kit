import { Grid } from "@mantine/core";
import "./Header.css";
function Header() {
  return (
    <div className="header-color">
      <Grid>
        <Grid.Col span={4}>
          <img src="" />
        </Grid.Col>
        <Grid.Col span={4}>
          <div>menu</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>cart</div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Header;
