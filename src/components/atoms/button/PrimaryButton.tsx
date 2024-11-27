import { memo, ReactNode, FC } from 'react';
import { Button, Spinner } from '@chakra-ui/react';
import { toaster } from "@/components/ui/toaster";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  const handleClick = async () => {
    await onClick();
  };

  return (
    <Button
      bg='teal.400'
      color='white'
      _hover={{ opacity: 0.8}}
      onClick={handleClick}
      disabled={disabled || loading}>
      {loading ? <Spinner /> : children}
    </Button>
  );
});
