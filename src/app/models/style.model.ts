export class StyleModel {
  backgroundColor?: string;
  color?: number;
  flex?: number;
  rowspan?: number;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  justify?: string;
  padding?: EdgeInsetsModel;
  margin?: EdgeInsetsModel;
  decoration?: BoxDecoration;
  expanded: boolean = false;
  mainAxisAlignment?: string;
  mainAxisSize?: string;
  crossAxisAlignment?: string;
  textDirection?: string;
  verticalDirection?: string;
  height?: number;

  constructor({
    backgroundColor,
    color,
    flex,
    rowspan,
    decoration,
    fontSize,
    fontWeight,
    fontFamily,
    justify,
    padding,
    margin,
    expanded,
  }: {
    backgroundColor?: string;
    color?: number;
    flex?: number;
    rowspan?: number;
    fontSize?: number;
    decoration?: BoxDecoration;
    fontWeight?: string;
    fontFamily?: string;
    justify?: string;
    padding?: EdgeInsetsModel;
    margin?: EdgeInsetsModel;
    expanded?: boolean;
  }) {
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.flex = flex;
    this.rowspan = rowspan;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.fontFamily = fontFamily;
    this.decoration = decoration;
    this.justify = justify;
    this.padding = padding;
    this.margin = margin;
    this.expanded = expanded ?? false;
  }
}

export class EdgeInsetsModel {
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

export class BoxDecoration {
  shape?: string;
  padding?: EdgeInsetsModel;
  margin?: EdgeInsetsModel;
  height?: number;
  width?: number;
  color?: number;
  borderRadius?: BorderRadiusModel;

  constructor({
    shape,
    padding,
    margin,
    height,
    width,
    color,
    borderRadius,
  }: {
    shape?: string;
    padding?: EdgeInsetsModel;
    margin?: EdgeInsetsModel;
    height?: number;
    width?: number;
    color?: number;
    borderRadius?: BorderRadiusModel;
  }) {
    this.shape = shape ?? 'rectangle';
    this.padding = padding;
    this.margin = margin;
    this.width = width;
    this.height = height;
    this.color = color;
    this.borderRadius = borderRadius;
  }
}
