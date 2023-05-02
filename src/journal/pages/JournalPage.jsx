import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useSelector } from 'react-redux';

export const JournalPage = () => {

  const { active } = useSelector((state) => state.journal);
  return (
    <JournalLayout>
      
      {/* <Typography>Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate duis laboris. Esse esse consectetur ullamco excepteur ullamco amet. Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco ipsum do adipisicing irure.</Typography> */}

      { 
      active ? 
        <NoteView />
        :
        <NothingSelectedView />
      }

    </JournalLayout>
  )
}
