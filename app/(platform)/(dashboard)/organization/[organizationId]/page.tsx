import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();
    return (
        <div className='flex flex-col space-y-4'>
            <form action={create}>
                <input
                    id='title'
                    placeholder='Enter a board title'
                    name='title'
                    required
                    className='border-black border p-1'
                />
            </form>
            <Button type='submit'>Submit</Button>
            <div className='space-y-2'>
                {boards.map((board) => {
                    return (
                        <div key={board.id}> Board title: {board.title} </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrganizationIdPage;
