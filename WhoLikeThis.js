function likes(names) {
  let l = names.length  
  return{
      0 : "no one likes this",
      1 : names[0] + " likes this",
      2 : names.join(" and ") + " like this",
      3 : names[0] + ", " + names.slice(1,3).join(" and ") + " like this",
      4 : names.slice(0,2).join(", ") + " and " + (l - 2).toString() + " others like this"
    }[Math.min(4,l)]
  }
