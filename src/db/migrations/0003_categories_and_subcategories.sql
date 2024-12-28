-- Categories
INSERT INTO categories (name, slug, description) VALUES
('Food and Beverages', 'food-and-beverages', 'Fresh food, drinks, and prepared meals'),
('Groceries', 'groceries', 'Daily household essentials and pantry items'),
('Liquor and Alcohol', 'liquor-and-alcohol', 'Alcoholic beverages and spirits'),
('Health', 'health', 'Health and wellness products');

-- Subcategories
-- Food and Beverages
-- Inserting Meals subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Meals', 'meals', 'Main course dishes like burgers, pizzas, and pasta', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Sides subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Sides', 'sides', 'Accompanying dishes like fries, salads, and appetizers', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Desserts subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Desserts', 'desserts', 'Sweet dishes like cakes, ice cream, and pastries', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Beverages subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Beverages', 'beverages', 'Non-alcoholic drinks like sodas, juices, and coffee', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Appetizers subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Appetizers', 'appetizers', 'Small dishes served before the main course', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Vegetarian/Vegan subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Vegetarian/Vegan', 'vegetarian-vegan', 'Plant-based and vegetarian dishes', id
FROM categories
WHERE slug = 'food-and-beverages';

-- Inserting Grills & BBQ subcategory
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Grills & BBQ', 'grills-bbq', 'Grilled dishes and BBQ options', id
FROM categories
WHERE slug = 'food-and-beverages';


-- Groceries
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Pantry Items', 'pantry-items', 'Long-lasting food staples', id
FROM categories WHERE slug = 'groceries';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Household Essentials', 'household-essentials', 'Cleaning and household items', id
FROM categories WHERE slug = 'groceries';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Pet Supplies', 'pet-supplies', 'Food and supplies for pets', id
FROM categories WHERE slug = 'groceries';

-- Liquor and Alcohol
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Wine', 'wine', 'Red, white, and sparkling wines', id
FROM categories WHERE slug = 'liquor-and-alcohol';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Beer', 'beer', 'Craft and commercial beers', id
FROM categories WHERE slug = 'liquor-and-alcohol';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Spirits', 'spirits', 'Hard liquor and spirits', id
FROM categories WHERE slug = 'liquor-and-alcohol';

-- Health
INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Supplements', 'supplements', 'Vitamins and dietary supplements', id
FROM categories WHERE slug = 'health';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Personal Care', 'personal-care', 'Personal hygiene and care products', id
FROM categories WHERE slug = 'health';

INSERT INTO subcategories (name, slug, description, category_id)
SELECT 'Wellness', 'wellness', 'General wellness and health products', id
FROM categories WHERE slug = 'health';
