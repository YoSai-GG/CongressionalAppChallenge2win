export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expirationDate: string;
  location: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  usesExpiringIngredients?: string[];
  saved?: boolean;
};

export type CompostTip = {
  id: string;
  title: string;
  description: string;
  icon: 'green' | 'brown' | 'water' | 'layer' | 'harvest' | 'troubleshoot';
};

const today = new Date();
const daysFromNow = (days: number): string => {
  const d = new Date(today);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

export const mockIngredients: Ingredient[] = [
  { id: 'i1', name: 'Spinach', quantity: 2, unit: 'bags', category: 'Produce', expirationDate: daysFromNow(1), location: 'Fridge' },
  { id: 'i2', name: 'Strawberries', quantity: 1, unit: 'box', category: 'Produce', expirationDate: daysFromNow(2), location: 'Fridge' },
  { id: 'i3', name: 'Greek Yogurt', quantity: 500, unit: 'grams', category: 'Dairy', expirationDate: daysFromNow(3), location: 'Fridge' },
  { id: 'i4', name: 'Bananas', quantity: 5, unit: 'pieces', category: 'Produce', expirationDate: daysFromNow(2), location: 'Counter' },
  { id: 'i5', name: 'Whole Milk', quantity: 1, unit: 'liters', category: 'Dairy', expirationDate: daysFromNow(4), location: 'Fridge' },
  { id: 'i6', name: 'Chicken Breast', quantity: 2, unit: 'lbs', category: 'Meat', expirationDate: daysFromNow(1), location: 'Fridge' },
  { id: 'i7', name: 'Bell Peppers', quantity: 3, unit: 'pieces', category: 'Produce', expirationDate: daysFromNow(5), location: 'Fridge' },
  { id: 'i8', name: 'Eggs', quantity: 12, unit: 'pieces', category: 'Dairy', expirationDate: daysFromNow(10), location: 'Fridge' },
  { id: 'i9', name: 'Carrots', quantity: 1, unit: 'bag', category: 'Produce', expirationDate: daysFromNow(7), location: 'Fridge' },
  { id: 'i10', name: 'Onions', quantity: 4, unit: 'pieces', category: 'Produce', expirationDate: daysFromNow(14), location: 'Pantry' },
  { id: 'i11', name: 'Garlic', quantity: 1, unit: 'head', category: 'Produce', expirationDate: daysFromNow(21), location: 'Pantry' },
  { id: 'i12', name: 'Pasta', quantity: 2, unit: 'boxes', category: 'Pantry', expirationDate: daysFromNow(180), location: 'Pantry' },
  { id: 'i13', name: 'Olive Oil', quantity: 500, unit: 'ml', category: 'Pantry', expirationDate: daysFromNow(365), location: 'Pantry' },
  { id: 'i14', name: 'Cheddar Cheese', quantity: 200, unit: 'grams', category: 'Dairy', expirationDate: daysFromNow(6), location: 'Fridge' },
  { id: 'i15', name: 'Tomatoes', quantity: 6, unit: 'pieces', category: 'Produce', expirationDate: daysFromNow(3), location: 'Counter' },
  { id: 'i16', name: 'Bread', quantity: 1, unit: 'loaf', category: 'Bakery', expirationDate: daysFromNow(4), location: 'Counter' },
  { id: 'i17', name: 'Avocado', quantity: 3, unit: 'pieces', category: 'Produce', expirationDate: daysFromNow(2), location: 'Counter' },
  { id: 'i18', name: 'Mushrooms', quantity: 8, unit: 'oz', category: 'Produce', expirationDate: daysFromNow(4), location: 'Fridge' },
];

export const mockRecipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Spinach & Mushroom Frittata',
    description: 'A fluffy baked frittata loaded with sautéed spinach, mushrooms, and cheddar cheese. Perfect for using up wilting greens.',
    image: 'https://images.pexels.com/photos/5639217/pexels-photo-5639217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['6 large eggs', '2 bags spinach', '8 oz mushrooms, sliced', '200g cheddar cheese, grated', '1 onion, diced', '2 cloves garlic, minced', '2 tbsp olive oil', 'Salt and pepper'],
    steps: [
      'Preheat oven to 375°F (190°C).',
      'Heat olive oil in an oven-safe skillet over medium heat. Sauté onions and garlic until fragrant, about 2 minutes.',
      'Add mushrooms and cook until softened, about 5 minutes. Add spinach and cook until wilted, 2-3 minutes.',
      'Beat eggs in a bowl with salt and pepper. Pour over the vegetable mixture in the skillet.',
      'Sprinkle grated cheese on top and transfer the skillet to the oven.',
      'Bake for 12-15 minutes until the center is set and the top is golden. Let rest for 5 minutes before slicing.',
    ],
    tags: ['Vegetarian', 'High-protein', 'Breakfast', '30-min'],
    usesExpiringIngredients: ['Spinach', 'Mushrooms', 'Cheddar Cheese', 'Eggs'],
  },
  {
    id: 'r2',
    title: 'Strawberry Banana Smoothie',
    description: 'A creamy, naturally sweet smoothie that uses up ripe bananas and strawberries before they go bad.',
    image: 'https://images.pexels.com/photos/6707372/pexels-photo-6707372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['2 ripe bananas', '1 box strawberries', '1 cup Greek yogurt', '1 cup milk', '1 tbsp honey', '1 cup ice'],
    steps: [
      'Peel bananas and hull the strawberries.',
      'Add all ingredients to a blender.',
      'Blend on high until smooth and creamy, about 45 seconds.',
      'Pour into glasses and serve immediately.',
    ],
    tags: ['Vegetarian', 'Breakfast', '5-min', 'No-cook'],
    usesExpiringIngredients: ['Bananas', 'Strawberries', 'Greek Yogurt', 'Whole Milk'],
  },
  {
    id: 'r3',
    title: 'Colorful Veggie Stir-Fry',
    description: 'A quick and vibrant stir-fry with bell peppers, carrots, and mushrooms in a savory garlic sauce.',
    image: 'https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Asian',
    ingredients: ['3 bell peppers, sliced', '1 bag carrots, julienned', '8 oz mushrooms', '4 onions, cut in wedges', '3 cloves garlic, minced', '3 tbsp olive oil', '2 tbsp soy sauce', '1 tbsp sesame seeds'],
    steps: [
      'Heat oil in a large wok or skillet over high heat.',
      'Add garlic and onions, stir-fry for 1 minute until fragrant.',
      'Add bell peppers and carrots, cook for 3-4 minutes keeping them crisp.',
      'Add mushrooms and stir-fry for another 2 minutes.',
      'Drizzle soy sauce over the vegetables and toss to coat evenly.',
      'Garnish with sesame seeds and serve hot over rice or noodles.',
    ],
    tags: ['Vegan', 'Gluten-free', '20-min', 'Dinner'],
    usesExpiringIngredients: ['Bell Peppers', 'Carrots', 'Mushrooms', 'Onions', 'Garlic'],
  },
  {
    id: 'r4',
    title: 'Hearty Tomato Vegetable Soup',
    description: 'A warming rustic soup that turns soft tomatoes and aging vegetables into a comforting bowl.',
    image: 'https://images.pexels.com/photos/12931100/pexels-photo-12931100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '40 min',
    servings: 6,
    difficulty: 'Easy',
    cuisine: 'Mediterranean',
    ingredients: ['6 tomatoes, chopped', '1 bag carrots, diced', '2 onions, diced', '3 cloves garlic, minced', '2 tbsp olive oil', '4 cups vegetable broth', '1 tsp dried basil', 'Salt and pepper'],
    steps: [
      'Heat olive oil in a large pot over medium heat.',
      'Sauté onions and garlic until translucent, about 3 minutes.',
      'Add tomatoes and carrots, cook for 5 minutes until tomatoes start to break down.',
      'Pour in vegetable broth and add basil. Bring to a boil.',
      'Reduce heat to low, cover, and simmer for 25 minutes.',
      'Season with salt and pepper. Blend partially for a thicker texture, or serve chunky.',
    ],
    tags: ['Vegan', 'Gluten-free', 'Comfort', 'Soup'],
    usesExpiringIngredients: ['Tomatoes', 'Carrots', 'Onions', 'Garlic'],
  },
  {
    id: 'r5',
    title: 'Banana Bread Loaf',
    description: 'The classic way to rescue overripe bananas — a moist, warmly spiced loaf that disappears fast.',
    image: 'https://images.pexels.com/photos/1277202/pexels-photo-1277202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '1 hr',
    servings: 8,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['3 ripe bananas, mashed', '1 cup flour', '1 cup milk', '2 eggs', '1 tsp baking soda', '1 tsp cinnamon', '1 cup sugar', '3 tbsp olive oil'],
    steps: [
      'Preheat oven to 350°F (175°C). Grease a loaf pan.',
      'Mash the bananas in a large bowl until smooth.',
      'Whisk in eggs, milk, olive oil, and sugar until well combined.',
      'Fold in flour, baking soda, and cinnamon until just mixed — do not overmix.',
      'Pour batter into the loaf pan and bake for 55-60 minutes until a toothpick comes out clean.',
      'Cool in the pan for 10 minutes, then transfer to a wire rack.',
    ],
    tags: ['Vegetarian', 'Baking', 'Dessert', 'Make-ahead'],
    usesExpiringIngredients: ['Bananas', 'Eggs', 'Whole Milk'],
  },
  {
    id: 'r6',
    title: 'Avocado Toast with Tomato',
    description: 'A simple, satisfying open-faced sandwich that pairs ripe avocado with fresh tomato slices.',
    image: 'https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['1 loaf bread, sliced', '3 avocados', '6 tomatoes, sliced', '2 cloves garlic, halved', 'Olive oil', 'Salt and pepper', 'Red pepper flakes'],
    steps: [
      'Toast the bread slices until golden and crisp.',
      'Rub each slice with the cut side of a garlic clove.',
      'Mash the avocado with a fork and spread generously on each toast.',
      'Layer sliced tomatoes on top and drizzle with olive oil.',
      'Season with salt, pepper, and red pepper flakes. Serve immediately.',
    ],
    tags: ['Vegetarian', 'Breakfast', '10-min', 'No-cook'],
    usesExpiringIngredients: ['Avocado', 'Tomatoes', 'Bread', 'Garlic'],
  },
  {
    id: 'r7',
    title: 'Garlic Butter Chicken',
    description: 'Juicy pan-seared chicken breast in a rich garlic butter sauce — a quick dinner that uses up chicken before it spoils.',
    image: 'https://images.pexels.com/photos/8697537/pexels-photo-8697537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'American',
    ingredients: ['2 lbs chicken breast', '4 cloves garlic, minced', '3 tbsp olive oil', '2 tbsp butter', '1 tsp dried thyme', '1 cup milk', '200g cheddar cheese, grated', 'Salt and pepper'],
    steps: [
      'Season chicken breasts with salt, pepper, and thyme.',
      'Heat olive oil in a large skillet over medium-high heat.',
      'Sear chicken for 5-6 minutes per side until golden and cooked through. Remove and set aside.',
      'In the same pan, lower heat and add butter and garlic. Cook until fragrant, about 1 minute.',
      'Add milk and bring to a gentle simmer. Stir in grated cheese until melted.',
      'Return chicken to the pan, spoon the sauce over it, and serve hot.',
    ],
    tags: ['High-protein', 'Dinner', '30-min', 'Comfort'],
    usesExpiringIngredients: ['Chicken Breast', 'Garlic', 'Cheddar Cheese', 'Whole Milk'],
  },
  {
    id: 'r8',
    title: 'Creamy Garlic Pasta',
    description: 'A silky one-pot pasta with garlic, milk, and cheese — a pantry-friendly dinner ready in under 20 minutes.',
    image: 'https://images.pexels.com/photos/8697516/pexels-photo-8697516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['2 boxes pasta', '6 cloves garlic, minced', '1 cup milk', '200g cheddar cheese, grated', '3 tbsp olive oil', '2 tbsp butter', '1 tsp black pepper', 'Salt'],
    steps: [
      'Cook pasta in salted boiling water according to package directions. Reserve 1 cup of pasta water before draining.',
      'In a large skillet, heat olive oil and butter over medium heat.',
      'Add minced garlic and sauté until golden and fragrant, about 2 minutes.',
      'Pour in milk and bring to a gentle simmer. Gradually whisk in grated cheese until smooth.',
      'Add drained pasta to the sauce and toss to coat. Add pasta water as needed for a creamy consistency.',
      'Season with salt and pepper. Serve immediately with extra cheese on top.',
    ],
    tags: ['Vegetarian', 'Dinner', '20-min', 'Comfort'],
    usesExpiringIngredients: ['Garlic', 'Whole Milk', 'Cheddar Cheese'],
  },
  {
    id: 'r9',
    title: 'Berry Yogurt Parfait',
    description: 'A quick layered parfait with ripe strawberries, Greek yogurt, and granola — a no-cook breakfast or snack.',
    image: 'https://images.pexels.com/photos/1066658/pexels-photo-1066658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['1 box strawberries, sliced', '500g Greek yogurt', '1 cup granola', '2 ripe bananas, sliced', '2 tbsp honey'],
    steps: [
      'In two glasses, add a layer of Greek yogurt at the bottom.',
      'Add a layer of sliced strawberries and bananas.',
      'Sprinkle a layer of granola over the fruit.',
      'Repeat the layers until the glasses are full.',
      'Drizzle honey on top and serve immediately.',
    ],
    tags: ['Vegetarian', 'Breakfast', '5-min', 'No-cook'],
    usesExpiringIngredients: ['Strawberries', 'Greek Yogurt', 'Bananas'],
  },
  {
    id: 'r10',
    title: 'Vegetable Fried Rice',
    description: 'A quick weeknight fried rice loaded with carrots, onions, garlic, and eggs — great for using up aging produce.',
    image: 'https://images.pexels.com/photos/12984978/pexels-photo-12984978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Asian',
    ingredients: ['3 cups cooked rice (day-old)', '1 bag carrots, diced', '2 onions, diced', '3 cloves garlic, minced', '4 large eggs', '3 tbsp olive oil', '2 tbsp soy sauce', '2 green onions, sliced'],
    steps: [
      'Heat 1 tbsp oil in a large wok or skillet over high heat.',
      'Scramble the eggs, then remove and set aside.',
      'Add remaining oil to the wok. Sauté garlic and onions for 1 minute.',
      'Add carrots and cook for 2-3 minutes until tender-crisp.',
      'Add the cold rice, breaking up any clumps. Stir-fry for 3 minutes.',
      'Return eggs to the wok, add soy sauce, and toss everything together. Garnish with green onions.',
    ],
    tags: ['Vegetarian', 'Dinner', '20-min', 'Make-ahead'],
    usesExpiringIngredients: ['Carrots', 'Onions', 'Garlic', 'Eggs'],
  },
  {
    id: 'r11',
    title: 'Cheesy Garden Omelette',
    description: 'A fluffy three-egg omelette filled with tomatoes, bell peppers, and melted cheddar — perfect for using up soft veggies.',
    image: 'https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'French',
    ingredients: ['4 large eggs', '200g cheddar cheese, grated', '3 tomatoes, diced', '2 bell peppers, diced', '1 onion, diced', '2 tbsp olive oil', 'Salt and pepper'],
    steps: [
      'Beat eggs with salt and pepper in a bowl.',
      'Heat oil in a non-stick skillet over medium heat.',
      'Sauté onions, bell peppers, and tomatoes for 3-4 minutes until softened. Remove and set aside.',
      'Pour half the beaten eggs into the skillet, tilting to cover the base.',
      'When the edges set, sprinkle cheese and half the vegetable mixture on one half.',
      'Fold the omelette in half and slide onto a plate. Repeat with remaining ingredients.',
    ],
    tags: ['Vegetarian', 'Breakfast', '20-min', 'High-protein'],
    usesExpiringIngredients: ['Eggs', 'Cheddar Cheese', 'Tomatoes', 'Bell Peppers', 'Onions'],
  },
  {
    id: 'r12',
    title: 'Caprese Salad',
    description: 'A fresh no-cook salad of ripe tomatoes, mozzarella, and basil drizzled with olive oil — summer on a plate.',
    image: 'https://images.pexels.com/photos/5639959/pexels-photo-5639959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '10 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['6 tomatoes, sliced', '200g cheddar cheese, sliced', '1 bunch fresh basil', '3 tbsp olive oil', '1 tbsp balsamic vinegar', 'Salt and pepper'],
    steps: [
      'Arrange alternating slices of tomato and cheese on a serving platter.',
      'Tuck fresh basil leaves between the slices.',
      'Drizzle with olive oil and balsamic vinegar.',
      'Season with salt and freshly ground pepper.',
      'Let sit for 5 minutes so the flavors meld, then serve.',
    ],
    tags: ['Vegetarian', 'No-cook', '10-min', 'Gluten-free'],
    usesExpiringIngredients: ['Tomatoes', 'Cheddar Cheese'],
  },
];

export const mockCompostTips: CompostTip[] = [
  {
    id: 'c1',
    title: 'Green Materials',
    description: 'Add nitrogen-rich "greens" like fruit and vegetable scraps, coffee grounds, and grass clippings. These feed the microorganisms that break down your pile.',
    icon: 'green',
  },
  {
    id: 'c2',
    title: 'Brown Materials',
    description: 'Balance with carbon-rich "browns" like dry leaves, cardboard, twigs, and paper. Aim for roughly 3 parts brown to 1 part green by volume.',
    icon: 'brown',
  },
  {
    id: 'c3',
    title: 'Keep It Moist',
    description: 'Your compost should feel like a damp sponge — not soggy, not bone dry. Add water gradually when turning the pile if it seems dry.',
    icon: 'water',
  },
  {
    id: 'c4',
    title: 'Turn Regularly',
    description: 'Aerate the pile every 1-2 weeks by turning it with a pitchfork. Oxygen keeps the decomposition process active and prevents odors.',
    icon: 'layer',
  },
  {
    id: 'c5',
    title: 'Harvest Finished Compost',
    description: 'After 3-6 months, the bottom of your pile will turn dark, crumbly, and earthy-smelling. That is your finished compost — ready for the garden.',
    icon: 'harvest',
  },
  {
    id: 'c6',
    title: 'Troubleshooting Odors',
    description: 'A healthy compost pile should smell earthy, not rotten. Bad odors usually mean too much green material or not enough air — add browns and turn the pile.',
    icon: 'troubleshoot',
  },
];

export const compostableItems = [
  'Fruit and vegetable peels',
  'Coffee grounds and filters',
  'Eggshells',
  'Tea bags (remove staples)',
  'Bread and grains',
  'Nut shells',
  'Shredded newspaper',
  'Cardboard (no ink/coating)',
  'Yard trimmings',
  'Dry leaves',
];

export const doNotCompost = [
  'Meat and bones',
  'Dairy products',
  'Oils and grease',
  'Diseased plants',
  'Pet waste',
  'Plastic or foil',
  'Glossy paper',
  'Stickers on produce',
];
