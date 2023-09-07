# React Tooltip Component:-

This is a simple tooltip component for React that displays a tooltip when you hover over an element.

## Usage:-

### 1. Import the Tooltip component in your React application.
```
  import Tooltip from './components/Tooltip.jsx';
```

### 2. Wrap the element you want to add a tooltip to with the Tooltip component. Specify the position and content props.
```
<Tooltip position="top" content="This is a tooltip">
  <button>Hover Over Me</button>
</Tooltip>
```

## Props
### The Tooltip Component accepts the following props:

1. **position (string, required):** Specifies the position of the tooltip. Available options are *"top,"* *"bottom,"* *"right,"* and *"left."* 
2. **content (string, required):** The content to be displayed in the tooltip.
3. **children (ReactNode, required):** The element to which the tooltip is attached.
