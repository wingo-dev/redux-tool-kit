import { Grid, Button, Badge } from "@mantine/core";
import "./Header.css";

function Header() {
  return (
    <div className="header-color">
      <Grid>
        <Grid.Col span={4}>
          <img src="" alt="site-logo" />
        </Grid.Col>
        <Grid.Col span={4}>
          <div>menu</div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              Cart
            </Button>
            <Badge variant="gradient" gradient={{ from: "orange", to: "red" }}>
              0
            </Badge>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Header;
