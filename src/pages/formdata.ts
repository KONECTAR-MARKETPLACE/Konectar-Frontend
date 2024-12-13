export interface FruitOption {
    readonly value: string;
    readonly label: string;
    
  }


  export const fruitOptions: readonly FruitOption[] = [
    { value: 'mango', label: 'Mango ' },
    { value: 'pawpaw', label: 'Pawpaw ' },
    { value: 'pineapple', label: 'Pineapple ' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' },
    { value: 'plantain', label: 'Plantain' },
    { value: 'avocado', label: 'Avocado' },
    { value: 'cashew', label: 'Cashew' },
    { value: 'guava', label: 'Guava ' },
    { value: 'coconut', label: 'Coconut' },
    { value: 'soursop', label: 'Soursop ' },
    { value: 'tangerine', label: 'Tangerine ' },
    { value: 'strawberries', label: 'Strawberries' },
    { value: 'blueberries', label: 'Blueberries' },
    { value: 'blackberries', label: 'Blackberries' },
    { value: 'raspberries', label: 'Raspberries' },
    { value: 'watermelon', label: 'Watermelon ' },
    { value: 'arican-star-apple', label: 'African Star Apple (Agbalumo/Udara) ' },
    { value: 'apple', label: 'Apple (Imported)' },
  ];
  

  export interface VegetableOption {
    readonly value: string;
    readonly label: string;
    
  }

  export const vegetableOptions: readonly VegetableOption[] = [
    { value: 'pumpkin-leaves', label: 'Pumpkin Leaves (Ugu)' },
    { value: 'spinach', label: 'Spinach (Efo Tete) ' },
    { value: 'bitterleaf', label: 'Bitter Leaf ' },
    { value: 'waterleaf', label: 'Waterleaf' },
    { value: 'okra', label: 'Okra ' },
    { value: 'garden-egg', label: 'Garden Egg ' },
    { value: 'tomato', label: 'Tomato ' },
    { value: 'fluted-pumpkin', label: 'Fluted Pumpkin (Ugu)' },
    { value: 'cocoyam-leaves', label: 'Cocoyam Leaves ' },
    { value: 'scent-leaf', label: 'Scent Leaf ' },
    { value: 'onion', label: 'Onion ' },
    { value: 'cabbage', label: 'Cabbage ' },
    { value: 'carrot', label: 'Carrot ' },
    { value: 'sweet-potato', label: 'Sweet Potato ' },
  ];

  export interface FruityVegetableOption {
    readonly value: string;
    readonly label: string;
    
  }

  export const fruityvegetablesOptions: readonly FruityVegetableOption[] = [
    { value: 'beefsteak-tomatoes', label: 'Beefsteak tomatoes' },
    { value: 'roma-tomatoes', label: 'Roma tomatoes' },
    { value: 'regular-tomatoes', label: 'Regular tomatoes' },
    { value: 'cherry-tomatoes', label: 'Cherry tomatoes' },
    { value: 'potatoes-anamo', label: 'Potatoes - Anamo' },
    { value: 'sweet-potatoes', label: 'Sweet Potatoes - Doya' },
    { value: 'carrots', label: 'Carrots - Karoti' },
    { value: 'onions', label: 'Onions - Alubosa' },
    { value: 'cucumbers', label: 'Cucumbers - Gambari' },
    { value: 'red-bell-peppers', label: 'Red Bell Peppers - Tatase' },
    { value: 'yellow-bell-peppers', label: 'Yellow Bell Peppers' },
    { value: 'green-bell-peppers', label: 'Green Bell Peppers' },
    { value: 'red-habanero-peppers', label: 'Red Habanero Peppers - Ata rodo' },
    { value: 'yellow-habanero-peppers', label: 'Yellow Habanero Peppers' },
    { value: 'green-habanero-peppers', label: 'Green Habanero Peppers' },
    { value: 'orange-habanero-peppers', label: 'Orange Habanero Peppers' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'cabbage', label: 'Cabbage - Ewedu Oyibo' },
    { value: 'okra', label: 'Okra - Ila' },
    { value: 'beetroots', label: 'Beetroots - Ata Dudu' }
  ];




  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly FruitOption[] | readonly VegetableOption[] | readonly FruityVegetableOption[];
  }


  // export const groupedOptions: readonly GroupedOption[] = [
  //   {
  //     label: 'Fruits',
  //     options: fruitOptions,
  //   },
  //   {
  //     label: 'Vegetables',
  //     options: vegetableOptions,
  //   },

  //   {
  //     label: 'Vegetables',
  //     options: fruityvegetablesOptions,
  //   },
  // ];