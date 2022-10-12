const path = require('path')

console.log(path.sep) // Cung cấp dấu phân tách phân đoạn đường dẫn dành riêng cho nền tảng \ on Windows,/ on POSIX

//path.join() method kết hợp tất cả các đoạn đường dẫn đã cho với nhau bằng cách sử dụng dấu phân tách nền tảng cụ thể làm dấu phân cách, sau đó chuẩn hóa đường dẫn kết quả
const filePath = path.join('/content/', 'subfolder','test.txt')
console.log(filePath)

//  path.basename() method trả về phần cuối cùng của đường dẫn, tương tự như lệnh Unix basename. Dấu phân tách thư mục theo sau bị bỏ qua, xem path.sep.
const base =  path.basename(filePath)
console.log(base)

// path.resolve() method  giải quyết một chuỗi các đường dẫn hoặc các đoạn đường dẫn thành một đường dẫn tuyệt đối.
const absolute = path.resolve(__dirname, 'content','/subfolder','test.txt')
console.log(absolute)