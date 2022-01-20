export class StyleModel {
    backgroundColor?: string;
    color?: string;
    flex?: number;
    rowspan?: number;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
    justify?: string;
    padding?: string;
    margin?: string;
    expanded: boolean = false;

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
        padding?: string,
        margin?: string,
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