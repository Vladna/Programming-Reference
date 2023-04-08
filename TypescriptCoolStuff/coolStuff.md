## Typescript cool features

### Link between the type of input argument and the output argument of function

```
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```