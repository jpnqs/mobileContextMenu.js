# mobileContextMenu.js
## Build informations
Only ES6 compatible

## Example

```js
mobileContextMenu.buildFromTemplate([
    {
        type: 'button',     // adding button 1
        text: 'button 1',
        click: c => {
            console.log('click 1');
        }
    }, 
    {
        type: 'seperator'   // adding seperator
    },
    {
        type: 'button',     // adding a second button
        text: 'button 2',
        click: c => {
            console.log('click 2');
        }
    }
]);
```
