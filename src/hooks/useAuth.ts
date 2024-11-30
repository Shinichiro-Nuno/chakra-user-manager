import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "@/types/api/user";
import { useNavigate } from "react-router-dom";

import { useMessage } from "@/hooks/useMessage";
import { useLoginUser } from "@/hooks/useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (res.data) {
          setLoginUser(res.data);
          showMessage({
            title: "ログインしました",
            status: "success"
          });
          navigate("/home");
        } else {
          showMessage({
            title: "ユーザーが見つかりません",
            status: "error",
          });
        }
      } catch (error) {
        showMessage({
          title: "ログインできません",
          status: "error",
        });
      } finally {
        setLoading(false);
      }
    }, []
  );

  return { login, loading, setLoginUser };
}
