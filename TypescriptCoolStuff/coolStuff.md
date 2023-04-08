## Typescript cool features

### Link between the type of input argument and the output argument of a function

```
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```
