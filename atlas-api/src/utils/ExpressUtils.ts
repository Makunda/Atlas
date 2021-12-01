/**
 * Print an human friendly list of sub routes of the current layer
 * @param path Path
 * @param layer Layer of the router
 */
export default class ExpressUtils {
  public static printRoute(path: any, layer: any) {
    if (layer.route) {
      layer.route.stack.forEach(ExpressUtils.printRoute.bind(null, path.concat(ExpressUtils.splitRoute(layer.route.path))));
    } else if (layer.name === "router" && layer.handle.stack) {
      layer.handle.stack.forEach(ExpressUtils.printRoute.bind(null, path.concat(ExpressUtils.splitRoute(layer.regexp))));
    } else if (layer.method) {
      console.log("%s /%s", layer.method.toUpperCase(), path.concat(ExpressUtils.splitRoute(layer.regexp)).filter(Boolean).join("/"));
    }
  }

  private static splitRoute(thing: any) {
    if (typeof thing === "string") {
      return thing.split("/");
    } else if (thing.fast_slash) {
      return "";
    } else {
      var match = thing
        .toString()
        .replace("\\/?", "")
        .replace("(?=\\/|$)", "$")
        .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
      return match ? match[1].replace(/\\(.)/g, "$1").split("/") : "<complex:" + thing.toString() + ">";
    }
  }
}