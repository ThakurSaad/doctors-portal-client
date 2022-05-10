# Doctors Portal

Teleport and Book an appointment

## Doctors Portal Client

### Technologies Used

- React
- React Router Dom (V6)
- Tailwind
- Tailwind component library - DaisyUI

### New things I learned during this project

##### How to Pass className to react components as props

In React, when you want to pass an interpreted expression, you have to open a pair of curly braces
`<button className={'pill ${ this.props.styleName }'}>` (`` instead of '')

##### How to set a background image with vanilla css?

`style={{ background: 'url(${appointment})' }}` (`` instead of '')

##### How to pop image out of section?

use negative margin on the image
`mt-[-150px]`(tailwind class)

##### Some Tailwind classes

- `mt-[-150px]` perfect alignment
- `lg:max-w-lg` same as `@media (min-width: 1024px) { .lg\:max-w-lg { max-width: 32rem/* 512px */; } }`
- `bg-gradient-to-r from-secondary to-primary` gradient color
- `gap-px` for 1px gap between grid elements
