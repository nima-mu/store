const truncateStr = (str, maxLength) => {
  let truncatedStr =
    str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  return truncatedStr;
};

export default truncateStr;
