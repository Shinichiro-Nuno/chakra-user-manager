import { memo, FC, useState } from 'react';
import { MenuIconButton } from '@/components/atoms/button/MenuIconButton';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerActionTrigger
} from "@/components/ui/drawer"
import { Button } from '@chakra-ui/react';

type Props = {
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo(props => {
  const {
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;

  return (
    <DrawerRoot placement='left' size='xs'>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIconButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody p={0} bg='gray.100' color='black' fontWeight='bold'>
        <DrawerActionTrigger asChild>
          <Button onClick={onClickHome} w='100%' bg='inherit' color='inherit' fontWeight='inherit' _hover={{ bg: 'gray.200'}}>TOP</Button>
        </DrawerActionTrigger>
        <DrawerActionTrigger asChild>
          <Button onClick={onClickUserManagement} w='100%' bg='inherit' color='inherit' fontWeight='inherit' _hover={{ bg: 'gray.200'}}>ユーザー一覧</Button>
        </DrawerActionTrigger>
        <DrawerActionTrigger asChild>
          <Button onClick={onClickSetting} w='100%' bg='inherit' color='inherit' fontWeight='inherit' _hover={{ bg: 'gray.200'}}>設定</Button>
        </DrawerActionTrigger>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
});
