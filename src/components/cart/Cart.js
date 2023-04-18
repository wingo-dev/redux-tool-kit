import { useDisclosure } from "@mantine/hooks";
import { Modal, ScrollArea } from "@mantine/core";
import { useSelector } from "react-redux";

function Cart() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(10)
    .fill(0)
    .map((_, index) => <p key={index}>product item</p>);

  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <Modal
        opened={showCart && open}
        onClose={close}
        title="Cart Items"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default Cart;
