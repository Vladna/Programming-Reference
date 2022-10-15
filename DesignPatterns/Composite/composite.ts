abstract class Component {
  protected parent: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public abstract operation(): string;

  /* 
  Methods for managing components children(leafs) if there is any]

  public add(component: Component): void {}

  public remove(component: Component): void {}
   */
}

class Leaf extends Component {
  /* Code for leave element... */
  public operation(): string {
    return "Leaf";
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component) {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component) {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }
  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);
