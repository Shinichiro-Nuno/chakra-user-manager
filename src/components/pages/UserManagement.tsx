import { memo, useCallback, FC, useEffect } from 'react';
import { Center, Flex, Spinner, useDisclosure } from '@chakra-ui/react';

import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useAllUsers } from '@/hooks/useAllUsers';
import { useSelectUser } from '@/hooks/useSelectUser';
import { useLoginUser } from '@/hooks/useLoginUser';

export const UserManagement: FC = memo(() => {
  const { open, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
      <Center h='100vh'>
        <Spinner />
      </Center>
      ) : (
        <Flex
          wrap='wrap'
          gap={4}
          mx='auto'
          justifyContent='center'
          p={{ base: 4, md: 10 }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              style={{ cursor: 'pointer' }}
            >
              <UserCard
                id={user.id}
                imageUrl='https://picsum.photos/260'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </div>
          ))}
          {/* ダイアログ */}
          <UserDetailModal
            isOpen={open}
            onClose={onClose}
            user={selectedUser}
          />
        </Flex>
      )}
    </>
  )
});
