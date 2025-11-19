// Light, balanced, simple, and inviting color palette for postpartum wellness
const tintColorLight = "#E89BA9"; // Soft rose
const tintColorDark = "#F5E6E8"; // Gentle blush

export default {
  light: {
    text: "#3A3A3A", // Soft charcoal for readability without harshness
    background: "#FDFBF7", // Warm cream for a gentle, nurturing feel
    tint: tintColorLight,
    tabIconDefault: "#C4B5A8", // Warm beige
    tabIconSelected: tintColorLight,
    tabBar: "#FFFEFB", // Soft white
    errorBackground: "#F4A5AE", // Gentle coral
    errorText: "#5A2A2E",
    warningBackground: "#FFE8CC", // Soft peach
    warningText: "#7A5C3D",
    noticeBackground: "#D4E7E1", // Soft mint
    noticeText: "#2F5A4F",
    // Additional theme colors for the wellness app
    primary: "#E89BA9", // Soft rose - main accent
    secondary: "#B8D4D0", // Sage green - calming
    accent: "#F9D5A7", // Warm peach - inviting
    surface: "#FFFFFF", // Pure white for cards
    cardBackground: "#FFFFFF",
    border: "#EAE4DD", // Soft sand
    placeholder: "#B8B0A6", // Muted taupe
    success: "#A8D5BA", // Gentle green
    info: "#B8D4E8", // Soft sky blue
    disabled: "#E8E4DF",
  },
  dark: {
    text: "#F5E6E8", // Gentle blush
    background: "#2A2522", // Warm dark brown
    tint: tintColorDark,
    tabIconDefault: "#8A7D73", // Muted brown
    tabIconSelected: tintColorDark,
    tabBar: "#352F2B", // Deep warm brown
    errorBackground: "#B85E6A", // Muted rose
    errorText: "#FFE8EB",
    warningBackground: "#C4996B", // Muted gold
    warningText: "#FFF2E6",
    noticeBackground: "#7A9D94", // Muted sage
    noticeText: "#E8F5F1",
    // Additional theme colors for dark mode
    primary: "#E89BA9", // Soft rose
    secondary: "#8AA89E", // Muted sage
    accent: "#D4A675", // Muted peach
    surface: "#3A3330", // Warm dark surface
    cardBackground: "#3A3330",
    border: "#52443D", // Deep sand
    placeholder: "#9A8D82", // Muted taupe
    success: "#7AB88F", // Muted green
    info: "#8AAECC", // Muted blue
    disabled: "#52443D",
  },
};
