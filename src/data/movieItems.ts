export type MovieItem = {
    id: string
    orientation: 'horizontal' | 'vertical'
    top: number   // percentage from top of container
    left: number  // px offset from left
    imageUrl?: string
    themeColor?: string
}

export const MOVIE_ITEMS: MovieItem[] = [
    { id: '01', orientation: 'horizontal', top: 52, left: 100, imageUrl: '/assets/glimpses/1.JPG' },
    { id: '02', orientation: 'horizontal', top: 8, left: 260, imageUrl: '/assets/glimpses/2.webp' },
    { id: '03', orientation: 'horizontal', top: 48, left: 620, imageUrl: '/assets/glimpses/3.JPG' },
    { id: '04', orientation: 'vertical', top: 2, left: 900, imageUrl: '/assets/glimpses/4.webp' },
    { id: '05', orientation: 'horizontal', top: 30, left: 1080, imageUrl: '/assets/glimpses/5.JPG' },
    { id: '06', orientation: 'vertical', top: 5, left: 1550, imageUrl: '/assets/glimpses/6.webp' },
    { id: '07', orientation: 'horizontal', top: 50, left: 1700, imageUrl: '/assets/glimpses/7.JPG' },
    { id: '08', orientation: 'horizontal', top: 25, left: 2080, imageUrl: '/assets/glimpses/8.png' },
    { id: '09', orientation: 'vertical', top: 42, left: 2380, imageUrl: '/assets/glimpses/9.png' },
    { id: '10', orientation: 'horizontal', top: 8, left: 2560, imageUrl: '/assets/glimpses/10.png' },
    { id: '11', orientation: 'horizontal', top: 50, left: 2920, imageUrl: '/assets/glimpses/11.png' },
    { id: '12', orientation: 'vertical', top: 4, left: 3260, imageUrl: '/assets/glimpses/12.png' },
    { id: '13', orientation: 'horizontal', top: 35, left: 3425, imageUrl: '/assets/glimpses/13.png' },
    { id: '14', orientation: 'horizontal', top: 5, left: 3820, imageUrl: '/assets/glimpses/14.png' },
    { id: '15', orientation: 'vertical', top: 38, left: 4080, imageUrl: '/assets/glimpses/15.png' },
    { id: '16', orientation: 'horizontal', top: 8, left: 4320, imageUrl: '/assets/glimpses/16.png' },
    { id: '17', orientation: 'horizontal', top: 52, left: 4700, imageUrl: '/assets/glimpses/17.png' },
    { id: '18', orientation: 'vertical', top: 2, left: 5050, imageUrl: '/assets/glimpses/18.png' },
    { id: '19', orientation: 'horizontal', top: 43, left: 5220, imageUrl: '/assets/glimpses/19.png' },
    { id: '20', orientation: 'horizontal', top: 20, left: 5620, imageUrl: '/assets/glimpses/20.png' },
    { id: '21', orientation: 'vertical', top: 50, left: 6000, imageUrl: '/assets/glimpses/21.png' },
    { id: '22', orientation: 'horizontal', top: 10, left: 6300, imageUrl: '/assets/glimpses/22.png' },
    { id: '23', orientation: 'vertical', top: 40, left: 6600, imageUrl: '/assets/glimpses/23.png' },
    { id: '24', orientation: 'horizontal', top: 5, left: 6900, imageUrl: '/assets/glimpses/24.png' },
    { id: '25', orientation: 'vertical', top: 55, left: 7200, imageUrl: '/assets/glimpses/25.png' },
    { id: '26', orientation: 'horizontal', top: 15, left: 7500, imageUrl: '/assets/glimpses/26.png' },
    { id: '27', orientation: 'vertical', top: 45, left: 7800, imageUrl: '/assets/glimpses/27.png' },
    { id: '28', orientation: 'horizontal', top: 2, left: 8100, imageUrl: '/assets/glimpses/28.png' },
    { id: '29', orientation: 'vertical', top: 50, left: 8400, imageUrl: '/assets/glimpses/29.png' },
    { id: '30', orientation: 'horizontal', top: 12, left: 8700, imageUrl: '/assets/glimpses/30.png' },
    { id: '31', orientation: 'vertical', top: 42, left: 9000, imageUrl: '/assets/glimpses/31.png' },
    { id: '32', orientation: 'horizontal', top: 8, left: 9300, imageUrl: '/assets/glimpses/32.png' },
    { id: '33', orientation: 'vertical', top: 48, left: 9600, imageUrl: '/assets/glimpses/33.png' },
]