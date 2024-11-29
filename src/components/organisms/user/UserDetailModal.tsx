import { memo, FC } from 'react';
import { Stack, Input } from '@chakra-ui/react';
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
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} motionPreset='slide-in-bottom' trapFocus={false}>
      {user && (
        <DialogContent pb={4}>
          <DialogHeader>
            <DialogTitle>ユーザー詳細</DialogTitle>
          </DialogHeader>
          <DialogBody mx={4}>
            <Stack gap='4'>
              <Field label='名前'>
                <Input value={user?.username} readOnly />
              </Field>
              <Field label='フルネーム'>
                <Input value={user?.name} readOnly />
              </Field>
              <Field label='MAIL'>
                <Input value={user?.email} readOnly />
              </Field>
              <Field label='TEL'>
                <Input value={user?.phone} readOnly />
              </Field>
            </Stack>
          </DialogBody>
          <DialogCloseTrigger _hover={{ background: 'transparent'}} cursor='default' />
        </DialogContent>
      )}
    </DialogRoot>
  );
});
