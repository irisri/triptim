export interface TagDataProps {
  text?: string;
  iconName?: string;
}

export enum Flight {
  Departure = 'departure',
  Landing = 'landing',
}

export const tagData = [
  {
    text: 'Lives in Israel',
    // iconName: '🇮🇱',
  },
  {
    text: 'From Germany',
    // iconName: '🇩🇪',
  },
  {
    text: 'Developer at Google',
    iconName: '💼',
  },
  {
    text: 'English, German, Hebrew',
    iconName: '💬',
  },
];

export const travalTagData = [
  {
    text: 'I feel romantic',
    iconName: '💕',
  },
  {
    text: 'Go for drinks',
    iconName: '🥂',
  },
  {
    text: 'Sports',
    iconName: '🚴‍♀️',
  },
  {
    text: 'Go to museums',
    iconName: '🖼️',
  },
  {
    text: 'Go for drinks',
    iconName: '🥂',
  },
  {
    text: 'Go to museums',
    iconName: '🖼️',
  },
];

export interface FlightInformation {
  date: string;
  icon: Flight;
}

export const flightInformation = [
  {
    date: '2024-01-10',
    icon: Flight.Departure,
  },
  {
    date: '2024-01-15',
    icon: Flight.Landing,
  },
];

export const eventTagData = ['Burning Man', 'Broadway', 'Loolapalooza'];
