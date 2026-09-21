const KEY = 'golobe_cards';

export const getCards = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
};

export const addCard = (card) => {
  const cards = getCards();
  const newCard = { ...card, id: Date.now() };
  cards.push(newCard);
  localStorage.setItem(KEY, JSON.stringify(cards));
  window.dispatchEvent(new Event('cards-updated'));
  return newCard;
};

export const removeCard = (id) => {
  const cards = getCards().filter(c => c.id !== id);
  localStorage.setItem(KEY, JSON.stringify(cards));
  window.dispatchEvent(new Event('cards-updated'));
};

export const useCards = (setter) => {
  const refresh = () => setter(getCards());
  if (typeof window !== 'undefined') {
    window.addEventListener('cards-updated', refresh);
  }
  return getCards();
};
