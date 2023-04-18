import { Grid, Button, Badge } from "@mantine/core";
import "./Header.css";
import { useDispatch } from "react-redux";

import { uiAction } from "../../store/ui-slice";

function Header() {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
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
              onClick={cartHandler}
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
