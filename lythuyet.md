Sự khác nhau giữa State và Props
State:

- Là dữ liệu nội bộ, thuộc sở hữu của thành phần mà nó được khai báo
- Có thể coi là bộ nhớ của thành phần vì nó có thể lưu trữ dữ liệu theo thời gian qua nhiều lần hiển thị lại
- Sử dụng để làm cho thành phần có tính tương tác

  <!--  -->

  Props:

- Là dữ liệu bên ngoài
- Là kênh liên lạc giữa cha mẹ và con cái nơi cha mẹ có thể truyền dữ liệu cho con cái
- Ở dạng chỉ đọc mà không thể chỉnh sửa
- Khi một thành phần nhận state làm props thì cũng làm cho thành phần đó hiển thị lại
- Được sử dụng để cho thành phần gốc có khả năng định cấu hình cho thành phần con
