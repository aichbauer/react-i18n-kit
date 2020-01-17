/**
 * Parts of David Walsh
 * https://davidwalsh.name/javascript-deep-merge
 */

const isMergeableObject = val => {
  var nonNullObject = val && typeof val === "object";

  return (
    nonNullObject &&
    Object.prototype.toString.call(val) !== "[object RegExp]" &&
    Object.prototype.toString.call(val) !== "[object Date]"
  );
};

const emptyTarget = val => {
  return Array.isArray(val) ? [] : {};
};

const cloneIfNecessary = (value, optionsArgument) => {
  var clone = optionsArgument && optionsArgument.clone === true;
  return clone && isMergeableObject(value)
    ? deepMerge(emptyTarget(value), value, optionsArgument)
    : value;
};

const mergeObject = (target, source, optionsArgument) => {
  var destination = {};
  if (isMergeableObject(target)) {
    Object.keys(target).forEach(key => {
      destination[key] = cloneIfNecessary(target[key], optionsArgument);
    });
  }
  Object.keys(source).forEach(key => {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key], optionsArgument);
    } else {
      destination[key] = deepMerge(target[key], source[key], optionsArgument);
    }
  });
  return destination;
};

export const deepMerge = (target, source, optionsArgument) => {
  var array = Array.isArray(source);

  if (array) {
    return cloneIfNecessary(source, optionsArgument);
  } else {
    return mergeObject(target, source, optionsArgument);
  }
};
