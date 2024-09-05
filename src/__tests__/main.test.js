import { Shop } from '../components/shop';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const ITEM_LIST = [
  {
    id: '4',
    name: 'MacBook Air (M2, 2022)',
    description:
      "Features Apple's M2 chip for improved performance, a larger 13.6-inch Retina display, and a redesigned, slimmer profile.",
    price: 1100,
    src: 'https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg',
  },
  {
    id: '1',
    name: 'iPhone 15',
    description:
      "Experience cutting-edge performance and a sleek design with this smartphone's vibrant display, powerful processor, and advanced camera features.",
    price: 1000,
    src: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_large_2x.jpg',
  },
  {
    id: '5',
    name: 'MacBook Air (M1, 2020)',
    description:
      'Introduced the M1 chip, offering significant speed and battery life improvements in a compact, lightweight design.',
    price: 1500,
    src: 'https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg',
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description:
      'Discover top performance and sleek design with this laptop’s high-resolution display, powerful processor, and ample storage for productivity.',
    price: 1200,
    src: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg',
  },
  {
    id: '6',
    name: 'MacBook Pro 16-inch (2023)',
    description:
      'Equipped with the powerful M2 Pro or M2 Max chip, it delivers high performance for professional tasks and a stunning Liquid Retina XDR display.',
    price: 1599,
    src: 'https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg',
  },
  {
    id: '3',
    name: 'iPhone 15 Pro Max',
    description:
      'Enjoy stunning visuals and sharp details with this monitor’s high-resolution display, vibrant colors, and sleek, modern design.',
    price: 1400,
    src: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large_2x.jpg',
  },
  {
    id: '7',
    name: 'MacBook Pro 14-inch (2023)',
    description:
      'Combines the M2 Pro or M2 Max chip with a 14.2-inch Liquid Retina XDR display, balancing power and portability for creative professionals.',
    price: 1449,
    src: 'https://www.apple.com/v/macbook-air/s/images/overview/display-camera-audio/display_sound__ezhd4vzi748y_large_2x.jpg',
  },
];

test('1.', async () => {
  render(<Shop itemList={ITEM_LIST} />);

  // Should render Shopping Cart!
  screen.getByText('Shopping Cart!');

  // Should render empty cart initially
  const nonExistingElement = screen.queryByTestId('cart-item-1');
  expect(nonExistingElement).not.toBeInTheDocument();

  const itemToSelect = screen.getByTestId('item-1');

  fireEvent.click(itemToSelect);

  screen.getByTestId('cart-item-1');
});


test('2.', async () => {
  render(<Shop itemList={ITEM_LIST} />);

  const itemToSelect = screen.getByTestId('item-1');

  fireEvent.click(itemToSelect);

  screen.getByTestId('cart-item-1');

  const removeButton = screen.getByTestId('remove-item-1');

  fireEvent.click(removeButton);

  const nonExistingElement = screen.queryByTestId('remove-item-1');
  expect(nonExistingElement).not.toBeInTheDocument();
});

test('3.', async () => {
  render(<Shop itemList={ITEM_LIST} />);

  const itemToSelect1 = screen.getByTestId('item-1');
  const itemToSelect2 = screen.getByTestId('item-2');

  fireEvent.click(itemToSelect1);
  fireEvent.click(itemToSelect2);

  screen.getByTestId('cart-item-1');
  screen.getByTestId('cart-item-2');

  fireEvent.click(itemToSelect2);

  screen.getByTestId('cart-item-1');

  const nonExistingElement = screen.queryByTestId('cart-item-2');
  expect(nonExistingElement).not.toBeInTheDocument();
});
