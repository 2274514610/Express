for(let i = 1; i<= 9; i++) { //控制行
    let str = '';
    for(let j = 1; j<=i; j++) { //控制列
        str += i + '*' + j + '=' + i * j + ' '
    }
    console.log(str)
}
