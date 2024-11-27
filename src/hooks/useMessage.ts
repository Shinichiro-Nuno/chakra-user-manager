import { useCallback } from "react";
import { toaster } from "@/components/ui/toaster";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;

    toaster.create({ description: title, type: status });
  }, []);

  return { showMessage };
};
