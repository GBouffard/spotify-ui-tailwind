import React from 'react'

const Expand = ({ fill = 'lightgrey', size = 6 }) => <svg className={`h-${size} w-${size}`} fill={fill} clip-rule='evenodd' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-1.5 13.5h-17v-13h17zm-6.065-9.978-5.917 5.921v-1.243c0-.414-.336-.75-.75-.75-.415 0-.75.336-.75.75v3.05c0 .414.335.75.75.75h3.033c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.219l5.918-5.922v1.244c0 .414.336.75.75.75s.75-.336.75-.75c0-.715 0-2.335 0-3.05 0-.414-.336-.75-.75-.75-.715 0-2.318 0-3.033 0-.414 0-.75.336-.75.75s.336.75.75.75z' fill-rule='nonzero' /></svg>

export default Expand
