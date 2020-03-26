# 05 Flex-Panel-Gallery

Live site should be available [here](https://ekaterinaasf.github.io/05Flex-Panel-Gallery/)

## DOM

| tag name | attributes             | role                                  |
| -------- | ---------------------- | ------------------------------------- |
| `<div>`  | `class="panels"`       | the container for 5 panels            |
| `<div>`  | `class="panel panel1"` | the first panel inside the container  |
| `<div>`  | `class="panel panel2"` | the second panel inside the container |
| `<div>`  | `class="panel panel3"` | the third panel inside the container  |
| `<div>`  | `class="panel panel4"` | the fourth panel inside the container |
| `<div>`  | `class="panel panel5"` | the firth panel inside the container  |

## Styling

| class name                                                                                                                                                                                                          | description                                                      | role                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------- |
| `html`                                                                                                                                                                                                              | sets box size, background, font properties                       | make divs more visible                |
| `body`                                                                                                                                                                                                              | sets margins                                                     | make content more visible             |
| `.panels`                                                                                                                                                                                                           | sets styles for container                                        | make blocks displayed via flex        |
| `.panel1`,<br> `.panel2`,<br> `.panel3`,<br> `.panel4`,<br> `.panel5`                                                                                                                                               | sets appropriate background images                               | make blocks more visible              |
| `.panel > *`,<br>`.panel > *:first-child`,<br>`.panel.open-active > *:first-child`,<br>`.panel > *:last-child`,<br>`.panel.open-active > *:last-child`,<br>`.panel p`,<br>`.panel p:nth-child(2)`,<br>`.panel.open` | sets styles for panels to appear in front of neighborhood panels | make selected panel more visible      |
| `@media only screen and (max-width: 600px)`                                                                                                                                                                         | adapt the content size regarding user's screen                   | make content adaptable to screen-size |

## Listeners

| type              | attached to         | callback       |
| ----------------- | ------------------- | -------------- |
| `'click'`         | every `id=".panel"` | `toggleOpen`   |
| `'transitionend'` | every `id=".panel"` | `toggleActive` |

## Handlers

| syntax           | parameters | return value | behavior                                                               |
| ---------------- | ---------- | ------------ | ---------------------------------------------------------------------- |
| `toggleOpen()`   | no         | no           | apply an appropriate style                                             |
| `toggleActive()` | _Event_    | no           | apply an appropriate style for the block related to the selected event |
