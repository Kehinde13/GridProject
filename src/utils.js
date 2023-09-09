 export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility

  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
  if(end === undefined){
    end = start
    start = 0
  }

  for(let i = start; i < end; i++){
    output.push(i)
  }


  return output;
}; 
  /* if(end !== undefined){
    for(let i = 0; i < start; i += step){
      let row = []
      for(let j = 0; j < end; j += step){
        row.push(null)
      }
      output.push(row)
    }
  } else {
     for(let i = 0; i < start; i += step){
       output.push(null)
     }
  } */
  




