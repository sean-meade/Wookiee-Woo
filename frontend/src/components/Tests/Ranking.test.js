// src/Ranking.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Ranking from './Ranking';

jest.mock('axios');

const RATED_ICON_URL = 'https://res.cloudinary.com/dgvipn16a/image/upload/v1716694023/Heart_Rated_kzxmp5.png';

test('renders the Ranking component with 5 icons', () => {
  render(<Ranking itemId={1} />);

  const icons = screen.getAllByAltText('rating');
  expect(icons).toHaveLength(5);
});

test('changes icon on hover', () => {
  render(<Ranking itemId={1} />);

  const icons = screen.getAllByAltText('rating');
  fireEvent.mouseEnter(icons[0]);

  expect(icons[0]).toHaveAttribute('src', RATED_ICON_URL);
});

test('changes icon on click', async () => {
  axios.post.mockResolvedValue({ data: {} });

  render(<Ranking itemId={1} />);

  const icons = screen.getAllByAltText('rating');
  fireEvent.click(icons[0]);

  expect(icons[0]).toHaveAttribute('src', RATED_ICON_URL);
  expect(axios.post).toHaveBeenCalledWith('/api/rate', {
    item_id: 1,
    rating: 1
  });
});
