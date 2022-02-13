export class StyleModel {
  backgroundColor?: string;
  color?: string;
  flex?: number;
  rowspan?: number;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  justify?: string;
  padding?: EdgeInsetsModel;
  margin?: EdgeInsetsModel;
  expanded?: boolean;
  mainAxisAlignment?: string;
  mainAxisSize?: string;
  crossAxisAlignment?: string;
  textDirection?: string;
  verticalDirection?: string;
  height?: number;
  width?: number;
  widthRatioToScreen?: number;
  borderRadiusCircularSize?: number;
  shape?: string;
  borderRadius?: BorderRadiusModel;
  border?: Border;

  constructor({
    backgroundColor,
    color,
    flex,
    rowspan,
    fontSize,
    fontWeight,
    fontFamily,
    justify,
    padding,
    mainAxisAlignment,
    crossAxisAlignment,
    margin,
    expanded,
    borderRadiusCircularSize,
    height,
    width,
    shape,
    border,
    borderRadius,
  }: {
    backgroundColor?: string;
    color?: string;
    flex?: number;
    rowspan?: number;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
    justify?: string;
    padding?: EdgeInsetsModel;
    margin?: EdgeInsetsModel;
    expanded?: boolean;
    mainAxisAlignment?: string;
    crossAxisAlignment?: string;
    borderRadiusCircularSize?: number;
    height?: number;
    width?: number;
    shape?: string;
    borderRadius?: BorderRadiusModel,
    border?: Border
  }) {
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.flex = flex;
    this.rowspan = rowspan;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.fontFamily = fontFamily;
    this.justify = justify;
    this.padding = padding;
    this.margin = margin;
    this.height = height;
    this.width = width;
    this.expanded = expanded;
    this.mainAxisAlignment = mainAxisAlignment;
    this.crossAxisAlignment = crossAxisAlignment;
    this.borderRadiusCircularSize = borderRadiusCircularSize;
    this.shape = shape;
    this.border = border;
    this.borderRadius = borderRadius;
  }
}

export class EdgeInsetsModel {
  all?: number;
  horizontal?: number;
  vertical?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  constructor({
    top,
    bottom,
    left,
    right,
  }: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
}

export class BorderRadiusModel {
  topLeft?: number;
  topRight?: number;
  bottomLeft?: number;
  bottomRight?: number;

  constructor({
    topLeft,
    bottomLeft,
    bottomRight,
    topRight,
  }: {
    topLeft?: number;
    bottomLeft?: number;
    bottomRight?: number;
    topRight?: number;
  }) {
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

export class Border {
  style?: string;
  width?: number;
  color?: number;

  constructor({
    style,
    width,
    color,
  }: {
    style: string;
    width: number;
    color: number;
  }) {
    this.color = color;
    this.style = style;
    this.width = width;
  }
}

// export class BoxDecoration {
//   shape?: string;
//   padding?: EdgeInsetsModel;
//   margin?: EdgeInsetsModel;
//   height?: number;
//   width?: number;
//   color?: number;
//   borderRadius?: BorderRadiusModel;
//   border?: Border;
//   constructor({
//     shape,
//     padding,
//     margin,
//     height,
//     width,
//     color,
//     borderRadius,
//     border,
//   }: {
//     shape?: string;
//     padding?: EdgeInsetsModel;
//     margin?: EdgeInsetsModel;
//     height?: number;
//     width?: number;
//     color?: number;
//     borderRadius?: BorderRadiusModel;
//     border?: Border;
//   }) {
//     this.shape = shape ?? 'rectangle';
//     this.padding = padding;
//     this.margin = margin;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.borderRadius = borderRadius;
//     this.border = border;
//   }
// }
