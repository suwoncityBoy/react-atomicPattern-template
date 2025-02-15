import Button from '@/components/atoms/Button';
import { Column } from '@/components/atoms/Column';
import Text from '@/components/atoms/Text';

function Calendar() {
  return (
    <Column className='gap-x-20'>
      <Text className='text-black'>기본 regular 텍스트 입니다.</Text>
      <Text weight='bold'>Pretendard-bold 폰트를 사용하는 텍스트</Text>
      <Button>
        <Text>Textadsads</Text>
      </Button>
    </Column>
  );
}

export default Calendar;
