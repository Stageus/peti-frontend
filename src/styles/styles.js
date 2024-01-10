export const setFlexStyle = (props) => {
  //flexStyle Input Form: [flex-direction]_[justify-content]_[alignItems]
  //flexStyle Input Properties: [r || c]_[left || center || right || between || around || evenly]_[left || center || right]
  //flexStyle Input Example: r_left_center || c_between_right
  const [flexDriection, justifyContent, alignItems] = props.split('_');
  let style = '';

  switch (flexDriection) {
    case 'c':
      style += `flex-direction: column;\n`;
      break;
    case 'r':
    case 'df':
    default:
      style += `flex-direction: row;\n`;
      break;
  }

  switch (justifyContent) {
    case 'center':
      style += `justify-content: center;\n`;
      break;
    case 'right':
      style += `justify-content: end;\n`;
      break;
    case 'between':
      style += `justify-content: space-between;\n`;
      break;
    case 'around':
      style += `justify-content: space-around;\n`;
      break;
    case 'evenly':
      style += `justify-content: space-evenly;\n`;
      break;
    case 'left':
    case 'df':
    default:
      style += `justify-content: start;\n`;
      break;
  }

  switch (alignItems) {
    case 'center':
      style += `align-items: center;\n`;
      break;
    case 'right':
      style += `align-items: end;\n`;
      break;
    case 'left':
      style += `align-items: start;\n`;
      break;
    case 'df':
    default:
      style += `align-items: stretch;\n`;
      break;
  }

  return style;
};

export const setFlexOption = (props) => {
  //flexStyle Input Form: [flex-grow]_[flex-basis]
  //flexStyle Input Example: 1_200px || 3_df
  const [flex, basis] = props.split('_');
  let style = '';

  style += `flex-grow: ${flex};\n`;
  style += basis !== 'df' ? `flex-basis: ${basis}\n` : 'flex-basis: auto;\n';

  return style;
};
export const setPositionValue = (props) => {
  //flexStyle Input Form: [top]_[right]_[bottom]_[left]
  //flexStyle Input Example: df_df_df_30px, 10px_10px_df_df
  const [top, right, bottom, left] = props.split('_');
  let style = '';

  style += top !== 'df' && `top: ${top}\n`;
  style += right !== 'df' && `right: ${right}\n`;
  style += bottom !== 'df' && `bottom: ${bottom}\n`;
  style += left !== 'df' && `left: ${left}\n`;

  return style;
};
export const setFontSize = (props) => {
  //flexStyle Input Form: [fontSize]
  //flexStyle Input Example: xxs, xs, s, m, l, xl, xxl
  let style = '';

  switch (props) {
    case 'xxs':
      style += 'font-size:0.33rem\n';
      break;
    case 'xs':
      style += 'font-size:0.67rem\n';
      break;
    case 's':
      style += 'font-size:0.83rem\n';
      break;
    case 'm':
      style += 'font-size:1rem\n';
      break;
    case 'l':
      style += 'font-size:1.17rem\n';
      break;
    case 'xl':
      style += 'font-size:1.5rem\n';
      break;
    case 'xxl':
      style += 'font-size:2rem\n';
      break;
    case 'df':
    default:
      style += 'font-size:1rem\n';
      break;
  }

  return style;
};
