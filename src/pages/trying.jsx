import React, { useState } from 'react';
import { useMemo } from 'react';

import Select from 'react-select'



const options = [
  { value: 'mango', label: 'Mango Local Name: Mangoro (Yoruba), Mangwaro (Hausa), Mangoro (Igbo)' },
  { value: 'pawpaw', label: 'Pawpaw (Papaya) Local Name: Ibepe(Yoruba), Gwanda (Hausa), Okwere Nkwo(Igbo)' },
  { value: 'pineapple', label: 'Pineapple Local Name: Ope Oyinbo (Yoruba), Abarba (Hausa), Nkwu Ocha (Igbo)' },
  { value: 'orange', label: 'Orange Local Name: Osan (Yoruba), Lemu (Hausa), Oroma (Igbo)' },
  { value: 'banana', label: 'Banana Local Name: Ogede (Yoruba), Ayaba(Hausa), Unere (Igbo)' },
  { value: 'plantain', label: 'Plantain Local Name: Ogede Agbagba  (Yoruba), Ayaba (Hausa), Oji (Igbo)' },
  { value: 'avocado', label: 'Avocado Local Name: Peya (Yoruba), Agwala (Hausa), Ube Oyibo (Igbo)' },
  { value: 'cashew', label: 'Cashew Local Name: Kaju (Yoruba), Kaju(Hausa), Kashu (Igbo)' },
  { value: 'guava', label: 'Guava Local Name: Gwaafa (Yoruba), Gwaaba (Hausa), Ugwa (Igbo)' },
  { value: 'coconut', label: 'Coconut Local Name: Agbon (Yoruba), Kwakwa(Hausa), Aki Oyibo (Igbo)' },
  { value: 'soursop', label: 'Soursop Local Name: Sawusopu (Yoruba), Gwandar Da Daji (Hausa), Ugwak (Igbo)' },
  { value: 'tangerine', label: 'Tangerine Local Name: Tangi  (Yoruba), Lemu(Hausa), Citrus (Igbo)' },
  { value: 'strawberries', label: 'Strawberries' },
  { value: 'blueberries', label: 'Blueberries' },
  { value: 'blackberries', label: 'Blackberries' },
  { value: 'raspberries', label: 'Raspberries' },
  { value: 'watermelon', label: 'Watermelon Local Name: Elegede(Yoruba), Kankana(Hausa), Milini(Igbo)' },
  { value: 'arican-star-apple', label: 'African Star Apple (Agbalumo/Udara) Local Name: Agbalumo (Yoruba), Agwaluma (Hausa), Udara (Igbo)' },
  { value: 'apple', label: 'Apple (Imported) Local Name: Apulu (Yoruba), Apul (Hausa), Apulu(Igbo)' },
  { value: 'pumpkin-leaves', label: 'Pumpkin Leaves (Ugu)Local Name: Eweroko (Yoruba), Kabewa (Hausa), Ugu (Igbo)' },
  { value: 'spinach', label: 'Spinach (Efo Tete) Local Name: Efo Tete (Yoruba), Aleen(Hausa), Inine (Igbo)' },
  { value: 'bitterleaf', label: 'Bitter Leaf Local Name: Ewuro (Yoruba), Shiwaka(Hausa), Onugbu (Igbo)' },
  { value: 'waterleaf', label: 'Waterleaf Local Name: Gbure (Yoruba), Babazugu(Hausa), Mgbolodi (Igbo)' },
  { value: 'okra', label: 'Okra Local Name: Ila (Yoruba), Kubewa (Hausa), Okuru(Igbo)' },
  { value: 'garden-egg', label: 'Garden Egg Local Name: Igba (Yoruba), Yalo (Hausa), Anara (Igbo)' },
  { value: 'tomato', label: 'Tomato Local Name: Tomati (Yoruba), Tomati (Hausa), Tomato (Igbo)' },
  { value: 'fluted-pumpkin', label: 'Fluted Pumpkin (Ugu)Local Name: Iyan apani (Yoruba), Ugu (Igbo)' },
  { value: 'cocoyam-leaves', label: 'Cocoyam Leaves Local Name: Ewe Coco (Yoruba), Ganye Gwaza (Hausa), Nchi (Igbo)' },
  { value: 'scent-leaf', label: 'Scent Leaf Local Name: Efirin (Yoruba), Daidoya (Hausa), Nchuanwu (Igbo)' },
  { value: 'onion', label: 'Onion Local Name: Alubosa (Yoruba), Alubasa (Hausa), Yabasi (Igbo)' },
  { value: 'cabbage', label: 'Cabbage Local Name: Kabeji (Yoruba), Karambushka (Hausa), Abazi (Igbo)' },
  { value: 'carrot', label: 'Carrot Local Name: Karoti (Yoruba), Karas (Hausa), Oka (Igbo)' },
  { value: 'sweet-potato', label: 'Sweet Potato Local Name: Anamo (Yoruba), Dankalin Hausa (Hausa), Ji (Igbo)' },
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
]

const options2 = [
  { value: 'twice-a-week', label: 'Twice a week' },
  { value: 'once-a-month', label: 'Once a month' },
  { value: 'others', label: 'Others' },
]

const options3 = [
  { value: 'local-market', label: 'Local market' },
  { value: 'wholesalers', label: 'Wholesalers' },
  { value: 'direct-sales', label: 'Direct sales' },
]

const options4 = [
  { value: 'organic-certification', label: 'Organic Certification' },
  { value: 'wholesalers', label: 'Farm Tours or Educational Programs' },
  { value: 'direct-to-consumer-sales', label: 'Direct-to-Consumer sales' },
  { value: 'value-added-products', label: 'Value-Added Products' },
  { value: 'packaging-service', label: 'Packaging Service' },
  { value: 'pesticide-free-produce', label: 'Pesticide-Free Produce' },
]


const Trying = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleSelectChange2 = (selectedOptions2) => {
    setSelectedOptions2(selectedOptions2);
  };

  const [selectedOptions3, setSelectedOptions3] = useState([]);

  const handleSelectChange3 = (selectedOptions3) => {
    setSelectedOptions3(selectedOptions3);
  };

  const [selectedOptions4, setSelectedOptions4] = useState([]);

  const handleSelectChange4 = (selectedOptions4) => {
    setSelectedOptions4(selectedOptions4);
  };



  return (
    <>

      <label className='font-bold' htmlFor='produce1'>
        Types of Produce  </label><br></br>
      <Select className='hover:border-[#424b50] bg-[#dcd6ec99]'
        name='produce1'
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
        isMulti={true}
        placeholder="Select produce"

        theme={(theme) => ({
          ...theme,
          borderRadius: 7,
          colors: {
            ...theme.colors,
            primary25: 'lightgreen',
            danger: 'black',
            primary: 'grey',
          },
        })}
        required />

      <p className='text-[0.7rem]'>Indicate in the input field above if you don't see your category here</p><br />

      <label className='font-bold' htmlFor='produce2'>
        Supply Frequency  </label><br></br>
      <Select className='hover:border-[#424b50] hover:bg-[#dcd6ec99]'
        name='produce2'
        options={options2}
        value={selectedOptions2}
        onChange={handleSelectChange2}
        isMulti={false}
        placeholder="Select frequency"

        theme={(theme) => ({
          ...theme,
          borderRadius: 7,
          colors: {
            ...theme.colors,
            primary25: 'lightgreen',
            primary: 'grey',
          },
        })}
        required /> <br />

      <label className='font-bold' htmlFor='produce3'>
        Distribution channels  </label><br></br>
      <Select className='hover:border-[#424b50] bg-[#dcd6ec99]'
        name='produce3'
        options={options3}
        value={selectedOptions3}
        onChange={handleSelectChange3}
        isMulti={false}
        placeholder="Select how you want to distribute your produce"

        theme={(theme) => ({
          ...theme,
          borderRadius: 7,
          colors: {
            ...theme.colors,
            primary25: 'lightgreen',
            primary: 'grey',
          },
        })}
        required /> <br />

      <label className='font-bold' htmlFor='produce4'>
        Additional Offerings  </label><br></br>
      <Select className='hover:border-[#424b50] bg-[#dcd6ec99]'
        name='produce4'
        options={options4}
        value={selectedOptions4}
        onChange={handleSelectChange4}
        isMulti={true}
        placeholder="Select additional offerings"

        theme={(theme) => ({
          ...theme,
          borderRadius: 7,
          colors: {
            ...theme.colors,
            primary25: 'lightgreen',
            primary: 'grey',
          },
        })}
        required /> <br />




    </>
  );
};

export default Trying;
