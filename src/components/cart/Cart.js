import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, ScrollArea } from "@mantine/core";

function Cart() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(10)
    .fill(0)
    .map((_, index) => <p key={index}>product item</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Cart Items"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

export default Cart;
