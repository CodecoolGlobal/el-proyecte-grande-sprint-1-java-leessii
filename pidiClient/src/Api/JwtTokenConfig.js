const config = {
  headers: { Authorization: `Bearer ` + localStorage.getItem("jwtToken") },
};

export default config;
