## Typescript cool features

### Link between the type of input argument and the output argument of a function

```
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

```

### Constrain for limiting the kinds of types function can accept

```
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// number arg -> Error! Numbers don't have a 'length' property
```
