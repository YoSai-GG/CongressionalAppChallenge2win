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
  tips?: string[];
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
    description: 'A fluffy oven-baked frittata loaded with sautéed spinach, earthy mushrooms, and sharp cheddar cheese, all bound together in a tender egg custard. It is the perfect way to rescue wilting greens and mushrooms before they pass their prime, turning humble ingredients into an elegant one-pan meal. Serve it warm for brunch or at room temperature for a make-ahead lunch — the flavors actually deepen after a short rest.',
    image: 'https://images.pexels.com/photos/5639217/pexels-photo-5639217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['6 large eggs', '2 bags spinach', '8 oz mushrooms, sliced', '200g cheddar cheese, grated', '1 onion, diced', '2 cloves garlic, minced', '2 tbsp olive oil', 'Salt and pepper'],
    steps: [
      'Preheat the oven to 375°F (190°C) and place a rack in the center position.',
      'Heat 2 tablespoons of olive oil in a 10-inch oven-safe skillet over medium heat until shimmering.',
      'Add the diced onion and cook until softened and translucent, about 3 minutes, then add the minced garlic and cook for 30 seconds until fragrant.',
      'Add the sliced mushrooms in an even layer and cook undisturbed for 2 minutes to develop browning, then stir and cook for 3 more minutes until they release their moisture and shrink.',
      'Add the spinach in handfuls, stirring until each batch wilts before adding the next, about 2-3 minutes total. Season the vegetables with a pinch of salt and pepper.',
      'In a large bowl, beat 6 eggs with ½ teaspoon salt and ¼ teaspoon black pepper until uniformly combined and slightly frothy.',
      'Pour the beaten eggs evenly over the vegetable mixture in the skillet, gently nudging the vegetables so the egg flows underneath them.',
      'Sprinkle the grated cheddar cheese evenly across the top and transfer the skillet directly to the preheated oven.',
      'Bake for 12-15 minutes until the center is just set — it should barely jiggle when you gently shake the pan and the top should be lightly golden.',
      'Remove from the oven and let the frittata rest for 5 minutes in the skillet so it finishes cooking and firms up. Slice into wedges and serve warm or at room temperature.',
    ],
    tips: [
      'Use an oven-safe skillet (cast iron or stainless steel) so you can go straight from stovetop to oven without transferring the mixture.',
      'For a lighter texture, whisk 2 tablespoons of milk into the eggs before pouring — this adds air and creates a softer curd.',
      'Leftover frittata keeps in the refrigerator for up to 3 days and reheats beautifully in a 300°F (150°C) oven for 8-10 minutes.',
      'Swap cheddar for feta, goat cheese, or grated Parmesan depending on what needs using up in your fridge.',
    ],
    tags: ['Vegetarian', 'High-protein', 'Breakfast', '30-min'],
    usesExpiringIngredients: ['Spinach', 'Mushrooms', 'Cheddar Cheese', 'Eggs'],
  },
  {
    id: 'r2',
    title: 'Strawberry Banana Smoothie',
    description: 'A creamy, naturally sweet smoothie that transforms overripe bananas and soft strawberries into a thick, satisfying drink in under five minutes. The bananas provide natural sweetness and a silky texture so you can skip added sugar entirely, while the Greek yogurt adds a tangy protein boost. It is the ideal zero-waste breakfast or afternoon pick-me-up when your fruit is past its prime but too good to toss.',
    image: 'https://images.pexels.com/photos/6707372/pexels-photo-6707372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['2 ripe bananas', '1 box strawberries', '1 cup Greek yogurt', '1 cup milk', '1 tbsp honey', '1 cup ice'],
    steps: [
      'Peel 2 ripe bananas — the browner the peel, the sweeter the smoothie — and break them into chunks for easier blending.',
      'Hull the strawberries by inserting a straw through the bottom and pushing upward to remove the green core, then halve any large berries.',
      'Add the banana chunks, strawberries, 1 cup of Greek yogurt, 1 cup of milk, and 1 tablespoon of honey to a blender jar.',
      'Toss in 1 cup of ice cubes on top of the other ingredients so the blades catch them easily.',
      'Start the blender on low for 10 seconds to chop the ice, then increase to high speed.',
      'Blend on high for 45-60 seconds until the mixture is completely smooth with no visible chunks — you should hear a steady, even hum from the motor when it is fully combined.',
      'Stop and scrape down the sides of the blender jar with a spatula if any fruit pieces are clinging, then blend for another 10 seconds.',
      'Pour into two tall glasses and serve immediately while cold and frothy.',
    ],
    tips: [
      'For a thicker, milkshake-like consistency, freeze the bananas and strawberries ahead of time and reduce the ice to ½ cup.',
      'Any dairy milk works, but oat milk or almond milk are great dairy-free substitutions that keep the creamy texture.',
      'Add a handful of fresh spinach for a nutrient boost — the banana and strawberry flavors completely mask the taste.',
      'If the smoothie is too thick, thin it with an extra splash of milk and blend for 5 seconds.',
    ],
    tags: ['Vegetarian', 'Breakfast', '5-min', 'No-cook'],
    usesExpiringIngredients: ['Bananas', 'Strawberries', 'Greek Yogurt', 'Whole Milk'],
  },
  {
    id: 'r3',
    title: 'Colorful Veggie Stir-Fry',
    description: 'A quick and vibrant stir-fry that turns crisp bell peppers, julienne carrots, and mushrooms into a glossy, savory dish with a fragrant garlic sauce. The high-heat cooking method locks in both color and crunch, making it a perfect weeknight dinner that celebrates fresh vegetables at their peak. Serve it over steamed rice or noodles for a satisfying plant-based meal that comes together faster than takeout.',
    image: 'https://images.pexels.com/photos/175754/pexels-photo-175754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Asian',
    ingredients: ['3 bell peppers, sliced', '1 bag carrots, julienned', '8 oz mushrooms', '4 onions, cut in wedges', '3 cloves garlic, minced', '3 tbsp olive oil', '2 tbsp soy sauce', '1 tbsp sesame seeds'],
    steps: [
      'Prepare all vegetables before turning on the heat: slice the bell peppers into ¼-inch strips, julienne the carrots into matchsticks, slice the mushrooms, and cut the onions into wedges.',
      'Mince the garlic finely and set aside — stir-fry cooking moves fast, so everything must be ready before you start.',
      'Heat a large wok or wide skillet over high heat for 2 minutes until a drop of water sizzles and evaporates on contact.',
      'Add 3 tablespoons of olive oil and swirl to coat the entire cooking surface, waiting until the oil just begins to smoke.',
      'Add the garlic and onion wedges and stir-fry vigorously for 1 minute until the garlic is fragrant but not browned.',
      'Add the bell peppers and carrots and spread them in an even layer; let them sear for 30 seconds before stirring to develop char marks, then stir-fry for 2-3 minutes until brightly colored and crisp-tender.',
      'Add the mushrooms and stir-fry for 2 more minutes until they shrink slightly and absorb the garlic oil.',
      'Drizzle 2 tablespoons of soy sauce around the edges of the wok so it caramelizes against the hot metal, then toss everything to coat evenly for 30 seconds.',
      'Taste and adjust seasoning — add an extra splash of soy sauce if the vegetables taste flat.',
      'Transfer to a platter, sprinkle with sesame seeds, and serve immediately over steamed rice or noodles while the vegetables are still hot and crisp.',
    ],
    tips: [
      'For an authentic seared flavor, use a carbon-steel wok and keep the heat as high as possible — the vegetables should sizzle loudly the entire time.',
      'Toast the sesame seeds in a dry pan for 1-2 minutes before garnishing to bring out a deeper, nuttier flavor.',
      'Replace olive oil with a high-smoke-point oil like peanut or avocado oil to prevent burning at high temperatures.',
      'Leftovers reheat well in a hot skillet for 2 minutes — avoid the microwave, which turns the vegetables mushy.',
    ],
    tags: ['Vegan', 'Gluten-free', '20-min', 'Dinner'],
    usesExpiringIngredients: ['Bell Peppers', 'Carrots', 'Mushrooms', 'Onions', 'Garlic'],
  },
  {
    id: 'r4',
    title: 'Hearty Tomato Vegetable Soup',
    description: 'A warming rustic soup that transforms soft, past-their-prime tomatoes and aging vegetables into a deeply comforting bowl with minimal effort. As the vegetables simmer together, they release their natural sweetness into a savory broth seasoned with dried basil, creating layers of flavor from the simplest pantry staples. It is the kind of soup that fills the kitchen with an inviting aroma and tastes even better the next day, making it ideal for batch cooking and freezing.',
    image: 'https://images.pexels.com/photos/12931100/pexels-photo-12931100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '40 min',
    servings: 6,
    difficulty: 'Easy',
    cuisine: 'Mediterranean',
    ingredients: ['6 tomatoes, chopped', '1 bag carrots, diced', '2 onions, diced', '3 cloves garlic, minced', '2 tbsp olive oil', '4 cups vegetable broth', '1 tsp dried basil', 'Salt and pepper'],
    steps: [
      'Dice the tomatoes, carrots, and onions into uniform ½-inch pieces so they cook evenly and look appealing in the finished soup.',
      'Mince the garlic finely and measure out 4 cups of vegetable broth so it is ready to pour.',
      'Heat 2 tablespoons of olive oil in a large Dutch oven or soup pot over medium heat until it shimmers.',
      'Add the diced onions and cook for 3-4 minutes, stirring occasionally, until they are soft and translucent but not browned.',
      'Add the minced garlic and cook for 30 seconds until fragrant, stirring constantly to prevent scorching.',
      'Add the chopped tomatoes and diced carrots and cook for 5 minutes, stirring occasionally, until the tomatoes begin to break down and release their juices.',
      'Pour in the vegetable broth and add 1 teaspoon of dried basil, stirring to combine and scraping up any browned bits from the bottom of the pot.',
      'Bring the soup to a rolling boil over high heat, then immediately reduce the heat to low.',
      'Cover the pot and simmer gently for 25 minutes, stirring once halfway through, until the carrots are fork-tender and the tomatoes have fully disintegrated.',
      'Season with salt and pepper to taste — start with ½ teaspoon of each and adjust upward as needed.',
      'For a creamier texture, use an immersion blender to partially blend the soup directly in the pot, leaving some chunks for texture. Serve hot with crusty bread.',
    ],
    tips: [
      'For a richer flavor, roast the tomatoes at 400°F (200°C) for 20 minutes before adding them to the soup — this concentrates their sweetness dramatically.',
      'This soup freezes beautifully for up to 3 months — cool completely and store in airtight containers, leaving an inch of headspace for expansion.',
      'Add a Parmesan rind to the pot while simmering for an umami boost; remove it before serving.',
      'If the soup tastes too acidic, stir in ¼ teaspoon of sugar to balance the tomato tang.',
    ],
    tags: ['Vegan', 'Gluten-free', 'Comfort', 'Soup'],
    usesExpiringIngredients: ['Tomatoes', 'Carrots', 'Onions', 'Garlic'],
  },
  {
    id: 'r5',
    title: 'Banana Bread Loaf',
    description: 'The classic way to rescue overripe bananas — a moist, warmly spiced loaf with a tender crumb and a crackly golden top that disappears fast. The deeply browned bananas provide natural sweetness and an intense banana flavor that no extract can replicate, while the cinnamon adds a cozy warmth. It keeps beautifully for several days and toasts like a dream, making it as good for a quick breakfast as it is for an afternoon treat with tea.',
    image: 'https://images.pexels.com/photos/1277202/pexels-photo-1277202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '1 hr',
    servings: 8,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['3 ripe bananas, mashed', '1 cup flour', '1 cup milk', '2 eggs', '1 tsp baking soda', '1 tsp cinnamon', '1 cup sugar', '3 tbsp olive oil'],
    steps: [
      'Preheat the oven to 350°F (175°C) and position a rack in the center. Lightly grease a 9×5-inch loaf pan with butter or oil and line the bottom with parchment paper for easy release.',
      'Peel 3 overripe bananas — they should be mostly black on the outside for maximum sweetness — and mash them thoroughly with a fork in a large bowl until mostly smooth with a few small lumps.',
      'In the same bowl, whisk in 2 eggs, 1 cup of milk, 3 tablespoons of olive oil, and 1 cup of sugar until the mixture is smooth and well combined.',
      'In a separate medium bowl, whisk together 1 cup of flour, 1 teaspoon of baking soda, and 1 teaspoon of cinnamon until evenly distributed.',
      'Add the dry ingredients to the wet mixture and fold gently with a spatula just until no dry flour remains — stop as soon as the streaks disappear to avoid a tough, dense loaf.',
      'Pour the batter into the prepared loaf pan and smooth the top with the back of a spoon for an even surface.',
      'Tap the pan gently on the counter two or three times to release any large air bubbles.',
      'Bake on the center rack for 55-60 minutes, rotating the pan halfway through for even browning. Test for doneness by inserting a toothpick into the center — it should come out clean or with a few moist crumbs but no wet batter.',
      'If the top is browning too quickly after 40 minutes, tent the loaf loosely with aluminum foil for the remaining bake time.',
      'Let the bread cool in the pan for 10 minutes, then turn it out onto a wire rack to cool completely before slicing — cutting while warm will cause the slices to crumble.',
    ],
    tips: [
      'Swap olive oil for melted butter or coconut oil for a richer flavor — the texture stays equally moist.',
      'Toast leftover slices in a buttered skillet for 2 minutes per side for a crispy, caramelized breakfast treat.',
      'Add ½ cup of chopped walnuts, pecans, or chocolate chips to the batter before baking for extra texture and indulgence.',
      'Wrapped tightly in plastic wrap, the loaf keeps at room temperature for up to 4 days and freezes well for up to 3 months.',
    ],
    tags: ['Vegetarian', 'Baking', 'Dessert', 'Make-ahead'],
    usesExpiringIngredients: ['Bananas', 'Eggs', 'Whole Milk'],
  },
  {
    id: 'r6',
    title: 'Avocado Toast with Tomato',
    description: 'A simple, satisfying open-faced sandwich that pairs buttery ripe avocado with juicy tomato slices on garlicky, golden toast. A drizzle of olive oil and a sprinkle of red pepper flakes elevate it from a quick snack to something worthy of a café menu, all in about ten minutes. It is the perfect last-minute meal when your avocados are perfectly soft and your tomatoes are at their peak ripeness.',
    image: 'https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['1 loaf bread, sliced', '3 avocados', '6 tomatoes, sliced', '2 cloves garlic, halved', 'Olive oil', 'Salt and pepper', 'Red pepper flakes'],
    steps: [
      'Slice the bread into ½-inch-thick pieces — a hearty sourdough or country loaf holds up best to the moist toppings.',
      'Toast the bread slices in a toaster or under the broiler until deeply golden and crisp on both sides, about 2-3 minutes per side under the broiler.',
      'While the toast is still warm, rub the cut side of a garlic clove firmly across the surface of each slice — the coarse toast acts like a grater, infusing the bread with garlic flavor.',
      'Halve the avocados, remove the pits, and scoop the flesh into a small bowl.',
      'Mash the avocado with a fork until it reaches your preferred texture — smooth and spreadable or chunky, depending on your taste. Add a pinch of salt and mix it in.',
      'Slice the tomatoes into ¼-inch rounds and pat them lightly with a paper towel to remove excess moisture that could make the toast soggy.',
      'Spread the mashed avocado generously and evenly over each slice of garlic toast, going all the way to the edges.',
      'Layer the tomato slices slightly overlapping on top of the avocado, then drizzle each slice with about 1 teaspoon of olive oil.',
      'Finish with a sprinkle of salt, freshly ground black pepper, and a pinch of red pepper flakes. Serve immediately while the toast is still crisp.',
    ],
    tips: [
      'Choose avocados that yield to gentle pressure when squeezed — if they are hard, they will not mash smoothly. Speed up ripening by storing them in a paper bag with a banana overnight.',
      'To prevent leftover avocado from browning, press plastic wrap directly against the surface and refrigerate for up to 1 day.',
      'A squeeze of fresh lemon juice on the avocado not only brightens the flavor but also slows oxidation and keeps the green color vibrant.',
      'For a heartier meal, top with a fried or poached egg and a sprinkle of flaky sea salt.',
    ],
    tags: ['Vegetarian', 'Breakfast', '10-min', 'No-cook'],
    usesExpiringIngredients: ['Avocado', 'Tomatoes', 'Bread', 'Garlic'],
  },
  {
    id: 'r7',
    title: 'Garlic Butter Chicken',
    description: 'Juicy pan-seared chicken breasts nestled in a rich, silky garlic butter sauce with melted cheddar and a hint of thyme — a restaurant-quality dinner that comes together in about 25 minutes. The searing technique creates a deeply golden crust that locks in moisture, while the fond left in the pan becomes the backbone of a sauce you will want to spoon over everything. It is the ideal way to use chicken breast before it spoils, turning an everyday protein into something deeply satisfying.',
    image: 'https://images.pexels.com/photos/8697537/pexels-photo-8697537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'American',
    ingredients: ['2 lbs chicken breast', '4 cloves garlic, minced', '3 tbsp olive oil', '2 tbsp butter', '1 tsp dried thyme', '1 cup milk', '200g cheddar cheese, grated', 'Salt and pepper'],
    steps: [
      'Pat 2 lbs of chicken breasts completely dry with paper towels — dry meat is essential for achieving a golden crust rather than steaming in the pan.',
      'Season both sides of each breast generously with salt, pepper, and 1 teaspoon of dried thyme, pressing the seasonings into the surface with your hands.',
      'Heat 3 tablespoons of olive oil in a large skillet over medium-high heat until the oil is shimmering and just beginning to smoke lightly.',
      'Carefully place the chicken breasts in the pan in a single layer without crowding — work in two batches if needed to avoid steaming.',
      'Sear undisturbed for 5-6 minutes until the underside develops a deep golden-brown crust, then flip and cook for another 5-6 minutes until the internal temperature reaches 165°F (74°C) when measured with a meat thermometer at the thickest part.',
      'Transfer the chicken to a plate and tent loosely with foil to keep it warm while you build the sauce.',
      'Reduce the heat to medium-low and add 2 tablespoons of butter to the same pan, scraping up the browned fond from the bottom with a wooden spoon.',
      'Add the minced garlic and cook, stirring constantly, for about 1 minute until fragrant and just starting to turn pale gold — do not let it brown or it will turn bitter.',
      'Pour in 1 cup of milk and bring to a gentle simmer, whisking continuously to emulsify the butter into the liquid.',
      'Gradually whisk in the grated cheddar cheese a handful at a time, waiting for each addition to melt before adding the next, until the sauce is smooth and glossy.',
      'Return the chicken to the pan and spoon the sauce over the top to coat. Let it warm through for 1-2 minutes, then serve hot with the sauce spooned over each portion.',
    ],
    tips: [
      'For extra-juicy chicken, pound the breasts to an even ¾-inch thickness before seasoning so they cook uniformly without drying out at the thinner end.',
      'Substitute thyme with rosemary, oregano, or Italian seasoning based on what you have on hand.',
      'The sauce thickens as it cools — if it becomes too thick, whisk in a splash of warm milk to loosen it before serving.',
      'Leftover chicken keeps for up to 3 days refrigerated and is excellent shredded over a salad or tucked into a wrap with the reheated sauce.',
    ],
    tags: ['High-protein', 'Dinner', '30-min', 'Comfort'],
    usesExpiringIngredients: ['Chicken Breast', 'Garlic', 'Cheddar Cheese', 'Whole Milk'],
  },
  {
    id: 'r8',
    title: 'Creamy Garlic Pasta',
    description: 'A silky one-pot pasta bathed in a glossy sauce of garlic, milk, and melted cheese that feels indulgent despite using the most basic pantry ingredients. The trick is the starchy pasta cooking water, which emulsifies with the cheese and butter to create a creamy consistency without a single drop of heavy cream. It is the kind of back-pocket recipe you can throw together on a busy night when the fridge is nearly bare but comfort is non-negotiable.',
    image: 'https://images.pexels.com/photos/8697516/pexels-photo-8697516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['2 boxes pasta', '6 cloves garlic, minced', '1 cup milk', '200g cheddar cheese, grated', '3 tbsp olive oil', '2 tbsp butter', '1 tsp black pepper', 'Salt'],
    steps: [
      'Bring a large pot of well-salted water to a rolling boil — the water should taste like the sea, as this is the only chance to season the pasta itself.',
      'Add the pasta and cook according to the package directions for al dente, usually 9-11 minutes, stirring occasionally to prevent sticking.',
      'Before draining, carefully scoop out 1 cup of the starchy pasta water and set it aside — this is the secret to a silky sauce.',
      'Drain the pasta in a colander and toss lightly with a drizzle of olive oil to prevent clumping while you make the sauce.',
      'In a large skillet, heat 3 tablespoons of olive oil and 2 tablespoons of butter over medium heat until the butter melts and begins to foam.',
      'Add the minced garlic and sauté for 1-2 minutes, stirring constantly, until it is pale golden and fragrant — watch closely, as garlic can burn in seconds.',
      'Pour in 1 cup of milk and bring to a gentle simmer — do not let it boil, or the milk may curdle.',
      'Reduce the heat to low and gradually whisk in the grated cheddar cheese a handful at a time, stirring constantly until each addition is fully melted and the sauce is smooth.',
      'Add the drained pasta to the sauce and toss vigorously with tongs to coat every strand, splashing in 2-3 tablespoons of the reserved pasta water at a time until the sauce reaches a creamy, flowing consistency.',
      'Season with salt and a generous teaspoon of black pepper, taste, and adjust. Serve immediately in warm bowls with extra grated cheese on top.',
    ],
    tips: [
      'Save the pasta water even after serving — if the sauce tightens as it sits, a splash of the starchy water revives it instantly.',
      'For a more traditional flavor, substitute cheddar with Parmesan, Pecorino, or Gruyère, or use a blend of whatever cheese needs using up.',
      'Toss in sautéed mushrooms, steamed broccoli, or wilted spinach at the end to turn this into a more substantial one-bowl meal.',
      'Do not let the sauce sit off the heat for too long, as cheese sauces thicken and separate as they cool — reheat gently over low heat with a splash of milk if needed.',
    ],
    tags: ['Vegetarian', 'Dinner', '20-min', 'Comfort'],
    usesExpiringIngredients: ['Garlic', 'Whole Milk', 'Cheddar Cheese'],
  },
  {
    id: 'r9',
    title: 'Berry Yogurt Parfait',
    description: 'A quick, no-cook layered parfait that turns ripe strawberries, speckled bananas, and tangy Greek yogurt into a breakfast that looks as good as it tastes. The contrast of creamy yogurt, juicy fruit, and crunchy granola in every spoonful makes it far more satisfying than a bowl of cereal, and a drizzle of honey ties everything together with natural sweetness. It takes about five minutes to assemble and is a wonderful way to use up fruit that is a day or two from going soft.',
    image: 'https://images.pexels.com/photos/1066658/pexels-photo-1066658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'American',
    ingredients: ['1 box strawberries, sliced', '500g Greek yogurt', '1 cup granola', '2 ripe bananas, sliced', '2 tbsp honey'],
    steps: [
      'Slice the strawberries into thin rounds and slice the bananas into ¼-inch coins — keep the banana slices in a squeeze of lemon juice if prepping ahead to prevent browning.',
      'Lay out two tall glasses or jars — a clear vessel shows off the beautiful layers.',
      'Add 2-3 tablespoons of Greek yogurt to the bottom of each glass and spread it into an even layer with the back of a spoon.',
      'Arrange a layer of sliced strawberries over the yogurt, pressing them gently against the glass so they are visible through the sides.',
      'Add a layer of banana slices, followed by 2-3 tablespoons of granola spread evenly across the top.',
      'Repeat the layers — yogurt, strawberries, bananas, granola — until the glasses are nearly full, ending with a final dollop of yogurt on top.',
      'Drizzle 1 tablespoon of honey over the top of each parfait in a slow, circular motion so it cascades down the sides.',
      'Serve immediately with a long spoon so each bite reaches all the layers.',
    ],
    tips: [
      'If you are not serving right away, keep the granola separate and add it just before eating so it stays crunchy — soggy granola is the enemy of a great parfait.',
      'Substitute the honey with maple syrup or agave nectar for a vegan-friendly version, and use a dairy-free yogurt for a fully plant-based parfait.',
      'Frozen berries work beautifully in a pinch — thaw them first and use the sweet syrup they release as an extra layer of flavor.',
      'For a protein boost, stir 1 tablespoon of chia seeds into the yogurt and let it sit for 10 minutes to create a thicker, pudding-like base.',
    ],
    tags: ['Vegetarian', 'Breakfast', '5-min', 'No-cook'],
    usesExpiringIngredients: ['Strawberries', 'Greek Yogurt', 'Bananas'],
  },
  {
    id: 'r10',
    title: 'Vegetable Fried Rice',
    description: 'A quick weeknight fried rice loaded with diced carrots, onions, garlic, and scrambled eggs, tossed in a smoky soy sauce glaze that rivals any takeout order. The key to perfect fried rice is using cold, day-old rice — its dried-out grains separate and fry up beautifully instead of turning into a clumpy mush. It is the ultimate fridge-clearing recipe that absorbs whatever aging produce and leftover rice you have on hand.',
    image: 'https://images.pexels.com/photos/12984978/pexels-photo-12984978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Asian',
    ingredients: ['3 cups cooked rice (day-old)', '1 bag carrots, diced', '2 onions, diced', '3 cloves garlic, minced', '4 large eggs', '3 tbsp olive oil', '2 tbsp soy sauce', '2 green onions, sliced'],
    steps: [
      'Break up the cold cooked rice with your fingers or the back of a wooden spoon so there are no clumps — this ensures every grain fries evenly. If the rice is fresh, spread it on a tray and refrigerate uncovered for at least 30 minutes to dry it out.',
      'Dice the carrots into small ¼-inch cubes, finely dice the onions, and mince the garlic — small, uniform pieces cook quickly and distribute evenly.',
      'Heat 1 tablespoon of oil in a large wok or skillet over high heat until it just starts to smoke.',
      'Pour in the beaten eggs and quickly scramble them for 30-45 seconds until just set in soft curds, then immediately remove them to a plate.',
      'Wipe the pan if needed, then add the remaining 2 tablespoons of oil and return to high heat until shimmering.',
      'Add the minced garlic and diced onions and stir-fry for 1 minute, keeping everything moving so the garlic does not burn.',
      'Add the diced carrots and stir-fry for 2-3 minutes until they are tender-crisp — they should retain a slight bite and bright color.',
      'Add the cold rice to the wok and spread it out in an even layer; let it sit undisturbed for 30 seconds so the grains toast and develop a slight chew, then stir-fry vigorously for 2-3 minutes to heat through and separate every grain.',
      'Return the scrambled eggs to the wok and break them into smaller pieces with your spatula.',
      'Drizzle 2 tablespoons of soy sauce around the edge of the wok so it hits the hot metal and caramelizes, then toss everything together for 30 seconds until the rice is evenly coated and takes on a light golden color.',
      'Turn off the heat, add the sliced green onions, and toss once more. Serve immediately in shallow bowls.',
    ],
    tips: [
      'Cold, day-old rice is non-negotiable for the best texture — fresh rice contains too much moisture and will turn gummy. Plan ahead by cooking extra rice the day before.',
      'Add a splash of sesame oil at the end (not during cooking, as it burns easily) for an authentic, aromatic finish.',
      'Toss in any leftover protein — diced chicken, shrimp, or tofu — along with the eggs for a more filling meal.',
      'Fried rice reheats best in a hot dry skillet for 2 minutes — the microwave makes it soft and loses the signature chewy texture.',
    ],
    tags: ['Vegetarian', 'Dinner', '20-min', 'Make-ahead'],
    usesExpiringIngredients: ['Carrots', 'Onions', 'Garlic', 'Eggs'],
  },
  {
    id: 'r11',
    title: 'Cheesy Garden Omelette',
    description: 'A fluffy three-egg omelette folded around a savory filling of sautéed tomatoes, bell peppers, and onions, all held together by a blanket of melted cheddar. The vegetables are cooked first to concentrate their flavor and remove excess moisture, ensuring the omelette stays tender rather than watery. It is a quick, protein-packed meal that makes the most of soft vegetables and is equally at home on a breakfast plate or a light dinner table.',
    image: 'https://images.pexels.com/photos/1437268/pexels-photo-1437268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'French',
    ingredients: ['4 large eggs', '200g cheddar cheese, grated', '3 tomatoes, diced', '2 bell peppers, diced', '1 onion, diced', '2 tbsp olive oil', 'Salt and pepper'],
    steps: [
      'Dice the tomatoes, bell peppers, and onion into small ¼-inch pieces so they cook quickly and fold neatly inside the omelette.',
      'Crack 4 eggs into a bowl — 2 per omelette — and beat them with a fork for 30 seconds until the yolks and whites are fully combined with no streaks. Season with a pinch of salt and pepper.',
      'Heat 1 tablespoon of olive oil in a medium non-stick skillet over medium heat until shimmering.',
      'Add the diced onion, bell peppers, and tomatoes and sauté for 3-4 minutes, stirring occasionally, until the vegetables are softened and the tomatoes have released and evaporated most of their liquid.',
      'Remove the vegetable mixture to a small bowl and wipe the skillet clean with a paper towel.',
      'Return the skillet to medium-low heat and add the remaining 1 tablespoon of olive oil, swirling to coat the bottom and sides evenly.',
      'Pour half of the beaten eggs into the skillet and immediately tilt and rotate the pan so the egg coats the base in a thin, even circle.',
      'Cook undisturbed for 1-2 minutes until the edges are set and slightly pulling away from the pan but the center is still slightly wet and glossy — this ensures a tender, not rubbery, omelette.',
      'Sprinkle half the grated cheddar over one half of the omelette, then spoon half the vegetable mixture on top of the cheese. Using a spatula, gently fold the empty half over the filling and slide the omelette onto a warm plate.',
      'Repeat steps 7-9 with the remaining eggs, cheese, and vegetables to make the second omelette. Serve immediately while hot and cheesy.',
    ],
    tips: [
      'Use a well-seasoned or non-stick skillet — omelettes are notoriously sticky, and a clean flip depends on a slick surface.',
      'Cook the eggs over medium-low heat; high heat causes the bottom to toughen and brown before the top sets, resulting in a rubbery texture.',
      'Drain any excess liquid from the cooked vegetables before adding them to the omelette so the filling does not make the eggs soggy.',
      'Customize the filling with whatever needs using up — spinach, mushrooms, or leftover cooked potatoes all work beautifully.',
    ],
    tags: ['Vegetarian', 'Breakfast', '20-min', 'High-protein'],
    usesExpiringIngredients: ['Eggs', 'Cheddar Cheese', 'Tomatoes', 'Bell Peppers', 'Onions'],
  },
  {
    id: 'r12',
    title: 'Caprese Salad',
    description: 'A fresh, no-cook salad of ripe tomato slices, mild cheese, and fragrant basil drizzled with olive oil and balsamic — the essence of summer on a plate. The magic lies entirely in the quality of the ingredients: sweet, sun-ripened tomatoes and fresh basil need almost nothing to shine, just a good oil and a sprinkle of salt to draw out their natural flavors. It comes together in ten minutes, requires no cooking, and is as elegant as a starter as it is satisfying as a light lunch.',
    image: 'https://images.pexels.com/photos/5639959/pexels-photo-5639959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    cookTime: '10 min',
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    ingredients: ['6 tomatoes, sliced', '200g cheddar cheese, sliced', '1 bunch fresh basil', '3 tbsp olive oil', '1 tbsp balsamic vinegar', 'Salt and pepper'],
    steps: [
      'Slice the tomatoes into even ¼-inch rounds — a serrated knife gives clean cuts without crushing soft, ripe tomatoes.',
      'Slice the cheese into ¼-inch rounds of a similar diameter to the tomato slices so they stack neatly.',
      'Pick the freshest basil leaves from the bunch, choosing small to medium leaves that are deep green with no browning or wilting.',
      'Choose a wide, shallow serving platter or individual plates — spreading the salad out prevents the bottom layers from becoming soggy.',
      'Arrange the tomato and cheese slices in an alternating, overlapping pattern across the platter, working in a line or a circular fan.',
      'Tuck whole basil leaves between every other tomato and cheese slice so each serving gets a leaf.',
      'Drizzle 3 tablespoons of olive oil evenly over the entire arrangement, followed by 1 tablespoon of balsamic vinegar — pour it slowly from a spoon for even distribution.',
      'Finish with a generous pinch of flaky salt and freshly ground black pepper. Let the salad sit at room temperature for 5 minutes so the salt draws out the tomato juices and the flavors meld before serving.',
    ],
    tips: [
      'Use the ripest tomatoes you can find — heirloom varieties in different colors make the salad visually stunning and add a range of sweetness levels.',
      'Room-temperature tomatoes taste dramatically better than cold ones — the cold mutes their flavor, so take them out of the fridge 30 minutes before assembling.',
      'For an extra touch, reduce balsamic vinegar in a small saucepan over low heat for 5-7 minutes until syrupy, then drizzle the glaze over the salad for a concentrated sweetness.',
      'Serve with crusty bread to soak up the pooling olive oil and tomato juices — that is often the best part of the dish.',
    ],
    tags: ['Vegetarian', 'No-cook', '10-min', 'Gluten-free'],
    usesExpiringIngredients: ['Tomatoes', 'Cheddar Cheese'],
  },
];

// Additional recipes are appended from the separate file
import { additionalRecipes } from './additionalRecipes';
mockRecipes.push(...additionalRecipes);

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
