function outerFunc() {
    let x  = 5;
    let y = 6;
    
    function innerFunc() {
        let a = 10;
        console.log(x);
        console.log(y);
    }
    confirm.log(a);
    innerFunc();

}

//hoisting