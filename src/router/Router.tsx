import { memo, FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { UserManagement } from '@/components/pages/UserManagement';
import { Setting } from '@/components/pages/Setting';
import { Page404 } from '@/components/pages/Page404';
import { HeaderLayout } from '@/components/templates/HeaderLayout';

export const Router: FC = memo(() => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path='home'>
          <Route index element={<HeaderLayout><Home /></HeaderLayout>} />
            <Route path="user_management" element={<HeaderLayout><UserManagement /></HeaderLayout>} />
            <Route path="setting" element={<HeaderLayout><Setting /></HeaderLayout>} />
        </Route>
        <Route path="/*" element={<HeaderLayout>< Page404 /></HeaderLayout>} />
    </Routes>
  )
});
