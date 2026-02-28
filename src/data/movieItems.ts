export type MovieItem = {
    id: string
    orientation: 'horizontal' | 'vertical'
    top: number   // percentage from top of container
    left: number  // px offset from left
    themeColor?: string
}

export const MOVIE_ITEMS: MovieItem[] = [
    // Row-like cluster 1
    { id: '01', orientation: 'horizontal', top: 52, left: 100 },
    { id: '02', orientation: 'horizontal', top: 8, left: 260 },
    { id: '03', orientation: 'horizontal', top: 48, left: 620 },
    // Overlap: 04 overlaps with 02/03
    { id: '04', orientation: 'vertical', top: 2, left: 900 },
    { id: '05', orientation: 'horizontal', top: 30, left: 1080 },
    // Overlap: 06 overlaps with 05
    { id: '06', orientation: 'vertical', top: 5, left: 1550 },
    { id: '07', orientation: 'horizontal', top: 50, left: 1700 },
    // Cluster 2
    { id: '08', orientation: 'horizontal', top: 25, left: 2080 },
    { id: '09', orientation: 'vertical', top: 42, left: 2380 },
    // Overlap: 10 overlaps with 09
    { id: '10', orientation: 'horizontal', top: 8, left: 2560 },
    { id: '11', orientation: 'horizontal', top: 50, left: 2920 },
    { id: '12', orientation: 'vertical', top: 4, left: 3260 },
    // Cluster 3
    { id: '13', orientation: 'horizontal', top: 35, left: 3425 },
    { id: '14', orientation: 'horizontal', top: 5, left: 3820 },
    // Overlap: 15 overlaps with 14
    { id: '15', orientation: 'vertical', top: 38, left: 4080 },
    { id: '16', orientation: 'horizontal', top: 8, left: 4320 },
    { id: '17', orientation: 'horizontal', top: 52, left: 4700 },
    { id: '18', orientation: 'vertical', top: 2, left: 5050 },
    // Overlap: 19 overlaps with 18
    { id: '19', orientation: 'horizontal', top: 43, left: 5220 },
    { id: '20', orientation: 'horizontal', top: 20, left: 5620 },
]