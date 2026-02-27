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
            // rounded-full or rounded-[48px]
            className={[
                'absolute cursor-pointer overflow-hidden rounded-full bg-gray-300',
                'transition-all duration-300 ease-out',
                'lg:hover:scale-[1.03] lg:hover:opacity-90',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500',
                isHorizontal
                    ? 'h-[220px] w-[340px] lg:h-[280px] lg:w-[420px]'
                    : 'h-[340px] w-[220px] lg:h-[420px] lg:w-[280px]',
            ].join(' ')}
        >
            <span className="absolute bottom-4 left-5 text-3xl font-light tracking-wider text-white/60 select-none lg:bottom-6 lg:left-7 lg:text-5xl">
                {item.id}
            </span>
        </button>
    )
}
