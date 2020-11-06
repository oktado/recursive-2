function recursive (n) {
    if (n==0) {
    console.log(0);
} else { 
    if (n % 2 == 0) {
            console.log(n)
        }
        recursive(n-1)
        
    }
}

console.log(recursive(5));