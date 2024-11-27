import { memo, FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { DrawerTrigger } from "@/components/ui/drawer"

export const MenuIconButton: FC = memo(() => {
  return (
    <DrawerTrigger asChild>
    <IconButton
      aria-label='メニューボタン'
      size='sm'
      color='inherit'
      variant='plain'
      display={{base: 'false', md: 'none'}}
    >
      <FaBars />
    </IconButton>
    </DrawerTrigger>
  );
});
