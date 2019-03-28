// @flow

import { windowWidth, hasNotch, notchDiff } from "../../src/platform.js";

export type EffectStyleArguments = {
  imageWidth?: number | null,
  imageHeight?: number | null,
  width: number,
  height: number
};

const styles = {
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
};

export default {
  "Rounded Notch": [
    {
      file: require("./Rounded-Notch.png"),
      resizeMode: "cover",
      style: ({
        imageWidth,
        imageHeight,
        width,
        height
      }: EffectStyleArguments) => ({
        ...styles.top,
        top: width === windowWidth ? (hasNotch ? 0 : -notchDiff / 2) : 0,
        width: width,
        height: imageHeight && imageWidth && imageHeight / imageWidth * width
      })
    }
  ],
  "Rounded Slim Notch": [
    {
      file: require("./Rounded-Slim-Notch.png"),
      resizeMode: "cover",
      style: ({
        imageWidth,
        imageHeight,
        width,
        height
      }: EffectStyleArguments) => ({
        ...styles.top,
        top: width === windowWidth ? (hasNotch ? 0 : -notchDiff / 2) : 0,
        width: width,
        height: imageHeight && imageWidth && imageHeight / imageWidth * width
      })
    }
  ],
  "Hard Notch": [
    {
      file: require("./Hard-Notch.png"),
      resizeMode: "cover",
      style: ({
        imageWidth,
        imageHeight,
        width,
        height
      }: EffectStyleArguments) => ({
        ...styles.top,
        top: width === windowWidth ? (hasNotch ? 0 : -notchDiff / 2) : 0,
        width: width,
        height: imageHeight && imageWidth && imageHeight / imageWidth * width
      })
    }
  ],
  "Hard Slim Notch": [
    {
      file: require("./Hard-Slim-Notch.png"),
      resizeMode: "cover",
      style: ({
        imageWidth,
        imageHeight,
        width,
        height
      }: EffectStyleArguments) => ({
        ...styles.top,
        top: width === windowWidth ? (hasNotch ? 0 : -notchDiff / 2) : 0,
        width: width,
        height: imageHeight && imageWidth && imageHeight / imageWidth * width
      })
    }
  ]
};
