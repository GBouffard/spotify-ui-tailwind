import React from 'react'

const Carousel = ({ fill = 'black' }) => <svg className='h-6 w-6' fill={fill} clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m22 4.75c0-.206-.163-.75-.75-.75-.159 0-.305.071-.45.15-1.772.966-3.4 1.85-3.4 1.85v11.996s1.913 1.054 3.399 1.854c.146.079.292.15.451.15.583 0 .75-.533.75-.75zm-20 0c0-.206.163-.75.75-.75.159 0 .305.071.45.15 1.772.966 3.4 1.85 3.4 1.85v11.996s-1.913 1.054-3.399 1.854c-.146.079-.292.15-.451.15-.583 0-.75-.533-.75-.75zm14 2.25c0-.552-.448-1-1-1h-6c-.552 0-1 .448-1 1v10c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm4.5-.979v11.961c-.588-.319-1.163-.634-1.6-.874v-10.216zm-17 0v11.961c.588-.319 1.163-.634 1.6-.874v-10.216zm6 1.479h5v9h-5z' fill-rule='nonzero' /></svg>

export default Carousel
