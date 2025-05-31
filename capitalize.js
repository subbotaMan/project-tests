const capitalize = (say) => {
  if (say === "") return "";

  let [firstChar, ...restChar] = say;
  firstChar = firstChar.toUpperCase();
  restChar = restChar.join("");
  return `${firstChar}${restChar}`;
};

export default capitalize;
