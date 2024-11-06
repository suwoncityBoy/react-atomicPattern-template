import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import ExampleModal1 from '@/components/organisms/modal/ExampleModal1';
import { useModal } from '@/hooks/useModal';

function Calendar() {
  const modal1 = useModal();
  return (
    <Text bold>
      무진장 핫세일
      <Button onClick={modal1.openModal}>Open First Modal</Button>
      {modal1.isOpen && (
        <ExampleModal1>
          <ExampleModal1.Header>
            <div>test</div>
          </ExampleModal1.Header>
          <ExampleModal1.Content>
            <div>asdf</div>
          </ExampleModal1.Content>
          <ExampleModal1.Footer>
            <div>asdf</div>
            <button onClick={modal1.closeModal}>Close</button>
          </ExampleModal1.Footer>
        </ExampleModal1>
      )}
    </Text>
  );
}

export default Calendar;
