import { memo, FC, useEffect, useState } from 'react';
import { Center, Flex, Spinner } from '@chakra-ui/react';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '@/hooks/useAllUsers';
import { User } from '@/types/api/user';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isOpen, setIsDialogOpen] = useState(false);

  useEffect(() => getUsers(), []);

  const handleDialogOpen = (user: User) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const onClose = () => {
    setSelectedUser(null);
    setIsDialogOpen(false);
  };

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
              onClick={() => handleDialogOpen(user)}
              style={{ cursor: 'pointer' }}
            >
              <UserCard
                imageUrl='https://picsum.photos/260'
                userName={user.username}
                fullName={user.name}
              />
            </div>
          ))}
          {/* ダイアログ */}
          <UserDetailModal
            isOpen={isOpen}
            onClose={onClose}
            selectedUser={selectedUser}
          />
        </Flex>

      )}
    </>
  )
});
