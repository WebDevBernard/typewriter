const sentence = "hello there from lighthouse labs";
let iterations = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, iterations += 50);

}
setTimeout(() => {
  process.stdout.write('\n');
}, iterations);


