export const createHTMLElement = (tag, props) => {
  const element = document.createElement(tag);

  Object.keys(props).forEach((prop) => {
    element[prop] = props[prop];
  });

  return element;
};
