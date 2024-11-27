import {
  Box,
  Flex,
  Heading,
  Link,
  useDisclosure
} from '@chakra-ui/react';
import { memo, FC, useCallback } from 'react';
import { MenuDrawer } from '@/components/molecules/MenuDrawer';
import { useNavigate } from 'react-router-dom';

export const Header: FC = memo(() => {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate('/home');
  }, []);
  const onClickUserManagement = useCallback(() => {
    navigate('/home/user_management');
  }, []);
  const onClickSetting = useCallback(() => {
    navigate('/home/setting');
  }, []);

  return (
    <>
      <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 5}}
      >
        <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex'}}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement} color='inherit'>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting} color='inherit'>設定</Link>
        </Flex>
        <MenuDrawer
          onClickHome={onClickHome}
          onClickUserManagement={onClickUserManagement}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </>
  );
});
