import { CustomProgressBar } from "./CustomProgressBar";

export const MenuStats = ({ stats }) => {
    return (
        <>
        <p className="text-center text-xl text-white"><span className="bg-primary p-2 rounded-xl">{stats.days_watched ? 'Anime Stats' : 'Manga Stats'}</span></p>
        <div className="flex flex-col space-y-3">
            <CustomProgressBar color='gray' percent={stats.days_watched || stats.days_read} text='Spend days'/>
            <CustomProgressBar color='green' percent={stats.watching || stats.reading} text='Current'/>
            <CustomProgressBar color='blue' colorAcent="700" percent={stats.completed} text='Completed'/>
            <CustomProgressBar color='yellow' percent={stats.on_hold} text='On hold'/>
            <CustomProgressBar color='red' percent={stats.dropped} text='Dropped'/>
            <CustomProgressBar color='blue' percent={stats.mean_score} text='Average'/>
        </div>
        </>
    )
}

