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
                'absolute cursor-pointer overflow-hidden rounded-[24px] bg-neutral-900 group',
                'transition-all duration-500 ease-out border border-white/10',
                'lg:hover:scale-[1.05] lg:hover:border-white/30 lg:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                isHorizontal
                    ? 'h-[220px] w-[340px] lg:h-[280px] lg:w-[420px]'
                    : 'h-[340px] w-[220px] lg:h-[420px] lg:w-[280px]',
            ].join(' ')}
        >
            {item.imageUrl && (
                <img
                    src={item.imageUrl}
                    alt={`Glimpse ${item.id}`}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <span className="absolute bottom-4 left-5 text-3xl font-light tracking-wider text-white/40 select-none lg:bottom-6 lg:left-7 lg:text-5xl group-hover:text-white/80 transition-colors">
                {item.id}
            </span>
        </button>
    )
}
