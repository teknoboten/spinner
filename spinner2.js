const spinner = (arr, spinFor) => {
//takes an array of characters to cycle through and ms to run
//cound also add a third param to control speed (time += speed)

  let time = 0;

  while (time < spinFor) {
    
    for (const x of arr) {
      setTimeout(() => {
        process.stdout.write(x);
      }, time += 100);
    }
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, time);
};

//test code
// const spinnyBits = [`\r| `, `\r/ `, `\r- `, `\r\\ ` ];
// const haveDAy = [`\r😑    `,`\r😕    `,`\r😦    `,`\r😩    `,`\r😯    `,`\r😬    `,`\r😁    `,`\r😌    `];

//spinner(spinnyBits, 2000)
// spinner(haveDAy, 8000);


