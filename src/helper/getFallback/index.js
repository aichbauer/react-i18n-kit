export const getFallback = (options, props) => {
  if (props && props.fallback) {
    return props.fallback;
  }

  return options.fallback || "en";
};
