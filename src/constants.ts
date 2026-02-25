
export interface Task {
  id: string;
  text: string;
  category: 'daily' | 'creative';
  color: string;
}

export const TASKS: Task[] = [
  // Daily Life Tasks
  { id: '1', text: 'Drink a glass of water', category: 'daily', color: '#BAE6FD' }, // blue-200
  { id: '2', text: 'Make your bed', category: 'daily', color: '#BBF7D0' }, // green-200
  { id: '3', text: 'Fold some clothes', category: 'daily', color: '#FEF08A' }, // yellow-200
  { id: '4', text: 'Start a load of laundry', category: 'daily', color: '#FBCFE8' }, // pink-200
  { id: '5', text: 'Tidy up one corner of your room', category: 'daily', color: '#E9D5FF' }, // purple-200
  { id: '6', text: 'Cook a simple meal', category: 'daily', color: '#FFD7B5' }, // orange-200
  { id: '7', text: 'Wash the dishes', category: 'daily', color: '#BAE6FD' },
  { id: '8', text: 'Take a refreshing shower', category: 'daily', color: '#BBF7D0' },
  { id: '9', text: 'Organize your desk', category: 'daily', color: '#FEF08A' },
  { id: '10', text: 'Take out the trash', category: 'daily', color: '#FBCFE8' },

  // Creative / Calm Tasks
  { id: '11', text: 'Read a few pages of a book', category: 'creative', color: '#E9D5FF' },
  { id: '12', text: 'Watch a fun YouTube video', category: 'creative', color: '#FFD7B5' },
  { id: '13', text: 'Watch a movie you love', category: 'creative', color: '#BAE6FD' },
  { id: '14', text: 'Go for a 10-minute walk', category: 'creative', color: '#BBF7D0' },
  { id: '15', text: 'Write in your journal', category: 'creative', color: '#FEF08A' },
  { id: '16', text: 'Draw a little something', category: 'creative', color: '#FBCFE8' },
  { id: '17', text: 'Listen to your favorite album', category: 'creative', color: '#E9D5FF' },
  { id: '18', text: 'Do some light stretching', category: 'creative', color: '#FFD7B5' },
  { id: '19', text: 'Meditate for 5 minutes', category: 'creative', color: '#BAE6FD' },
  { id: '20', text: 'Call or text a friend', category: 'creative', color: '#BBF7D0' },
  { id: '21', text: 'Take three nice photos', category: 'creative', color: '#FEF08A' },
  { id: '22', text: 'Learn one new fact', category: 'creative', color: '#FBCFE8' },
];

export const WHEEL_COLORS = [
  '#BAE6FD', '#BBF7D0', '#FEF08A', '#FBCFE8', '#E9D5FF', '#FFD7B5'
];
