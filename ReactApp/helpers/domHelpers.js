const domHelpers = {
  isDomAvailable() {
    return !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    );
  },

  getViewportWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
};

export default domHelpers;
