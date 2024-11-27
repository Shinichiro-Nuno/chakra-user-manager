import { memo, FC } from 'react';
import { Box, Image, Stack, Text, Input } from '@chakra-ui/react';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"

import { User } from '@/types/api/user';

type Props = {
  isOpen : boolean;
  onClose : () => void;
  selectedUser : User | null;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, selectedUser } = props;

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} motionPreset='slide-in-bottom' trapFocus={false}>
      {selectedUser && (
        <DialogContent pb={4}>
          <DialogHeader>
            <DialogTitle>ユーザー詳細</DialogTitle>
          </DialogHeader>
          <DialogBody mx={4}>
            <Stack gap='4'>
              <Field label='名前'>
                <Input value='太郎' />
              </Field>
              <Field label='フルネーム'>
                <Input value='Tarou Yamada' />
              </Field>
              <Field label='MAIL'>
                <Input value='12345@example.com' />
              </Field>
              <Field label='TEL'>
                <Input value='090-1111-2222' />
              </Field>
            </Stack>
          </DialogBody>
          <DialogCloseTrigger _hover={{ background: 'transparent'}} cursor='default' />
        </DialogContent>
      )}
    </DialogRoot>
  );
});
