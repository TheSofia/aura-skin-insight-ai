
// Keyword categorization with weighted terms and synonyms
export const keywordMap = {
  skinTypes: {
    dry: ['dry', 'dehydrated', 'flaky', 'tight', 'parched', 'rough', 'cracked', 'chapped'],
    oily: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum', 'slick', 'glossy', 'acne-prone'],
    combination: ['combination', 'combo', 'oily t-zone', 'mixed', 'partially oily', 't-zone'],
    sensitive: ['sensitive', 'reactive', 'irritated', 'easily irritated', 'redness', 'itchy', 'stinging'],
    normal: ['normal', 'balanced', 'regular', 'neither oily nor dry', 'even'],
    aging: ['aging', 'mature', 'older', 'aged', 'wrinkled', 'fine lines', 'anti-aging']
  },
  concerns: {
    acne: ['acne', 'breakouts', 'pimples', 'blemishes', 'zits', 'spots', 'cystic', 'blackheads', 'whiteheads', 'congestion'],
    wrinkles: ['wrinkles', 'fine lines', 'creases', 'folds', 'crow\'s feet', 'expression lines', 'aging signs'],
    darkSpots: ['dark spots', 'hyperpigmentation', 'uneven tone', 'melasma', 'sun spots', 'age spots', 'discoloration'],
    redness: ['redness', 'inflamed', 'inflammation', 'rosacea', 'flushed', 'red', 'irritation'],
    dullness: ['dull', 'tired', 'lackluster', 'lifeless', 'no glow', 'sallow', 'ashy', 'gray'],
    texture: ['texture', 'rough', 'bumpy', 'uneven texture', 'smooth', 'refine', 'sandpaper', 'granular'],
    dryness: ['dry skin', 'dehydrated', 'flaky', 'need moisture', 'need hydration', 'tight skin'],
    sun: ['sun protection', 'spf', 'sunblock', 'sunscreen', 'uva', 'uvb'],
    eyes: ['eye', 'under eye', 'dark circles', 'eye bags', 'puffy eyes', 'crow\'s feet'],
    lips: ['lips', 'dry lips', 'chapped', 'lip care'],
    barrier: ['barrier', 'skin barrier', 'compromised barrier', 'damaged barrier', 'moisture barrier'],
    irritation: ['irritation', 'irritated', 'sensitive', 'reaction', 'stinging', 'burning'],
    firmness: ['firmness', 'sagging', 'loose skin', 'elasticity', 'tightening']
  },
  goals: {
    hydration: ['hydration', 'moisturize', 'hydrate', 'moisture', 'quench', 'plump', 'dewy', 'juicy'],
    antiAging: ['anti-aging', 'anti aging', 'youth', 'younger', 'rejuvenate', 'reduce wrinkles', 'collagen', 'firmness'],
    brightening: ['brighten', 'brightening', 'glow', 'glowing', 'radiance', 'radiant', 'luminous', 'illuminating'],
    calming: ['calm', 'calming', 'soothe', 'soothing', 'reduce irritation', 'cooling', 'gentle'],
    firming: ['firm', 'firming', 'tighten', 'lifting', 'sagging', 'elasticity', 'bounce'],
    exfoliating: ['exfoliate', 'exfoliation', 'peel', 'remove dead skin', 'resurface', 'smooth'],
    protection: ['protect', 'protection', 'shield', 'defense', 'antioxidant', 'environmental'],
    acneTreatment: ['acne treatment', 'pimple treatment', 'spot treatment', 'clear skin', 'prevent breakouts'],
    repair: ['repair', 'restore', 'heal', 'regenerate', 'renewal', 'recovery']
  }
};

// Mapping of common ingredients to skin concerns they address
export const ingredientToConcernMap = {
  'retinol': ['wrinkles', 'texture', 'aging', 'acne'],
  'retinaldehyde': ['wrinkles', 'texture', 'aging', 'acne'],
  'vitamin c': ['brightening', 'darkSpots', 'antiAging', 'protection'],
  'niacinamide': ['pores', 'texture', 'redness', 'acne', 'oily'],
  'hyaluronic acid': ['hydration', 'dry', 'plumping'],
  'glycolic acid': ['texture', 'dullness', 'darkSpots', 'exfoliating'],
  'lactic acid': ['texture', 'dullness', 'sensitive', 'exfoliating'],
  'salicylic acid': ['acne', 'oily', 'blackheads', 'texture'],
  'ceramides': ['hydration', 'barrier', 'sensitive'],
  'peptides': ['firming', 'antiAging', 'wrinkles'],
  'azelaic acid': ['redness', 'acne', 'darkSpots'],
  'bakuchiol': ['antiAging', 'sensitive', 'wrinkles'],
  'squalane': ['hydration', 'sensitive', 'dry', 'balance'],
  'zinc': ['oily', 'acne', 'soothing'],
  'aha': ['exfoliating', 'texture', 'brightening'],
  'bha': ['acne', 'blackheads', 'oily', 'texture'],
  'pha': ['sensitive', 'exfoliating', 'gentle'],
  'shea butter': ['dry', 'hydration', 'soothing'],
  'antioxidants': ['protection', 'aging', 'brightening'],
  'omega': ['dry', 'barrier', 'soothing'],
  'aloe': ['soothing', 'calming', 'hydration'],
  'tea tree': ['acne', 'oily', 'purifying'],
  'green tea': ['soothing', 'antioxidant', 'calming'],
  'ferulic acid': ['antioxidant', 'protection', 'brightening'],
  'blue tansy': ['calming', 'soothing', 'redness', 'irritation'],
  'spf': ['protection', 'antiAging', 'preventative'],
  'vitamin e': ['hydration', 'protection', 'repair'],
  'growth factors': ['repair', 'antiAging', 'regeneration'],
  'rosehip': ['repair', 'brightening', 'hydration'],
  'marula': ['hydration', 'nourishing', 'antioxidant'],
  'phloretin': ['brightening', 'protection', 'texture'],
  'silymarin': ['oily', 'acne', 'antioxidant'],
  'willow bark': ['acne', 'exfoliating', 'calming'],
  'tfc8': ['repair', 'antiAging', 'regeneration']
};
