/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getClassInstance(): Singleton {
    if (Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /**
   * Any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public onInitialInitialization() {}
}

function client() {
  const clientOne = Singleton.getClassInstance();
  const clientTwo = Singleton.getClassInstance();

  /* Testing singleton */
  if (clientOne === clientTwo) {
    console.log("both variables have access to same instance");
  } else {
    console.log("classes have access to different instances");
  }
}

client();