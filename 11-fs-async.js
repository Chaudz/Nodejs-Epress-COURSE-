// file bất đồng bộ
const {readFile, writeFile} = require('fs') // phá vỡ

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        
    }
    const first = result
      readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err)
            }
            const second = result
            // nếu ko có file nó sẽ tự tạo
            writeFile('./content/result-async.txt',
               `Here is the result: ${first}, ${second}`,
               (err,result)=>{
                if(err){
                    console.log(err)
                }
                console.log('done with this task')
               }
            )

      })

})
console.log('starting next one')