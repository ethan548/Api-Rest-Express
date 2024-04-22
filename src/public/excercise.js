// let arry = []
// let count = 0
// function recursive(a) {
//     if (a == 1) {
//         return [0,1];
//     }
//     else {
//         arry = recursive(a-1)
//         arry.push(arry[arry.length - 1] + arry[arry.length - 2])
//         return arry
//     }
// }
// console.log(recursive(5)); Ejercicio recursivo 
// **********************************************************************************************
// function findNaughtyStep(original, modified) {
//     const [a,b] = original.length > modified.length ? [original,modified] : [modified,original]
//     for(let i=0;i<a.length;i++){
//         if(a[i] != b[i]){
//             return a[i]
//         }
//     }
//     return ''
// }

// const original = 'abcdfeq'
// const modified = 'abcdfe'
// console.log(findNaughtyStep(original, modified)) 
//***********************************************************************
