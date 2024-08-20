const hey = (userName, message = "Nice to meet you!") => {
  return "Hello, I am " + " " + userName + "!" + " " + message;
};

console.log(hey("John")); // Hello, I am John! Hey!
