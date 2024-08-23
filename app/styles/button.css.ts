import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "./sprinkles.css";

export const button = recipe({
  base: {
    borderRadius: 6
  },
  variants: {
    color: {
      sidebar: [
        sprinkles({ background: 'gray-100' }),
      ],
    },
    padding: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 }
    },
    margin: {
      small: { margin: 12 },
      medium: { margin: 16 },
      large: { margin: 24 }
    },
    rounded: {
      true: { borderRadius: 999 }
    }
  },
});