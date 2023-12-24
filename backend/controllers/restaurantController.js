import Restaurant from "../models/restaurantModel.js";


//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
//nao deu certo era melhor usar os metodos do js para percorrer os objetos e filtrar

const restaurantsFilter = (restaurants, query) => {
  // Converte o termo de busca para minúsculas para tornar a busca case-insensitive
  query = query.toLowerCase();
  // Filtra a lista de restaurants com base no termo de busca
  const filteredRestaurants = restaurants.filter(restaurant => {
    // Verifica se o termo de busca está presente em algum lugar do restaurant
    return (
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.description.toLowerCase().includes(query) ||
      restaurant.address.toLowerCase().includes(query) ||
      restaurant.dishes.some(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query)
      ) ||
      restaurant.drinks.some(drink =>
        drink.name.toLowerCase().includes(query) ||
        drink.description.toLowerCase().includes(query)
      )
    );
  });

  return filteredRestaurants;
}

class RestaurantController {
  static async getAllRestaurants(req, res) {
    const { query } = req.query;

    if (query) {
      try {
        const restaurants = await Restaurant.findAll();

      
        res.status(200).json(restaurantsFilter(restaurants, query));
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      try {
        const restaurants = await Restaurant.findAll();

        res.status(200).json(restaurants);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }

  static async populateDatabase(req, res) {
    const imagesURL = "http://localhost:8000/images/"

    const restaurants = [
      {
        name: "Restaurante sem futuro",
        description: "Comida brasileira",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 123",
        image: imagesURL + "brasileiro.png",
        dishes: [
          {
            name: "Strogonoff",
            description: "Carne, arroz, batata frita",
            price: 21.21,
            image: imagesURL + "Strogonoff.jpg"
          },
          {
            name: "Bife à Cavalo",
            description: "Bife, ovo, arroz",
            price: 25.5,
            image: imagesURL + "Bife.jpeg"
          },
          {
            name: "Feijoada",
            description: "Feijão preto, carne de porco, arroz",
            price: 30.0,
            image: imagesURL + "Feijoada.jpg"
          },
        ],
        drinks: [
          {
            name: "Água",
            description: "Água mineral",
            price: 2.5,
            image: imagesURL + "agua.jpg",
          },
          {
            name: "Coca Cola",
            description: "Refrigerante Coca Cola",
            price: 4.5,
            image: imagesURL + "coca-cola.jpg"
          },
          {
            name: "Mineiro",
            description: "Refrigerante de guaraná",
            price: 4.5,
            image: imagesURL + "Mineiro.jpeg"
          },
        ],
      },
      {
        name: "restaurant Mario Bros",
        description: "Comida italiana",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 124",
        image: imagesURL + "mario.png",
        dishes: [
          {
            name: "Pizza",
            description: "Mussarela, tomate, manjericão",
            price: 70.0,
            image: imagesURL + "Pizza.jpg"
          },
          {
            name: "Macarrão",
            description: "Massa, molho vermelho, almôndegas",
            price: 26.0,
            image: imagesURL + "Macarrao.png"
          },
          {
            name: "Lasanha",
            description: "Camadas de massa, molho bolonhesa, queijo",
            price: 35.0,
            image: imagesURL + "Lasanha.jpg"
          },
        ],
        drinks: [
          {
            name: "Água",
            description: "Água mineral",
            price: 2.5,
            image: imagesURL + "agua.jpg"
          },
          {
            name: "Coca Cola",
            description: "Refrigerante Coca Cola",
            price: 4.5,
            image: imagesURL + "coca-cola.jpg"
          },
          {
            name: "Mineiro",
            description: "Refrigerante de guaraná",
            price: 4.5,
            image: imagesURL + "Mineiro.jpeg"
          },
        ],
      },
      {
        name: "restaurant Japonês",
        description: "Comida japonesa",
        phone: "34 123456789",
        address: "Av Leopoldino de Oliveira, 125",
        image: imagesURL + "japones.jpg",
        dishes: [
          {
            name: "Sushi Misto",
            description: "Barca de sushi variado",
            price: 80.0,
            image: imagesURL + "Sushi.jpg"
          },
          {
            name: "Yakisoba",
            description: "Macarrão, legumes, carne, frango",
            price: 20.5,
            image: imagesURL + "Yakisoba.jpg"
          },
          {
            name: "Temaki",
            description: "Sushi enrolado em algas",
            price: 25.0,
            image: imagesURL + "Temaki.jpg"
          },
        ],
        drinks: [
          {
            name: "Água",
            description: "Água mineral",
            price: 2.5,
            image: imagesURL + "agua.jpg"
          },
          {
            name: "Coca Cola",
            description: "Refrigerante Coca Cola",
            price: 4.5,
            image: imagesURL + "coca-cola.jpg"
          },
          {
            name: "Mineiro",
            description: "Refrigerante de guaraná",
            price: 4.5,
            image: imagesURL + "Mineiro.jpeg"
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
