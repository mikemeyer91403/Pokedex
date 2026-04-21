
import type { CLICommand  } from "./command.js"
import { getCommands } from "./command_registry.js"

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n")
    const commandRegistry = getCommands();
    for (const cmd of Object.values(commands) as CLICommand[]) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }

}