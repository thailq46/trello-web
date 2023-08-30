I. Material UI

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

# Khi nào dùng Box khi nào dùng div

- Về mặt cấu trúc 2 con này giống nhau nhưng Box nó sẽ cung cấp cho ta props để ta truyền vào kết hợp với spacing để sử dụng (giống cách sử dụng props trong styled-component)

- Và Box cung cấp cho ta props sx để ta quick custom nhanh CSS cho 1 component cụ thể. Và nó có thể truy cập trực tiếp vào phần theme để lấy breakpoints của màn hình mà dùng div sẽ ko làm đc mà phải viết media query
  (https://stackoverflow.com/questions/72527461/when-should-i-use-style-instead-of-sx-prop-in-material-ui)

  (https://stackoverflow.com/questions/71014390/what-is-the-purpose-of-sx-prop-in-material-ui)

- div khi styled nó sẽ sinh ra css inline còn Box khi sx(giống styled) thì nó sẽ sinh ra thẻ <style></style> có class ngẫu nhiên VD như css-1a9re40 ở trên thằng thẻ <head></head> -> đấy là cách Material hoạt động

# Khi nào sử dụng sx , styled API(gần giống với cách code của styled component), theme overrides

- sx dùng khi viết css 1 lần cho component
- styled API dùng nếu như component có chung 1 dạng kiểu -> dùng lại ở nhiều nơi
- theme overrides làm cho ứng dụng có tính nhất quán -> khi toàn bộ component có chung 1 kiểu styling(giống kiểu khai báo biến ở global và chỉ cần sửa 1 chỗ)
