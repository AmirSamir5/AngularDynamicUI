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
    expanded: boolean = false;
    mainAxisAlignment?:string;
    mainAxisSize?:string;
    crossAxisAlignment?:string;
    textDirection?:string;
    verticalDirection?:string;
    height?:number;
    width?:number;

    constructor(
    {
        backgroundColor,
        color,
        flex,
        rowspan,
        fontSize,
        fontWeight,
        fontFamily,
        justify,
        padding,
        margin,
        expanded,
    }:
    {
        backgroundColor?: string,
        color?: string,
        flex?: number,
        rowspan?: number,
        fontSize?: number,
        fontWeight?: string,
        fontFamily?: string,
        justify?: string,
        padding?: EdgeInsetsModel,
        margin?: EdgeInsetsModel,
        expanded?:boolean
    }
    ){
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
        this.expanded = expanded ?? false;
    }
  }

  export class EdgeInsetsModel{
      top?:number;
      bottom?:number;
      left?:number;
      right?:number;

      constructor({
        top,
        bottom,
        left,
        right
      }: {
        top?:number;
        bottom?:number;
        left?:number;
        right?:number;
      }) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
      }
  }