import dynamic from 'next/dynamic';

const NotesClient = dynamic(() => import('./Notes.client'));

export default function NotesPage() {
  return <NotesClient />;
}
