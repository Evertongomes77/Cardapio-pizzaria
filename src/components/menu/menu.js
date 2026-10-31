export const menuData = [
    {
      id: "tradicionais",
      category: "Pizzas tradicionais",
      description: "Os sabores clássicos que todo mundo ama.",
      products: [
        {
          id: "calabresa",
          name: "Calabresa",
          description:
            "Molho artesanal, mussarela, calabresa fatiada, cebola e orégano.",
          image: "./imagensPizzas/pizza_calabresa.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 32.90 },
            { name: "M", price: 42.90 },
            { name: "G", price: 52.90 },
          ],
        },
        {
          id: "mussarela",
          name: "Mussarela",
          description:
            "Molho artesanal, mussarela especial, tomate e orégano.",
          image: "./imagensPizzas/pizza_mussarela.jpg",
          featured: false,
          sizes: [
            { name: "P", price: 29.90 },
            { name: "M", price: 39.90 },
            { name: "G", price: 49.90 },
          ],
        },
        {
          id: "portuguesa",
          name: "Portuguesa",
          description:
            "Mussarela, presunto, ovos, cebola, ervilha e azeitonas.",
          image: "./imagensPizzas/pizza_portuguesa.jpg",
          featured: false,
          sizes: [
            { name: "P", price: 36.90 },
            { name: "M", price: 46.90 },
            { name: "G", price: 56.90 },
          ],
        },
        {
          id: "frango-catupiry",
          name: "Frango com Catupiry",
          description:
            "Frango desfiado, mussarela e requeijão cremoso.",
          image: "./imagensPizzas/pizza_frango_com_catupiry.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 37.90 },
            { name: "M", price: 47.90 },
            { name: "G", price: 57.90 },
          ],
        },
      ],
    },
  
    {
      id: "especiais",
      category: "Pizzas especiais",
      description: "Combinações especiais preparadas na Forlenha.",
      products: [
        {
          id: "quatro-queijos",
          name: "Quatro Queijos",
          description:
            "Mussarela, provolone, parmesão e gorgonzola.",
          image: "./imagensPizzas/pizza_quatro_queijos.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 42.90 },
            { name: "M", price: 52.90 },
            { name: "G", price: 62.90 },
          ],
        },
        {
          id: "bacon-supreme",
          name: "Bacon Supreme",
          description:
            "Mussarela, bacon crocante, molho barbecue e cebola caramelizada.",
          image: "./imagensPizzas/pizza_baicom_supreme.jpg",
          featured: false,
          sizes: [
            { name: "P", price: 44.90 },
            { name: "M", price: 54.90 },
            { name: "G", price: 64.90 },
          ],
        },
        {
          id: "pepperoni",
          name: "Pepperoni",
          description:
            "Mussarela, pepperoni especial e molho artesanal.",
          image: "./imagensPizzas/pizza_peperone.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 43.90 },
            { name: "M", price: 53.90 },
            { name: "G", price: 63.90 },
          ],
        },
        {
          id: "forlenha-especial",
          name: "Forlenha Especial",
          description:
            "Mussarela, tomate seco, rúcula, parmesão e molho especial da casa.",
          image: "./imagensPizzas/pizza_forlenha_especial.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 46.90 },
            { name: "M", price: 56.90 },
            { name: "G", price: 66.90 },
          ],
        },
      ],
    },
  
    {
      id: "doces",
      category: "Pizzas doces",
      description: "Para fechar sua experiência com chave de ouro.",
      products: [
        {
          id: "chocolate-morango",
          name: "Chocolate com Morango",
          description:
            "Chocolate ao leite cremoso e morangos frescos.",
          image: "./imagensPizzas/Pizza_chocolate_com_morango.jpg",
          featured: true,
          sizes: [
            { name: "P", price: 36.90 },
            { name: "M", price: 46.90 },
            { name: "G", price: 56.90 },
          ],
        },
        {
          id: "banana-canela",
          name: "Banana com Canela",
          description:
            "Banana, chocolate branco, açúcar e canela.",
          image: "./imagensPizzas/pizza_banana_com_canela.jpg",
          featured: false,
          sizes: [
            { name: "P", price: 32.90 },
            { name: "M", price: 42.90 },
            { name: "G", price: 52.90 },
          ],
        },
      ],
    },
  
    {
      id: "bebidas",
      category: "Bebidas",
      description: "Bebidas geladinhas para acompanhar sua pizza.",
      products: [
        {
          id: "coca-cola-2l",
          name: "Coca-Cola 2L",
          description: "Refrigerante Coca-Cola original.",
          image: "./imagensPizzas/coca_cola_2L.jpg",
          featured: true,
          price: 13.00,
        },
        {
          id: "guarana-2l",
          name: "Guaraná Antarctica 2L",
          description: "Refrigerante Guaraná Antarctica.",
          image: "./imagensPizzas/guarana_2L.jpg",
          featured: false,
          price: 11.00,
        },
        {
          id: "fanta-laranja",
          name: "Fanta Laranja 350ml",
          description: "Refrigerante de laranja em lata.",
          image: "./imagensPizzas/fanta_350ml.jpg",
          featured: false,
          price: 6.00,
        },
        {
          id: "agua-mineral",
          name: "Água Mineral 500ml",
          description: "Água mineral com ou sem gás.",
          image: "./imagensPizzas/agua_mineral_500ml.jpg",
          featured: false,
          price: 4.00,
        },
      ],
    },
  
    {
      id: "sobremesas",
      category: "Sobremesas",
      description: "Uma dose extra de felicidade.",
      products: [
        {
          id: "brownie",
          name: "Brownie",
          description:
            "Brownie de chocolate com casquinha crocante.",
          image: "./imagensPizzas/brownie.jpg",
          featured: true,
          price: 12.00,
        },
        {
          id: "mousse-chocolate",
          name: "Mousse de Chocolate",
          description: "Mousse cremosa de chocolate.",
          image: "./imagensPizzas/mousse_chocolate.jpg",
          featured: false,
          price: 10.00,
        },
      ],
    },
  ];
