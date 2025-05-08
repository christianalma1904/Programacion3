interface Decision {
    opciones: string[];
    decidir(): string;
}
  
function tomarDecision(decision: Decision): string {
    const indice = Math.floor(Math.random() * decision.opciones.length);
    return decision.opciones[indice];
}
  
const miDecision: Decision = {
    opciones: ["Estudiar", "Salir a caminar", "Ver una película"],
    decidir() {
        return tomarDecision(this);
    }
};

console.log("Tu decisión es:", miDecision.decidir());
  