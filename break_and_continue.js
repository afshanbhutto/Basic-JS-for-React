<script>
//*********************break**********************
//breaking the loop

// let i =0;
// do{
//     console.log(i+1);
//     if(i ===5){
//         break;
//     }
//     i++;
// }while(i<10);
// console.log('done!')


//*********************continue**********************
//breaking the block
let i =0;
do{
    if(i ===5){
        i++;
        continue;
    }
    console.log(i+1);
    i++;
}while(i<10);
console.log('done!')

</script>