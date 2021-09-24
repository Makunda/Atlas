export default class Copy {
  /**
   * Deep copy function for TypeScript.
   * @param T Generic type of target/copied value.
   * @param target Target value to be copied.
   */
  public static deepCopy<T>(target: T): T {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
      const cp = [] as any[];
      (target as any[]).forEach((v) => {
        cp.push(v);
      });
      return cp.map((n: any) => this.deepCopy<any>(n)) as any;
    }
    if (typeof target === "object" && target !== {}) {
      const cp = { ...(target as { [key: string]: any }) } as {
        [key: string]: any;
      };
      Object.keys(cp).forEach((k) => {
        cp[k] = this.deepCopy<any>(cp[k]);
      });
      return cp as T;
    }
    return target;
  }
}
