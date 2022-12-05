const CurrentUserHelper = () => {
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };

  return { getCurrentUser };
};

export default CurrentUserHelper;
