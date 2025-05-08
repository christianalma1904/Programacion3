// Clase abstracta
abstract class DecisionBase {
    protected nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract analizar(): string;
}
  
//Herencia 1
class DecisionFacil extends DecisionBase {
    analizar(): string {
        return `${this.nombre}: ¡Es fácil! Hazlo sin miedo.`;
}
}
  
//Herencia 2
class DecisionDificil extends DecisionBase {
    analizar(): string {
        return `${this.nombre}: Piensa bien antes de decidir.`;
}
}
  
//Polimorfismo
const decisiones: DecisionBase[] = [
    new DecisionFacil("Comprar un café"),
    new DecisionDificil("Cambiar de trabajo")
];
  
decisiones.forEach(decision => {
    console.log(decision.analizar());
});
  