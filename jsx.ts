export namespace Spongebob {
  export const createElement = (
    tag: string | Function,
    props: object,
    ...children: any[]
  ) => {
    if (typeof tag === "function") {
      return tag({ ...props, children });
    } else {
      return [tag, props, children];
    }
  };
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: {
        id?: string;
        style?: {};
      };
    }
  }
}
