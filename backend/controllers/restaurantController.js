import Restaurant from "../models/restaurantModel.js";

class RestaurantController {
  static async getAllRestaurants(req, res) {
    try {
      const restaurants = await Restaurant.findAll();
      res.status(200).json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async populateDatabase(req, res) {
    const restaurants = [
      {
        name: "Restaurante sem futuro",
        description: "Comida brasileira",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 123",
        dishes: [
          {
            name: "Strogonoff",
            description: "Carne, arroz, batata frita",
            price: 21.21,
          },
          {
            name: "Bife à Cavalo",
            description: "Bife, ovo, arroz",
            price: 25.5,
          },
          {
            name: "Feijoada",
            description: "Feijão preto, carne de porco, arroz",
            price: 30.0,
          },
        ],
        drinks: [
          {
            name: "Água",
            description: "Água mineral",
            price: 2.50,
          },
          {
            name: "Coca Cola",
            description: "Refrigerante Coca Cola",
            price: 4.50,
          },
          {
            name: "Mineiro",
            description: "Refrigerante de guaraná",
            price: 4.50,
          },
        ],
      },
      {
        name: "Restaurante Mario Bros",
        description: "Comida italiana",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 124",
        dishes: [
          {
            name: "Pizza",
            description: "Mussarela, tomate, manjericão",
            price: 70.00,
          },
          {
            name: "Macarrão",
            description: "Massa, molho vermelho, almôndegas",
            price: 26.00,
          },
          {
            name: "Lasanha",
            description: "Camadas de massa, molho bolonhesa, queijo",
            price: 35.00,
          },
        ],
        drinks: [
          {
            name: "Água",
            description: "Água mineral",
            price: 2.50,
          },
          {
            name: "Coca Cola",
            description: "Refrigerante Coca Cola",
            price: 4.50,
          },
          {
            name: "Mineiro",
            description: "Refrigerante de guaraná",
            price: 4.50,
          },
        ],
      },
      {
        name: "Restaurante Japonês",
        description: "Comida japonesa",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 125",
        dishes: [
          {
            name: "Sushi Misto",
            description: "Barca de sushi variado",
            price: 80.00,
          },
          {
            name: "Yakisoba",
            description: "Macarrão, legumes, carne, frango",
            price: 20.50,
          },
          {
            name: "Temaki",
            description: "Sushi enrolado em algas",
            price: 25.00,
          },
        ],
        drinks: [
            {
              name: "Água",
              description: "Água mineral",
              price: 2.50,
            },
            {
              name: "Coca Cola",
              description: "Refrigerante Coca Cola",
              price: 4.50,
            },
            {
              name: "Mineiro",
              description: "Refrigerante de guaraná",
              price: 4.50,
            },
          ],
      },
    ];
    
    try {
      await Restaurant.bulkCreate(restaurants);
      res.status(200).json({ message: restaurants });
    } catch {
      res.status(500).json({ message: error.message });
    }
  }

}

export default RestaurantController;
