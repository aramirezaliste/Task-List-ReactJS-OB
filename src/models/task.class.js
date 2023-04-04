import { LEVELS } from "./levels.enum";

// Clase JS creadora de Task
export class Task {
    // Variables del onstructor
    name = "";
    description = "";
    completed = false;
    level = LEVELS.URGENT; // Enumerado del objeto exportado

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}