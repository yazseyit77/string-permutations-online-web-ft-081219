function findAllPermutations(str) {
  let permutations = [];

  function permutate(prefix, suffix){
    if(suffix.length === 0){
      permutations.push(prefix);
    } else {
      for(let i = 0; i < suffix.length; i++){
        permutate(prefix + suffix[i], suffix.slice(0, i) + suffix.slice(i + 1, suffix.length));
      }
    }
  }
  permutate("", str);

  return permutations;
}
