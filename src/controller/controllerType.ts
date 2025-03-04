interface AlgorithmController {
    getCurrentStep(): Step;
    next(): void;
    prev(): void;
    play(delay: number): void;
}

interface Step {
    id: number;
}
