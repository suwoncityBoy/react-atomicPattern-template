import { styled } from "@/styles/stitches.config";

export const Text = styled("span", {
  color: "#000",
  fontSize: 16,
  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    regular: {
      true: {
        fontWeight: "normal",
      },
    },
  },
});
