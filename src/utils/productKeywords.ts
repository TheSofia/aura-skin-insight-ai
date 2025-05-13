
// Keyword categorization with weighted terms and synonyms
export const keywordMap = {
  skinTypes: {
    dry: ['dry', 'dehydrated', 'flaky', 'tight', 'parched', 'rough', 'cracked', 'chapped'],
    oily: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum', 'slick', 'glossy', 'acne-prone'],
    combination: ['combination', 'combo', 'oily t-zone', 'mixed', 'partially oily', 't-zone'],
    sensitive: ['sensitive', 'reactive', 'irritated', 'easily irritated', 'redness', 'itchy', 'stinging'],
    normal: ['normal', 'balanced', 'regular', 'neither oily nor dry', 'even'],
    aging: ['aging', 'mature', 'older', 'aged', 'wrinkled', 'fine lines']
  },
  concerns: {
    acne: ['acne', 'breakouts', 'pimples', 'blemishes', 'zits', 'spots', 'cystic', 'blackheads', 'whiteheads'],
    wrinkles: ['wrinkles', 'fine lines', 'creases', 'folds', 'crow\'s feet', 'expression lines', 'aging signs'],
    darkSpots: ['dark spots', 'hyperpigmentation', 'uneven tone', 'melasma', 'sun spots', 'age spots', 'discoloration'],
    redness: ['redness', 'inflamed', 'inflammation', 'rosacea', 'flushed', 'red', 'irritation'],
    dullness: ['dull', 'tired', 'lackluster', 'lifeless', 'no glow', 'sallow', 'ashy', 'gray'],
    texture: ['texture', 'rough', 'bumpy', 'uneven texture', 'smooth', 'refine', 'sandpaper', 'granular']
  },
  goals: {
    hydration: ['hydration', 'moisturize', 'hydrate', 'moisture', 'quench', 'plump', 'dewy', 'juicy'],
    antiAging: ['anti-aging', 'anti aging', 'youth', 'younger', 'rejuvenate', 'reduce wrinkles', 'collagen', 'firmness'],
    brightening: ['brighten', 'brightening', 'glow', 'glowing', 'radiance', 'radiant', 'luminous', 'illuminating'],
    calming: ['calm', 'calming', 'soothe', 'soothing', 'reduce irritation', 'cooling', 'gentle'],
    firming: ['firm', 'firming', 'tighten', 'lifting', 'sagging', 'elasticity', 'bounce']
  }
};

// Mapping of common ingredients to skin concerns they address
export const ingredientToConcernMap = {
  'retinol': ['wrinkles', 'texture', 'aging', 'acne'],
  'vitamin c': ['brightening', 'darkSpots', 'antiAging'],
  'niacinamide': ['pores', 'texture', 'redness', 'acne'],
  'hyaluronic acid': ['hydration', 'dry'],
  'glycolic acid': ['texture', 'dullness', 'darkSpots'],
  'salicylic acid': ['acne', 'oily', 'blackheads'],
  'ceramides': ['hydration', 'barrier', 'sensitive'],
  'peptides': ['firming', 'antiAging'],
  'azelaic acid': ['redness', 'acne', 'darkSpots'],
  'bakuchiol': ['antiAging', 'sensitive'],
  'squalane': ['hydration', 'sensitive', 'dry'],
  'zinc': ['oily', 'acne']
};
