import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../feature/count/count';
import ThemeSlice from '../feature/changeTheme/theme';

export default configureStore({
  // reducer là một bộ máy dùng để phân tích và tính cập nhập lại state
  reducer: {
    counter: counterSlice,
    theme: ThemeSlice,
    // more reducer...
  },
});
