import { useState, useContext } from 'react'

import { Progress } from '../contexts/ProgressContext'


function Note({note, onDelete, setNewNoteView, setNoteId, z}) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    const [hidden, setHidden] = useState('hidden')
    const toggleInfo = () => {
        hidden === 'hidden' ? setHidden('') : setHidden('hidden');
    }

    const { progress, setProgress } = useContext(Progress);

    return (
        <>
            <div className={`note-container text-white flex flex-col w-full min-h-36 border-4 border-stone-400 bg-stone-500 rounded-lg p-5 self-center z-${z} -mt-20 peer peer-hover:translate-y-20 transition-all ease-in-out duration-700`} onMouseLeave={() => setHidden('hidden')}>
                <p className={`note-title font-bold text-l mb-3 text-center`}>{note.title}</p>
                <p className={`note-date ${hidden} text-xs self-end mb-2`}>Added { formattedDate }</p>
                <p className={`category ${hidden} border-b border-stone-400`}>{note.category}</p>
                <p className={`mt-5 note-content text-center ${hidden}`}>{note.content}</p>
                <button 
                    className={`complete-note ${hidden} text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-xs mt-2 px-1 py-1 flex-1 text-center dark:bg-stone-600 dark:hover:bg-green-600 dark:focus:ring-stone-800 z-${z} transition-all ease-in duration-300 mx-1`} 
                    onClick={() => {
                        onDelete(note.id);
                        setProgress(progress+10);
                    }}
                    >Happy Delete! :)
                </button>
                <div className='flex flex-row items-center justify-between mt-5'>
                    <button className={`note-edit ${hidden} text-xs text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg mt-2 px-1 py-1 text-center dark:bg-stone-600 dark:hover:bg-blue-600 dark:focus:ring-stone-800 z-${z} transition-all ease-in duration-300 flex-1 mx-1`} 
                    onClick={() => {
                        setNoteId(note.id),
                        setNewNoteView('edit')
                    }}>Edit</button>
                    <button 
                    className={`delete-note ${hidden} text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-xs mt-2 px-1 py-1 flex-1 text-center dark:bg-stone-600 dark:hover:bg-red-600 dark:focus:ring-stone-800 z-${z} transition-all ease-in duration-300 mx-1`} 
                    onClick={() => {
                        onDelete(note.id)
                    }}>Delete
                    </button>
                </div>
                <a className={`extend self-center text-white hover:cursor-pointer py-0 px-1 mt-5 hover:text-stone-500 rounded-sm text-s hover:bg-white transition-all ease-in duration-300 cursor-pointer`} onClick={toggleInfo}>{
                    hidden == '' ? 'Hide' : 'Show'
                }</a>
            </div>
        </>
    );
}

export default Note