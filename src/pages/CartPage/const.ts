const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

export const deliveryAt = nextWeek.toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
});
