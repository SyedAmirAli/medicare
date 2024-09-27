import Link from 'next/link';
import React from 'react';

export default function CategoryBanner() {
    const contents = [
        // {
        //     id: 1,
        //     icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 0c17.7 0 32 14.3 32 32l0 208-64 0 0-208c0-17.7 14.3-32 32-32zm96 160c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM93.3 51.2L175.9 240l-69.9 0L34.7 76.8C27.6 60.6 35 41.8 51.2 34.7s35.1 .3 42.1 16.5zm27 221.3l-.2-.5 69.9 0 26.1 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9l-11.6-11.6C77.5 429.5 64 396.9 64 363l0-27c0-32.7 24.6-59.7 56.3-63.5z"/></svg>',
        //     url: '#',
        //     title: 'Mommy Makeover',
        // },
        {
            id: 2,
            url: '#',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M404.9 331c2.2-1.1 4.4-2.3 6.5-3.7l8.3-4.8c1.5-1.1 4.4-3.4 8.7-6.7l.5-.5c3.4-3.4 7.2-5 11.3-4.9c1.8 0 3.9 .5 6.4 1.5l31-27.5c.9-.7 1.7-1.3 2.6-1.8h.2c3.3-1.9 6-1.8 8.2 .4c3.9 2.1 4.2 5.6 .9 10.6L456.9 322c.2 .5 .4 1 .4 1.5c.5 2.2 .3 4.4-.5 6.6c-.7 1.5-1.8 2.9-3.1 4.2c-1.4 1.4-2.7 2.8-4.2 4.2l-18.8 13.7c-1.7 1.2-3.4 2.3-5.1 3.3c-2.1 1.3-4.3 2.5-6.6 3.6c-1 .4-1.9 .9-2.9 1.3c-5.9 2.5-11.9 4.2-18.2 5c-2.9 24.5-11.3 47.1-25.1 67.8c-17.5 25.7-41.4 45.4-71.8 58.8c-30.2 13.5-63 20.2-98.2 20.2c-48.6-.5-88-11.4-118.2-32.8C49.5 454.4 32 421.5 32 380.3v-5.6c1.2-28.1 9.5-54.6 24.8-79.8c15.1-24.9 37.1-41.7 66.1-50.5c14.9-4.4 29.9-6.6 45-6.6c15.5 0 31.6 2.9 48.1 8.6s35.2 15.5 55.9 29.5L326 312.2c15.1 9.8 28.8 16.5 41.2 20c-2.6-25.1-11.7-46.6-27.3-64.5c-15.7-18.1-35.6-31.3-59.9-39.7l-23.3-8c-21.4-7.5-37.3-14.9-47.7-22.2c-28.2-19.1-43.8-45.2-47-78.5l-.5-9.8c0-32.1 13-58.9 39-80.5C223.5 9.7 251.1 0 283 0c24 0 45.6 6.9 64.7 20.8c19.2 14 30.1 33.8 32.6 59.4l.5 10c0 18.6-4.8 34.5-14.4 47.7c-9.8 13.2-18.5 19.9-26 19.9c-1.6-.1-3.1-.3-4.5-.6l-34 32c-5.5 3-9.2 2.5-11.1-1.6c-1.9-2.2-1.8-4.9 .5-8.2l.2-.2c.5-.7 1.2-1.5 2-2.4l31.6-30c-.4-1.5-.6-3.1-.6-4.8c0-4.1 1.6-7.6 4.9-10.4c13.8-12.4 20.8-26.7 20.8-42.8c0-16-6.1-29.5-18.2-40.4s-28.7-16.5-49.7-16.8c-26.2 0-47.8 7.9-64.7 23.7S192.3 89.9 192.3 112c0 17.8 6.9 33.9 20.6 48.3c13.6 14.2 34.6 25.4 63 33.5c39.8 11.5 70.2 31 91.3 58.3c18.7 24.2 29.1 51.3 31.3 81.4c2.2-.7 4.3-1.5 6.5-2.6zM294.1 178.7c0 1.1 .6 1.6 1.8 1.6c.1 0 9.7-8.9 28.8-26.6c0-2.4-5.1 .9-15.3 10c-10.2 9.2-15.3 14.2-15.3 14.9zm8 6.4c0-1-.5-1.5-1.5-1.5c-1.1 0-2.1 .5-2.9 1.6c-1.9-.1-3.3 .1-4.2 .7c-.4 .2-.5 .5-.5 .7c0 .7 .5 1.3 1.5 1.6h3.3c2.9-1.1 4.4-2.2 4.4-3.3zm22.6-19.9c0-2.8-1.6-2.8-4.9 0c-1.6 1.5-3.6 3.5-6 6.2c-.8 .6-2.6 2.2-5.3 4.9c-2.8 2.9-4.2 4.7-4.2 5.3l.2 1.3c.7 .2 1.2 .4 1.5 .4c.1 0 3.3-2.9 9.5-8.7s9.3-8.9 9.3-9.3zm159.7 120l-30.6 27c1.8 1 3.2 2.4 4 4.2l30.2-27c.2-1.2 .1-2.2-.5-2.9c-.6-.5-1.6-.9-3.1-1.3zm-1.6-.9l-.7-.7-27 21.9 1.6 2 26-23.1zM366.6 363.9c-8-2.1-15.4-4.6-22.2-7.5c-15.3-6.2-34.3-17-57-32.4L250 298.7c-15.8-10.1-30.2-17.6-43.2-22.6c-13.1-4.9-26-7.3-38.6-7.3h-5.5c-32.2 1.7-57.2 13.8-75 36.2c-16.6 20.8-25 45.3-25 73.6c0 31.8 12.8 56.7 38.2 74.7c25.4 18.1 60.2 27.1 104.4 27.1c34.7 0 64-6.2 87.8-18.6c23.7-12.4 42.1-28.8 55.2-49.2c9.8-15.5 15.9-31.8 18.2-48.8z"/></svg>',
            title: 'Face',
        },
        {
            id: 3,
            url: '#',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm47.9-225c4.3 3.7 5.4 9.9 2.6 14.9L452.4 356l35.6 0c5.2 0 9.8 3.3 11.4 8.2s-.1 10.3-4.2 13.4l-96 72c-4.5 3.4-10.8 3.2-15.1-.6s-5.4-9.9-2.6-14.9L411.6 380 376 380c-5.2 0-9.8-3.3-11.4-8.2s.1-10.3 4.2-13.4l96-72c4.5-3.4 10.8-3.2 15.1 .6z"/></svg>',
            title: 'Breast',
        },
        {
            id: 4,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M366 186.9l-59.5 36.9-.8 36.9-29.3-19.3-39.4 24.3c2.2 55.2 2.5 59.3 2.5 59.5l-97.2 65.4L127.2 285.7l108.1-62L195.1 197.8l-75.4 38.5L98.7 93 227.8 43.6 136.4 0 10.7 39.4 38.4 174.3l41.9 32.7L48.4 222.1 69.4 323.5 98.7 351.1 77.8 363.7l16.8 78.8L160.7 512c-10.8-74.8-11.7-78.6-11.7-78.8l77.9-55.3c16.8-12.6 15.1-10.9 15.1-10.9l.8 24.3 33.5 28.5-.8-77.1 46.9-33.5 26.8-18.4-2.5 36 25.1 17.6 6.7-74.6 58.7-43.6z"/></svg>',
            url: '#',
            title: 'Liposuction',
        },
        {
            id: 5,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z"/></svg>',
            url: '#',
            title: 'Orthopedics',
        },
        {
            id: 6,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80L160 128c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L104 240c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72l-13.7 0c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3l167.4 0c6.8 0 12.3 5.5 12.3 12.3z"/></svg>',
            url: '#',
            title: 'Nose',
        },
        // {
        //     id: 7,
        //     icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z"/></svg>',
        //     url: '#',
        //     title: 'Weight Loss Surgery',
        // },
        {
            id: 8,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>',
            url: '#',
            title: 'Eyes',
        },
        {
            id: 9,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M49.7 32l90.8 0L114.9 160l-94 0C9.3 160 0 150.7 0 139.1c0-2.1 .3-4.1 .9-6.1L26.8 48.9C29.9 38.9 39.2 32 49.7 32zM272 160l-124.5 0L173.1 32 272 32l0 128zm32 0l0-128 98.9 0 14.4 72.1c-1.7 1.1-3.3 2.4-4.8 3.8c-18.4 16.4-35.4 34-50.5 52.1l-58 0zm209.9-23.7c-1.7 1.6-3.4 3.2-5 4.8C498 129.6 486.7 118.6 475 108c-7.6-6.9-17-10.8-26.6-11.8L435.5 32l90.8 0c10.5 0 19.8 6.9 22.9 16.9L575.1 133c.2 .7 .4 1.4 .5 2.1c-17.8-15-44.3-14.6-61.7 1.2zM325.2 210.7C304.3 244.5 288 282.9 288 318.1c0 49.3 18.6 95.2 49.6 129.9L128 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L44 288l-12 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l4 0-4-32 305.5 0c-4.4 6.2-8.5 12.5-12.3 18.7zm180.6-34.5L518 162.5c5.4-6.1 13.3-8.8 20.9-8.9c7.2 0 14.3 2.6 19.9 7.8c19.7 18.3 39.8 43.2 55 70.6C629 259.2 640 290.2 640 320.2C640 408.8 568.7 480 480 480c-89.6 0-160-71.3-160-159.8c0-37.3 16-73.4 36.8-104.5c20.9-31.3 47.5-59 70.9-80.2c5.7-5.2 13.1-7.7 20.3-7.5c14.1 .3 23.8 11.4 32.7 21.6c0 0 0 0 0 0c2 2.3 4 4.6 6 6.7l19 19.9zM544 368.2c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C453 295.1 416 331.6 416 368.2c0 35.3 28.7 64 64 64s64-28.7 64-64z"/></svg>',
            url: '#',
            title: 'IVF',
        },
        {
            id: 10,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z"/></svg>',
            url: '#',
            title: 'Butt',
        },
    ];
    return (
        <div className='container'>
            <div className='flex flex-wrap items-center justify-center gap-5 py-5'>
                {contents.map((content) => (
                    <CategoryBannerItem
                        key={content.id}
                        categoryBanner={content}
                    />
                ))}
            </div>
        </div>
    );
}

interface CategoryBannerItemType {
    id: Number;
    title: String;
    icon: String;
    url: String;
}

function CategoryBannerItem({
    categoryBanner,
}: {
    categoryBanner: CategoryBannerItemType;
}) {
    const { id, title, icon, url } = categoryBanner;
    return (
        <Link
            href={`${url}`}
            className='bg-white px-4 pt-8 pb-4 flex flex-col items-center justify-self-center w-40 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] rounded-3xl duration-500
            hover:scale-110 group'>
            <span
                className='size-12 block text-slate-500 fill-slate-500 duration-500 group-hover:text-primary group-hover:fill-primary'
                dangerouslySetInnerHTML={{ __html: icon }}></span>
            <span className='mt-4 text-center font-medium text-md leading-5 text-slate-600 group-hover:text-primary group-hover:fill-primary'>
                {title}
            </span>
        </Link>
    );
}
