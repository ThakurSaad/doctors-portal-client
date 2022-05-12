# Doctors Portal

[Teleport and Book an appointment](https://doctors-portal-31ca7.web.app/)

## Doctors Portal Client

### Technologies Used

- React
- React Router Dom (V6)
- Tailwind
- Tailwind component library - DaisyUI
- Firebase
- [React Day Picker](https://react-day-picker.js.org/start)
- firebase
- React firebase hooks
- React hook form

## New things I learned during this project

- ##### How to Pass className to react components as props

In React, when you want to pass an interpreted expression, you have to open a pair of curly braces
`<button className={'pill ${ this.props.styleName }'}>` (`` instead of '')

- ##### How to set a background image with vanilla css?

`style={{ background: 'url(${appointment})' }}` (``instead of '')`backgroundSize: "contain"` can be added if the background image is not displaying properly

- ##### How to pop image out of section?

use negative margin on the image
`mt-[-150px]`(tailwind class)

- ##### Some Tailwind classes

`mt-[-150px]` perfect alignment

`lg:max-w-lg` same as `@media (min-width: 1024px) { .lg\:max-w-lg { max-width: 32rem/* 512px */; } }`

`bg-gradient-to-r from-secondary to-primary` gradient color

`gap-px` for 1px gap between grid elements

- ##### Using react day picker for calendar

- ##### Date Function

- ##### [date-fns](https://date-fns.org/)

- ##### How to close sidebar on figma

ctrl + \
ctrl + shift + \

- ##### Interesting rendering

```
{slots.length ? (
// after booking slot will decrease so the as long as there is the first item, it will be displayed
<span>{slots[0]}</span>
) : (
<span>No slot available</span>
)}
```

- ##### How to integrate react hook form

- ##### How to use tailwind css loading spinner

- ##### How to use always show loading spinner

```
  if (true || gLoading || loading) {
  return <Loading></Loading>;
  }
```
