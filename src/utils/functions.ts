export const isMobile = () => {
  const mobileRegex =
    // eslint-disable-next-line unicorn/better-regex
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isThisMobileDevice = mobileRegex.test(navigator.userAgent);
  return isThisMobileDevice;
};

export const isMobileWidth = () => {
  return window.innerWidth < 992;
};

export const toggleState = (
  state: boolean,
  updateState: (state: boolean) => void
) => {
  updateState(!state);
};
