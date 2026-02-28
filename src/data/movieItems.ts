export type MovieItem = {
    id: string
    orientation: 'horizontal' | 'vertical'
    top: number   // percentage from top of container
    left: number  // px offset from left
    imageUrl?: string
    themeColor?: string
}

export const MOVIE_ITEMS: MovieItem[] = [
    { id: '01', orientation: 'horizontal', top: 52, left: 100 },
    { id: '02', orientation: 'horizontal', top: 8, left: 260 },
    { id: '03', orientation: 'horizontal', top: 48, left: 620 },
    { id: '04', orientation: 'vertical', top: 2, left: 900 },
    { id: '05', orientation: 'horizontal', top: 30, left: 1080 },
    { id: '06', orientation: 'vertical', top: 5, left: 1550 },
    { id: '07', orientation: 'horizontal', top: 50, left: 1700 },
    { id: '08', orientation: 'horizontal', top: 25, left: 2080 },
    { id: '09', orientation: 'vertical', top: 42, left: 2380 },
    { id: '10', orientation: 'horizontal', top: 8, left: 2560 },
    { id: '11', orientation: 'horizontal', top: 50, left: 2920 },
    { id: '12', orientation: 'vertical', top: 4, left: 3260 },
    { id: '13', orientation: 'horizontal', top: 35, left: 3425 },
    { id: '14', orientation: 'horizontal', top: 5, left: 3820 },
    { id: '15', orientation: 'vertical', top: 38, left: 4080 },
    { id: '16', orientation: 'horizontal', top: 8, left: 4320 },
    { id: '17', orientation: 'horizontal', top: 52, left: 4700 },
    { id: '18', orientation: 'vertical', top: 2, left: 5050 },
    { id: '19', orientation: 'horizontal', top: 43, left: 5220 },
    { id: '20', orientation: 'horizontal', top: 20, left: 5620 },
    { id: '21', orientation: 'vertical', top: 50, left: 6000 },
    { id: '22', orientation: 'horizontal', top: 10, left: 6300 },
    { id: '23', orientation: 'vertical', top: 40, left: 6600 },
    { id: '24', orientation: 'horizontal', top: 5, left: 6900 },
    { id: '25', orientation: 'vertical', top: 55, left: 7200 },
    { id: '26', orientation: 'horizontal', top: 15, left: 7500 },
    { id: '27', orientation: 'vertical', top: 45, left: 7800 },
    { id: '28', orientation: 'horizontal', top: 2, left: 8100 },
    { id: '29', orientation: 'vertical', top: 50, left: 8400 },
    { id: '30', orientation: 'horizontal', top: 12, left: 8700 },
    { id: '31', orientation: 'vertical', top: 42, left: 9000 },
    { id: '32', orientation: 'horizontal', top: 8, left: 9300 },
    { id: '33', orientation: 'vertical', top: 48, left: 9600 },
]