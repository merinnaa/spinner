class Spinner {
  constructor() {
    this.animationChars = ['|', '/', '-', '\\']; // Characters for the animation
    this.delay = 200;
  }

  animate() {
    let delay = 100;

    for (const char of this.animationChars) {
      setTimeout(() => {
        process.stdout.write(`\r${char}   `);
      }, delay);
      delay += this.delay;
    }

    setTimeout(() => {
      process.stdout.write('\n'); // Add a newline character at the end
    }, delay);
  }
}

const spinner = new Spinner();
spinner.animate();