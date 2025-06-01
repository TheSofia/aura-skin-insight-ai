
export type EmotionType = "happy" | "neutral" | "sad" | null;

export type DiaryEntry = {
  id: string;
  content: string;
  timestamp: string;
  tags: string[];
  emotion: EmotionType;
  hydration?: number;
  sleep?: number;
  products?: string[];
};

// Function to generate smart tags from content
export const generateSmartTags = (content: string): string[] => {
  const keywords = [
    "dryness", "oily", "breakout", "acne", "redness", "irritation", "flaky", 
    "smooth", "hydrated", "glowing", "dull", "tired", "puffy", "mask", 
    "reaction", "allergy", "itchy", "sensitive", "peeling", "dark circles"
  ];
  
  const tags: string[] = [];
  const lowerContent = content.toLowerCase();
  
  keywords.forEach(keyword => {
    if (lowerContent.includes(keyword)) {
      tags.push(keyword);
    }
  });
  
  return tags;
};

// Function to extract emotion from content
export const detectEmotion = (content: string): EmotionType => {
  const lowerContent = content.toLowerCase();
  
  const happyWords = ["happy", "pleased", "satisfied", "great", "good", "loving", "amazing", "excellent"];
  const sadWords = ["sad", "upset", "disappointed", "unhappy", "terrible", "bad", "frustrated", "angry"];
  
  let happyScore = 0;
  let sadScore = 0;
  
  happyWords.forEach(word => {
    if (lowerContent.includes(word)) happyScore++;
  });
  
  sadWords.forEach(word => {
    if (lowerContent.includes(word)) sadScore++;
  });
  
  if (happyScore > sadScore) return "happy";
  if (sadScore > happyScore) return "sad";
  return "neutral";
};

// Format date for display
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
};
