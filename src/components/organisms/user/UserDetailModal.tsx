import { memo, FC, useState, useEffect, ChangeEvent } from 'react';
import { Stack, Input, DialogFooter } from '@chakra-ui/react';
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
import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setUsername(user?.username ?? ''),
    setName(user?.name ?? ''),
    setEmail(user?.email ?? ''),
    setPhone(user?.phone ?? '')
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

  const onClickUpdate = () => alert();

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} motionPreset='slide-in-bottom' trapFocus={false}>
      {user && (
        <DialogContent pb={2}>
          <DialogHeader>
            <DialogTitle>ユーザー詳細</DialogTitle>
          </DialogHeader>
          <DialogBody mx={4}>
            <Stack gap='4'>
              <Field label='名前'>
                <Input value={username} onChange={onChangeUserName} readOnly={!isAdmin} />
              </Field>
              <Field label='フルネーム'>
                <Input value={name} onChange={onChangeName} readOnly={!isAdmin}/>
              </Field>
              <Field label='MAIL'>
                <Input value={email} onChange={onChangeEmail} readOnly={!isAdmin} />
              </Field>
              <Field label='TEL'>
                <Input value={phone} onChange={onChangePhone} readOnly={!isAdmin} />
              </Field>
            </Stack>
          </DialogBody>
          {isAdmin && (
            <DialogFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </DialogFooter>
          )}
          <DialogCloseTrigger _hover={{ background: 'transparent'}} cursor='default' />
        </DialogContent>
      )}
    </DialogRoot>
  );
});
