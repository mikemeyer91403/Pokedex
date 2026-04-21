

import { createInterface } from "readline";
import { getCommands } from "./command_registry.js"
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
const commands = getCommands();

rl.on('line', (input: string) => {
  const words = cleanInput(input);
  if (words.length == 0){
    rl.prompt();
    return;
  }
  const cmdName = words[0];
  const commands = getCommands();
  const cmd = commands[cmdName];
  if (!cmd) {
    console.log(`Unknown command: "${cmdName}". Type help for a list of commands.`);
    rl.prompt();
    return;
  }
  try {
    cmd.callback(commands);
  } catch (e) {
    console.log(e);
  } 

  rl.prompt();
  
});


}