
export const getSort = (string) =>
    ["ASC", "asc", "DESC", "desc"].includes(string) ? string : "asc";
  
  export const getQuery = (value) => {
    if (!value) {
      value = "";
    }
    return value;
  };
