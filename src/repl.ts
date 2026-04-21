

import { createInterface } from "readline";
export function cleanInput(input: string): string[] {
  // logic goes here

  //return input.split(' ').flatMap(word => word ? [word] : []);
  //return (input.trim().split(" "));
   return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}


export function startREPL() {
 const rl = createInterface( {
   input: process.stdin,
   output: process.stdout,
   prompt: "MikePokedex > ",
 });
rl.prompt();

rl.on('line', (input: string) => {
  const words = cleanInput(input);
  if (words.length == 0){
    rl.prompt();
  }
  else {
    console.log(`Your command was: ${words[0]}`);
    rl.prompt();
  }
});

}