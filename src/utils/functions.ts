export const isMobile = () => {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isThisMobileDevice = mobileRegex.test(navigator.userAgent);
  return isThisMobileDevice;
};

export const isMobileWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 992;
  }
};

export const toggleState = (
  state: boolean,
  updateState: (state: boolean) => void
) => {
  updateState(!state);
};
