import type { MovieItem } from '@/data/movieItems'

type MovieTileProps = {
    item: MovieItem
}

export default function MovieTile({ item }: MovieTileProps) {
    const isHorizontal = item.orientation === 'horizontal'

    return (
        <button
            type="button"
            aria-label={`View item ${item.id}`}
            style={{ top: `${item.top}%`, left: `${item.left}px` }}
            className={[
                'absolute cursor-pointer overflow-hidden rounded-[24px] bg-white/[0.03] border border-white/5',
                'transition-all duration-500 ease-out backdrop-blur-sm',
                'lg:hover:scale-[1.05] lg:hover:border-white/20 lg:hover:bg-white/[0.05]',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                isHorizontal
                    ? 'h-[220px] w-[340px] lg:h-[280px] lg:w-[420px]'
                    : 'h-[340px] w-[220px] lg:h-[420px] lg:w-[280px]',
            ].join(' ')}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50" />
            <span className="absolute bottom-4 left-5 text-3xl font-light tracking-wider text-white/20 select-none lg:bottom-6 lg:left-7 lg:text-5xl transition-colors">
                {item.id}
            </span>
        </button>
    )
}
