### Exercício 1

a) Eu concordo, visto a variedade de ids que podem ser produzidas, sem correr o risco de haver algum conflito.

b)
```
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```

### Exercício 2

