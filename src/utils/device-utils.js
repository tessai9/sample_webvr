const AframeUtils = AFRAME.utils

export function checkEnvironment() {
  return AframeUtils.device.checkHeadsetConnected()
}
