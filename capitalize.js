const capitalize = (say) => {
  if (say === "") return "";
  if (typeof say !== "string") {
    return "Error: data type not string";
  }

  let [firstChar, ...restChar] = say;
  firstChar = firstChar.toUpperCase();
  restChar = restChar.join("");
  return `${firstChar}${restChar}`;
};

export default capitalize;
