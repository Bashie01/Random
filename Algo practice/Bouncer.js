function bouncer(arr) {
  return (result = bouncer.filter((arr) => arr === false));
}

bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
  return arr.filter((item) => Boolean(item)); // Boolean(item) is the same as !!item (double negation) which will return true for all items that are not falsy (e.g. undefined, null, 0, "", NaN, false)
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
