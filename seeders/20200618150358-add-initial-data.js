'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Simple',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fancy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])


    await queryInterface.bulkInsert('Recipes', [
      {
        name: 'Pizza',
        review: 'This is super good',
        description: 'Yep it has a description',
        url: 'http://url',
        likes: 0,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mac',
        review: 'This is great',
        description: 'has a description',
        url: 'http://macncheese.com',
        likes: 10,
        vegetarian: false,
        vegan: false,
        glutenfree: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

    return await queryInterface.bulkInsert('RecipeCategories', [
      {
        recipeId: 1,
        categoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 1,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 1,
        categoriesId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 2,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        recipeId: 2,
        categoriesId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipeCategories', null, {})
    await queryInterface.bulkDelete('Recipes', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
