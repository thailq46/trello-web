# How to guides Minimizing bundle size

Tree-shaking: import trong dấu {}
🐌 Named
import { Delete } from '@mui/icons-material';
🚀 Default
import Delete from '@mui/icons-material/Delete';
-> Trong MUI import kiểu Named sẽ chậm hơn x6 lần import kiểu Default
+) Không import quá 3 cấp
✅ OK
import { Add as AddIcon } from '@mui/icons-material';
import { Tabs } from '@mui/material';
// ^^^^^^^^ 1st or top-level

✅ OK
import AddIcon from '@mui/icons-material/Add';
import Tabs from '@mui/material/Tabs';
// ^^^^ 2nd level

❌ NOT OK
import TabIndicator from '@mui/material/Tabs/TabIndicator';
// ^^^^^^^^^^^^ 3rd level

# CssBaseline

Có những feature trang web ở chrome chạy tốt, sang các trình duyệt khác bị lỗi nên material cung cấp CssBaseline để hỗ trợ và fix điểm ko nhất quán giữa các trình
duyệt (giống thư viện normalizeCss)
