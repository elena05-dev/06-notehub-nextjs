import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const initialData = await fetchNotes({
    page: 1,
    perPage: 12,
    search: '',
  });

  return <NotesClient initialData={initialData} />;
}
