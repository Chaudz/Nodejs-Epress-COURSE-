// file đồng bộ
const {readFileSync,writeFileSync} = require('fs')


// đọc file và trả về nội dung trong file 
//Nếu tùy chọn mã hóa được chỉ định thì hàm này trả về một chuỗi. Nếu không, nó trả về một bộ đệm.
console.log('start')
const first = readFileSync('./content/first.txt','utf-8') 
const second = readFileSync('./content/second.txt','utf-8') 

// nếu chuea có file nó sẽ tự đỘng tạo ra file đồng bộ
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flat: 'a'}
)
console.log('done with this task')
console.log('starting the next one')
