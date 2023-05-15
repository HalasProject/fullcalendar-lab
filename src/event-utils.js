let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  // Ici, vous devez récupérer vos événements (chantiers) depuis votre base de données
  // et les formater dans un tableau d'objets avec les propriétés nécessaires (titre, date de début, date de fin, etc.)
  // Exemple :
  {
    id: createEventId(),
    title: 'Chantier 1',
    start: '2023-05-15T00:01:00',
    end: '2023-05-15T23:59:00',
  },
  {
    id: createEventId(),
    title: 'Chantier 2',
    start: '2023-05-15T00:01:00',
    end: '2023-05-15T23:59:00',
  },
  { title: 'Chantier 3', start: '2023-05-16', end: '2023-05-16' },
];

export function createEventId() {
  return String(eventGuid++);
}
