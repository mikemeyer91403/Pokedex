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
