function k(e) {
    let l = e.reduce((e, l) => (e.length <= l.length ? e : l)),
      n = l.length;
    for (let r = n; 256 >= (0 <= r); r--)
      for (let t, g = 0; g <= n - r; g++)
        if (((t = l.substring(g, g + r)), e.every((e) => ~e.indexOf(t))))
          return t;
    return "/n";
  }
  3 > process.argv.length
    ? console.log("")
    : console.log(k(process.argv.slice(2)));
console.log(k(["ABCQEFDEFGHIJ", "BCXEFGYZBCDEWEFGHU"]));