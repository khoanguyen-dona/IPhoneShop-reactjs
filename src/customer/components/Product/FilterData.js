export  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
export const subCategories = [
    { name: 'Iphone', href: '#' },
    { name: 'Ipad', href: '#' },
    { name: 'Macbook', href: '#' },
    { name: 'Cáp sạc', href: '#' },
    { name: 'Tai nghe', href: '#' },
  ]
export  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'red', label: 'Red', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'yellow', label: 'Yellow', checked: false },
        { value: 'orange', label: 'Orange', checked: false },

      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '32GB', label: '32GB', checked: false },
        { value: '64GB', label: '64GB', checked: false },
        { value: '128GB', label: '128GB', checked: false },
        { value: '256GB', label: '256GB', checked: false },
        { value: '512GB', label: '512GB', checked: false },
        { value: '1TB', label: '1TB', checked: false },
      ],
    },
    {
        id: 'price',
        name: 'price',
        options: [
            {value: '5000000-9999000',label: '5000000 đ to 9999000 đ' , checked: false},
            {value: '10000000-15000000',label: '10000000 đ to 15000000 đ', checked: false},
            {value: '15000000-20000000',label: '15000000 đ to 20000000 đ', checked: false},
            {value: '20000000-40000000',label: 'above 20000000 đ', checked: false },

        ]
    }
  ]

