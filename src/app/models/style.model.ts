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
    }
  }