const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  if (num >= 100000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  if (num >= 1000) {
    return num
      .toString()
      .split("")
      .reverse()
      .reduce((acc, digit, i) => {
        return digit + (i && i % 3 === 0 ? "," : "") + acc;
      }, "");
  }

  return num.toString();
};

export default formatNumber;
